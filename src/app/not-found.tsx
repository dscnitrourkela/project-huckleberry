import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#4285F4] flex items-center justify-center text-white text-3xl font-bold mr-2">
            4
          </div>
          <div className="w-16 h-16 rounded-full bg-[#EA4335] flex items-center justify-center text-white text-3xl font-bold mr-2">
            0
          </div>
          <div className="w-16 h-16 rounded-full bg-[#FBBC05] flex items-center justify-center text-white text-3xl font-bold mr-2">
            4
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 font-geist-sans max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-[#4285F4] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3367d6] transition-colors duration-200 font-poppins inline-block"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
