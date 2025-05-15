import { Metadata } from 'next';

export const aboutUsMetadata: Metadata = {
  title: 'About Us | GDG on Campus NITR',
  description:
    'Learn about GDG on Campus NIT Rourkela - our mission, values, team, and the domains we focus on.',
  keywords: [
    'GDSC',
    'NIT Rourkela',
    'Google Developer Student Clubs',
    'about us',
    'technology community',
    'student developers',
    'tech domains',
  ],
  openGraph: {
    title: 'About Us | GDG on Campus NITR',
    description:
      'Learn about GDG on Campus NIT Rourkela - our mission, values, team, and the domains we focus on.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | GDG on Campus NITR',
    description:
      'Learn about GDG on Campus NIT Rourkela - our mission, values, team, and the domains we focus on.',
    images: ['/opengraph-image.png'],
  },
};
