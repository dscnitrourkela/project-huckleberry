'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import LayoutHero from '@/components/home/LayoutHero';
import { pageContent } from '@/config/layout';
import Circle from '@/components/shared/Circle';

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
      <Circle bgColor={content.bgColor} />
      {/* Hero Section */}
      <LayoutHero
        title={content.title}
        description={content.description}
        imageUrl={content.imageUrl}
      />
      {/* Main Content */}
      <main className="relative z-20">{children}</main>
    </div>
  );
}
