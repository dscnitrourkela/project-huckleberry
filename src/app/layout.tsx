import './globals.css';
import { dmSans, geistMono, geistSans, poppins, productSans } from './fonts';
import { Toaster } from '@/components/ui/sonner';
import HOC from '@/components/shared/hoc/HOC';
import Footer from '@/components/Footer/Footer';
import { homeMetadata } from '@/config/seo/metadata';
import Navbar from '@/components/marginals/navbar/Navbar';

export { homeMetadata as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${dmSans.variable} ${productSans.variable}  antialiased`}
      >
        <Navbar />
        <Toaster position="top-right" />
        <HOC>{children}</HOC>
        <Footer />
      </body>
    </html>
  );
}
