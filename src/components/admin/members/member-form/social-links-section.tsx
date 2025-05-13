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
import { UseFormReturn } from 'react-hook-form';

interface SocialLinksSectionProps {
  form: UseFormReturn<any>;
}

const SocialLinksSection: React.FC<SocialLinksSectionProps> = ({ form }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-medium mb-4 text-gdg-dark">Social Links</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">GitHub Profile</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="https://github.com/@username"
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormDescription className="text-xs text-gdg-gray">
              Optional: You can leave this blank if not available
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">LinkedIn Profile*</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="https://www.linkedin.com/in/@username"
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="twitter"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Twitter Profile*</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="https://x.com/@username"
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="figma"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Figma Profile</FormLabel>
            <FormControl>
              <Input
                type="url"
                {...field}
                placeholder="https://figma.com/@username"
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormDescription className="text-xs text-gdg-gray">
              Optional: You can leave this blank if not available
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  </div>
);

export default SocialLinksSection;
