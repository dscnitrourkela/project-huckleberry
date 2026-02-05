'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface GitHubButtonProps {
  url: string;
}

export function GitHubButton({ url }: GitHubButtonProps) {
  return (
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
          href={url}
          className="flex items-center justify-center sm:justify-start bg-blue-600 text-white px-4 sm:px-5 py-3 sm:py-4 rounded-md text-sm sm:text-base font-productsans border-gray-600 border-2 shadow-lg hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} className="mr-2" />
          View GitHub
        </Link>
      </motion.div>
    </div>
  );
}
