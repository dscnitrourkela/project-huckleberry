import { Metadata, Viewport } from 'next';

export const baseUrl = 'https://dscnitrourkela.org';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const homeMetadata: Metadata = {
  title: {
    default: 'DSC NIT Rourkela',
    template: '%s | DSC NIT Rourkela',
  },
  description:
    'DSC NIT Rourkela - Building for the future with student-led technology communities',
  keywords: [
    'GDSC',
    'Google',
    'Developer',
    'Student',
    'Club',
    'NIT Rourkela',
    'Technology',
    'Community',
    'DSC NIT Rourkela',
    'GDG',
  ],
  authors: [{ name: 'DSC NIT Rourkela Team' }],
  creator: 'DSC NIT Rourkela',
  publisher: 'DSC NIT Rourkela',
  metadataBase: new URL(`${baseUrl}`),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}`,
    siteName: 'DSC NIT Rourkela',
    title: 'DSC NIT Rourkela',
    description:
      'DSC NIT Rourkela - Building for the future with student-led technology communities',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'DSC NIT Rourkela',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSC NIT Rourkela',
    description:
      'DSC NIT Rourkela - Building for the future with student-led technology communities',
    creator: '@dscnitrourkela',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/gdg.ico',
    shortcut: '/gdg.png',
    apple: '/gdg.png',
  },
};
