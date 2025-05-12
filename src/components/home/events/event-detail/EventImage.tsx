'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface EventImageProps {
  imageUrl: string | null;
  title: string;
}

const EventImage = ({ imageUrl, title }: EventImageProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="w-full max-h-[400px] sm:max-h-[500px] overflow-hidden rounded-2xl my-8 shadow-xl border border-gray-100"
  >
    <Image
      src={imageUrl || ''}
      alt={title}
      width={800}
      height={500}
      className="w-full object-cover hover:scale-105 transition-transform duration-500"
    />
  </motion.div>
);

export default EventImage;
