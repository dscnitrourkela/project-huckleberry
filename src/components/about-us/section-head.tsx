'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionHead = ({ label }: { label: string }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, { type: 'words' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          once: true,
        },
      });

      tl.from(split.words, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back',
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        tl.kill();
      };
    }
  }, []);

  return (
    <h2
      ref={textRef}
      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-productsans font-bold text-black leading-tight"
    >
      {label}
    </h2>
  );
};
