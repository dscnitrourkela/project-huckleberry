export interface Member {
  id: string;
  created_at: string;
  profile_photo?: string;
  user_name: string;
  email: string;
  mobile_no: string;
  role: string;
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
  figma?: string;
  caption: string | null;
  is_admin: boolean;
  is_lead: boolean;
  year_of_passing?: number | null;
}

export interface MemberRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Partial<Member>) => void;
  defaultValues: Member | null;
  isEditing?: boolean;
  isLoading?: boolean;
}

export type MemberFormData = Omit<Member, 'id' | 'created_at'> & {
  id?: string;
  created_at?: string;
};
