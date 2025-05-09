export type Blog = {
  author: string;
  categories: [string];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

export type BlogCardProps = {
  content: string;
  title: string;
  link: string;
  author: string;
  pubDate: string;
  categories: string[];
};
