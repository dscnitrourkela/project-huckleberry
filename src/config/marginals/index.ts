import {
  FaInstagram,
  FaMedium,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from 'react-icons/fa6';
import { IconType } from 'react-icons';

export const DSC_LOGO_LARGE =
  'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1768948180/image_92_zvkqmm.png';

export const DSC_LOGO_SMALL =
  'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1768947267/project-huckleberry/assets/d8hofakqxnabruzwduuu.svg';

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
    name: 'X',
    icon: FaXTwitter,
    href: 'https://twitter.com/dscnitrourkela',
  },
];

export const navLinks = [
  { href: '/about-us', text: 'About Us' },
  // { href: '/events', text: 'Events' },
  { href: '/projects', text: 'Projects' },
  { href: '/team', text: 'Team' },
  { href: '/resources', text: 'Resources' },
];

export const WP_COMMUNITY = 'https://chat.whatsapp.com/ENX6lr2xjBSCZoVLxYFz77';
