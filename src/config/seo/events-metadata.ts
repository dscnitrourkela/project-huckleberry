import { Metadata } from 'next';

export const eventsMetadata: Metadata = {
  title: 'Events | DSC NIT Rourkela',
  description:
    'Discover upcoming and past tech events, workshops, and seminars organized by DSC NIT Rourkela',
  keywords: [
    'GDSC',
    'NIT Rourkela',
    'events',
    'tech workshops',
    'hackathons',
    'seminars',
    'student events',
    'developer meetups',
    'DSC NIT Rourkela',
    'GDG',
  ],
  openGraph: {
    title: 'Events | DSC NIT Rourkela',
    description:
      'Discover upcoming and past tech events, workshops, and seminars organized by DSC NIT Rourkela',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | DSC NIT Rourkela',
    description:
      'Discover upcoming and past tech events, workshops, and seminars organized by DSC NIT Rourkela',
    images: ['/opengraph-image.png'],
    creator: '@dscnitrourkela',
    site: '@dscnitrourkela',
  },
};
