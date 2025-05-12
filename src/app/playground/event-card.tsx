import Image from 'next/image';
import { Event } from '@/types/landingPage';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="p-4 w-full max-w-sm mx-auto md:max-w-full bg-white rounded-xl shadow-md flex flex-col gap-4 md:gap-6">
      <div className="relative w-full h-40 sm:h-48 md:h-56 p-4 bg-gray-100 rounded-lg ">
        <Image
          src={event.imageUrl}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight truncate">
          {event.title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-black leading-snug line-clamp-3">
          {event.description}
        </p>
      </div>

      <div className="flex justify-between items-center text-sm sm:text-base ">
        <span className="font-semibold text-black">{event.date}</span>
        <span className="font-semibold text-blue-500 cursor-pointer">
          View More
        </span>
      </div>
    </div>
  );
};

export default EventCard;
