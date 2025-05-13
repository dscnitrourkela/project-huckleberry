import { Domains } from '@/components/about-us/domains';
import { WhatWeDo } from '@/components/about-us/what-we-do';
import { WhoAreWe } from '@/components/about-us/who-are-we';

const AboutUsPage = () => {
  return (
    <div className="px-[35px] sm:px-[65px] md:px-[90px] lg:px-[100px] xl:px-[120px] flex flex-col gap-10">
      <WhoAreWe />
      <WhatWeDo />
      <Domains />
    </div>
  );
};

export default AboutUsPage;
