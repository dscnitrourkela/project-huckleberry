'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#EA4335] flex items-center justify-center text-white text-3xl font-bold mr-2">
            !
          </div>
          <div className="w-16 h-16 rounded-full bg-[#4285F4] flex items-center justify-center text-white text-3xl font-bold mr-2">
            ?
          </div>
          <div className="w-16 h-16 rounded-full bg-[#FBBC05] flex items-center justify-center text-white text-3xl font-bold mr-2">
            !
          </div>
          <div className="w-16 h-16 rounded-full bg-[#34A853] flex items-center justify-center text-white text-3xl font-bold">
            ?
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-8 font-geist-sans max-w-md mx-auto">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <button
          onClick={reset}
          className="bg-[#4285F4] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3367d6] transition-colors duration-200 font-poppins"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
