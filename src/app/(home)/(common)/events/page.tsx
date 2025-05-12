'use client';
import React, { useEffect, useState } from 'react';
import EventsCard from '@/components/home/events/EventsCard';
import { toast } from 'sonner';
import { getAllEvents } from '@/actions/events';
import Loader from '@/components/shared/loader';
function Page() {
  const [events, setEvents] = useState<
    {
      id: string;
      title: string;
      timestamp: string;
      subTitle: string;
      description: string;
      coverImage: string;
      location: string;
      mode: string;
      eligibility: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const getEvents = async () => {
    setLoading(true);
    try {
      const response = await getAllEvents();
      if (response.status !== 'success' || !('data' in response)) {
        toast.error('Error fetching events');
        return;
      }
      // @ts-ignore
      setEvents(response.data.events);
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching events');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  const generateRandomColor = () => {
    const colors = [
      'bg-[#ECF3FE]',
      'bg-[#FEF3EC]',
      'bg-[#F3FCEC]',
      'bg-[#FCECF3]',
      'bg-[#ECECFC]',
      'bg-[#FCFCEC]',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="relative overflow-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="w-full space-y-12 px-0 xsmd:px-4 sm:px-8 max-w-7xl mx-auto pb-16">
          {events.map((event, idx) => (
            <EventsCard
              key={event.id}
              id={event.id}
              index={idx + 1}
              title={event.title}
              date={event.timestamp}
              subtitle={event.subTitle}
              description={event.description}
              imageUrl={event.coverImage}
              cardBgColor={generateRandomColor()}
              location={event.location}
              mode={event.mode}
              eligibility={event.eligibility}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Page;
