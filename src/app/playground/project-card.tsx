import Link from 'next/link';
import { Project } from '@/types/landingPage';
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#F9FCE3] p-4 w-full max-w-sm mx-auto md:max-w-full rounded-xl shadow-md flex flex-col gap-4 md:gap-6  pt-4 pb-4 border border-black  justify-between min-h-[220px] items-center">
      <h3 className=" text-[2rem] font-bold text-[#035302] mb-1">
        {project.name}
      </h3>

      <p className="text-base text-[#035302] mb-4">{project.description}</p>

      <div className="flex items-start w-full max-w-[310px] justify-between text-sm text-black mb-3">
        <div className="flex items-center gap-1">
          <div className="flex items-center ">
            {[...Array(Math.min(Number(project.stat1), 3))].map((_, i) => (
              <Image
                key={i}
                src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853099/Ellipse_107_n4slza.png"
                alt="Circle"
                width={24}
                height={24}
                className={`${i !== 0 ? '-ml-2' : ''}`}
              />
            ))}
          </div>
          {Number(project.stat1) > 3 && (
            <span>+{Number(project.stat1) - 3}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853099/GitPullRequest_zg3vxt.png"
            alt="Git Pull Request"
            width={24}
            height={24}
          />
          |{project.stat2 && <span className="font-bold">{project.stat2}</span>}
        </div>
      </div>

      <Link
        href={project.link}
        className="text-[#035302] hover:underline text-sm font-normal "
      >
        View more &gt;
      </Link>
    </div>
  );
};

export default ProjectCard;
