import { ImageResponse } from 'next/og';
import { LOGO } from '@/config/common';
// Node.js helper for reading files
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Define constants for better maintainability
const COLORS = {
  blue: '#4285F4',
  red: '#EA4335',
  yellow: '#FBBC05',
  green: '#34A853',
  text: '#202124',
  subtext: '#5F6368',
};

// Image metadata
export const alt = 'GDG on Campus NITR';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Add caching directive to improve performance
export const runtime = 'edge';
export const revalidate = 60 * 60 * 24 * 7; // Cache for 1 week

export default async function Image() {
  // Try to load the fonts - if they fail, the image will still render with system fonts
  let productSansRegular, productSansBold;

  try {
    // Note: this is a more reliable way to load fonts in Next.js
    productSansRegular = await readFile(
      join(
        process.cwd(),
        'public/fonts/productsansfull/ProductSans-Regular.ttf'
      )
    );

    productSansBold = await readFile(
      join(process.cwd(), 'public/fonts/productsansfull/ProductSans-Bold.ttf')
    );
  } catch (e) {
    console.error('Failed to load fonts:', e);
    // Continue without custom fonts
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #E8F0FE 0%, #FCE8E6 100%)',
            opacity: 0.8,
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '60px',
            position: 'relative',
            zIndex: 1,
            height: '100%',
          }}
        >
          {/* Header with logo and name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px',
            }}
          >
            <img
              src={LOGO}
              alt="GDSC Logo"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'contain',
              }}
            />
            <div
              style={{
                fontSize: '32px',
                color: COLORS.blue,
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
                fontWeight: 'bold',
              }}
            >
              GDG on Campus NITR
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: COLORS.text,
                lineHeight: 1.2,
                maxWidth: '900px',
              }}
            >
              Google Developer Groups
            </div>

            <div
              style={{
                fontSize: '36px',
                color: COLORS.subtext,
                maxWidth: '800px',
                lineHeight: 1.4,
              }}
            >
              NIT Rourkela
            </div>
          </div>

          {/* Footer with Google colors */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '8px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: COLORS.blue,
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: COLORS.red,
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: COLORS.yellow,
                }}
              />
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: COLORS.green,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // Add optimizations for image generation
      emoji: 'twemoji',
      fonts:
        productSansRegular && productSansBold
          ? [
              {
                name: 'ProductSans',
                data: productSansRegular,
                weight: 400,
                style: 'normal',
              },
              {
                name: 'ProductSans',
                data: productSansBold,
                weight: 700,
                style: 'normal',
              },
            ]
          : undefined,
    }
  );
}
