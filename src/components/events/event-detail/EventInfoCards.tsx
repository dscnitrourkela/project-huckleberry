'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Laptop } from 'lucide-react';
import EventInfoCard from '../EventInfoCard';
import { formatTimestamp } from '@/utils';

interface EventData {
  id: string;
  coverImage: string | null;
  title: string;
  subTitle: string | null;
  description: string;
  location: string | null;
  mode: string;
  eligibility: string;
  timestamp: string;
}

interface EventInfoCardsProps {
  event: EventData;
}

const EventInfoCards = ({ event }: EventInfoCardsProps) => {
  const cards = [
    {
      icon: <Calendar className="text-blue-600" />,
      title: 'Date & Time',
      description: formatTimestamp(event.timestamp),
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      delay: 1.2,
    },
    {
      icon: <MapPin className="text-red-600" />,
      title: 'Location',
      description: event.location || 'TBA',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      delay: 1.4,
    },
    {
      icon: <Laptop className="text-green-600" />,
      title: 'Mode',
      description: event.mode,
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      delay: 1.6,
    },
    {
      icon: <Users className="text-purple-600" />,
      title: 'Eligibility',
      description: event.eligibility,
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      delay: 1.8,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: card.delay }}
        >
          <EventInfoCard
            icon={card.icon}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default EventInfoCards;
