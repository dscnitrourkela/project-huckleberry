import { cardData, trackData } from '@/config/about-us';
import Image from 'next/image';

export const WhatWeDoMappedCards = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card ${card.bgClass} ${card.cardClass} p-5 sm:p-6 md:p-7 flex flex-col gap-3 sm:gap-4 md:gap-5`}
        >
          <div className="relative h-16 sm:h-18 md:h-20 w-16 sm:w-18 md:w-20">
            <Image
              src={card.Icon}
              alt={`${card.title} icon`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, 80px"
            />
          </div>

          <h3 className="card-title font-[900] font-productsans text-xl sm:text-2xl md:text-[28px]  text-black leading-tight">
            {card.title}
          </h3>
          <p className="card-description font-productsans text-[#4A4A68] text-[14px] sm:text-[16px] md:text-[18px] leading-[16px] font-[500] w-[90%] sm:leading-[18px] md:leading-[20px]">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
};

export const DomainMappedCards = () => {
  return (
    <>
      {trackData.map((domain, index) => (
        <div
          key={index}
          className={`domain-card flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 lg:gap-12`}
        >
          <div
            className={`domain-content rounded-xl border ${domain.bgColor} ${domain.borderColor} ${domain.shadow} flex flex-col w-full md:w-[60%] gap-4 sm:gap-6 py-6 sm:py-8 md:py-10`}
          >
            <div className="flex items-center w-full">
              <div className="flex items-center">
                <span className="domain-number text-black ml-4 sm:ml-6 md:ml-8 lg:ml-[37px] size-8 sm:size-10 md:size-12 rounded-full bg-white flex items-center justify-center text-xs sm:text-sm md:text-base border border-gray-200 text-center">
                  {domain.id}
                </span>
              </div>
              <div className="domain-line h-px w-full bg-black"></div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 lg:px-[37px] flex flex-col gap-4 sm:gap-6">
              <h3 className="domain-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[900] font-productsans text-black">
                {domain.title}
              </h3>
              <p className="domain-description text-[#4A4A68] font-[520] text-sm font-productsans sm:text-base md:text-lg lg:text-xl italic w-full lg:w-[60%]">
                {domain.description}
              </p>
            </div>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-center">
            <div className="domain-image relative w-full aspect-square sm:aspect-auto h-48 sm:h-64 md:h-full">
              <Image
                src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1746446894/amico_awy2ed.png"
                alt={`${domain.title} illustration`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
