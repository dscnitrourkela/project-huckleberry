export interface Member {
  id: string;
  created_at: string;
  profile_photo?: string;
  user_name: string;
  email: string;
  mobile_no: string;
  role: string;
  github: string;
  linkedin: string;
  twitter: string;
  figma?: string;
  caption: string | null;
  is_admin: boolean;
  is_lead: boolean;
}

export interface MemberRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Partial<Member>) => void;
  defaultValues: Member | null;
  isEditing?: boolean;
  isLoading?: boolean;
}

export interface Member {
  id: string;
  created_at: string;
  profile_photo?: string;
  user_name: string;
  email: string;
  mobile_no: string;
  role: string;
  github: string;
  linkedin: string;
  twitter: string;
  figma?: string;
  caption: string | null;
  introduction: string;
  is_admin: boolean;
  is_lead: boolean;
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
