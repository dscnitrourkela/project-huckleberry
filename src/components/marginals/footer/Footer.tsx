import React from 'react';
import Link from 'next/link';
import {
  DSC_LOGO_LARGE,
  DSC_LOGO_SMALL,
  socialMediaLinks,
} from '@/config/marginals/index';
import Image from 'next/image';
import { Separator } from '../../ui/separator';
import { CopyrightIcon, Mail, MapPin } from 'lucide-react';
import TallyFormWrapper from '../../hero/tally-form';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#fdfcf8] to-[#f9f8f4] px-4 sm:px-8 lmd:px-12 pt-4 lmd:pt-20 min-h-[50vh] flex overflow-hidden font-productsans">
      <div className="w-2/5 relative hidden lmd:flex flex-col justify-between">
        <div className="flex flex-col items-center w-fit scale-[120%]">
          <Image src={DSC_LOGO_SMALL} alt="" width={60} height={30} />
          <span className=" text-[#575757] text-xl -mt-2">
            Developer Student Clubs
          </span>
          <span className=" text-[#575757] text-sm">
            National Institute of Technology, Rourkela
          </span>
          {/* <span className=" text-[#575757] text-sm">
            On Campus • NIT Rourkela
          </span> */}
        </div>

        {/* large logo */}
        <div className="h-full w-full relative">
          <Image
            src={DSC_LOGO_LARGE}
            alt=""
            fill
            style={{
              objectFit: 'contain',
              scale: '1.25',
              transform: 'translateX(-20%) translateY(15%)',
            }}
          />
        </div>
      </div>

      {/* right panel */}
      <div className="flex flex-col justify-around relative lmd:w-3/5 gap-8 lmd:gap-12">
        {/* small logo */}
        <div className="flex flex-col items-center w-fit mx-auto lmd:hidden scale-[120%]">
          <Image src={DSC_LOGO_SMALL} alt="" width={60} height={30} />
          <span className=" text-[#575757] text-xl -mt-2">
            Developer Student Clubs
          </span>
          <span className=" text-[#575757] text-sm">
            National Institute of Technology, Rourkela
          </span>
          {/* <span className=" text-[#575757] text-sm">
            On Campus • NIT Rourkela
          </span> */}
        </div>

        {/* socials & contact */}
        <div className="flex flex-col gap-6 lmd:gap-0 sm:flex-row h-1/2 justify-between relative z-[10]">
          {/* socials */}
          <div className="lmd:w-2/5 flex flex-col gap-2 lmd:gap-5">
            <span className=" font-bold text-[#434242] text-xl">Socials</span>
            <div className="flex lmd:flex-col flex-wrap lmd:w-64">
              {socialMediaLinks.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center mb-1 lmd:mb-0 w-1/3 gap-2 lmd:h-1/3 lmd:w-1/2 "
                  >
                    <item.icon className="text-[#5A5A5A]" />
                    <Link
                      href={item.href}
                      className=" font-medium text-[#5A5A5A]"
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lmd:w-2/5 flex flex-col">
            <span className=" font-bold text-[#434242] text-xl mb-2 lmd:mb-5">
              Contacts
            </span>
            <div className="flex gap-2 text-[#5a5a5a] items-center mb-1 lmd:mb-4">
              <MapPin />
              <span>National Institute of Technology, Rourkela</span>
            </div>
            <a
              href="mailto:dsc.nitr@gmail.com"
              className="flex gap-2 text-[#5a5a5a] items-center mb-1 lmd:mb-4"
            >
              <Mail />
              <span>dsc.nitr@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="h-1/2 flex flex-col gap-8 justify-end pb-4 relative z-[10]">
          <div className=" font-bold text-xl w-full max-w-[45rem] text-[#434242]">
            Join our vibrant tech community and unlock opportunities to learn,
            network, and grow - apply for DSC NIT Rourkela membership today!
          </div>

          <TallyFormWrapper>
            <button className="button text-white font-[700] px-6 xl:px-12 py-[18px] rounded-[8px] border border-black  w-fit">
              Apply For Membership
            </button>
          </TallyFormWrapper>

          <Separator className="bg-[#D2D2D2]" />

          <div className="text-[#707070] flex items-center justify-start gap-1 text-sm">
            <CopyrightIcon className="inline h-4 w-4" />
            {currentYear} DSC NIT ROURKELA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
