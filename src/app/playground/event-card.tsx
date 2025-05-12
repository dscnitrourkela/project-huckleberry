import Image from 'next/image';
import { Event } from '@/types/home';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="p-4 w-full justify-between transform transform-transition m-5 duration-300 hover:scale-105 max-w-xs mx-auto md:max-w-full bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),_0px_2px_6px_2px_rgba(0,0,0,0.15)] flex flex-col gap-4 md:gap-6">
      <div className="relative w-full pt-[56.25%] bg-white rounded-lg overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-contain"
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
