import { trackData } from '@/config/about-us';
import Image from 'next/image';

export const Domains = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-black mb-16">
        Domains
      </h1>

      <div className="flex flex-col gap-[100px]">
        {trackData.map((domain, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            {index % 2 === 0 ? (
              <>
                <div
                  className={`${domain.bgColor} ${domain.borderColor} border flex flex-col gap-[25px] flex-1  rounded-xl `}
                >
                  <div className="flex items-center w-full mt-[37px] ">
                    <div className="flex items-center">
                      <span className="text-black ml-[37px]  size-12 rounded-full bg-white flex items-center justify-center text-[14px] leading-[16.8px] border border-gray-200 text-center">
                        {domain.id}
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-black"></div>
                  </div>
                  <div className="p-[37px] flex flex-col gap-[25px]">
                    <h3 className="text-xl sm:text-[48px] leading-[36px] font-[900] text-black">
                      {domain.title}
                    </h3>
                    <p className="text-[#4A4A68] font-[500] text-sm sm:text-[20px] leading-[28px] w-[60%] italic">
                      {domain.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full h-48 md:h-full">
                    <Image
                      src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1746446894/amico_awy2ed.png"
                      alt="People collaborating"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full h-48 md:h-full">
                    <Image
                      src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1746446894/amico_awy2ed.png"
                      alt="People collaborating"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className={`${domain.bgColor} ${domain.borderColor} border  rounded-xl   flex flex-col gap-[25px] flex-1`}
                >
                  <div className="flex items-center w-full mt-[37px] ">
                    <div className="flex items-center">
                      <span className="text-black ml-[37px]  size-12 rounded-full bg-white flex items-center justify-center text-[14px] leading-[16.8px] border border-gray-200 text-center">
                        {domain.id}
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-black"></div>
                  </div>
                  <div className="p-[37px] flex flex-col gap-[25px]">
                    <h3 className="text-xl sm:text-[48px] leading-[36px] font-[900] text-black">
                      {domain.title}
                    </h3>
                    <p className="text-[#4A4A68] font-[500] text-sm sm:text-[20px] leading-[28px] w-[60%] italic">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
