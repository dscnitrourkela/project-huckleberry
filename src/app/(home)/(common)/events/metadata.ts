import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | DSC NIT Rourkela',
  description:
    'Discover upcoming and past events organized by Google Developer Student Club at NIT Rourkela. Join us for workshops, hackathons, tech talks, and more.',
  openGraph: {
    title: 'DSC NIT Rourkela Events',
    description:
      'Discover upcoming and past events organized by Google Developer Student Club at NIT Rourkela. Join us for workshops, hackathons, tech talks, and more.',
    images: [
      {
        url: '/api/og?title=DSC Events',
        width: 1200,
        height: 630,
        alt: 'DSC NIT Rourkela Events',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDSC NIT Rourkela Events',
    description:
      'Discover upcoming and past events organized by Google Developer Student Club at NIT Rourkela. Join us for workshops, hackathons, tech talks, and more.',
    images: ['/api/og?title=DSC Events'],
  },
};
