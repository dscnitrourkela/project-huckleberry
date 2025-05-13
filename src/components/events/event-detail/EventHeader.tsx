'use client';
import { motion } from 'framer-motion';

interface EventHeaderProps {
  title: string;
  subTitle: string | null;
}

const EventHeader = ({ title, subTitle }: EventHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mb-12 shadow-lg"
  >
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center text-white relative z-10"
    >
      {title}
    </motion.h1>
    {subTitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl text-blue-100 text-center mt-2 relative z-10 capitalize"
      >
        {subTitle}
      </motion.p>
    )}
  </motion.div>
);

export default EventHeader;
