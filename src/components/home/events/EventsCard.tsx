'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/button';
import { formatTimestamp } from '@/utils';
import { MapPin, Users, Laptop } from 'lucide-react';

interface EventsCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  cardBgColor?: string;
  index?: number;
  subtitle?: string;
  location?: string;
  mode?: string;
  eligibility?: string;
}
const EventsCard: React.FC<EventsCardProps> = ({
  id,
  title,
  date,
  description,
  imageUrl,
  cardBgColor = 'bg-white',
  index,
  subtitle = 'Event',
  location,
  mode,
  eligibility,
}) => {
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    if (descriptionRef.current) {
      const splitDesc = new SplitText(descriptionRef.current, {
        type: 'lines',
      });

      const animation = gsap.from(splitDesc.lines, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      return () => {
        if (splitDesc) splitDesc.revert();
        animation.scrollTrigger?.kill();
      };
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center font-productsans px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-8 mb-6 text-center text-black">
        #{index} {title}
      </h2>
      {/* Image Section */}
      <div className="relative w-full max-w-7xl aspect-[3/1.3] sm:aspect-[3/1.1] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={`${title} Event`}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Info Card */}
      <div
        className={`${cardBgColor} shadow-md shadow-gray-300 rounded-xl px-6 sm:px-10 lg:px-16 pt-10 pb-14 
      mt-4 sm:-mt-[50px] lg:-mt-32 w-full max-w-4xl z-10 relative tracking-wider`}
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black capitalize text-center">
          {subtitle}
        </h3>
        <p className="text-blue-600 font-semibold text-base sm:text-lg mt-1 text-center">
          {formatTimestamp(date)}
        </p>

        {/* Event Info Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {location && (
            <div className="flex items-center bg-white/70 px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <MapPin className="h-4 w-4 mr-1 text-red-500" />
              <span className="text-sm text-gray-800">{location}</span>
            </div>
          )}

          {mode && (
            <div className="flex items-center bg-white/70 px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Laptop className="h-4 w-4 mr-1 text-blue-500" />
              <span className="text-sm text-gray-800">{mode}</span>
            </div>
          )}

          {eligibility && (
            <div className="flex items-center bg-white/70 px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              <Users className="h-4 w-4 mr-1 text-green-500" />
              <span className="text-sm text-gray-800">{eligibility}</span>
            </div>
          )}
        </div>

        <p
          ref={descriptionRef}
          className="text-sm sm:text-base text-[#4A4A68] mt-4 leading-relaxed text-center"
        >
          {description}
        </p>
        <div className="flex justify-center">
          <Link href={`/events/${id}`}>
            <Button className="bg-[#1B66F6] text-white mt-6 py-2 px-6 sm:py-3 sm:px-8 text-sm sm:text-base">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
