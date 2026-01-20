import { Event, Project } from '@/types/home';

export const TALLY_FORM_ID = 'wbj9Q2';

export const sampleEvents: Event[] = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dscnitrourkela/image/upload/v1768938924/project-huckleberry/assets/f8zjyafs43rdjo2cqjfl.png',
    title: 'HackNITR',
    description:
      'HackNITR is the flagship hackathon of NIT Rourkela, and one of India’s largest student-led hackathons.',
    date: '3rd - 4th January 2026',
    link: '#',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dscnitrourkela/image/upload/v1768939173/project-huckleberry/assets/wt4pidhzqfoyvs3ksmly.png',
    title: 'HackInnovision',
    description: 'NIT Rourkela’s flagship intra-college hackathon',
    date: '',
    link: '#',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dscnitrourkela/image/upload/v1768939082/project-huckleberry/assets/zsvz6mnod4kmempjnjkv.png',
    title: 'HacktoberFest',
    description:
      'DigitalOcean’s annual event that encourages people to contribute to open source throughout October',
    date: '',
    link: '#',
  },
];

export const sampleProjects: Project[] = [
  {
    id: 'p1',
    name: 'Avacado',
    description:
      'Mobile app for Institute Counselling Services at NIT Rourkela, built with Flutter and Firebase.',
    contribution: '21',
    pr: '186',
    link: 'https://github.com/dscnitrourkela/project-avocado',
    contributorImages: [
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362616/27865704_ptevwe.png',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362706/34758667_tdcv5o.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362706/13520364_lofkxt.jpg',
    ],
  },
  {
    id: 'p2',
    name: 'Huckleberry',
    description:
      'Official site for DSC NIT Rourkela, showcasing events, projects, and community initiatives.',
    contribution: '16',
    pr: '70',
    link: 'https://github.com/dscnitrourkela/project-huckleberry',
    contributorImages: [
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362856/135319056_tl32qo.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362856/100484401_leeyzw.png',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362857/92504849_x8iz9b.jpg',
    ],
  },
  {
    id: 'p3',
    name: 'Raisin',
    description:
      'Project Raisin powers Innovision, the official tech fest site of NIT Rourkela, offering event info, registrations.',
    contribution: '21',
    pr: '245',
    link: 'https://github.com/dscnitrourkela/project-raisin',
    contributorImages: [
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362856/135319056_tl32qo.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362856/100484401_leeyzw.png',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748363030/140698710_sqi4ec.jpg',
    ],
  },
  {
    id: 'p4',
    name: 'Oregano',
    description:
      "Official site for HackNITR,one of India's largest student-run hackathons, with event details and registration.",
    contribution: '16',
    pr: '280',
    link: 'https://github.com/dscnitrourkela/project-oregano',
    contributorImages: [
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748363170/56112399_dmpwbw.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748363171/56754747_xgxcuk.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748363171/75530516_ejvemk.jpg',
    ],
  },
  {
    id: 'p5',
    name: 'Vanilla',
    description:
      'Site for SRC by AICHE NIT Rourkela, showcasing events, projects, and community initiatives.',
    contribution: '10',
    pr: '98',
    link: 'https://github.com/dscnitrourkela/project-vanilla',
    contributorImages: [
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362856/135319056_tl32qo.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748363030/140698710_sqi4ec.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362857/92504849_x8iz9b.jpg',
    ],
  },
  {
    id: 'p6',
    name: 'Tart',
    description:
      'Project Tart is the open-source Nitrutsav 2023 site by DSC NITR, built with modern web tech.',
    contribution: '5',
    pr: '71',
    link: 'https://github.com/dscnitrourkela/project-tart',
    contributorImages: [
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748363171/56754747_xgxcuk.jpg',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748362856/100484401_leeyzw.png',
      'https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748363425/98693953_gdg0gt.jpg',
    ],
  },
];

//images
export const eclipse =
  'https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853099/Ellipse_107_n4slza.png';

export const gitPullRequest =
  'https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853099/GitPullRequest_zg3vxt.png';

export const infoImage =
  'https://res.cloudinary.com/dtis6vqc5/image/upload/v1746853100/Design_team-bro_1_wkuods.png';

export const polygon = '/shapes/Polygon 3.svg';

export const rectver = '/shapes/Rectangle 803.png';

export const darkBlueCir = '/shapes/Ellipse 117.svg';

export const blueRectHor = '/shapes/Rectangle 800.png';

export const yellowVer = '/shapes/Rectangle 802.png';

export const yellowVerSmall = '/shapes/Rectangle 804.svg';

export const redHorRect = '/shapes/Rectangle 801.png';

export const yellowDark = '/shapes/Ellipse 114 (1).svg';

export const yellowDarkMed = '/shapes/Ellipse 115.svg';

export const yellowMed = '/shapes/Ellipse 116 (1).svg';

export const yellowLight = '/shapes/Ellipse 117.png';

export const botPolygon = '/shapes/Rectangle 27.svg';

export const concentricCircles = '/shapes/Group 81.svg';

export const greenVer = '/shapes/Rectangle 805.png';

export const blueCircle = '/shapes/Ellipse 110.svg';

export const darkGreenDot = '/shapes/Ellipse 116.svg';

export const lightGreenDot = '/shapes/Ellipse 114.svg';

export const redDot = '/shapes/Ellipse 137.svg';

export const homeIllustration =
  'https://res.cloudinary.com/dscnitrourkela/image/upload/v1768938900/project-huckleberry/assets/u4lxsvybwpappqad6qyz.png';
