import Image from 'next/image';
import { SectionHead } from './section-head';

export const WhoAreWe = () => {
  return (
    <section id="about">
      <div className="">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6">
            <SectionHead label="Who are we?" />
            <p className="text-[#4A4A68] text-base sm:text-lg md:text-xl font-productsans font-[500] lg:text-2xl  leading-relaxed">
              We're a team of passionate designers, developers, and strategists
              dedicated to creating exceptional digital experiences. With over a
              decade of industry experience, we've helped businesses of all
              sizes transform their ideas into successful products.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 w-full max-w-sm">
              <Image
                src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1746446894/amico_awy2ed.png"
                alt="People collaborating"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
