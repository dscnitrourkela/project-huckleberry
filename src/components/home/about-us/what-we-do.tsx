'use client';
import { cardData } from '@/config/about-us';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

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
    // document.querySelectorAll('.card').forEach((card, index) => {
    //   const cardTimeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: card,
    //       start: 'top 90%',
    //       end: 'bottom 30%',
    //       toggleActions: 'play none none none',
    //       markers: true,
    //       once: true,
    //     },
    //   });

    // cardTimeline.from(
    //   card.querySelector('img'),
    //   {
    //     scale: 0,
    //     opacity: 0,
    //     duration: 0.6,
    //     ease: 'back.out(1.7)',
    //   },
    //   0
    // );

    // cardTimeline.from(
    //   card.querySelector('.card-line'),
    //   {
    //     scaleX: 0,
    //     transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
    //     duration: 0.6,
    //     ease: 'power1.out',
    //   },
    //   0.1
    // );

    // const title = card.querySelector('.card-title');
    // if (title) {
    //   const splitTitle = new SplitText(title, { type: 'chars' });
    //   cardTimeline.from(
    //     splitTitle.chars,
    //     {
    //       opacity: 0,
    //       y: 20,
    //       rotationX: -90,
    //       stagger: 0.02,
    //       duration: 0.4,
    //       ease: 'back.out(1.7)',
    //     },
    //     0.2
    //   );
    // }

    // const desc = card.querySelector('.card-description');
    // if (desc) {
    //   const splitDesc = new SplitText(desc, { type: 'words' });
    //   cardTimeline.from(
    //     splitDesc.words,
    //     {
    //       opacity: 0,
    //       y: 20,
    //       stagger: 0.03,
    //       duration: 0.5,
    //       ease: 'power1.out',
    //     },
    //     0.3
    //   );
    // }
    // });

    // Cleanup
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
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black">
          What we do
        </h1>

        <div
          id="card-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`card ${card.bgClass} ${card.cardClass} p-5 sm:p-6 md:p-7 flex flex-col gap-3 sm:gap-4 md:gap-5`}
            >
              <div className="relative h-16 sm:h-18 md:h-20 w-16 sm:w-18 md:w-20">
                <Image
                  src={card.Icon}
                  alt={`${card.title} icon`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, 80px"
                />
              </div>

              <h3 className="card-title text-xl sm:text-2xl md:text-[28px] font-bold text-black leading-tight">
                {card.title}
              </h3>
              <p className="card-description text-[#4A4A68] text-[14px] sm:text-[16px] md:text-[18px] leading-[12px] font-[500] sm:leading-[14px] md:leading-[16px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
