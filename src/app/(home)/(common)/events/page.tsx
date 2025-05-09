'use client';
import React from 'react';
import EventsCard from '@/components/home/events/EventsCard';
import { events } from '@/config/events';
function page() {
  return (
    <div className="relative overflow-hidden ">
      {/* Event Cards */}
      <div className="w-full space-y-12 px-4 sm:px-8 max-w-7xl mx-auto pb-16">
        {events.map((event, index) => (
          <EventsCard
            key={event.id}
            id={event.id}
            heading={event.heading}
            title={event.title}
            date={event.date}
            description={event.description}
            imageUrl={event.imageUrl}
            cardBgColor={event.cardBgColor}
          />
        ))}
      </div>
    </div>
  );
}
export default page;
