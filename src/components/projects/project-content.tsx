'use client';

import { useState } from 'react';
import { GitHubContributor } from '@/types/projects';
import { ContributorsSection } from './contributors';
import { GitHubButton } from './github-button';

interface ProjectContentProps {
  name: string;
  description: string;
  contributors: GitHubContributor[];
  githubUrl: string;
  hasImage: boolean;
}

export function ProjectContent({
  name,
  description,
  contributors,
  githubUrl,
  hasImage,
}: ProjectContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex-1 ${hasImage ? '' : 'w-full'}`}>
      {/* Title */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 font-productsans">
        {name}
      </h3>

      {/* Description */}
      <div className="mb-4 md:mb-6">
        <p className="text-base md:text-lg font-bold font-productsans text-blue-600 mb-1 md:mb-2">
          Description
        </p>
        <p className="text-sm md:text-base font-productsans text-gray-900 text-left whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col mt-4 sm:mt-6 w-full gap-4 md:gap-6">
        <div className="w-full">
          <ContributorsSection
            contributors={contributors}
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
          />
        </div>
        <GitHubButton url={githubUrl} />
      </div>
    </div>
  );
}
