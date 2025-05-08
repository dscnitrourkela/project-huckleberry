import React from 'react';
import GDGLogo from '../../../public/GDGLogo.png';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 h-[92px] w-full hidden lg:flex z-10 bg-white font-product">
      <div className="w-full h-full px-20 xl:px-[120px] py-4">
        <div className="w-full h-full  relative flex items-center justify-between">
          <Image src={GDGLogo} alt="GDG Logo" className="h-full w-auto" />
          <div className="flex gap-4 xl:gap-6 items-center">
            <Link className="navlink" href="/">
              Home
            </Link>
            <Link href="/" className="navlink">
              About Us
            </Link>
            <Link href="/" className="navlink">
              Events
            </Link>
            <Link href="/" className="navlink">
              Projects
            </Link>
            <Link href="/" className="navlink">
              Team
            </Link>
            <div className="xl:ml-6">
              <button className="button text-white font-[700] px-6 xl:px-12 py-[18px] rounded-[12px]">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
