'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { GitHubContributor } from '@/types/projects';
import { motion } from 'framer-motion';

/* =============================================================================
   Animation Variants
============================================================================= */

const containerVariants = {
  collapsed: {
    height: '50px',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  expanded: {
    height: 'auto',
    transition: { staggerChildren: 0.08, delayChildren: 0.03 },
  },
};

const itemVariants = {
  collapsed: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2 } },
  expanded: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

/* =============================================================================
   Contributor Avatar
============================================================================= */

interface ContributorAvatarProps {
  contributor: GitHubContributor;
  size: 'sm' | 'lg';
  index?: number;
}

export function ContributorAvatar({
  contributor,
  size,
  index = 0,
}: ContributorAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
    lg: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20',
  };

  const badgeClasses = {
    sm: 'w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs',
    lg: 'w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-xs sm:text-sm md:text-base',
  };

  return (
    <motion.div
      initial={size === 'sm' ? { opacity: 0, scale: 0.8 } : undefined}
      animate={size === 'sm' ? { opacity: 1, scale: 1 } : undefined}
      transition={size === 'sm' ? { delay: index * 0.1 } : undefined}
      whileHover={{ scale: size === 'sm' ? 1.1 : 1.05, y: -5 }}
    >
      <Link
        href={`https://github.com/${contributor.login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="relative">
          <motion.div
            whileHover={
              size === 'lg'
                ? {
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }
                : undefined
            }
          >
            <Image
              src={contributor.avatar_url}
              alt={contributor.login}
              width={48}
              height={48}
              className={`${sizeClasses[size]} rounded-full border-2 border-gray-800 shadow-md`}
            />
          </motion.div>
          <div
            className={`absolute -top-1 -right-1 bg-blue-600 text-white rounded-full ${badgeClasses[size]} flex items-center justify-center font-productsans font-bold`}
          >
            {contributor.contributions}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* =============================================================================
   Expanded Contributors Grid
============================================================================= */

interface ExpandedContributorsGridProps {
  contributors: GitHubContributor[];
}

export function ExpandedContributorsGrid({
  contributors,
}: ExpandedContributorsGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mt-3 md:mt-4">
      {contributors.map((contributor, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <ContributorAvatar contributor={contributor} size="lg" />
        </motion.div>
      ))}
    </div>
  );
}

/* =============================================================================
   Collapsed Contributors List
============================================================================= */

interface CollapsedContributorsListProps {
  contributors: GitHubContributor[];
  onExpand: () => void;
}

export function CollapsedContributorsList({
  contributors,
  onExpand,
}: CollapsedContributorsListProps) {
  const PREVIEW_COUNT = 5;
  const remainingCount = contributors.length - PREVIEW_COUNT;

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
      {contributors.slice(0, PREVIEW_COUNT).map((contributor, i) => (
        <ContributorAvatar
          key={i}
          contributor={contributor}
          size="sm"
          index={i}
        />
      ))}
      {remainingCount > 0 && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-500 text-white text-xs sm:text-sm md:text-base font-bold cursor-pointer shadow-md font-productsans"
          onClick={onExpand}
        >
          +{remainingCount}
        </motion.div>
      )}
    </div>
  );
}

/* =============================================================================
   Contributors Section
============================================================================= */

interface ContributorsSectionProps {
  contributors: GitHubContributor[];
  isExpanded: boolean;
  onToggle: () => void;
}

export function ContributorsSection({
  contributors,
  isExpanded,
  onToggle,
}: ContributorsSectionProps) {
  if (contributors.length === 0) {
    return <p className="text-gray-500 italic">No contributors found</p>;
  }

  return (
    <div className="space-y-2 md:space-y-4">
      {/* Header with toggle button */}
      <div className="flex justify-between items-center">
        <p className="text-base md:text-lg font-bold font-productsans text-blue-600">
          Contributors ({contributors.length})
        </p>
        <motion.button
          onClick={onToggle}
          className="text-blue-600 font-medium p-1 bg-blue-100 rounded-full hover:bg-blue-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </motion.button>
      </div>

      {/* Contributors grid/list */}
      <motion.div
        variants={containerVariants}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
      >
        {isExpanded ? (
          <ExpandedContributorsGrid contributors={contributors} />
        ) : (
          <CollapsedContributorsList
            contributors={contributors}
            onExpand={onToggle}
          />
        )}
      </motion.div>
    </div>
  );
}
