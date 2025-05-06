export type TeamMember = {
  id: string;
  name: string;
  quote: string;
  photo: string;
  batch?: string;
  role?: string;
  socials?: {
    name: string;
    url: string;
    icon: string;
  }[];
  isLead?: boolean;
  colorClass?: string;
};
