'use server';
import { prisma } from '@/lib/prisma';
import {
  EventOperationError,
  asyncHandler,
  handleError,
  handleSuccess,
} from '@/utils';
import { Member } from '@/types/admin/members';
import { getSessionUser } from '../auth';
import { withAdminCheck } from '../events';

export const getAllMembers = asyncHandler(async () => {
  const data = await prisma.member.findMany({
    orderBy: { created_at: 'desc' },
  });
  return handleSuccess({
    data: data || [],
    message: 'Members fetched successfully',
  });
});

export const createMember = asyncHandler(async (member: Member) => {
  return await withAdminCheck(async () => {
    const memberData = { ...member };
    if (memberData.id) {
      const existingMember = await prisma.member.findUnique({
        where: { id: memberData.id },
      });
      if (existingMember) {
        return updateMember(memberData, true);
      }
    }

    const newMember = await prisma.member.create({
      data: memberData,
    });

    return handleSuccess({
      newMember,
      message: 'Member created successfully',
    });
  });
});

export const updateMember = asyncHandler(
  async (member: Member, isAdmin: boolean = false) => {
    const sessionUser = await getSessionUser();

    if (member.email !== sessionUser.email && !isAdmin) {
      const error = new EventOperationError(
        'You are not authorized to perform this action',
        401
      );
      return handleError(error);
    }

    if (!member.email) {
      return {
        status: 'error',
        message: 'Member Email ID is required for updates',
      };
    }

    const updatedMember = await prisma.member.update({
      where: { email: member.email },
      data: member,
    });
    return handleSuccess({
      ...updatedMember,
      message: 'Member updated successfully',
    });
  }
);

export const deleteMember = asyncHandler(async (id: string) => {
  return await withAdminCheck(async () => {
    if (!id || typeof id !== 'string') {
      console.error('Invalid member ID for deletion:', id);
      return handleError(new Error('Valid member ID is required for deletion'));
    }

    const memberId = String(id);

    const existingMember = await prisma.member.findUnique({
      where: { id: memberId },
    });

    if (!existingMember) {
      return handleError(new Error('Member not found'));
    }

    await prisma.member.delete({
      where: { id: memberId },
    });

    return handleSuccess({ message: 'Member deleted successfully' });
  });
});

export const getMemberByEmail = asyncHandler(async (email: string) => {
  if (!email || typeof email !== 'string') {
    return handleError(new Error('Valid email ID is required'));
  }

  const member = await prisma.member.findUnique({
    where: { email: email },
  });

  if (!member) {
    return handleError(new Error('Member not found'));
  }

  return handleSuccess({
    ...member,
    message: 'Member fetched successfully',
  });
});

export const bulkUploadMembers = asyncHandler(async (csvData: string) => {
  return await withAdminCheck(async () => {
    const rows = csvData
      .split('\n')
      .map((row) => row.trim())
      .filter((row) => row.length > 0);

    const headers = rows[0]
      .split(',')
      .map((h) => h.trim().replace(/^"(.*)"$/, '$1'));
    const data = rows.slice(1);

    console.log(headers);
    const members = data.map((row, index) => {
      const values = row
        .split(',')
        .map((v) => v.trim().replace(/^"(.*)"$/, '$1'));
      const member: Partial<Member> = {
        user_name: values[headers.indexOf('user_name')] || '',
        email: values[headers.indexOf('email')] || '',
        mobile_no: values[headers.indexOf('mobile_no')] || '',
        role: values[headers.indexOf('role')] || '',
        github: values[headers.indexOf('github')] || '',
        linkedin: values[headers.indexOf('linkedin')] || '',
        twitter: values[headers.indexOf('twitter')] || '',
        figma: values[headers.indexOf('figma')] || '',
        caption: values[headers.indexOf('caption')] || null,
        profile_photo: values[headers.indexOf('profile_photo')] || '',
        year_of_passing:
          Number(values[headers.indexOf('year_of_passing')]) || 2020,
      };
      return { member, rowIndex: index + 2 }; // +2 because of 0-based index and header row
    });

    const invalidMembers = members
      .filter(({ member }) => !member.email || !member.user_name)
      .map(({ member, rowIndex }) => ({
        rowIndex,
        missingFields: [
          !member.email && 'email',
          !member.user_name && 'user_name',
          !member.mobile_no && 'mobile_no',
          !member.role && 'role',
          !member.linkedin && 'linkedin',
          !member.twitter && 'twitter',
          !member.caption && 'caption',
          !member.profile_photo && 'profile_photo',
          !member.year_of_passing && 'year_of_passing',
        ].filter(Boolean) as string[],
      }));

    if (invalidMembers.length > 0) {
      return {
        status: 'error',
        message: 'Some members are missing required fields',
        details: invalidMembers,
      };
    }

    const createdMembers = await prisma.member.createMany({
      data: members.map(({ member }) => member as Member),
      skipDuplicates: true,
    });

    return handleSuccess({
      message: `Successfully uploaded ${createdMembers.count} members`,
      data: createdMembers,
    });
  });
});
