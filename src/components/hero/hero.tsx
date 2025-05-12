'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import Image from 'next/image';
import {
  polygon,
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
  botPolygon,
  concentricCircles,
  greenVer,
  blueCircle,
  darkGreenDot,
  lightGreenDot,
  redDot,
} from '@/config/home';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
  const rectRef = useRef<HTMLImageElement>(null);
  const yelRectRef = useRef<HTMLImageElement>(null);
  const rectRefsec = useRef<HTMLImageElement>(null);
  const redHor = useRef<HTMLImageElement>(null);
  const redHorSec = useRef<HTMLImageElement>(null);
  const circles = useRef<HTMLImageElement>(null);
  const polygonRef1 = useRef<HTMLImageElement>(null);
  const polygonRef2 = useRef<HTMLImageElement>(null);
  const rectRef1 = useRef<HTMLImageElement>(null);
  const rectRef2 = useRef<HTMLImageElement>(null);
  const svgcontainer = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(rectRef.current, {
      height: '25px',
      duration: 3,
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
    gsap.to(redHor.current, {
      width: '25px',
      duration: 3,
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

    gsap.to(circles.current, {
      rotate: -360,
      repeat: -1,
      duration: 10,
      ease: 'none',
    });

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
      y: 130,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(rectRef1.current, {
      y: -100,
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

    gsap.set('#head', { opacity: 1 });
    gsap.set('#subhead', { opacity: 1 });
    gsap.set('#para', { opacity: 1 });

    SplitText.create('#head', {
      type: 'words,lines',
      wordsClass: 'words',
      autoSplit: true,
      mask: 'words',
      onSplit: (self) => {
        gsap.from(self.words, {
          duration: 4,
          yPercent: 100,
          opacity: 0,
          stagger: 0.23,
          ease: 'expo.out',
        });
      },
    });

    SplitText.create('#subhead', {
      type: 'words,lines',
      wordsClass: 'words',
      autoSplit: true,
      mask: 'words',
      onSplit: (self) => {
        gsap.from(self.words, {
          duration: 4,
          yPercent: 100,
          opacity: 0,
          stagger: 0.23,
          ease: 'expo.out',
        });
      },
    });

    SplitText.create('#para', {
      type: 'words,lines',
      wordsClass: 'words',
      autoSplit: true,
      mask: 'words',
      onSplit: (self) => {
        gsap.from(self.words, {
          duration: 4,
          yPercent: 150,
          opacity: 0,
          stagger: 0.02,
          ease: 'expo.out',
        });
      },
    });

    gsap.set(svgcontainer.current, { opacity: 0 });
    gsap.set(polygonRef1.current, { opacity: 0 });
    gsap.set(polygonRef2.current, { opacity: 0 });
    gsap.set(circles.current, { opacity: 0 });
    gsap.set(rectRef1.current, { opacity: 0 });
    gsap.set(rectRef2.current, { opacity: 0 });

    gsap.to(svgcontainer.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power1.inOut',
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
    gsap.to(circles.current, {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power1.inOut',
    });
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
  }, []);

  return (
    <>
      <main className="relative">
        <section
          id="hero"
          className="h-dvh relative w-full px-6 lg:px-0 overflow-hidden"
        >
          <div className="h-full w-full flex justify-center items-center ">
            <div className="flex flex-col gap-12 relative z-10">
              <div className="flex flex-col gap-7">
                <h1
                  id="head"
                  className="text-center text-[40px] sm:text-[52px] md:text-[60px] xl:text-[68px] text-[#646464] leading-tight font-product"
                >
                  Google Developer Groups
                </h1>
                <h1
                  id="subhead"
                  className="text-center text-[#646464] xl:text-2xl font-[700] font-product"
                >
                  National Institute of Technology, Rourkela
                </h1>
              </div>
              <div className="flex justify-center">
                <p
                  id="para"
                  className="text-center md:w-[720px] leading-6 font-productLight"
                >
                  Fueling innovation and collaboration at NIT Rourkela through
                  hands-on learning, events, and impactful tech projects.
                </p>
              </div>
              <div className=" flex justify-center">
                <button className="button text-white font-[700] px-6 xl:px-12 py-[18px] rounded-[8px] border border-black font-product">
                  Apply For Membership
                </button>
              </div>
            </div>
          </div>

          <Image
            ref={polygonRef1}
            className="absolute top-0 lg:top-12 -left-[120px] lg:-left-[72px]"
            src={polygon}
            width={240}
            height={240}
            alt="Top Polygon"
          />
          <Image
            ref={polygonRef2}
            className="absolute top-20 lg:top-32 -left-[100px] lg:-left-[48px]"
            src={polygon}
            width={240}
            height={240}
            alt="Bottom Polygon"
          />

          {/* SVG Bottom Left Elements */}

          <div ref={svgcontainer} className="svgcomponents hidden md:flex">
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
              className="absolute left-28 bottom-20"
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

          <Image
            ref={circles}
            className="absolute w-[15rem] lg:w-[20rem] -right-[160px] top-[80px] z-5"
            src={concentricCircles}
            width={240}
            height={160}
            alt="Concentric Circles"
          />

          <Image
            ref={rectRef1}
            className="absolute -right-24 md:right-0 -bottom-64 md:-bottom-[15rem] lg:-bottom-[12rem]"
            src={botPolygon}
            width={240}
            height={240}
            alt="Bottom Right Red Polygon"
          />
          <Image
            ref={rectRef2}
            className="absolute -right-8  md:right-0 -bottom-80  md:-bottom-[10rem] lg:-bottom-[6rem]"
            src={botPolygon}
            width={240}
            height={240}
            alt="Bottom Right Red Polygon"
          />
        </section>
      </main>
    </>
  );
};

export default Hero;
