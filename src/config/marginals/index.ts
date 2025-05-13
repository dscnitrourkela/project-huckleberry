import {
  FaInstagram,
  FaMedium,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export const DSC_LOGO_LARGE =
  'https://res.cloudinary.com/dwh7xuupf/image/upload/v1747073420/dsc-logo-lg_xly4pi.png';

export const GDG_ICON_SMALL =
  'https://res.cloudinary.com/dwh7xuupf/image/upload/v1747145310/Adobe_Express_-_file_tdockj.png';

export interface SocialLink {
  name: string;
  icon: IconType; // This is the Component itself, not JSX
  href: string;
}

export const socialMediaLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/dscnitrourkela/',
  },
  {
    name: 'Medium',
    icon: FaMedium,
    href: 'https://medium.com/dsc-nit-rourkela',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/dscnitrourkela/',
  },
  {
    name: 'Github',
    icon: FaGithub,
    href: 'https://github.com/dscnitrourkela',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: 'https://twitter.com/dscnitrourkela',
  },
];
