'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
interface EventsCardProps {
  id: string;
  heading: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  cardBgColor?: string;
}
const EventsCard: React.FC<EventsCardProps> = ({
  id,
  heading,
  title,
  date,
  description,
  imageUrl,
  cardBgColor = 'bg-white',
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
        {heading}
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
      mt-4 sm:-mt-20 lg:-mt-32 w-full max-w-4xl z-10 relative text-center tracking-wider`}
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
          Largest Student-run Hackathon: {title}
        </h3>
        <p className="text-blue-600 font-semibold text-base sm:text-lg mt-1">
          Date: {date}
        </p>
        <p
          ref={descriptionRef}
          className="text-sm sm:text-base text-[#4A4A68] mt-4 leading-relaxed"
        >
          {description}
        </p>
        <Link href={`/events/${id}`}>
          <Button className="bg-[#1B66F6] text-white mt-6 py-2 px-6 sm:py-3 sm:px-8 text-sm sm:text-base">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;
