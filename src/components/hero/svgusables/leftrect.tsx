'use client';
import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import { polygon } from '@/config/home';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const LeftPolygon = () => {
  const polygonRef1 = useRef<HTMLImageElement>(null);
  const polygonRef2 = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.set(polygonRef1.current, { opacity: 0 });
    gsap.set(polygonRef2.current, { opacity: 0 });
    gsap.to(polygonRef1.current, {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(polygonRef2.current, {
      y: 140,
      duration: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(polygonRef1.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power1.inOut',
    });
    gsap.to(polygonRef2.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div>
      <Image
        ref={polygonRef1}
        className="opacity-0 absolute top-0 lg:top-12 -left-[120px] lg:-left-[72px]"
        src={polygon}
        width={240}
        height={240}
        alt="Top Left Polygon"
      />
      <Image
        ref={polygonRef2}
        className="opacity-0 absolute top-20 lg:top-32 -left-[100px] lg:-left-[48px]"
        src={polygon}
        width={240}
        height={240}
        alt="Bottom Left Polygon"
      />
    </div>
  );
};

export default LeftPolygon;
