import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';

interface PersonalInfoSectionProps {
  form: UseFormReturn<any>;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ form }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-medium mb-4 text-gdg-dark">
      Personal Information
    </h3>
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="caption"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Caption</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value || ''}
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormDescription className="text-xs text-gdg-gray">
              A short tagline that describes you
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="introduction"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Introduction*</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="min-h-[100px] rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  </div>
);

export default PersonalInfoSection;
