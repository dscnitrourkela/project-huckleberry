'use client';
import { motion } from 'framer-motion';

const colors = [
  { color: '#4285F4', delay: 0 },
  { color: '#EA4335', delay: 0.2 },
  { color: '#FBBC05', delay: 0.4 },
  { color: '#34A853', delay: 0.6 },
];

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-poppins">
          Loading...
        </h2>
      </div>
      <div className="flex space-x-3">
        {colors.map(({ color, delay }, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
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
}
