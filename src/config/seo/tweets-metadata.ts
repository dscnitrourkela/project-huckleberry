import { Metadata } from 'next';

export const tweetsMetadata: Metadata = {
  title: 'Twitter Feed | DSC NIT Rourkela',
  description:
    'Stay updated with the latest announcements, events, and tech insights from DSC NIT Rourkela through our Twitter feed',
  keywords: [
    'GDSC',
    'NIT Rourkela',
    'Twitter',
    'tweets',
    'updates',
    'tech news',
    'DSC NIT Rourkela',
    'GDG',
  ],
  openGraph: {
    title: 'Twitter Feed | DSC NIT Rourkela',
    description:
      'Stay updated with the latest announcements, events, and tech insights from DSC NIT Rourkela through our Twitter feed',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Feed | DSC NIT Rourkela',
    description:
      'Stay updated with the latest announcements, events, and tech insights from DSC NIT Rourkela through our Twitter feed',
    images: ['/opengraph-image.png'],
    creator: '@dscnitrourkela',
    site: '@dscnitrourkela',
  },
};
