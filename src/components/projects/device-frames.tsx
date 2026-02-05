'use client';

import Image from 'next/image';

export interface DeviceFrameProps {
  imageUrl: string;
  name: string;
}

export function PhoneFrame({ imageUrl, name }: DeviceFrameProps) {
  return (
    <div className="relative w-48 sm:w-56 mx-auto">
      <div className="relative bg-gray-800 rounded-[2.5rem] p-2 shadow-xl">
        <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-l-lg" />
        <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-700 rounded-l-lg" />
        <div className="absolute -left-1 top-48 w-1 h-12 bg-gray-700 rounded-l-lg" />
        <div className="absolute -right-1 top-28 w-1 h-16 bg-gray-700 rounded-r-lg" />

        <div className="bg-black rounded-[2rem] p-1">
          {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" /> */}

          <div className="relative w-full overflow-hidden bg-white rounded-[1.75rem]">
            <Image
              src={imageUrl}
              alt={`${name} screenshot`}
              width={400}
              height={800}
              className="w-full h-full object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full" />
    </div>
  );
}

export function LaptopFrame({ imageUrl, name }: DeviceFrameProps) {
  return (
    <div className="relative">
      <div className="bg-gray-800 rounded-t-xl rounded-b-xl p-2 pb-2">
        <div className="flex gap-1.5 mb-2 px-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        {/* Screenshot */}
        <div className="relative w-full overflow-hidden bg-white rounded-t-sm">
          <Image
            src={imageUrl}
            alt={`${name} screenshot`}
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
      {/* Laptop base */}
      <div className="bg-gray-700 h-3 rounded-b-lg mx-4" />
      <div className="bg-gray-600 h-1.5 rounded-b-xl mx-8" />
    </div>
  );
}
