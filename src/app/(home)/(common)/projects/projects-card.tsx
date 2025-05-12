import { Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  description: string;
  count: number;
  githubUrl: string;
  bgColor?: string;
}

export default function ProjectCard({
  name,
  description,
  count = 29,
  githubUrl,
  bgColor = 'bg-blue-100',
}: ProjectCardProps) {
  return (
    <div
      className={`rounded-lg p-8 mb-8 ${bgColor} border-2 border-gray-600 shadow-md w-full max-w-6xl`}
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{name}</h3>

      <div className="mb-6">
        <p className="text-lg font-bold font-productsans text-blue-600 mb-2">
          Description
        </p>
        <p className="text-base font-medium text-gray-900 text-left w-3/5 whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-gray-800 flex items-center justify-center"></div>
              <span className="text-xs text-blue-600 mt-1">Somnath</span>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/djmnk7cvv/image/upload/v1746862477/git-pull-request-svgrepo-com_madcpf.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-gray-700 mx-2">|</span>
            <span className="font-medium text-lg">{count}</span>
          </div>

          <Link
            href={githubUrl}
            className="flex items-center bg-blue-600 text-white px-5 py-4 rounded-md text-base font-medium border-gray-600 border-2 shadow-lg hover:bg-blue-800 transition duration-200"
          >
            <Github size={20} className="mr-2" />
            View GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
