'use server';
import { prisma } from '@/lib/prisma';
import { EventOperationError, handleError, handleSuccess } from '@/utils';
import { Member } from '@/types/admin/members';
import { getSessionUser, requireAdmin } from '../auth';
import { withAdminCheck } from '../events';

export async function getAllMembers() {
  try {
    const data = await prisma.member.findMany({
      orderBy: { created_at: 'desc' },
    });
    return handleSuccess({
      data: data || [],
      message: 'Members fetched successfully',
    });
  } catch (error) {
    return handleError(error);
  }
}

export async function createMember(member: Member) {
  try {
    return await withAdminCheck(async () => {
      const memberData = { ...member };
      if (memberData.id) {
        const existingMember = await prisma.member.findUnique({
          where: { id: memberData.id },
        });
        if (existingMember) {
          return updateMember(memberData);
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
  } catch (error) {
    return handleError(error);
  }
}

export async function updateMember(member: Member) {
  try {
    const sessionUser = await getSessionUser();

    if (member.email !== sessionUser.email && !sessionUser.isAdmin) {
      const error = new EventOperationError(
        'You are not authorized to perform this action',
        401
      );
      return handleError(error);
    }

    if (!sessionUser.isAdmin && member.is_admin) {
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
  } catch (error) {
    return handleError(error);
  }
}

export async function deleteMember(id: string) {
  try {
    return await withAdminCheck(async () => {
      if (!id || typeof id !== 'string') {
        console.error('Invalid member ID for deletion:', id);
        return handleError(
          new Error('Valid member ID is required for deletion')
        );
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
  } catch (error) {
    console.error('Server: Error deleting member:', error);
    return handleError(error);
  }
}

export async function getMemberByEmail(email: string) {
  try {
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
  } catch (error) {
    console.error('Server: Error fetching member:', error);
    return handleError(error);
  }
}
