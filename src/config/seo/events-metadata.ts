import { Metadata } from 'next';

export const eventsMetadata: Metadata = {
  title: 'Events | GDG on Campus NITR',
  description:
    'Discover upcoming and past tech events, workshops, and seminars organized by GDG on Campus NITR',
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
    title: 'Events | GDG on Campus NITR',
    description:
      'Discover upcoming and past tech events, workshops, and seminars organized by GDG on Campus NITR',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | GDG on Campus NITR',
    description:
      'Discover upcoming and past tech events, workshops, and seminars organized by GDG on Campus NITR',
    images: ['/opengraph-image.png'],
    creator: '@dscnitrourkela',
    site: '@dscnitrourkela',
  },
};
