'use client';
import { memo } from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SocialLinks from '../home/social-links';
import { TeamMember } from '@/types/team';

interface MemberCardProps extends TeamMember {
  showBatch?: boolean;
}

const MemberCard = ({
  name,
  role,
  quote,
  photo,
  batch,
  colorClass = 'bg-gdg-blue',
  socials,
  showBatch = false,
}: MemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const firstName = name.split(' ')[0];

  return (
    <div
      className="w-full max-w-xs mx-auto relative h-[380px] overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          opacity: isHovered ? 0 : 1,
          y: isHovered ? -20 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="bg-white rounded-2xl h-full flex flex-col">
          <div className="h-3/4 overflow-hidden">
            <Image
              src={photo}
              alt={`${name} - ${role}`}
              className="w-full h-full object-cover"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 font-poppins">
              {name}
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 font-geist-sans">{role}</p>
              {showBatch && batch && (
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  Batch {batch}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={cn('absolute inset-0 w-full h-full rounded-2xl', colorClass)}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 30,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="flex flex-col h-full p-6 justify-between">
          <div>
            {socials && (
              <SocialLinks
                socials={socials}
                className="justify-start"
                linkClassName="bg-black/80 hover:bg-black"
                iconSize={20}
              />
            )}
            {quote && (
              <p className="text-lg text-black mt-4 mb-auto font-dm text-center font-[400]">
                "{quote}"
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-block border-2 text-black border-black  px-4 py-1 rounded-full font-poppins text-sm">
              {firstName}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(MemberCard);
