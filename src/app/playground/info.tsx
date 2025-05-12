'use client';

import Image from 'next/image';

function Info() {
  return (
    <div className="w-full min-h-[80dvh] bg-gradient-to-r from-[#4379E0] to-[#1B66F6] text-white px-6 md:px-16 lg:px-32 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-44">
      <div className="flex justify-center lg:hidden w-full">
        <Image
          src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853100/Design_team-bro_1_wkuods.png"
          alt="GDG Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
          width={455}
          height={455}
        />
      </div>

      <div className="flex-1 flex flex-col text-center md:text-left gap-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-productsans leading-snug">
          What is GDG?
        </h1>
        <p className="text-base md:text-lg lg:text-[1.33rem] font-normal leading-9 font-productsans">
          Google Developer Group on campus NIT Rourkela is a technical club
          focused on building a community of student developers interested in
          solving real-world problems.
          <br />
          We host various workshops and hackathons. We also host flagship events
          from Google such as Android Study Jams, 30 days of Google Cloud,
          ExploreML etc.
          <br />
          Our goal is to build an inclusive community of students who want to
          learn about tech and grow together.
        </p>
      </div>

      <div className="hidden lg:flex justify-center flex-1">
        <Image
          src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853100/Design_team-bro_1_wkuods.png"
          alt="GDG Illustration"
          className="w-full max-w-sm xl:max-w-md h-auto"
          width={455}
          height={455}
        />
      </div>
    </div>
  );
}

export default Info;
