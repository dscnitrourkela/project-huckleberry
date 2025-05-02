import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  github,
  linkedin,
  twitter,
}) => (
  <div className="flex gap-3">
    {github && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gdg-blue transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )}
    {linkedin && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0077b5] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )}
    {twitter && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1DA1F2] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )}
  </div>
);

export default SocialLinks;
