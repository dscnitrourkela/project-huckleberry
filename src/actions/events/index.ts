'use server';
import { prisma } from '@/lib/prisma';
import { Event, EventRegistration } from '@/types/admin/events';
import { handleError, handleSuccess } from '@/utils';
import { requireAdmin } from '../auth';

export async function withAdminCheck<T>(action: () => Promise<T>): Promise<T> {
  const adminCheck = await requireAdmin();
  if (adminCheck !== true) return adminCheck as T;
  return await action();
}

export async function createEvent(event: EventRegistration) {
  try {
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
  } catch (error) {
    return handleError(error);
  }
}

export async function getEvent(id: string) {
  try {
    const data = await prisma.event.findUnique({ where: { id } });
    if (!data) return handleError({ message: 'Event not found' });
    return handleSuccess({ data, message: null });
  } catch (error) {
    return handleError(error);
  }
}

export async function updateEvent(id: string, updates: Partial<Event>) {
  try {
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
  } catch (error) {
    return handleError(error);
  }
}

export async function deleteEvent(id: string) {
  try {
    return await withAdminCheck(async () => {
      await prisma.event.delete({ where: { id } });
      return handleSuccess({ message: 'Event deleted successfully' });
    });
  } catch (error) {
    return handleError(error);
  }
}

export async function getAllEvents() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { timestamp: 'desc' },
    });
    return handleSuccess({ events, message: null });
  } catch (error) {
    return handleError(error);
  }
}
