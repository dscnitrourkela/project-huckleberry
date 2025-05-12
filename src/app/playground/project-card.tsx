'use client';
import Link from 'next/link';
import { Project } from '@/types/home';
import React from 'react';
import Image from 'next/image';
import { eclipse, gitPullRequest } from '@/config/home';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#F9FCE3] m-5 hover:scale-105 transform transition-transform duration-300 p-4 w-full max-w-xs mx-auto md:max-w-full rounded-xl shadow-md flex flex-col gap-4 md:gap-6  pt-4 pb-4 border border-black  justify-between min-h-[220px] items-center">
      <h3 className=" text-[2rem] font-bold text-[#035302] mb-1">
        {project.name}
      </h3>

      <p className="text-base text-[#035302] mb-4">{project.description}</p>

      <div className="flex items-start w-full max-w-[310px] justify-between text-sm text-black mb-3">
        <div className="flex items-center gap-1">
          <div className="flex items-center ">
            {[...Array(Math.min(Number(project.contribution), 3))].map(
              (_, i) => (
                <Image
                  key={i}
                  src={eclipse}
                  alt="Circle"
                  width={24}
                  height={24}
                  className={`${i !== 0 ? '-ml-2' : ''}`}
                />
              )
            )}
          </div>
          {Number(project.contribution) > 3 && (
            <span>+{Number(project.contribution) - 3}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={gitPullRequest}
            alt="Git Pull Request"
            width={24}
            height={24}
          />
          |{project.pr && <span className="font-bold">{project.pr}</span>}
        </div>
      </div>

      <Link href={project.link} className="text-[#035302] text-sm font-normal ">
        View more &gt;
      </Link>
    </div>
  );
};

export default ProjectCard;
