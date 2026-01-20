import { ChevronDown, ChevronUp, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { prIcon } from '@/config/projects';
import { GitHubContributor } from '@/types/projects';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  count: number;
  githubUrl: string;
  bgColor?: string;
  contributors?: GitHubContributor[];
  imageUrl?: string;
}

export default function ProjectCard({
  name,
  description,
  count = 0,
  githubUrl,
  bgColor = 'bg-blue-100',
  contributors = [],
  imageUrl,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    collapsed: {
      height: '50px',
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    expanded: {
      height: 'auto',
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    collapsed: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
    expanded: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`rounded-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8 ${bgColor} border-2 border-gray-600 shadow-md w-full`}
    >
      {/* Responsive layout: stack on mobile, side-by-side on larger screens */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Project Screenshot - left on desktop, top on mobile */}
        {imageUrl && (
          <motion.div
            className="w-full lg:w-2/5 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Laptop-style frame for screenshot */}
            <div className="relative">
              {/* Screen bezel effect */}
              <div className="bg-gray-800 rounded-t-xl p-2 pb-0">
                {/* Browser dots */}
                <div className="flex gap-1.5 mb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                {/* Screenshot container - removed fixed aspect ratio */}
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
              <div className="bg-gray-700 h-3 rounded-b-lg mx-4"></div>
              <div className="bg-gray-600 h-1.5 rounded-b-xl mx-8"></div>
            </div>
          </motion.div>
        )}

        {/* Content Section */}
        <div className={`flex-1 ${imageUrl ? '' : 'w-full'}`}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 font-productsans">
            {name}
          </h3>

          <div className="mb-4 md:mb-6">
            <p className="text-base md:text-lg font-bold font-productsans text-blue-600 mb-1 md:mb-2">
              Description
            </p>
            <p className="text-sm md:text-base font-productsans text-gray-900 text-left whitespace-pre-line">
              {description}
            </p>
          </div>

          <div className="flex flex-col mt-4 sm:mt-6 w-full gap-4 md:gap-6">
            <div className="w-full">
              {contributors.length > 0 ? (
                <div className="space-y-2 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-base md:text-lg font-bold font-productsans text-blue-600">
                      Contributors ({contributors.length})
                    </p>
                    <motion.button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-blue-600 font-medium p-1 bg-blue-100 rounded-full hover:bg-blue-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? <ChevronUp /> : <ChevronDown />}
                    </motion.button>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="collapsed"
                    animate={isExpanded ? 'expanded' : 'collapsed'}
                    className=""
                  >
                    {isExpanded ? (
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mt-3 md:mt-4">
                        {contributors.map((contributor, i) => (
                          <motion.div
                            key={i}
                            variants={itemVariants}
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <Link
                              href={`https://github.com/${contributor.login}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                            >
                              <div className="relative">
                                <motion.div
                                  whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    transition: { duration: 0.5 },
                                  }}
                                >
                                  <Image
                                    src={contributor.avatar_url}
                                    alt={contributor.login}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-800 shadow-md"
                                  />
                                </motion.div>
                                <div className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center text-xs sm:text-sm md:text-base font-productsans">
                                  {contributor.contributions}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                        {contributors.slice(0, 5).map((contributor, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                          >
                            <Link
                              href={`https://github.com/${contributor.login}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="relative">
                                <Image
                                  src={contributor.avatar_url}
                                  alt={contributor.login}
                                  width={48}
                                  height={48}
                                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-800 shadow-md"
                                />
                                <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex font-productsans font-bold items-center justify-center text-[10px] sm:text-xs">
                                  {contributor.contributions}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                        {contributors.length > 5 && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-500 text-white text-xs sm:text-sm md:text-base font-bold cursor-pointer shadow-md font-productsans"
                            onClick={() => setIsExpanded(true)}
                          >
                            +{contributors.length - 5}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              ) : (
                <p className="text-gray-500 italic">No contributors found</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end space-y-3 sm:space-y-0 sm:space-x-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={githubUrl}
                  className="flex items-center justify-center sm:justify-start bg-blue-600 text-white px-4 sm:px-5 py-3 sm:py-4 rounded-md text-sm sm:text-base font-productsans border-gray-600 border-2 shadow-lg hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-2" />
                  View GitHub
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
