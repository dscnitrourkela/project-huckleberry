import { Domains } from '@/components/home/about-us/domains';
import { WhatWeDo } from '@/components/home/about-us/what-we-do';
import { WhoAreWe } from '@/components/home/about-us/who-are-we';

const AboutUsPage = () => {
  return (
    <div className="px-[45px] sm:px-[65px] md:px-[90px] lg:px-[100px] xl:px-[120px] flex flex-col gap-10">
      <WhoAreWe />
      <WhatWeDo />
      <Domains />
    </div>
  );
};

export default AboutUsPage;
