'use client';
import { motion } from 'framer-motion';

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.4, 0.6, 0.4],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const FloatingBackground = () => (
  <>
    <div className="fixed left-0 top-0 h-full w-32 pointer-events-none">
      <FloatingShape
        className="absolute top-1/4 left-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-80"
        delay={0}
      />
      <FloatingShape
        className="absolute top-1/2 left-8 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-80"
        delay={2}
      />
      <FloatingShape
        className="absolute bottom-1/4 left-4 w-28 h-28 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-80"
        delay={4}
      />
    </div>

    <div className="fixed right-0 top-0 h-full w-32 pointer-events-none">
      <FloatingShape
        className="absolute top-1/3 right-4 w-28 h-28 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-80"
        delay={1}
      />
      <FloatingShape
        className="absolute top-2/3 right-8 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-80"
        delay={3}
      />
      <FloatingShape
        className="absolute bottom-1/3 right-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-80"
        delay={5}
      />
    </div>
  </>
);

export default FloatingBackground;
