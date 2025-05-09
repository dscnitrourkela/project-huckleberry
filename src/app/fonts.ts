import { Geist, Geist_Mono, DM_Sans, Poppins } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});
import localFont from 'next/font/local';

export const productSansRegular = localFont({
  src: '../fonts/ProductSans-Regular.ttf',
  variable: '--font-product-sans-regular',
});

export const productSansBlack = localFont({
  src: '../fonts/ProductSans-Black.ttf',
  variable: '--font-product-sans-black',
});
