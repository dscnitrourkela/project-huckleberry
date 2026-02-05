'use client';

import { motion } from 'framer-motion';
import { GitHubContributor } from '@/types/projects';
import { PhoneFrame, LaptopFrame } from './device-frames';
import { ProjectContent } from './project-content';

interface ProjectCardProps {
  name: string;
  description: string;
  count: number;
  githubUrl: string;
  bgColor?: string;
  contributors?: GitHubContributor[];
  imageUrl?: string;
  isMobileApp?: boolean;
}

export default function ProjectCard({
  name,
  description,
  githubUrl,
  bgColor = 'bg-blue-100',
  contributors = [],
  imageUrl,
  isMobileApp = false,
}: ProjectCardProps) {
  return (
    <div
      className={`rounded-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8 ${bgColor} border-2 border-gray-600 shadow-md w-full`}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Device Screenshot */}
        {imageUrl && (
          <motion.div
            className={`w-full ${isMobileApp ? 'lg:w-1/4' : 'lg:w-2/5'} flex-shrink-0 flex justify-center`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileApp ? (
              <PhoneFrame imageUrl={imageUrl} name={name} />
            ) : (
              <LaptopFrame imageUrl={imageUrl} name={name} />
            )}
          </motion.div>
        )}

        {/* Content */}
        <ProjectContent
          name={name}
          description={description}
          contributors={contributors}
          githubUrl={githubUrl}
          hasImage={!!imageUrl}
        />
      </div>
    </div>
  );
}
