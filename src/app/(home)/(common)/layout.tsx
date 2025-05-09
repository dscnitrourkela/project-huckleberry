'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const content = pageContent[pathname as keyof typeof pageContent];

  if (!content) return <>{children}</>;

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Circle */}
      <div
        className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full top-[300px] left-[-120px] z-0"
        style={{ backgroundColor: content.bgColor }}
      />

      {/* Hero Image */}
      <div className="w-full max-w-7xl mx-auto pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[3/1.4] sm:aspect-[3/1.2] md:aspect-[3/1.1] lg:aspect-[3/1.1] rounded-xl overflow-hidden shadow-md">
          <Image
            src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1746378087/hn_50_1_ru18tc.png"
            alt="Event Hero"
            fill
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/20 rounded-xl" />
        </div>
      </div>

      {/* Heading + Subtext Block */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 z-10 relative">
        <div className="bg-white shadow-md px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center lg:items-center border-y-2 border-black font-productsans text-black gap-6 lg:gap-0">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#313131]">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:mt-2 lg:mt-0 max-w-xl text-left">
            {content.description}
          </p>
        </div>
      </div>

      {/* Children */}
      <div className={inter.className}>
        <main className="px-4 sm:px-6 lg:px-8 relative z-20">{children}</main>
      </div>
    </div>
  );
}

export const pageContent = {
  '/events': {
    bgColor: '#E8F5EE',
    title: 'Our Events',
    description: (
      <>
        At Vero Et Accusamus Et
        <br />
        Lusto Odio Dignissimos The.
      </>
    ),
  },
  '/about-us': {
    bgColor: '#FFF4EC',
    title: 'About Us',
    description: (
      <>
        At Vero Et Accusamus Et
        <br />
        Lusto Odio Dignissimos The.
      </>
    ),
  },
  '/projects': {
    bgColor: '#F0F4FF',
    title: 'Our Projects',
    description: (
      <>
        At Vero Et Accusamus Et
        <br />
        Lusto Odio Dignissimos The.
      </>
    ),
  },
  '/resources': {
    bgColor: '#FFF4EC',
    title: 'Resources',
    description: (
      <>
        At Vero Et Accusamus Et
        <br />
        Lusto Odio Dignissimos The.
      </>
    ),
  },
  '/team': {
    bgColor: '#E8F5EE',
    title: 'Our Team',
    description: (
      <>
        At Vero Et Accusamus Et
        <br />
        Lusto Odio Dignissimos The.
      </>
    ),
  },
};
