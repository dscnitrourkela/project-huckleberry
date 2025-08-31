import { z } from 'zod';

export const roleOptions = [
  { label: 'Developer', value: 'developer' },
  { label: 'Designer', value: 'designer' },
];

export const leadRoleOptions = [
  { label: 'Lead', value: 'lead' },
  { label: 'Co-Lead', value: 'co_lead' },
  { label: 'Community Lead', value: 'community_lead' },
  { label: 'Events Lead', value: 'events_lead' },
  { label: 'Design Lead', value: 'design_lead' },
];

export const memberSchema = z
  .object({
    profile_photo: z.string().optional(),
    user_name: z.string().min(1, 'Username is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),
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
      .optional()
      .or(z.literal('')),
    year_of_passing: z
      .number()
      .refine(
        (year) => year >= 2020,
        'Year of passing must be greater than 2020.'
      ),
    figma: z
      .string()
      .url('Enter a valid Figma URL')
      .optional()
      .or(z.literal('')),

    is_admin: z.boolean().default(false),
    is_lead: z.boolean().default(false),
    lead_role: z.string().optional(),
  })
  .refine((data) => (data.is_lead ? !!data.lead_role : !data.lead_role), {
    message: 'Lead role must be set if and only if is_lead is true',
    path: ['lead_role'],
  });
