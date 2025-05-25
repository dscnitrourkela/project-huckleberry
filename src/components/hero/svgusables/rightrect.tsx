'use client';
import React, { useEffect, useRef } from 'react';
import { botPolygon } from '@/config/home';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const RightPolygon = () => {
  const rectRef1 = useRef<HTMLImageElement>(null);
  const rectRef2 = useRef<HTMLImageElement>(null);
  useEffect(() => {
    gsap.set(rectRef1.current, { opacity: 0 });
    gsap.set(rectRef2.current, { opacity: 0 });

    gsap.to(rectRef1.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power1.inOut',
    });
    gsap.to(rectRef2.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power1.inOut',
    });

    gsap.to(rectRef1.current, {
      y: -110,
      duration: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(rectRef2.current, {
      y: -110,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);
  return (
    <div>
      <Image
        ref={rectRef1}
        className="opacity-0 absolute -right-24 md:right-0 -bottom-64 md:-bottom-[15rem] lg:-bottom-[12rem]"
        src={botPolygon}
        width={240}
        height={240}
        alt="Bottom Right Red Polygon"
      />
      <Image
        ref={rectRef2}
        className="opacity-0 absolute -right-8  md:right-0 -bottom-80  md:-bottom-[10rem] lg:-bottom-[6rem]"
        src={botPolygon}
        width={240}
        height={240}
        alt="Bottom Right Red Polygon"
      />
    </div>
  );
};

export default RightPolygon;
