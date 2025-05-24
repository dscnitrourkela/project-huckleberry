import React from 'react';
import Image from 'next/image';

interface LayoutHeroProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
}

const LayoutHero: React.FC<LayoutHeroProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="w-full  pt-24 lg:pt-32  px-[35px] sm:px-[65px] md:px-[90px] lg:px-[100px] xl:px-[120px]">
      {/* Hero Image */}
      <div className="relative w-full h-[30dvh] sm:h-[35dvh] md:h-[40dvh] lg:h-[45dvh] rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Hero image for ${title}`}
          priority
          quality={100}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            imageRendering: 'crisp-edges',
          }}
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000]/30 to-[#FFFEFE00]/20 rounded-xl" />
      </div>

      {/* Heading + Subtext Block */}
      <div className="py-8 sm:py-12 z-10 relative">
        <div className="bg-white shadow-md px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center lg:items-center border-y-2 border-black font-productsans text-black gap-6 lg:gap-0">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#313131]">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:mt-2 lg:mt-0 max-w-xl text-center sm:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LayoutHero;
