'use client';
import { memo } from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Linkedin, Github, Twitter, Figma } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SocialLinks, { SocialLinkType } from '../home/social-links';

interface MemberCardProps {
  name: string;
  title: string;
  quote: string;
  imageSrc: string;
  altText?: string;
  colorClass?: string;
  socials?: SocialLinkType[];
}

const DEFAULT_MEMBER_SOCIALS: SocialLinkType[] = [
  {
    platform: 'linkedin',
    url: '#',
    icon: Linkedin,
    ariaLabel: 'LinkedIn Profile',
  },
  {
    platform: 'github',
    url: '#',
    icon: Github,
    ariaLabel: 'GitHub Profile',
  },
  {
    platform: 'twitter',
    url: '#',
    icon: Twitter,
    ariaLabel: 'Twitter Profile',
  },
  {
    platform: 'figma',
    url: '#',
    icon: Figma,
    ariaLabel: 'Figma Projects',
  },
];

const MemberCard = ({
  name,
  title,
  quote,
  imageSrc,
  altText,
  colorClass = 'bg-gdg-blue',
  socials,
}: MemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const displaySocials = socials?.length ? socials : DEFAULT_MEMBER_SOCIALS;

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
              src={imageSrc}
              alt={altText || `${name} - ${title}`}
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
            <p className="text-gray-600 font-geist-sans">{title}</p>
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
            <SocialLinks
              socials={displaySocials}
              className="justify-center"
              linkClassName="bg-black/80 hover:bg-black"
              iconSize={20}
            />
            {quote && (
              <p className="text-lg text-black mt-4 mb-auto font-dm text-center font-[400]">
                "{quote}"
              </p>
            )}
          </div>
          <div>
            <div className="inline-block bg-black text-white px-4 py-1 rounded-full font-poppins text-sm">
              {firstName}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(MemberCard);
