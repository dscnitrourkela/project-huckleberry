'use client';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { SectionHead } from './section-head';
import { WhatWeDoMappedCards } from './mapped-cards';

export const WhatWeDo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#card-container',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    masterTimeline.from('.card', {
      opacity: 0,
      y: 100,
      duration: 0.7,
      stagger: { each: 0.15, from: 'start' },
      ease: 'power2.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document
        .querySelectorAll('.card-title, .card-description')
        .forEach((el) => {
          const split = (el as any)._split;
          if (split) split.revert();
        });
    };
  }, []);

  return (
    <div className="">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <SectionHead label="What we do" />

        <div
          id="card-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          <WhatWeDoMappedCards />
        </div>
      </div>
    </div>
  );
};
