import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { UseFormReturn } from 'react-hook-form';

interface AdminSettingsSectionProps {
  form: UseFormReturn<any>;
}

const AdminSettingsSection: React.FC<AdminSettingsSectionProps> = ({
  form,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-medium mb-4 text-gdg-dark">
      Administrative Settings
    </h3>
    <FormField
      control={form.control}
      name="is_admin"
      render={({ field }) => (
        <FormItem className="flex items-center justify-between rounded-lg border p-4 bg-gray-50">
          <div className="space-y-0.5">
            <FormLabel className="text-gdg-dark">Admin Status</FormLabel>
            <FormDescription className="text-gdg-gray">
              Grant admin privileges to this user
            </FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:bg-gdg-blue"
            />
          </FormControl>
        </FormItem>
      )}
    />
  </div>
);

export default AdminSettingsSection;
