'use client';
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import SvgBottomLeft from './svgusables/svglogos';
import LeftPolygon from './svgusables/leftrect';
import ConcentricCircle from './svgusables/circlessvg';
import RightPolygon from './svgusables/rightrect';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const btnRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.set('#head', { opacity: 1 });
    gsap.set('#subhead', { opacity: 1 });
    gsap.set('#para', { opacity: 1 });
    gsap.set(btnRef.current, { opacity: 0 });

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

    gsap.to(btnRef.current, {
      opacity: 1,
      delay: 1.35,
      duration: 2,
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
                  className="opacity-0 text-center text-[40px] sm:text-[52px] md:text-[60px] xl:text-[68px] text-[#646464] leading-tight font-bold font-productsans"
                >
                  Google Developer Groups
                </h1>
                <h1
                  id="subhead"
                  className="opacity-0 text-center text-[#646464] xl:text-2xl font-[700] font-productsans"
                >
                  National Institute of Technology, Rourkela
                </h1>
              </div>
              <div className="flex justify-center">
                <p
                  id="para"
                  className="opacity-0 text-center md:w-[720px] leading-6 font-productsans"
                >
                  Fueling innovation and collaboration at NIT Rourkela through
                  hands-on learning, events, and impactful tech projects.
                </p>
              </div>
              <div ref={btnRef} className="flex justify-center opacity-0">
                <button className="bg-blue-600 hover:bg-blue-800 transition duration-300 text-white font-[700] px-6 xl:px-12 py-[18px] rounded-[8px] border border-black font-productsans ">
                  Apply For Membership
                </button>
              </div>
            </div>
          </div>

          {/* Left Polygon Elements */}
          <LeftPolygon />

          {/* SVG Bottom Left Elements */}
          <SvgBottomLeft />

          {/* Concentric Circles Elements */}
          <ConcentricCircle />

          {/* Right Polygon Elements */}
          <RightPolygon />
        </section>
      </main>
    </>
  );
};

export default Hero;
