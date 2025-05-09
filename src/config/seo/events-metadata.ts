import { Metadata } from 'next';

export const eventsMetadata: Metadata = {
  title: 'Events | GDSC NIT Rourkela',
  description:
    'Discover upcoming and past tech events, workshops, and seminars organized by Google Developer Student Club at NIT Rourkela',
  keywords: [
    'GDSC',
    'NIT Rourkela',
    'events',
    'tech workshops',
    'hackathons',
    'seminars',
    'student events',
    'developer meetups',
  ],
  openGraph: {
    title: 'Events | GDSC NIT Rourkela',
    description:
      'Discover upcoming and past tech events, workshops, and seminars organized by Google Developer Student Club at NIT Rourkela',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | GDSC NIT Rourkela',
    description:
      'Discover upcoming and past tech events, workshops, and seminars organized by Google Developer Student Club at NIT Rourkela',
    images: ['/opengraph-image.png'],
    creator: '@dscnitrourkela',
    site: '@dscnitrourkela',
  },
};
