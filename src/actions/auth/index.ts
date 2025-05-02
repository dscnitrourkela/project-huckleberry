'use server';

import { signIn } from '@/auth';
import { prisma } from '@/lib/prisma';
import { Member } from '@/types/admin/members';
import { EventOperationError, handleError } from '@/utils';
import { headers } from 'next/headers';

async function getBaseUrl() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  return `${protocol}://${host}`;
}

export async function login() {
  try {
    await signIn('google');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function isAdmin() {
  try {
    const baseUrl = await getBaseUrl();
    const response = await fetch(`${baseUrl}/api/auth/session`, {
      credentials: 'include',
      headers: {
        Cookie: (await headers()).get('cookie') || '',
      },
    });
    const session = await response.json();

    return session?.user?.isAdmin;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getSessionUser() {
  try {
    const baseUrl = await getBaseUrl();
    const response = await fetch(`${baseUrl}/api/auth/session`, {
      credentials: 'include',
      headers: {
        Cookie: (await headers()).get('cookie') || '',
      },
    });
    const session = await response.json();
    return session?.user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function requireAdmin() {
  if (!(await isAdmin())) {
    const err = new EventOperationError(
      'You are not authorized to perform this action',
      401
    );
    return handleError(err);
  }
  return true;
}

// In your actions/members/index.ts file
export async function updateMember(member: Member) {
  try {
    // Validate that ID exists before updating
    if (!member.id) {
      return {
        status: 'error',
        message: 'Member ID is required for updates',
      };
    }

    const updatedMember = await prisma.member.update({
      where: { id: member.id },
      data: member,
    });

    return {
      status: 'success',
      data: updatedMember,
    };
  } catch (error) {
    console.error('Error updating member:', error);
    return {
      status: 'error',
      message: 'Failed to update member',
    };
  }
}
