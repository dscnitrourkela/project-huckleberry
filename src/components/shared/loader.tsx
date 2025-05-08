'use client';
import { motion } from 'framer-motion';

const colors = [
  { color: '#4285F4', delay: 0 }, // Blue
  { color: '#EA4335', delay: 0.2 }, // Red
  { color: '#FBBC05', delay: 0.4 }, // Yellow
  { color: '#34A853', delay: 0.6 }, // Green
];

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex space-x-2">
        {colors.map(({ color, delay }, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
