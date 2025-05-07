'use client';
import Loader from '@/components/shared/loader';
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
        <Loader />
      </div>
    </div>
  );
}
