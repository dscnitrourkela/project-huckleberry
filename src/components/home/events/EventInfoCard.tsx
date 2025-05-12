import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface EventInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

const EventInfoCard: React.FC<EventInfoCardProps> = ({
  icon,
  title,
  description,
  bgColor = 'bg-gray-50',
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
      }}
      className={cn(
        'p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300',
        bgColor
      )}
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 5 }}
          className="p-2 rounded-lg bg-white shadow-sm"
        >
          {icon}
        </motion.div>
        <div>
          <motion.h4
            whileHover={{ x: 5 }}
            className="font-semibold text-gray-900 text-lg"
          >
            {title}
          </motion.h4>
          <motion.p whileHover={{ x: 5 }} className="text-gray-600 mt-1">
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventInfoCard;
