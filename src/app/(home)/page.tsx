'use client';

// import React from 'react';
// import { Construction } from 'lucide-react';
// import Link from 'next/link';

// const Index = () => {
//   return (
//     <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center px-4 py-12">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <div
//           className="absolute top-10 left-10 w-56 h-56 rounded-full bg-gdg-blue/5 animate-float"
//           style={{ animationDelay: '0s' }}
//         ></div>
//         <div
//           className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gdg-green/5 animate-float"
//           style={{ animationDelay: '1s' }}
//         ></div>
//         <div
//           className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gdg-yellow/5 animate-float"
//           style={{ animationDelay: '2s' }}
//         ></div>
//         <div
//           className="absolute bottom-1/4 left-1/5 w-64 h-64 rounded-full bg-gdg-red/5 animate-float"
//           style={{ animationDelay: '3s' }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="container max-w-4xl relative z-10 flex flex-col items-center">
//         {/* Caption */}
//         <div className="text-center mb-16 animate-fade-in-delay-1">
//           <span className="inline-block px-4 py-1 rounded-full bg-gdg-blue/10 text-gdg-blue text-sm font-medium mb-4">
//             Building for the Future
//           </span>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
//             <span className="text-gdg-dark">Google Developers Student </span>
//             <span className="text-gradient">Groups Rourkela</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gdg-gray max-w-2xl mx-auto">
//             We're working hard to bring you an amazing new experience. Stay
//             tuned for updates on our progress and upcoming events.
//           </p>
//         </div>

//         {/* Construction Icon */}
//         <div className="flex justify-center mb-12 animate-fade-in-delay-2">
//           <div className="p-6 rounded-full bg-white/80 shadow-lg">
//             <Construction className="w-16 h-16 text-gdg-blue" />
//           </div>
//         </div>

//         {/* Login Button */}
//         <Link href="/login" className="mb-8 animate-fade-in-delay-2">
//           <button className="px-6 py-3 bg-gdg-blue hover:bg-gdg-blue/90 text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center">
//             Login to Dashboard
//           </button>
//         </Link>

//         {/* Google Colors Bar */}
//         <div className="w-full max-w-md h-2 rounded-full mb-12 flex overflow-hidden animate-fade-in-delay-2">
//           <div className="w-1/4 bg-gdg-blue"></div>
//           <div className="w-1/4 bg-gdg-red"></div>
//           <div className="w-1/4 bg-gdg-yellow"></div>
//           <div className="w-1/4 bg-gdg-green"></div>
//         </div>

//         {/* Footer */}
//         <div className="text-center text-gdg-gray text-sm animate-fade-in-delay-3">
//           <p>
//             © {new Date().getFullYear()} Google Developers Student Groups
//             Rourkela. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;
import Image from 'next/image';
import Link from 'next/link';
import ProjectsSection from '@/components/projects-section';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-white to-blue-50 flex flex-col">
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
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/gdg22.png"
            alt="Google Developer Groups"
            width={180}
            height={50}
            className="mr-2"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-blue-600 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">
            About us
          </Link>
          <Link href="/events" className="text-gray-600 hover:text-blue-600">
            Events
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-blue-600">
            Projects
          </Link>
          <Link href="/team" className="text-gray-600 hover:text-blue-600">
            Team
          </Link>
          <Link
            href="/join"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Join Community
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-8">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/image 11.png"
            alt="GDG Event"
            width={1000}
            height={400}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <footer className="relative z-10 bg-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image
              src="/image 92.png"
              alt="Google Developer Groups"
              width={2000}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-6">📷</span>
                <span>Instagram</span>
              </div>
              <div className="flex items-center">
                <span className="w-6">🔗</span>
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center">
                <span className="w-6">🎮</span>
                <span>Discord</span>
              </div>
              <div className="flex items-center">
                <span className="w-6">🐙</span>
                <span>Github</span>
              </div>
              <div className="flex items-center">
                <span className="w-6">🐦</span>
                <span>Twitter</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="w-8 mt-1">📍</span>
                <span>National Institute of Technology Rourkela, Odisha</span>
              </div>
              <div className="flex items-center">
                <span className="w-6">✉️</span>
                <span>gdgnitrr@saikiit.co.in</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit, Lorem ipsum dolor sit, Lorem ipsum dolor
                sit
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                Apply For Membership
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          ©2025 GDG NIT ROURKELA
        </div>
      </footer>
    </div>
  );
}
