import {
  LayoutDashboard,
  Users,
  Calendar,
  Twitter,
  Layers,
  User,
} from 'lucide-react';

export const navItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    color: 'text-gdg-blue',
  },
  {
    name: 'Members',
    href: '/admin/members',
    icon: Users,
    color: 'text-gdg-blue',
  },
  {
    name: 'Events',
    href: '/admin/events',
    icon: Calendar,
    color: 'text-gdg-yellow',
  },
  {
    name: 'Tweets',
    href: '/admin/tweets',
    icon: Twitter,
    color: 'text-gdg-red',
  },
  {
    name: 'Manage Projects',
    href: '/admin/manage-projects',
    icon: Layers,
    color: 'text-gdg-green',
  },
  {
    name: 'Published Projects',
    href: '/admin/published-projects',
    icon: Layers,
    color: 'text-gdg-green',
  },
  {
    name: 'My Profile',
    href: '/admin/profile',
    icon: User,
    color: 'text-gray-500',
  },
];
