// @ts-nocheck -  some issue with memebers type

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  MemberFormData,
  MemberRegistrationModalProps,
} from '@/types/admin/members';
import { memberSchema } from '@/config/admin/members/constants';
import { uploadToCloudinary } from '@/utils';
import { UserPlus, Edit } from 'lucide-react';
import {
  ProfilePhotoField,
  MemberInfoSection,
  SocialLinksSection,
  PersonalInfoSection,
  AdminSettingsSection,
} from '../member-form';
import GoogleColorsBar from '@/components/shared/google-colors-bar';

type MemberFormSchema = z.infer<typeof memberSchema>;

const MemberRegistrationModal = ({
  open,
  onOpenChange,
  onSubmit,
  defaultValues,
  isEditing = false,
  isLoading = false,
}: MemberRegistrationModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const defaultFormValues: Partial<MemberFormData> = {
    profile_photo: '',
    user_name: '',
    email: '',
    mobile_no: '',
    role: 'developer',
    github: '',
    linkedin: '',
    twitter: '',
    figma: '',
    caption: '',
    is_admin: false,
    is_lead: false,
  };

  const form = useForm<MemberFormSchema>({
    resolver: zodResolver(memberSchema),
    defaultValues: defaultValues || defaultFormValues,
  });

  const handleSubmit = async (data: MemberFormSchema) => {
    try {
      console.log('Form data:', data);
      console.log('Default values:', defaultValues);
      const finalData = defaultValues?.id
        ? { ...data, id: defaultValues.id }
        : { ...data };
      finalData.mobile_no = data.mobile_no.toString();
      if (imageFile) {
        setUploadLoading(true);
        try {
          const imageUrl = await uploadToCloudinary(imageFile);
          finalData.profile_photo = imageUrl;
        } catch (error) {
          console.error('Error uploading image:', error);
          return;
        } finally {
          setUploadLoading(false);
        }
      } else if (
        !imageFile &&
        !finalData.profile_photo &&
        !defaultValues?.profile_photo
      ) {
        alert('Please select a profile photo');
        return;
      } else if (!finalData.profile_photo && defaultValues?.profile_photo) {
        finalData.profile_photo = defaultValues.profile_photo;
      }

      if (!finalData.profile_photo) {
        alert('Profile photo is required');
        return;
      }

      onSubmit(finalData);
      form.reset(defaultFormValues);
    } catch (error) {
      console.error('Error in form submission:', error);
    }
  };

  useEffect(() => {
    if (defaultValues?.profile_photo) {
      setImagePreview(defaultValues.profile_photo);
      form.setValue('profile_photo', defaultValues.profile_photo);
    }
  }, [defaultValues, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl font-geist-sans h-[90dvh] overflow-y-auto bg-gradient-to-br from-white to-blue-50 border-none hide-scrollbar">
        <div className="relative z-10 w-full">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-white shadow-md">
                {isEditing ? (
                  <Edit className="w-6 h-6 text-gdg-blue" />
                ) : (
                  <UserPlus className="w-6 h-6 text-gdg-blue" />
                )}
              </div>
              <DialogTitle className="text-2xl font-bold text-gdg-dark">
                {isEditing ? 'Edit Member' : 'Add New Member'}
              </DialogTitle>
            </div>
            <DialogDescription className="text-gdg-gray">
              {isEditing
                ? "Make changes to member information here. Click save when you're done."
                : 'Fill in the details for the new member.'}
            </DialogDescription>
          </DialogHeader>

          <GoogleColorsBar />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <ProfilePhotoField
                form={form}
                imageFile={imageFile}
                setImageFile={setImageFile}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                isEditing={isEditing}
                defaultValues={defaultValues}
              />

              <MemberInfoSection form={form} />

              <SocialLinksSection form={form} />

              <PersonalInfoSection form={form} />

              <AdminSettingsSection form={form} />

              <DialogFooter className="gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="rounded-full border-gray-300 hover:bg-gray-100 hover:text-gray-800"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || uploadLoading}
                  className="rounded-full bg-gdg-blue hover:bg-gdg-blue/90 text-white shadow-md hover:shadow-lg"
                >
                  {uploadLoading
                    ? 'Uploading...'
                    : isEditing
                      ? 'Save Changes'
                      : 'Add Member'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberRegistrationModal;
