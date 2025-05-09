import { Geist, Geist_Mono, Poppins, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const poppins = Poppins({
  weight: ['300', '400', '100', '500', '600', '700', '800', '900'],
  variable: '--font-Poppins',
  subsets: ['latin'],
});

export const productSans = localFont({
  src: [
    {
      path: '../../public/font/Product Sans Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Product Sans Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/font/Product Sans Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Product Sans Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-product-sans',
  display: 'swap',
});

export const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  subsets: ['latin'],
});
