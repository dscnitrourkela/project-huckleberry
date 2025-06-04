'use client';
import React, { useState } from 'react';
import DSCLogo from '../../../../public/DSCLogo.svg';
import GDGBrackets from '../../../../public/gdg.jpg';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { WP_COMMUNITY, navLinks } from '@/config/marginals';
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from('#nav', {
      y: -100,
      opacity: 0,
      duration: 1.03,
      delay: 1.5,
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
        className="fixed top-0 left-0 h-[92px] w-full hidden lg:flex z-[100] bg-white font-productsans"
      >
        <div className="w-full h-full px-24 xl:px-32 py-4">
          <div className="w-full h-full relative flex items-center justify-between">
            <Link href="/" className="h-full w-auto">
              <Image
                src={DSCLogo}
                alt="GDG Logo"
                className="h-full w-auto cursor-pointer"
              />
            </Link>

            <div className="flex gap-4 xl:gap-6 items-center">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="navlink relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:font-normal max-md:text-[16px] text-[18px]"
                >
                  {link.text}
                </Link>
              ))}
              <div className="xl:ml-6">
                <a
                  href={WP_COMMUNITY}
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-800 transition duration-300  text-white font-[700] px-6 xl:px-12 py-[18px] rounded-[12px] max-md:text-[16px] text-[18px]"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 w-full bg-white z-[100] font-productsans  px-8 sm:px-16 md:px-24 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="h-full w-auto">
            <Image
              src={GDGBrackets}
              alt="GDG Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </Link>
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
          className={`fixed top-0 left-0 w-full h-screen bg-white z-[-1] pt-20 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col h-full justify-between pb-12 px-4">
            <div className="flex flex-col h-full justify-center items-center gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.style.overflow = 'auto';
                  }}
                  className="block text-black text-lg md:text-xl py-2 text-center font-productsans hover:bg-gray-100 rounded-lg"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            <div className="px-4 mb-8">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-lg font-productsans text-lg transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
