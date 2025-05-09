
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
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
      path: './font/Product Sans Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Product Sans Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './font/Product Sans Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Product Sans Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-product-sans',
  display: 'swap',
});
