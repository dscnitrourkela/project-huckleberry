export type Event = {
  id: string;
  coverImage: string | File;
  title: string;
  subTitle?: string;
  description: string;
  location?: string;
  mode: 'offline' | 'online' | 'hybrid';
  eligibility: string;
  timestamp: string;
};

export type EventRegistration = Omit<Event, 'id'>;

export type ValidationRule =
  | string
  | number
  | boolean
  | RegExp
  | ((value: any) => boolean | string);

export type FileValidationRules = {
  fileType: (value: FileList) => true | string;
  fileSize: (value: FileList) => true | string;
};

export type BaseValidationRules = {
  required?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  [key: string]: ValidationRule | undefined;
};

export type FieldRules = BaseValidationRules & {
  validate?: FileValidationRules | Record<string, ValidationRule>;
};

export type FieldConfig = {
  name: keyof EventRegistration;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'datetime-local' | 'file';
  placeholder?: string;
  options?: { label: string; value: string }[];
  rules?: FieldRules;
  fullWidth?: boolean;
  accept?: string;
};
