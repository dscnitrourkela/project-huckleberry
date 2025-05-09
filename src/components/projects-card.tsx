import { Github } from 'lucide-react';
import Link from 'next/link';

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
  bgColor = 'bg-blue-50',
}: ProjectCardProps) {
  return (
    <div
      className={`rounded-lg p-6 mb-8 ${bgColor} border-black border-2 shadow-md`}
    >
      <h3 className="text-xl font-semibold text-purple-900 mb-2">{name}</h3>

      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Description</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[8px] text-gray-600"
            >
              <span>Smooth</span>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
            <span className="font-medium">{count}</span>
          </div>

          <Link
            href={githubUrl}
            className="flex items-center bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium"
          >
            <Github size={16} className="mr-1.5" />
            View GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
