'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Member } from '@/types/admin/members';
import { memberSchema } from '@/config/admin/members/constants';
import { uploadToCloudinary } from '@/utils';

import { getMemberByEmail, updateMember } from '@/actions/members';
import {
  ProfilePhotoField,
  MemberInfoSection,
  SocialLinksSection,
  PersonalInfoSection,
} from '@/components/admin/members/member-form';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';

type ProfileFormSchema = z.infer<typeof memberSchema>;

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<Member | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);

  const form = useForm<ProfileFormSchema>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      profile_photo: '',
      user_name: '',
      email: '',
      mobile_no: 0,
      role: 'developer',
      github: '',
      linkedin: '',
      twitter: '',
      figma: '',
      is_admin: true,
      year_of_passing: 2020,
    },
  });

  useEffect(() => {
    const fetchAdminProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/auth/session');
        const session = await response.json();
        if (!session?.user?.email) {
          toast.error('You need to be logged in to view this page');
          setLoading(false);
          return;
        }

        const email = session.user.email;
        const result = await getMemberByEmail(email);
        if (result.status === 'success' && 'data' in result) {
          const memberData = result.data as any as Member;
          if (!memberData) {
            toast.error('No member data found');
            return;
          }
          setProfile(memberData);
          setImagePreview(memberData?.profile_photo ?? null);

          form.reset(memberData as unknown as ProfileFormSchema);
        } else {
          toast.error('Failed to load profile data');
        }
      } catch (error) {
        console.error('Failed to fetch admin profile:', error);
        toast.error('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchAdminProfile();
  }, [form]);

  const handleSubmit = async (data: ProfileFormSchema) => {
    if (!profile) return;

    setLoading(true);
    try {
      const finalData = { ...data, id: profile.id };

      finalData.mobile_no = data.mobile_no.toString() as any;

      if (imageFile) {
        setUploadLoading(true);
        try {
          const imageUrl = await uploadToCloudinary(imageFile);
          finalData.profile_photo = imageUrl;
        } catch (error) {
          console.error('Error uploading image:', error);
          toast.error('Failed to upload profile image');
          setLoading(false);
          setUploadLoading(false);
          return;
        } finally {
          setUploadLoading(false);
        }
      } else if (!finalData.profile_photo && !profile.profile_photo) {
        toast.error('Please select a profile photo');
        setLoading(false);
        return;
      } else if (!finalData.profile_photo && profile.profile_photo) {
        finalData.profile_photo = profile.profile_photo;
      }

      const result = await updateMember(finalData as unknown as Member);

      if (result.status === 'success') {
        toast.success('Profile updated successfully');
        setProfile({
          ...profile,
          ...finalData,
          mobile_no: finalData.mobile_no.toString(),
        } as Member);
      } else if (result.status === 'error' && 'message' in result) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profile) {
    return (
      <div className="p-8 flex justify-center items-center min-h-[80vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gdg-blue mx-auto"></div>
          <p className="mt-4 text-gdg-gray">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {' '}
      <div className="p-6 container mx-auto">
        <AdminPageHeader title="Profile" accentTitle="Profile" />
      </div>
      <div className="p-8 pb-20 font-geist-sans">
        <div className=" bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8 mt-6"
            >
              <ProfilePhotoField
                form={form}
                imageFile={imageFile}
                setImageFile={setImageFile}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                isEditing={true}
                defaultValues={profile || undefined}
              />

              <MemberInfoSection form={form} />

              <SocialLinksSection form={form} />

              <PersonalInfoSection form={form} />

              <div className="pt-4 flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                  className="rounded-full border-gray-300 hover:bg-gray-100 hover:text-gray-800"
                  disabled={loading || uploadLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading || uploadLoading}
                  className="rounded-full bg-gdg-blue hover:bg-gdg-blue/90 text-white shadow-md hover:shadow-lg"
                >
                  {uploadLoading
                    ? 'Uploading...'
                    : loading
                      ? 'Saving...'
                      : 'Save Changes'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
