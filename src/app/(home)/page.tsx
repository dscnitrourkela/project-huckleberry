'use client';

import React from 'react';
import { Construction } from 'lucide-react';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-10 left-10 w-56 h-56 rounded-full bg-gdg-blue/5 animate-float"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gdg-green/5 animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gdg-yellow/5 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/5 w-64 h-64 rounded-full bg-gdg-red/5 animate-float"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl relative z-10 flex flex-col items-center">
        {/* Caption */}
        <div className="text-center mb-16 animate-fade-in-delay-1">
          <span className="inline-block px-4 py-1 rounded-full bg-gdg-blue/10 text-gdg-blue text-sm font-medium mb-4">
            Building for the Future
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gdg-dark">Google Developers Student </span>
            <span className="text-gradient">Groups Rourkela</span>
          </h1>
          <p className="text-lg md:text-xl text-gdg-gray max-w-2xl mx-auto">
            We're working hard to bring you an amazing new experience. Stay
            tuned for updates on our progress and upcoming events.
          </p>
        </div>

        {/* Construction Icon */}
        <div className="flex justify-center mb-12 animate-fade-in-delay-2">
          <div className="p-6 rounded-full bg-white/80 shadow-lg">
            <Construction className="w-16 h-16 text-gdg-blue" />
          </div>
        </div>

        {/* Login Button */}
        <Link href="/login" className="mb-8 animate-fade-in-delay-2">
          <button className="px-6 py-3 bg-gdg-blue hover:bg-gdg-blue/90 text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center">
            Login to Dashboard
          </button>
        </Link>

        {/* Google Colors Bar */}
        <div className="w-full max-w-md h-2 rounded-full mb-12 flex overflow-hidden animate-fade-in-delay-2">
          <div className="w-1/4 bg-gdg-blue"></div>
          <div className="w-1/4 bg-gdg-red"></div>
          <div className="w-1/4 bg-gdg-yellow"></div>
          <div className="w-1/4 bg-gdg-green"></div>
        </div>

        {/* Footer */}
        <div className="text-center text-gdg-gray text-sm animate-fade-in-delay-3">
          <p>
            © {new Date().getFullYear()} Google Developers Student Groups
            Rourkela. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
