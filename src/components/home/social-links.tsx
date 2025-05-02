import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dscnitrourkela',
      label: 'GitHub',
      color: '#4285F4',
    },
    {
      icon: Twitter,
      href: 'https://x.com/dscnitrourkela',
      label: 'Twitter',
      color: '#EA4335',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/dscnitrourkela/',
      label: 'LinkedIn',
      color: '#FBBC05',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/c/DSCNITRourkela',
      label: 'YouTube',
      color: '#34A853',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/dscnitrourkela/',
      label: 'Instagram',
      color: '#4285F4',
    },
  ];

  return (
    <div className={cn('flex justify-center gap-4', className)}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-xs hover:bg-white shadow-sm hover:shadow-md transition-all duration-300"
            aria-label={link.label}
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <Icon
              className="w-5 h-5"
              strokeWidth={1.5}
              style={{ color: link.color }}
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {link.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
