'use client';
import React, { useState } from 'react';
import GDGLogo from '../../../../public/GDGLogo.png';
import GDGBrackets from '../../../../public/gdg.jpg';
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
                <Link
                  key={index}
                  href={link.href}
                  className="navlink relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neutral-600 after:transition-all after:duration-300 hover:after:w-full hover:font-normal"
                >
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
      <nav className="lg:hidden fixed top-0 left-0 w-full bg-white z-20 font-productsans  px-4 py-3">
        <div className="flex items-center justify-between">
          <Image
            src={GDGBrackets}
            alt="GDG Logo"
            className="h-12 sm:h-20 w-auto"
          />
          <button
            onClick={toggleMenu}
            className="focus:outline-none h-6 w-6 flex items-center justify-center"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
              ></span>
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
                className="text-black text-lg py-2 border-b border-gray-200 text-center font-productsans"
              >
                {link.text}
              </Link>
            ))}
            <button className="mt-4 button text-white font-[700] px-6 py-[14px] rounded-[12px] font-productsans">
              Join Community
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
