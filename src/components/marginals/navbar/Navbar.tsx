'use client';
import React, { useState } from 'react';
import GDGLogo from '../../../../public/GDGLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLinks } from '@/config/marginal/navbar';
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from('#nav', {
      y: -100,
      opacity: 0,
      duration: 1.03,
      delay: 1.6,
      ease: 'power2.inOut',
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        id="nav"
        className="absolute top-0 left-0 h-[92px] w-full hidden lg:flex z-10 bg-white font-productsans"
      >
        <div className="w-full h-full px-6 xl:px-[120px] py-4">
          <div className="w-full h-full relative flex items-center justify-between">
            <Image src={GDGLogo} alt="GDG Logo" className="h-full w-auto" />
            <div className="flex gap-4 xl:gap-6 items-center">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className="navlink">
                  {link.text}
                </Link>
              ))}
              <div className="xl:ml-6">
                <button className="button text-white font-[700] px-6 xl:px-12 py-[18px] rounded-[12px]">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 w-full bg-white z-20 font-product  px-4 py-3">
        <div className="flex items-center justify-between">
          <Image src={GDGLogo} alt="GDG Logo" className="h-10 w-auto" />
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>

        {/* Slide-out menu */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-lg py-2 border-b border-gray-200"
              >
                {link.text}
              </Link>
            ))}
            <button className="mt-4 button text-white font-[700] px-6 py-[14px] rounded-[12px]">
              Join Community
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
