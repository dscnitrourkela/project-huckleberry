import { Domains } from '@/components/home/about-us/domains';
import { WhatWeDo } from '@/components/home/about-us/what-we-do';
import { WhoAreWe } from '@/components/home/about-us/who-are-we';

const AboutUsPage = () => {
  return (
    <div className="px-[120px] flex flex-col gap-10">
      <WhoAreWe />
      <WhatWeDo />
      <Domains />
    </div>
  );
};

export default AboutUsPage;
