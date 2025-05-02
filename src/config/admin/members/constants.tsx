import { z } from 'zod';

export const roleOptions = [
  { label: 'Developer', value: 'developer' },
  { label: 'Designer', value: 'designer' },
  { label: 'Lead', value: 'lead' },
];

export const memberSchema = z.object({
  profile_photo: z.string().optional(),
  user_name: z.string().min(1, 'Username is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  mobile_no: z.coerce
    .number({
      required_error: 'Mobile number is required',
      invalid_type_error: 'Mobile number must be a number',
    })
    .refine((val) => {
      const numStr = val.toString();
      return numStr.length === 10;
    }, 'Mobile number must be exactly 10 digits'),
  role: z.string().min(1, 'Role is required'),
  github: z
    .string()
    .url('Enter a valid GitHub URL')
    .optional()
    .or(z.literal('')),
  linkedin: z
    .string()
    .url('Enter a valid LinkedIn URL')
    .min(1, 'LinkedIn profile is required'),
  twitter: z
    .string()
    .url('Enter a valid Twitter URL')
    .min(1, 'Twitter profile is required'),
  other_socials: z.array(z.string()).default([]),
  caption: z.string().nullable().optional(),
  introduction: z.string().min(1, 'Introduction is required'),
  is_admin: z.boolean().default(false),
});
