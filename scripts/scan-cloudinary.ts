import { v2 as cloudinary } from 'cloudinary';
import { glob } from 'glob';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  cloud_name: process.env.NEW_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEW_CLOUDINARY_API_KEY,
  api_secret: process.env.NEW_CLOUDINARY_API_SECRET,
  searchPattern: './src/**/*.{ts,tsx,js,jsx,json,css}',
  urlRegex:
    /https?:\/\/res\.cloudinary\.com\/[\w-]+\/image\/upload\/v\d+\/([\w-\/]+)\.(jpg|jpeg|png|webp|svg|gif)/g,
};

// Check for migration mode (--migrate flag)
const isMigrateMode = process.argv.includes('--migrate');

if (isMigrateMode) {
  if (!CONFIG.cloud_name || !CONFIG.api_key || !CONFIG.api_secret) {
    console.error(
      '❌ Missing Cloudinary configuration for migration. Please set in .env:\n' +
        '   NEW_CLOUDINARY_CLOUD_NAME\n' +
        '   NEW_CLOUDINARY_API_KEY\n' +
        '   NEW_CLOUDINARY_API_SECRET'
    );
    process.exit(1);
  }

  cloudinary.config({
    cloud_name: CONFIG.cloud_name,
    api_key: CONFIG.api_key,
    api_secret: CONFIG.api_secret,
  });
}

const getLogFileName = (prefix: string) => {
  let count = 1;
  while (fs.existsSync(`${prefix}${count}.txt`)) {
    count++;
  }
  return `${prefix}${count}.txt`;
};

const LOG_FILE = getLogFileName(
  isMigrateMode ? 'cloudinary-migrate-log' : 'cloudinary-scan-log'
);

const log = (
  message: string,
  type: 'INFO' | 'SUCCESS' | 'ERROR' | 'WARNING' | 'HEADER' | 'FOOTER' = 'INFO'
) => {
  const timestamp = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  let formattedMessage = '';

  if (type === 'HEADER' || type === 'FOOTER') {
    formattedMessage = `\n${'='.repeat(60)}\n[${timestamp}] ${message}\n${'='.repeat(60)}\n`;
  } else {
    formattedMessage = `[${timestamp}] [${type}] ${message}\n`;
  }

  fs.appendFileSync(LOG_FILE, formattedMessage);
  console.log(formattedMessage.trim());
};

interface ScanResult {
  url: string;
  files: string[];
  publicId: string;
  extension: string;
}

interface MigrationResult {
  oldUrl: string;
  newUrl: string;
  status: 'SUCCESS' | 'FAILURE';
  error?: string;
}

