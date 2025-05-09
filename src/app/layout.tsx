import type { Metadata } from 'next';
import './globals.css';
import { dmSans, geistMono, geistSans, poppins, productSans } from './fonts';
import { Toaster } from '@/components/ui/sonner';
import HOC from '@/components/shared/hoc/HOC';

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
  metadataBase: new URL('https://gdscnitrourkela.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gdscnitrourkela.org',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${dmSans.variable} ${productSans.variable} antialiased`}
      >
        <Toaster position="top-right" />
        <HOC>{children}</HOC>
      </body>
    </html>
  );
}
