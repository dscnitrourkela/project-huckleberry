import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { concentricCircles } from '@/config/home';
import gsap from 'gsap';

const ConcentricCircle = () => {
  const circles = useRef<HTMLImageElement>(null);
  useEffect(() => {
    gsap.set(circles.current, { opacity: 0 });

    gsap.to(circles.current, {
      opacity: 1,
      delay: 1.5,
      duration: 1,
      ease: 'power1.inOut',
    });
    gsap.to(circles.current, {
      rotate: -360,
      repeat: -1,
      duration: 10,
      ease: 'none',
    });
  }, []);

  return (
    <div>
      <Image
        ref={circles}
        className="opacity-0 absolute w-[15rem] lg:w-[20rem] -right-[160px] top-[80px] z-5"
        src={concentricCircles}
        width={240}
        height={160}
        alt="Concentric Circles"
      />
    </div>
  );
};

export default ConcentricCircle;
