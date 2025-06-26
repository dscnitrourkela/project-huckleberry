'use client';
import { memo, useState } from 'react';
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
  const [imageError, setImageError] = useState(false);

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

  // Generate initials from name
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2); // Take only first 2 initials
  };

  return (
    <div className="w-full max-w-xs mx-auto relative h-[380px] overflow-hidden border-black border-2 shadow-[black_4px_4px_0px] hover:shadow-[black_7px_7px_0px] hover:translate-x-[-3px] hover:translate-y-[-3px] transistion-all duration-300 ease-in-out">
      <motion.div className="absolute inset-0 w-full h-full">
        <div className={`${randomColor} h-full flex flex-col`}>
          <div className="h-3/4 overflow-hidden p-3 pb-0 mb-2">
            {!imageError && photo ? (
              <Image
                src={photo}
                alt={`${name} - ${role}`}
                className="w-full h-full object-cover"
                width={600}
                height={600}
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-white text-6xl font-bold font-productsans">
                  {getInitials(name)}
                </span>
              </div>
            )}
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
                <span className="font-productsans text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  Batch {batch}
                </span>
              )}
            </div>
            <div className="pt-3">
              {socials && (
                <SocialLinks
                  socials={socials}
                  className="justify-start"
                  iconSize={16}
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
