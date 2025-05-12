'use client';

import React from 'react';

import EventsSection from '@/app/playground/events';
import Info from '@/app/playground/info';
import ProjectsSection from '@/app/playground/projects';
const Index = () => {
  return (
    <div className="font-productsans">
      <Info />
      <EventsSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