async function scanCloudinaryImages() {
  const mode = isMigrateMode ? 'Migration' : 'Scan';
  log(`Starting Cloudinary Image ${mode}`, 'HEADER');

  // Find all files matching the pattern
  log(`Scanning for files in ${CONFIG.searchPattern}...`);
  const files = await glob(CONFIG.searchPattern, {
    ignore: ['**/node_modules/**', '**/.next/**'],
  });
  log(`Found ${files.length} files to scan.`);

  const urlToFiles = new Map<string, Set<string>>();
  const scanResults: ScanResult[] = [];

  // Scan for URLs in each file
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let match;

    // Reset regex lastIndex for each file
    CONFIG.urlRegex.lastIndex = 0;

    while ((match = CONFIG.urlRegex.exec(content)) !== null) {
      const url = match[0];

      if (!urlToFiles.has(url)) {
        urlToFiles.set(url, new Set());
      }
      urlToFiles.get(url)!.add(path.relative(process.cwd(), file));
    }
  }

  log(`\nFound ${urlToFiles.size} unique Cloudinary URLs\n`);

  // Process results
  let index = 1;
  for (const [url, filesSet] of urlToFiles.entries()) {
    const urlParts = url.split('/upload/');
    const pathPart = urlParts[1];
    const versionMatch = pathPart.match(/^v\d+\/(.+)\.(.+)$/);

    let publicId = '';
    let extension = '';

    if (versionMatch) {
      publicId = versionMatch[1];
      extension = versionMatch[2];
    }

    const filesArray = Array.from(filesSet);

    scanResults.push({
      url,
      files: filesArray,
      publicId,
      extension,
    });

    log(`[${index}] URL: ${url}`, 'SUCCESS');
    log(`    Public ID: ${publicId}`);
    log(`    Extension: ${extension}`);
    log(`    Found in ${filesArray.length} file(s):`);
    filesArray.forEach((f) => log(`      - ${f}`));
    log('');

    index++;
  }

  // Summary by extension
  const extensionCount = new Map<string, number>();
  for (const result of scanResults) {
    const ext = result.extension.toLowerCase();
    extensionCount.set(ext, (extensionCount.get(ext) || 0) + 1);
  }

  log('\n--- Summary by Extension ---');
  for (const [ext, count] of extensionCount.entries()) {
    log(`  .${ext}: ${count} image(s)`);
  }

  // If migration mode, perform migration
  if (isMigrateMode) {
    log('\n--- Starting Migration ---\n');

    const migrationMap = new Map<string, MigrationResult>();
    let successCount = 0;
    let failCount = 0;

    for (const result of scanResults) {
      const oldUrl = result.url;

      try {
        log(`Migrating: ${oldUrl}`);

        const urlParts = oldUrl.split('/upload/');
        const pathPart = urlParts[1];
        const versionMatch = pathPart.match(/^v\d+\/(.+)\.(.+)$/);

        let publicId = '';
        let folder = '';

        if (versionMatch) {
          const fullPath = versionMatch[1];
          const pathSegments = fullPath.split('/');
          const filename = pathSegments.pop();
          folder = pathSegments.join('/');
          publicId = filename || 'image';
        } else {
          publicId = pathPart.split('.')[0];
        }

        const uploadResult = await cloudinary.uploader.upload(oldUrl, {
          folder: folder,
          public_id: publicId,
          overwrite: true,
          resource_type: 'auto',
        });

        const newUrl = uploadResult.secure_url;

        migrationMap.set(oldUrl, {
          oldUrl,
          newUrl,
          status: 'SUCCESS',
        });

        log(`✅ Migrated: ${oldUrl} -> ${newUrl}`, 'SUCCESS');
        successCount++;
      } catch (error: any) {
        migrationMap.set(oldUrl, {
          oldUrl,
          newUrl: '',
          status: 'FAILURE',
          error: error.message,
        });
        log(
          `❌ Failed to migrate: ${oldUrl}. Error: ${error.message}`,
          'ERROR'
        );
        failCount++;
      }
    }

    // Replace URLs in files
    if (successCount > 0) {
      log('\n--- Replacing URLs in Files ---\n');

      for (const file of files) {
        let content = fs.readFileSync(file, 'utf-8');
        let hasChanges = false;

        if (!content.includes('res.cloudinary.com')) continue;

        for (const [oldUrl, result] of migrationMap.entries()) {
          if (result.status === 'SUCCESS' && content.includes(oldUrl)) {
            content = content.replaceAll(oldUrl, result.newUrl);
            hasChanges = true;
          }
        }

        if (hasChanges) {
          fs.writeFileSync(file, content, 'utf-8');
          log(`Updated references in: ${file}`, 'SUCCESS');
        }
      }
    } else {
      log('No successful migrations, skipping file replacements.', 'WARNING');
    }

    log(
      `Migration Completed. Total: ${scanResults.length}, Success: ${successCount}, Failed: ${failCount}`,
      'FOOTER'
    );

    // Save migration report
    const migrationReport = {
      migratedAt: new Date().toISOString(),
      totalUrls: scanResults.length,
      successCount,
      failCount,
      results: Array.from(migrationMap.values()),
    };

    const jsonFileName = LOG_FILE.replace('.txt', '.json');
    fs.writeFileSync(jsonFileName, JSON.stringify(migrationReport, null, 2));
    log(`Migration report saved to: ${jsonFileName}`);
  } else {
    // Generate scan-only JSON report
    const jsonReport = {
      scannedAt: new Date().toISOString(),
      totalFiles: files.length,
      totalUniqueUrls: urlToFiles.size,
      results: scanResults,
      extensionSummary: Object.fromEntries(extensionCount),
    };

    const jsonFileName = LOG_FILE.replace('.txt', '.json');
    fs.writeFileSync(jsonFileName, JSON.stringify(jsonReport, null, 2));
    log(`\nJSON report saved to: ${jsonFileName}`);

    log(
      `Scan Completed. Files Scanned: ${files.length}, Unique Cloudinary URLs: ${urlToFiles.size}`,
      'FOOTER'
    );

    log('\n💡 To migrate images, run: yarn migrate-cloudinary');
  }

  return scanResults;
}

scanCloudinaryImages().catch((err) => {
  console.error('Unhandled error:', err);
  log(`Unhandled error: ${err.message}`, 'ERROR');
});
