'use client';
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import Image from 'next/image';
import { polygon, botPolygon, concentricCircles } from '@/config/home';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import SvgBottomLeft from './svgusables/svglogos';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
  const circles = useRef<HTMLImageElement>(null);
  const polygonRef1 = useRef<HTMLImageElement>(null);
  const polygonRef2 = useRef<HTMLImageElement>(null);
  const rectRef1 = useRef<HTMLImageElement>(null);
  const rectRef2 = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
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

    gsap.set(polygonRef1.current, { opacity: 0 });
    gsap.set(polygonRef2.current, { opacity: 0 });
    gsap.set(circles.current, { opacity: 0 });
    gsap.set(rectRef1.current, { opacity: 0 });
    gsap.set(rectRef2.current, { opacity: 0 });

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
          className="h-[100vh] relative w-full px-6 lg:px-0 overflow-hidden"
        >
          <div className="h-full w-full flex justify-center items-center ">
            <div className="flex flex-col gap-12 relative z-10">
              <div className="flex flex-col gap-7">
                <h1
                  id="head"
                  className="text-center text-[40px] sm:text-[52px] md:text-[60px] xl:text-[68px] text-[#646464] leading-tight font-bold font-productsans"
                >
                  Google Developer Groups
                </h1>
                <h1
                  id="subhead"
                  className="text-center text-[#646464] xl:text-2xl font-[700] font-productsans"
                >
                  National Institute of Technology, Rourkela
                </h1>
              </div>
              <div className="flex justify-center">
                <p
                  id="para"
                  className="text-center md:w-[720px] leading-6 font-productsans"
                >
                  Fueling innovation and collaboration at NIT Rourkela through
                  hands-on learning, events, and impactful tech projects.
                </p>
              </div>
              <div className=" flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-800 transition duration-300 text-white font-[700] px-6 xl:px-12 py-[18px] rounded-[8px] border border-black font-productsans">
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

          <SvgBottomLeft />

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
