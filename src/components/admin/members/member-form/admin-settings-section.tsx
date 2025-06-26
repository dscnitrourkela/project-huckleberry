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
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { leadRoleOptions } from '@/config/admin/members/constants';

interface AdminSettingsSectionProps {
  form: UseFormReturn<any>;
}

const AdminSettingsSection: React.FC<AdminSettingsSectionProps> = ({
  form,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
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
    <FormField
      control={form.control}
      name="is_lead"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Lead</FormLabel>
            <FormDescription>Designate this member as a lead</FormDescription>
          </div>
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="lead_role"
      disabled={!form.watch('is_lead')}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gdg-gray">Lead Role</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20">
                <SelectValue placeholder="Select lead role" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {leadRoleOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription className="text-xs text-gdg-gray">
            Optional: Select the specific lead role for this member
          </FormDescription>
        </FormItem>
      )}
    />
  </div>
);

export default AdminSettingsSection;
