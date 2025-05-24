'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import SocialLinks from '../home/social-links';
import { TeamMember } from '@/types/team';

interface MemberCardProps extends TeamMember {
  showBatch?: boolean;
}

const MemberCard = ({
  name,
  role,
  photo,
  batch,
  socials,
  showBatch = false,
}: MemberCardProps) => {
  const colors = [
    'bg-pink-50',
    'bg-blue-50',
    'bg-green-50',
    'bg-yellow-50',
    'bg-red-50',
    'bg-purple-50',
    'bg-orange-50',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="w-full max-w-xs mx-auto relative h-[380px] overflow-hidden border-black border-2 shadow-[gray_4px_4px_2px] hover:shadow-[gray_7px_7px_2px] hover:translate-x-[-3px] hover:translate-y-[-3px] transistion-all duration-300 ease-in-out">
      <motion.div className="absolute inset-0 w-full h-full">
        <div className={`${randomColor} rounded-2xl h-full flex flex-col`}>
          <div className="h-3/4 overflow-hidden p-5 pb-0">
            <Image
              src={photo}
              alt={`${name} - ${role}`}
              className="w-full h-full object-cover"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="p-5 pt-1 flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 font-productsans">
              {name}
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 font-productsans capitalize">
                {role}
              </p>
              {showBatch && batch && (
                <span className="font-productsans bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  Batch {batch}
                </span>
              )}
            </div>
            <div className="pt-3">
              {socials && (
                <SocialLinks
                  socials={socials}
                  className="justify-start"
                  linkClassName="bg-black/80 hover:bg-black"
                  iconSize={20}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(MemberCard);
