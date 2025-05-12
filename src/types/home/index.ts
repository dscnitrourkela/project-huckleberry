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

  contribution?: string | number;

  pr?: string | number;
  link: string;
}
