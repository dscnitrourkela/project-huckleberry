import { EventRegistration, FieldConfig } from '@/types/admin/events';
import { formatTimestamp, formatTimestampForHTML } from '@/utils';

export const formFields: FieldConfig[] = [
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Event title',
    rules: { required: 'Title is required' },
  },
  {
    name: 'subTitle',
    label: 'Subtitle',
    type: 'text',
    placeholder: 'Event subtitle',
    rules: { required: 'Subtitle is required' },
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Describe your event',
    rules: { required: 'Description is required' },
    fullWidth: true,
  },
  {
    name: 'location',
    label: 'Location',
    type: 'text',
    placeholder: 'Event location',
    rules: { required: 'Location is required' },
  },
  {
    name: 'mode',
    label: 'Mode',
    type: 'select',
    options: [
      { label: 'Offline', value: 'offline' },
      { label: 'Online', value: 'online' },
      { label: 'Hybrid', value: 'hybrid' },
    ],
    rules: { required: 'Mode is required' },
  },
  {
    name: 'timestamp',
    label: 'Date and Time',
    type: 'datetime-local',
    rules: { required: 'Date and time is required' },
  },
  {
    name: 'eligibility',
    label: 'Eligibility',
    type: 'text',
    placeholder: 'Who can attend?',
    rules: { required: 'Eligibility is required' },
  },
  {
    name: 'coverImage',
    label: 'Cover Image',
    type: 'file',
    accept: 'image/*',
    // @ts-expect-error - validation rules
    rules: {
      validate: {
        fileType: (value: FileList | string) => {
          if (typeof value === 'string') return true; // Accept existing URL
          if (!value?.[0]) return true;
          const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
          return (
            validTypes.includes(value[0].type) ||
            'Please upload an image file (JPG, PNG, GIF)'
          );
        },
        fileSize: (value: FileList | string) => {
          if (typeof value === 'string') return true; // Accept existing URL
          if (!value?.[0]) return true;
          const maxSize = 5 * 1024 * 1024; // 5MB
          return (
            value[0].size <= maxSize || 'File size should be less than 5MB'
          );
        },
      },
    },
    fullWidth: true,
  },
];

export const getInitialValues = (
  defaultValues?: Partial<EventRegistration> | null
): EventRegistration => ({
  title: defaultValues?.title || '',
  subTitle: defaultValues?.subTitle || '',
  description: defaultValues?.description || '',
  location: defaultValues?.location || '',
  mode: defaultValues?.mode || 'offline',
  eligibility: defaultValues?.eligibility || '',
  timestamp: defaultValues?.timestamp
    ? formatTimestampForHTML(defaultValues.timestamp)
    : '',
  coverImage: defaultValues?.coverImage || '',
});

export const columns = [
  { key: 'title', label: 'Title' },
  { key: 'location', label: 'Location' },
  { key: 'mode', label: 'Mode' },
  {
    key: 'timestamp',
    label: 'Day and Date',
    format: (value: string) => formatTimestamp(value),
  },
];
