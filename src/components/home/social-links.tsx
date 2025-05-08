import { memo } from 'react';
import {
  LucideIcon,
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Figma,
} from 'lucide-react';
import SocialLink from '../shared/social-link';
import { cn } from '@/lib/utils';

export interface SocialLinkType {
  platform: string;
  url: string;
  icon: LucideIcon;
  ariaLabel?: string;
}

export interface TeamMemberSocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SocialLinksProps {
  socials?: SocialLinkType[] | TeamMemberSocialLink[];
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  iconSize?: number;
}

export const SOCIAL_ICONS_MAP: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  figma: Figma,
};

const SocialLinks = ({
  socials,
  className = '',
  linkClassName,
  iconClassName,
  iconSize = 24,
}: SocialLinksProps) => {
  if (!socials || socials.length === 0) {
    return null;
  }

  const processedSocials = socials.map((social) => {
    if ('platform' in social) {
      return social as SocialLinkType;
    } else {
      const teamSocial = social as TeamMemberSocialLink;
      const iconName = teamSocial.icon.toLowerCase();
      return {
        platform: teamSocial.name.toLowerCase(),
        url: teamSocial.url,
        icon: SOCIAL_ICONS_MAP[iconName] || Github,
        ariaLabel: `Visit ${teamSocial.name} profile`,
      } as SocialLinkType;
    }
  });

  const validSocials = processedSocials.filter(
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
