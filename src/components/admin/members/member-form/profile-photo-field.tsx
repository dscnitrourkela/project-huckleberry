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
import Image from 'next/image';
import { UserPlus } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

interface ProfilePhotoFieldProps {
  form: UseFormReturn<any>;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  imagePreview: string | null;
  setImagePreview: (url: string | null) => void;
  isEditing: boolean;
  defaultValues?: any;
}

const ProfilePhotoField: React.FC<ProfilePhotoFieldProps> = ({
  form,
  imageFile,
  setImageFile,
  imagePreview,
  setImagePreview,
  isEditing,
}) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <FormField
      control={form.control}
      name="profile_photo"
      render={({ field }) => (
        <FormItem className="flex flex-col items-center mb-4 font-geist-sans">
          <FormLabel className="text-center mb-2">Profile Photo*</FormLabel>
          <div className="flex flex-col items-center space-y-4">
            {imagePreview ? (
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                  height={112}
                  width={112}
                />
              </div>
            ) : (
              <div className="w-28 h-28 rounded-full bg-gray-100 border-4 border-white shadow-lg flex items-center justify-center">
                <UserPlus className="w-12 h-12 text-gray-300" />
              </div>
            )}
            <FormControl>
              <div className="flex flex-col items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gdg-blue file:text-white hover:file:bg-gdg-blue/90 max-w-xs outline-none"
                />
                <Input type="hidden" {...field} />
                {isEditing && !imageFile && field.value && (
                  <p className="text-sm text-gdg-gray">
                    Current photo URL: {field.value.substring(0, 30)}...
                  </p>
                )}
              </div>
            </FormControl>
            <FormDescription className="text-center text-gdg-gray">
              {isEditing
                ? 'Upload a new profile photo or keep the existing one.'
                : 'Upload a profile photo. This is required.'}
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default ProfilePhotoField;
