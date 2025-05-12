export interface Event {
  id: string | number;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export interface Project {
  id: string | number;
  name: string;
  description: string;
  icon1?: string;
  stat1?: string | number;
  icon2?: string;
  stat2?: string | number;
  link: string;
}
