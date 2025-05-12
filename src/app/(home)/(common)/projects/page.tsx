import React from 'react';
import { projectsMetadata } from '@/config/seo/projects-metadata';

export { projectsMetadata as metadata };

function page() {
  return (
    <div className="w-full h-[100vh] justify-center items-center flex flex-col">
      <div className="shadow-xl rounded-xl px-[300px] pt-[40px] pb-[60px] bg-[#FDEDEB]">
        <h1 className="text-xl font-semibold text-gray-900">Projects Page</h1>
      </div>
    </div>
  );
}

export default page;
