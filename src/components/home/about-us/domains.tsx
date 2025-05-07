'use client';
import { trackData } from '@/config/about-us';
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export const Domains = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#track',
        start: 'top bottom',
        end: 'bottom top',
        scrub: false,
        toggleActions: 'play none none reverse',
        once: true,
      },
    });

    masterTimeline.from('.domain-card', {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.2,
    });

    masterTimeline.from(
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
    masterTimeline.from(
      '.domain-image',
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
      },
      0.1
    );
    document.querySelectorAll('.domain-card').forEach((card, index) => {
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none none',
          once: true,
        },
      });
      cardTimeline.from(card.querySelector('.domain-line'), {
        scaleX: 0,
        transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
        duration: 0.6,
        ease: 'power1.out',
      });
      const title = card.querySelector('.domain-title');
      if (title) {
        const splitTitle = new SplitText(title, { type: 'chars' });
        cardTimeline.from(
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
      }

      const desc = card.querySelector('.domain-description');
      if (desc) {
        const splitDesc = new SplitText(desc, { type: 'words' });
        cardTimeline.from(
          splitDesc.words,
          {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.5,
            ease: 'power1.out',
          },
          0.3
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      document
        .querySelectorAll('.domain-title, .domain-description')
        .forEach((el) => {
          const split = (el as any)._split;
          if (split) split.revert();
        });
    };
  }, []);

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black mb-8 sm:mb-12 md:mb-16">
        Domains
      </h1>
      <div
        id="track"
        className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32"
      >
        {trackData.map((domain, index) => (
          <div
            key={index}
            className={`domain-card flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 lg:gap-12`}
          >
            <div
              className={`domain-content rounded-xl border ${domain.bgColor} ${domain.borderColor} ${domain.shadow} flex flex-col w-full md:w-[60%] gap-4 sm:gap-6 py-6 sm:py-8 md:py-10`}
            >
              <div className="flex items-center w-full">
                <div className="flex items-center">
                  <span className="domain-number text-black ml-4 sm:ml-6 md:ml-8 lg:ml-[37px] size-8 sm:size-10 md:size-12 rounded-full bg-white flex items-center justify-center text-xs sm:text-sm md:text-base border border-gray-200 text-center">
                    {domain.id}
                  </span>
                </div>
                <div className="domain-line h-px w-full bg-black"></div>
              </div>
              <div className="px-4 sm:px-6 md:px-8 lg:px-[37px] flex flex-col gap-4 sm:gap-6">
                <h3 className="domain-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                  {domain.title}
                </h3>
                <p className="domain-description text-[#4A4A68] font-medium text-sm sm:text-base md:text-lg lg:text-xl italic w-full lg:w-[60%]">
                  {domain.description}
                </p>
              </div>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center">
              <div className="domain-image relative w-full aspect-square sm:aspect-auto h-48 sm:h-64 md:h-full">
                <Image
                  src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1746446894/amico_awy2ed.png"
                  alt={`${domain.title} illustration`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
