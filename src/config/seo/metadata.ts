import { Metadata } from 'next';

export const baseUrl = 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: 'GDSC NIT Rourkela',
    template: '%s | GDSC NIT Rourkela',
  },
  description:
    'Google Developer Student Clubs at NIT Rourkela - Building for the future with student-led technology communities',
  keywords: [
    'GDSC',
    'Google',
    'Developer',
    'Student',
    'Club',
    'NIT Rourkela',
    'Technology',
    'Community',
  ],
  authors: [{ name: 'GDSC NIT Rourkela Team' }],
  creator: 'GDSC NIT Rourkela',
  publisher: 'GDSC NIT Rourkela',
  metadataBase: new URL(`${baseUrl}`),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}`,
    siteName: 'GDSC NIT Rourkela',
    title: 'GDSC NIT Rourkela',
    description:
      'Google Developer Student Clubs at NIT Rourkela - Building for the future with student-led technology communities',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'GDSC NIT Rourkela',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDSC NIT Rourkela',
    description:
      'Google Developer Student Clubs at NIT Rourkela - Building for the future with student-led technology communities',
    creator: '@dscnitrourkela',
    images: ['/opengraph-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};
