import React from 'react';
import Link from 'next/link';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaMedium,
} from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialMediaLinks = [
    {
      name: 'Instagram',
      icon: <FaInstagram size={20} />,
      href: 'https://www.instagram.com/dscnitrourkela/',
    },
    {
      name: 'Medium',
      icon: <FaMedium size={20} />,
      href: 'https://medium.com/dsc-nit-rourkela',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn size={20} />,
      href: 'https://www.linkedin.com/company/dscnitrourkela/',
    },
    {
      name: 'Github',
      icon: <FaGithub size={20} />,
      href: 'https://github.com/dscnitrourkela',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={20} />,
      href: 'https://twitter.com/dscnitrourkela',
    },
  ];

  return (
    <footer className="relative bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* large dsc logo image*/}
        <div className="absolute -bottom-0 -left-20 -ml-20 -mb-30">
          <Image
            src="/images/dsc-logo-lg.png"
            alt="dsc-logo"
            width={600}
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* dsc ka logo and name */}
          <div className="col-span-1">
            <div className="flex flex-col">
              <div className="flex items-center mb-0 -mt-7 ml-20">
                <Image
                  src="/images/gdg.jpg"
                  alt="GDSC"
                  width={50}
                  height={50}
                />
              </div>
              <div className="-mb-22">
                <h2 className="text-gray-500 font-medium text-lg flex justify-start text-center">
                  Google Developer Groups
                </h2>
                <p className="text-gray-600 text-xs ml-9">
                  On Campus • NIT Rourkela
                </p>
              </div>
            </div>
          </div>

          {/* social media links */}
          <div className="col-span-1 justify-center ml-20">
            <h3 className="text-gray-800 font-medium mb-6 text-lg">Socials</h3>

            <div className="flex space-x-8">
              {/* Left column with first 3 links */}
              <div className="flex flex-col space-y-4">
                {socialMediaLinks.slice(0, 3).map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-3">{social.icon}</span>
                    <span>{social.name}</span>
                  </Link>
                ))}
              </div>

              {/* Right column with next 2 links */}
              <div className="flex flex-col space-y-4">
                {socialMediaLinks.slice(3, 5).map((social, index) => (
                  <Link
                    key={index + 3} // Adjust key to avoid duplicates
                    href={social.href}
                    className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-3">{social.icon}</span>
                    <span>{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* contact information */}
          <div className="col-span-1 justify-end ml-20">
            <h3 className="text-gray-800 font-medium mb-6 text-lg">Contact</h3>
            <div className="mb-6">
              <div className="flex items-start mb-4">
                <MdLocationOn className="text-gray-700 mr-3 mt-1" size={30} />
                <p className="text-gray-700">
                  National Institute of technology Rourkela, Odisha
                </p>
              </div>
              <div className="flex items-center">
                <MdEmail className="text-gray-700 mr-3" size={20} />
                <p className="text-gray-700">gdscnitrkl@astitva.co.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* description and cta section */}
        <div className="mb-8 md:pl-0 md:pr-0 md:w-3/4 mx-auto text-center justify-center">
          <h3 className="text-gray-700 mb-6 ml-80 text-lg font-semibold text-left">
            Don't Code Alone,
            <br /> Code For The Community
          </h3>

          <Link
            href="/membership"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors ml-6"
          >
            Apply For Membership
          </Link>
        </div>

        {/* divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm -ml-7">
            &copy;{currentYear} GDG NIT ROURKELA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
