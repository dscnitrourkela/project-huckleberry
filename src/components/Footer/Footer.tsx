import React from 'react';
import Link from 'next/link';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import {
  DSC_LOGO_LARGE,
  GDG_ICON_SMALL,
  socialMediaLinks,
} from '@/config/marginals/index';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FAF8F6] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="hidden md:block absolute -bottom-0 -left-20 -ml-20 -mb-30">
          <img src={DSC_LOGO_LARGE} alt="dsc-logo" width={600} height={300} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 mx-auto">
            <div className="flex flex-col">
              <div className="flex items-center mb-0 -mt-7 ml-20">
                <img src={GDG_ICON_SMALL} alt="GDSC" width={50} height={50} />
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

          <div className="col-span-1 justify-center ml-20">
            <h3 className="text-gray-800 font-medium mb-6 text-lg">Socials</h3>

            <div className="flex space-x-8">
              <div className="flex flex-col space-y-4">
                {socialMediaLinks.slice(0, 3).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-3">
                        <Icon size={20} />
                      </span>
                      <span>{social.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col space-y-4">
                {socialMediaLinks.slice(3, 5).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index + 3}
                      href={social.href}
                      className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-3">
                        <Icon size={20} />
                      </span>
                      <span>{social.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

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
                <p className="text-gray-700">team@dscnitrourkela.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 md:pl-0 md:pr-0 md:w-3/4 mx-auto text-center justify-center">
          <div className="mb-8 md:pl-0 md:pr-0 md:w-3/4 mx-auto lg:ml-20 text-center md:text-left">
            <h3 className="text-gray-700 mb-6 text-lg font-semibold md:ml-60 sm:mx-auto">
              Join our vibrant tech community and unlock opportunities to learn,
              network, and grow — apply for GDG NIT Rourkela membership today!
            </h3>
          </div>

          <Link
            href="/membership"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors ml-6"
          >
            Apply For Membership
          </Link>
        </div>

        <div className="border-t border-gray-200 my-8"></div>

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
