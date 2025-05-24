import { Metadata } from 'next';

export const tweetsMetadata: Metadata = {
  title: 'Twitter Feed | GDSC NIT Rourkela',
  description:
    'Stay updated with the latest announcements, events, and tech insights from GDSC NIT Rourkela through our Twitter feed',
  keywords: [
    'GDSC',
    'NIT Rourkela',
    'Twitter',
    'tweets',
    'updates',
    'tech news',
  ],
  openGraph: {
    title: 'Twitter Feed | GDSC NIT Rourkela',
    description:
      'Stay updated with the latest announcements, events, and tech insights from GDSC NIT Rourkela through our Twitter feed',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Feed | GDSC NIT Rourkela',
    description:
      'Stay updated with the latest announcements, events, and tech insights from GDSC NIT Rourkela through our Twitter feed',
    images: ['/opengraph-image.png'],
    creator: '@dscnitrourkela',
    site: '@dscnitrourkela',
  },
};
