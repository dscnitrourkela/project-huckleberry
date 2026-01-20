import React from 'react';
import EventCard from './event-card';
import { sampleEvents } from '@/config/home';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import GridBackground from '@/components/common/grid-background';

const EventsSection: React.FC = () => {
  const eventsToShow = sampleEvents.slice(0, 3);
  if (eventsToShow.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      <GridBackground opacity={0.5} />
      <section className="relative w-full bg-[length:80px_80px]  max-w-6xl mx-auto px-4 pt-24 md:pt-32">
        <h2 className="text-5xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Our Events
        </h2>
        <div className="md:hidden">
          <Carousel
            className="w-full relative"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="px-1">
              {eventsToShow.map((event) => (
                <CarouselItem key={event.id}>
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {eventsToShow.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* <div className="text-center mt-8 md:mt-12">
          <Link
            href="/events"
            className="inline-block px-6 py-2 border-2 rounded-lg border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            View All
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default EventsSection;
