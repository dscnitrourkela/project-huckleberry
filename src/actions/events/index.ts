'use server';
import { prisma } from '@/lib/prisma';
import { Event, EventRegistration } from '@/types/admin/events';
import { asyncHandler, handleError, handleSuccess } from '@/utils';
import { requireAdmin } from '../auth';

export async function withAdminCheck<T>(action: () => Promise<T>): Promise<T> {
  const adminCheck = await requireAdmin();
  if (adminCheck.status === 'error') return adminCheck as T;
  return await action();
}

export const createEvent = asyncHandler(async (event: EventRegistration) => {
  return await withAdminCheck(async () => {
    const eventData = {
      ...event,
      coverImage:
        typeof event.coverImage === 'string'
          ? event.coverImage
          : event.coverImage?.name || null,
    };

    const newEvent = await prisma.event.create({ data: eventData });
    return handleSuccess({
      ...newEvent,
      message: 'Event created successfully',
    });
  });
});

export const getEvent = asyncHandler(async (id: string) => {
  const data = await prisma.event.findUnique({ where: { id } });
  if (!data) return handleError({ message: 'Event not found' });
  return handleSuccess({ data, message: null });
});

export const updateEvent = asyncHandler(
  async (id: string, updates: Partial<Event>) => {
    return await withAdminCheck(async () => {
      const updatedEvent = await prisma.event.update({
        where: { id },
        data: {
          ...updates,
          coverImage:
            typeof updates.coverImage === 'string' || !updates.coverImage
              ? updates.coverImage
              : updates.coverImage?.name || null,
        },
      });
      return handleSuccess({
        ...updatedEvent,
        message: 'Event updated successfully',
      });
    });
  }
);

export const deleteEvent = asyncHandler(async (id: string) => {
  return await withAdminCheck(async () => {
    await prisma.event.delete({ where: { id } });
    return handleSuccess({ message: 'Event deleted successfully' });
  });
});

export const getAllEvents = asyncHandler(async () => {
  const events = await prisma.event.findMany({
    orderBy: { timestamp: 'desc' },
  });
  return handleSuccess({ events, message: null });
});
