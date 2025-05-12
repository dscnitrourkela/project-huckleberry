'use client';
import { motion } from 'framer-motion';
import EventHeader from './event-detail/EventHeader';
import EventImage from './event-detail/EventImage';
import EventInfoCards from './event-detail/EventInfoCards';
import { EventData } from './event-detail/types';

interface EventDetailProps {
  event: EventData;
}

const EventDetail = ({ event }: EventDetailProps) => {
  return (
    <div className="min-h-screen flex flex-col font-productsans font-medium tracking-wide bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.5] pointer-events-none" />

      <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative z-10">
        <div className="py-12">
          <EventHeader title={event.title} subTitle={event.subTitle} />
          <EventImage imageUrl={event.coverImage} title={event.title} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="prose prose-lg max-w-none text-gray-700 mb-8 leading-relaxed"
              >
                {event.description}
              </motion.div>

              <EventInfoCards event={event} />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
