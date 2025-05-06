import React from 'react';
import Image from 'next/image';
import { TEAMS_ILLUSTRATION } from '@/config/teams';

const TeamHeader: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Our Team
          </h1>
          <p className="text-lg text-gray-600 font-dm">
            We're a passionate team dedicated to innovation and excellence. Our
            diverse backgrounds and skills come together to create something
            truly special. Each member brings unique talents and perspectives to
            the table.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <Image
            src={TEAMS_ILLUSTRATION}
            className="w-full min-w-[30rem] h-auto"
            alt="Team Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
