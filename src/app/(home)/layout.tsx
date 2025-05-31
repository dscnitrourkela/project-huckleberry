import Footer from '@/components/footer/Footer';
import Navbar from '@/components/marginals/navbar/Navbar';
import React from 'react';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
