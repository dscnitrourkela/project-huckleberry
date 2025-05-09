'use client';
import React from 'react';
import EventsCard from '@/components/events/EventsCard';

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

const events = [
  {
    id: '1',
    heading: '#1 HackNITR',
    title: 'HackNITR',
    date: '29/02/2025',
    description:
      'Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.',
    imageUrl:
      'https://res.cloudinary.com/dpmlrxlzr/image/upload/v1746378087/hn_50_1_ru18tc.png',
    cardBgColor: 'bg-[#ECF3FE]',
  },
  {
    id: '2',
    heading: '#2 HackNITR',
    title: 'HackNITR',
    date: '29/02/2025',
    description:
      'Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.',
    imageUrl:
      'https://res.cloudinary.com/dpmlrxlzr/image/upload/v1746378087/hn_50_1_ru18tc.png',
    cardBgColor: 'bg-[#FDEDEB]',
  },
  {
    id: '3',
    heading: '#3 HackNITR',
    title: 'HackNITR',
    date: '29/02/2025',
    description:
      'Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.',
    imageUrl:
      'https://res.cloudinary.com/dpmlrxlzr/image/upload/v1746378087/hn_50_1_ru18tc.png',
    cardBgColor: 'bg-[#EBF7EE]',
  },
];
