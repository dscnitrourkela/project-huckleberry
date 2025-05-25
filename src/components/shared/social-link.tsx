import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  size?: number;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const SocialLink = ({
  href,
  icon: Icon,
  className,
  iconClassName,
  size = 24,
  target = '_blank',
  rel = 'noopener noreferrer',
  ariaLabel,
}: SocialLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'border-black border-2 shadow-[black_0px_2px_1px] rounded-full p-2 hover:scale-105 hover:shadow-[black_0px_3px_1px] transition-transform',
        className
      )}
      target={target}
      rel={rel}
      aria-label={ariaLabel || `Visit our social media profile`}
    >
      <Icon size={size} className={cn('text-black', iconClassName)} />
    </Link>
  );
};

export default SocialLink;
