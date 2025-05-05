import { cardData } from '@/config/about-us';
import Image from 'next/image';

export const WhatWeDo = () => {
  return (
    <>
      <div className="h-auto flex flex-col gap-10">
        <h1 className="text-3xl md:text-[64px] leading-[54px]  font-semibold text-black">
          What we do
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6">
          {cardData.map((card, index) => (
            <div key={index}>
              <div
                className="rounded-lg px-[25px] py-[34px] w-[282px] h-[349px] flex flex-col gap-3 transition-transform hover:transform hover:scale-105"
                style={{ backgroundColor: card.bgColor }}
              >
                <Image src={card.Icon} width={78} height={78} alt="card img" />

                <h3 className="text-[28px] leading-[36px] font-[900] text-black">
                  {card.title}
                </h3>
                <p className="text-[#4A4A68] text-[18px] leading-[16px] font-[500]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
