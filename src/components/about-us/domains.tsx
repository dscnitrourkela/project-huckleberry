'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { SectionHead } from './section-head';
import { DomainMappedCards } from './mapped-cards';

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
    <div className="min-h-screen py-8 flex flex-col gap-10 sm:py-12 md:py-16">
      <SectionHead label="Domains" />
      <div
        id="track"
        className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32"
      >
        <DomainMappedCards />
      </div>
    </div>
  );
};
