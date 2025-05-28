'use client';
import React, { useLayoutEffect, useRef } from 'react';
import {
  rectver,
  darkBlueCir,
  blueRectHor,
  yellowVer,
  yellowVerSmall,
  redHorRect,
  yellowDark,
  yellowDarkMed,
  yellowLight,
  yellowMed,
  greenVer,
  blueCircle,
  darkGreenDot,
  lightGreenDot,
  redDot,
} from '@/config/home';
import Image from 'next/image';
import gsap from 'gsap';
const SvgBottomLeft = () => {
  const rectRef = useRef<HTMLImageElement>(null);
  const yelRectRef = useRef<HTMLImageElement>(null);
  const rectRefsec = useRef<HTMLImageElement>(null);
  const redHorSec = useRef<HTMLImageElement>(null);
  const svgcontainer = useRef<HTMLImageElement>(null);
  const greenVerRef = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    gsap.set(svgcontainer.current, { opacity: 0 });
    gsap.to(svgcontainer.current, {
      opacity: 1,
      delay: 1.5,
      duration: 1,
      ease: 'power1.inOut',
    });

    gsap.to(rectRef.current, {
      height: '25px',
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
    gsap.to(yelRectRef.current, {
      height: '100px',
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
    gsap.to(rectRefsec.current, {
      width: '25px',
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
    gsap.to(greenVerRef.current, {
      height: '32px',
      duration: 1.3,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
    gsap.to(redHorSec.current, {
      width: '25px',
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <div ref={svgcontainer} className="opacity-0 svgcomponents hidden md:flex">
      <Image
        ref={rectRef}
        src={rectver}
        className="w-[25px] absolute bottom-20 left-12 rounded-full"
        alt="Vertical Blue Rectangle"
        width={25}
        height={24}
      />

      <Image
        src={darkBlueCir}
        className="w-auto absolute bottom-4 left-12"
        alt="Dark Blue Circle"
        width={25}
        height={25}
      />
      <Image
        src={darkBlueCir}
        className="w-auto absolute bottom-12 left-12"
        alt="Dark Blue Circle"
        width={25}
        height={25}
      />
      <Image
        src={darkBlueCir}
        className="w-auto absolute bottom-44 left-4"
        alt="Dark Blue Circle"
        width={25}
        height={25}
      />

      <Image
        ref={yelRectRef}
        src={yellowVer}
        className="w-[24px] h-[25px] absolute bottom-12 left-20 rounded-full"
        alt="Yellow Vertical Rectangle"
        width={24}
        height={25}
      />
      <Image
        ref={rectRefsec}
        src={blueRectHor}
        className="h-[25px] w-auto absolute bottom-12 left-28 rounded-full"
        alt="Blue Horizontal Rectangle"
        height={25}
        width={100}
      />
      <Image
        src={darkBlueCir}
        className="w-auto absolute bottom-12 left-28"
        alt="Dark Blue Circle"
        width={25}
        height={25}
      />

      <Image
        src={yellowVerSmall}
        className="w-auto absolute bottom-24 left-4"
        alt="Yellow Vertical small bar"
        height={25}
        width={25}
      />

      <Image
        ref={redHorSec}
        src={redHorRect}
        className="w-auto h-[25px] absolute bottom-4 left-20 rounded-full"
        alt="Red Horizontal bar"
        width={25}
        height={25}
      />
      <Image
        src={redDot}
        className=" absolute bottom-4 left-44 rounded-full"
        width={24}
        height={24}
        alt="Red Horizontal bar"
      />

      <Image
        src={yellowDark}
        className="w-auto absolute bottom-12 left-20"
        alt="Dark Yellow Circle"
        width={25}
        height={25}
      />
      <Image
        src={blueCircle}
        className="w-auto absolute bottom-40 left-4"
        alt="Blue Circle"
        width={25}
        height={25}
      />

      <Image
        ref={greenVerRef}
        className="absolute left-28 bottom-20 rounded-full"
        src={greenVer}
        width={24}
        height={25}
        alt="Green Vertical Rectangle"
      />
      <Image
        className="absolute left-28 bottom-36"
        src={darkGreenDot}
        width={24}
        height={25}
        alt="Dark Green Circle"
      />
      <Image
        className="absolute left-28 bottom-32"
        src={lightGreenDot}
        width={24}
        height={25}
        alt="Light Green Circle"
      />
      <Image
        className="absolute left-28 bottom-44"
        src={darkGreenDot}
        width={24}
        height={25}
        alt="Dark Green Circle"
      />
      {/* Yellow Dots */}

      <Image
        src={yellowLight}
        className="absolute bottom-4 left-4 z-5"
        alt="Yellow Light Dot"
        width={25}
        height={25}
      />
      <Image
        src={yellowMed}
        className="absolute bottom-8 left-4 z-5"
        alt="Yellow Medium Dot"
        width={25}
        height={25}
      />
      <Image
        src={yellowDarkMed}
        className="absolute bottom-12 left-4 z-5"
        alt="Yellow Dark Medium Dot"
        width={25}
        height={25}
      />
      <Image
        src={yellowDark}
        className="absolute bottom-16 left-4 z-5"
        alt="Yellow Dark Dot"
        width={25}
        height={25}
      />
    </div>
  );
};

export default SvgBottomLeft;
