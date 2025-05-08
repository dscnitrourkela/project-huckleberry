import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'http://localhost:3000';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/*',
          '/api/*',
          '/login',
          '/playground',
          '/profile',
          '/unauthorized',
          '/*.json',
          '/*.xml',
          '/*?*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/login', '/profile', '/unauthorized'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/login', '/profile', '/unauthorized'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
