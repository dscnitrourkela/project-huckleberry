import { memo } from 'react';
import {
  LucideIcon,
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
} from 'lucide-react';
import SocialLink from '../shared/social-link';
import { cn } from '@/lib/utils';

export interface SocialLinkType {
  platform: string;
  url: string;
  icon: LucideIcon;
  ariaLabel?: string;
}

export interface SocialLinksProps {
  socials?: SocialLinkType[];
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  iconSize?: number;
}

const DEFAULT_SOCIALS: SocialLinkType[] = [
  {
    platform: 'github',
    url: 'https://github.com/GDSC-HUCKLEBERRY',
    icon: Github,
    ariaLabel: 'GDSC Huckleberry GitHub',
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/company/gdsc-huckleberry',
    icon: Linkedin,
    ariaLabel: 'GDSC Huckleberry LinkedIn',
  },
  {
    platform: 'youtube',
    url: 'https://www.youtube.com/channel/GDSC-HUCKLEBERRY',
    icon: Youtube,
    ariaLabel: 'GDSC Huckleberry YouTube',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/gdsc_huckleberry',
    icon: Twitter,
    ariaLabel: 'GDSC Huckleberry Twitter',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/gdsc_huckleberry',
    icon: Instagram,
    ariaLabel: 'GDSC Huckleberry Instagram',
  },
];

const SocialLinks = ({
  socials,
  className = '',
  linkClassName,
  iconClassName,
  iconSize = 24,
}: SocialLinksProps) => {
  const displaySocials = socials?.length ? socials : DEFAULT_SOCIALS;

  const validSocials = displaySocials.filter(
    (social) => social.url && social.url !== '#' && social.url.trim() !== ''
  );

  if (validSocials.length === 0) {
    return null;
  }

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {validSocials.map((social, index) => (
        <SocialLink
          key={`${social.platform}-${index}`}
          href={social.url}
          icon={social.icon}
          className={linkClassName}
          iconClassName={iconClassName}
          size={iconSize}
          ariaLabel={social.ariaLabel || `Visit our ${social.platform} profile`}
        />
      ))}
    </div>
  );
};

export default memo(SocialLinks);
