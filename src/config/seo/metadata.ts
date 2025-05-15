import { Metadata, Viewport } from 'next';

export const baseUrl = 'https://gdsc-nitr.netlify.app';

// Separate viewport export as recommended by Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const homeMetadata: Metadata = {
  title: {
    default: 'GDG on Campus NITR',
    template: '%s | GDG on Campus NITR',
  },
  description:
    'GDG on Campus NITR - Building for the future with student-led technology communities',
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
  authors: [{ name: 'GDG on Campus NITR Team' }],
  creator: 'GDG on Campus NITR',
  publisher: 'GDG on Campus NITR',
  metadataBase: new URL(`${baseUrl}`),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}`,
    siteName: 'GDG on Campus NITR',
    title: 'GDG on Campus NITR',
    description:
      'GDG on Campus NITR - Building for the future with student-led technology communities',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'GDG on Campus NITR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDG on Campus NITR',
    description:
      'GDG on Campus NITR - Building for the future with student-led technology communities',
    creator: '@dscnitrourkela',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/gdg.ico',
    shortcut: '/gdg.png',
    apple: '/gdg.png',
  },
};
