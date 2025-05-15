// components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './project-card';
import { sampleProjects } from '@/config/home';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
const ProjectsSection: React.FC = () => {
  const projectsToShow = sampleProjects.slice(0, 6);

  return (
    <section className="w-full gridbg max-w-6xl flex flex-col mx-auto px-4 py-12 md:py-16 gap-8">
      <h2 className="text-5xl md:text-5xl font-bold text-center mb-3 text-gray-800">
        Projects
      </h2>

      <p className="text-center text-black text-base ">
        Something fun to say why our projects name are like this ...
      </p>
      <div className="md:hidden px-4">
        <Carousel
          className="w-full relative"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {projectsToShow.map((project) => (
              <CarouselItem key={project.id}>
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsToShow.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center mt-8 md:mt-12">
        <Link
          href="/projects"
          className="inline-block px-6 py-2 border-2  border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Explore Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
