'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { useState } from 'react';
import { infoImage } from '@/config/home';
import Image from 'next/image';

function Info() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full min-h-[80dvh] 2xl:min-h-[60dvh] bg-gradient-to-r from-[#4379E0] to-[#1B66F6] text-white px-6 md:px-16 lg:px-32 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-44">
      <div className="flex justify-center lg:hidden w-full">
        <Image
          src={infoImage}
          alt="GDG Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
          width={455}
          height={455}
        />
      </div>

      <div className="flex-1 flex flex-col text-center sm:text-left gap-12">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-productsans leading-snug">
          What is GDG?
        </h1>

        <p className="hidden sm:block text-base md:text-lg lg:text-[1.33rem] font-normal leading-9 font-productsans">
          Google Developer Group (GDG) is a global community of developers and
          tech enthusiasts who come together to learn, share, and collaborate on
          the latest technologies. It provides a platform for members to grow
          their skills through hands-on workshops, hackathons, tech talks, and
          collaborative projects. <br />
          GDG fosters an inclusive environment where developers at all levels
          can connect, innovate, and build solutions that address real-world
          challenges. By participating in GDG activities, members gain access to
          valuable resources, professional networking opportunities, and a
          supportive ecosystem to advance their careers and passion for
          technology.
        </p>

        <div className="sm:hidden text-base flex flex-col items-center font-normal leading-6 font-productsans">
          <p>
            Google Developer Group (GDG) is a global community of developers and
            tech enthusiasts who come together to learn, share, and collaborate
            on the latest technologies.
          </p>
          {showMore && (
            <p className="mt-4">
              It provides a platform for members to grow their skills through
              hands-on workshops, hackathons, tech talks, and collaborative
              projects. <br />
              GDG fosters an inclusive environment where developers at all
              levels can connect, innovate, and build solutions that address
              real-world challenges. By participating in GDG activities, members
              gain access to valuable resources, professional networking
              opportunities, and a supportive ecosystem to advance their careers
              and passion for technology.
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 flex items-center gap-1 text-white font-bold focus:outline-none"
          >
            {showMore ? (
              <>
                Read Less{' '}
                <ChevronUp className="mt-[2px]" strokeWidth={2} size={24} />
              </>
            ) : (
              <>
                Read More{' '}
                <ChevronDown className="mt-[2px]" strokeWidth={2} size={24} />
              </>
            )}
          </button>
        </div>
      </div>

      <div className="hidden lg:flex justify-center flex-1">
        <Image
          src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853100/Design_team-bro_1_wkuods.png"
          alt="GDG Illustration"
          className="w-full max-w-sm xl:max-w-md h-auto"
          width={455}
          height={455}
        />
      </div>
    </div>
  );
}

export default Info;
