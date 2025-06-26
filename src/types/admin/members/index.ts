export interface Member {
  id: string;
  created_at: string;
  profile_photo: string;
  user_name: string;
  email: string;
  mobile_no: string;
  role: string;
  github: string;
  figma: string;
  linkedin: string;
  twitter: string;
  caption: string | null;
  is_lead: boolean;
  is_admin: boolean;
  year_of_passing: number;
  lead_role?: string;
}

export type MemberFormData = Omit<Member, 'id' | 'created_at'> & {
  id?: string;
  created_at?: string;
};

export interface MemberRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Partial<Member>) => void;
  defaultValues: Member | null;
  isEditing?: boolean;
  isLoading?: boolean;
}
