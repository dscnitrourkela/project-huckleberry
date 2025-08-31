import { Member } from '@/types/admin/members';

export type TeamMember = {
  id: string;
  name: string;
  quote: string;
  photo: string;
  batch?: string;
  role?: string;
  lead_role?: string;
  socials?: {
    name: string;
    url: string;
    icon: string;
  }[];
  isLead?: boolean;
  colorClass?: string;
};

export type Social = {
  name: string;
  url: string;
  icon: string;
};

export type MembersResponse = {
  status: string;
  data: {
    data: Member[];
    message: string;
  };
  message?: string;
};
