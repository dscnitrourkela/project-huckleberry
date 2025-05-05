import Image from 'next/image';

export const WhoAreWe = () => {
  return (
    <>
      <section className="py-20" id="about">
        <div className=" mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl md:text-[64px] leading-[96px] font-bold text-black">
                Who are we?
              </h2>
              <p className="text-[#4A4A68] mb-4 text-[20px] leading-[28px] font-[500]">
                We're a team of passionate designers, developers, and
                strategists dedicated to creating exceptional digital
                experiences. With over a decade of industry experience, we've
                helped businesses of all sizes transform their ideas into
                successful products.
              </p>
            </div>
            <div className="hidden md:flex w-1/2 justify-center items-center">
              <Image
                src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1746446894/amico_awy2ed.png"
                alt="People collaborating"
                height={300}
                width={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
