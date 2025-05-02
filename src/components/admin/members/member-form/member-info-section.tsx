import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { roleOptions } from '@/config/admin/members/constants';
import { UseFormReturn } from 'react-hook-form';

interface MemberInfoSectionProps {
  form: UseFormReturn<any>;
}

const MemberInfoSection: React.FC<MemberInfoSectionProps> = ({ form }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-medium mb-4 text-gdg-dark">
      Member Information
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="user_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Username*</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Email*</FormLabel>
            <FormControl>
              <Input
                type="email"
                {...field}
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="mobile_no"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Mobile Number*</FormLabel>
            <FormControl>
              <Input
                type="tel"
                {...field}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  field.onChange(value ? parseInt(value, 10) : '');
                }}
                maxLength={10}
                value={field.value === 0 ? '' : field.value}
                className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gdg-gray">Role*</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger className="rounded-lg border-gray-200 focus:border-gdg-blue focus:ring-gdg-blue/20">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {roleOptions.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  </div>
);

export default MemberInfoSection;
