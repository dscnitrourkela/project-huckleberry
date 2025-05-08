'use client';

import { trackData } from '@/config/about-us';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useEffect } from 'react';

const Demo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#track',
        start: 'top 0',
        end: '+=300px',
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
      },
    });

    const splitTitle = new SplitText('.domain-title', { type: 'chars' });
    const splitDescription = new SplitText('.domain-description', {
      type: 'words',
    });

    tl.from('.domain-card', {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.2,
    });

    tl.from(
      '.domain-number',
      {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      },
      0
    );

    tl.from('.domain-line', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.6,
      ease: 'power1.out',
    });

    tl.from(
      splitTitle.chars,
      {
        opacity: 0,
        y: 15,
        rotationX: -90,
        stagger: 0.02,
        duration: 0.4,
        ease: 'back.out(1.7)',
      },
      0.2
    );

    tl.from(
      splitDescription.words,
      {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        rotationX: -90,
        duration: 0.3,
        ease: 'power2.out',
      },
      '-=0.3'
    );

    tl.to('.domain-card', {
      opacity: 0,
      y: -50,
      duration: 0.7,
      stagger: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitTitle.revert();
      splitDescription.revert();
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black"></div>

      <div
        className="min-h-screen h-auto flex justify-center items-center bg-white"
        id="track"
      >
        <div
          className={`domain-card rounded-xl border ${trackData[0].bgColor} ${trackData[0].borderColor} ${trackData[0].shadow} flex flex-col w-full md:w-[60%] gap-4 sm:gap-6 py-6 sm:py-8 md:py-10`}
        >
          <div className="flex items-center w-full">
            <span className="domain-number text-black ml-4 sm:ml-6 md:ml-8 lg:ml-[37px] size-8 sm:size-10 md:size-12 rounded-full bg-white flex items-center justify-center text-xs sm:text-sm md:text-base border border-gray-200 text-center">
              {trackData[0].id}
            </span>
            <div className="domain-line h-px w-full bg-black ml-4"></div>
          </div>

          <div className="px-4 sm:px-6 md:px-8 lg:px-[37px] flex flex-col gap-4 sm:gap-6">
            <h3 className="domain-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
              {trackData[0].title}
            </h3>
            <p className="domain-description text-[#4A4A68] font-medium text-sm sm:text-base md:text-lg lg:text-xl italic w-full lg:w-[60%]">
              {trackData[0].description}
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-black"></div>
    </>
  );
};

export default Demo;
