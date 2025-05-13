'use client';

import React from 'react';
import Hero from '@/components/hero/hero';

import EventsSection from '@/components/home/events';
import Info from '@/components/home/info';
import ProjectsSection from '@/components/home/projects';
const Index = () => {
  return (
    <main>
      <Hero />
      <div className="font-productsans">
        <Info />
        <EventsSection />
        <ProjectsSection />
      </div>
    </main>
  );
};

export default Index;
