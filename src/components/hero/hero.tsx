'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import Image from 'next/image';
import Polygon from '../../public/shapes/Polygon 3.png';
import RectangleHor from '../../public/shapes/Rectangle 803.png';
import RectangleVer from '../../public/shapes/Rectangle 800.png';
import YellowVer from '../../public/shapes/Rectangle 802.png';
import YellowVerSmall from '../../public/shapes/Rectangle 804.png';
import RedHor from '../../public/shapes/Rectangle 801.png';
import DarkBlueCir from '../../public/shapes/Ellipse 117.png';
import DarkYelCir from '../../public/shapes/Ellipse 114.png';
import BlueCir from '../../public/shapes/Ellipse 110.png';
import Circles from '../../public/shapes/circle.png';
import Rectangle from '../../public/shapes/Rectangle 27.png';

const Hero = () => {
  const rectRef = useRef<HTMLImageElement>(null);
  const yelRectRef = useRef<HTMLImageElement>(null);
  const rectRefsec = useRef<HTMLImageElement>(null);
  const redHor = useRef<HTMLImageElement>(null);
  const redHorSec = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        height: '25px',
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
      gsap.to(yelRectRef.current, {
        height: '100px',
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
      gsap.to(rectRefsec.current, {
        width: '25px',
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
      gsap.to(redHor.current, {
        width: '25px',
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
      gsap.to(redHorSec.current, {
        width: '25px',
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    }
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
                <h1 className="text-center text-[40px] sm:text-[52px] md:text-[60px] xl:text-[68px] text-[#646464] font-product">
                  Google Developer Groups
                </h1>
                <h1 className="text-center text-[#646464] xl:text-2xl font-[700] font-product">
                  National Institute of Technology, Rourkela
                </h1>
              </div>
              <div className="flex justify-center">
                <p className="text-center md:w-[720px] leading-6 font-productLight">
                  Loremipsum dollar shit, Loremimpsum,Loremipsum dollar shit,
                  Loremimpsum, Loremipsum dollar shit, Loremimpsum,Loremipsum
                  dollar shit, Loremimpsum, Loremipsum dollar shit, Loremimpsum,
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
            className="absolute top-0 lg:top-12 -left-[72px]"
            src={Polygon}
            alt=""
          />
          <Image
            className="absolute top-20 lg:top-32 -left-[48px]"
            src={Polygon}
            alt=""
          />

          <Image
            ref={rectRef}
            src={RectangleHor}
            className="w-[25px] absolute bottom-12 left-12 rounded-full"
            alt=""
          />
          <Image
            ref={yelRectRef}
            src={YellowVer}
            className="w-[24px] h-[25px] absolute bottom-12 left-20 rounded-full"
            alt=""
          />
          <Image
            ref={rectRefsec}
            src={RectangleVer}
            className="h-[25px] w-auto absolute bottom-12 left-28 rounded-full"
            alt=""
          />
          <Image
            src={DarkBlueCir}
            className="w-auto absolute bottom-12 left-28"
            alt="Dark Blue Circle"
          />
          <Image
            src={YellowVerSmall}
            className="w-auto absolute bottom-12 left-4"
            alt="Yellow Vertical small bar"
          />
          <Image
            ref={redHor}
            src={RedHor}
            className="w-auto h-[25px] absolute bottom-4 left-4 rounded-full"
            alt="Red Horizontal bar"
          />
          <Image
            ref={redHorSec}
            src={RedHor}
            className="w-auto h-[25px] absolute bottom-4 left-28 rounded-full"
            alt="Red Horizontal bar"
          />
          <Image
            src={DarkBlueCir}
            className="w-auto absolute bottom-12 left-12"
            alt="Dark Blue Circle"
          />
          <Image
            src={DarkYelCir}
            className="w-auto absolute bottom-12 left-20"
            alt="Dark Yellow Circle"
          />
          <Image
            src={BlueCir}
            className="w-auto absolute bottom-28 left-4"
            alt="Blue Circle"
          />
          <Image
            src={DarkBlueCir}
            className="w-auto absolute bottom-32 left-4"
            alt="Dark Blue Circle"
          />

          <Image
            className="absolute right-0 top-0 w-auto z-5 opacity-30 lg:opacity-100"
            src={Circles}
            alt=""
          />
          <Image
            className="absolute right-0 -bottom-48 lg:-bottom-[180px] opacity-30 lg:opacity-100"
            src={Rectangle}
            alt=""
          />
          <Image
            className="absolute right-0 -bottom-28 lg:-bottom-[100px] opacity-30 lg:opacity-100"
            src={Rectangle}
            alt=""
          />
        </section>
      </main>
    </>
  );
};

export default Hero;
