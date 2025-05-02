'use client';
import { DataTable } from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Event, EventRegistration } from '@/types/admin/events';
import EventRegistrationModal from '@/components/admin/events/create-event';
import { columns } from '@/config/admin/events';
import { uploadToCloudinary, upsertEvent, withLoadingToast } from '@/utils';

import {
  createEvent,
  updateEvent,
  getAllEvents,
  deleteEvent,
} from '@/actions/events';
import { ApiResponse } from '@/types/commons';
import { useAuth } from '@/contexts/auth-context';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';

const EventsDashboard = () => {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([] as Event[]);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    event: Event | null;
  }>({
    open: false,
    event: null,
  });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleEdit = (event: Event) => {
    setOpen(true);
    setCurrentEvent(event);
  };

  const handleDelete = (event: Event) => {
    setDeleteDialog({ open: true, event });
  };

  const confirmDelete = async () => {
    if (deleteDialog.event) {
      await deleteEvent(deleteDialog.event.id);
      setEvents(events.filter((e) => e.id !== deleteDialog.event?.id));
    }
    setDeleteDialog({ open: false, event: null });
  };

  const handleSubmit = withLoadingToast(
    async (data: Partial<Event>): Promise<ApiResponse> => {
      setLoading(true);

      const coverImage =
        data?.coverImage?.[0] instanceof File
          ? await uploadToCloudinary(data.coverImage[0])
          : data?.coverImage;

      const eventData: EventRegistration = {
        ...data,
        coverImage,
      } as EventRegistration;
      const result = currentEvent
        ? await updateEvent(currentEvent.id, eventData)
        : await createEvent(eventData);

      console.log(result);
      if (result.status === 'success') {
        setEvents((prevEvents) =>
          upsertEvent(prevEvents, data, currentEvent?.id)
        );
        setOpen(false);
        setCurrentEvent(null);
      }

      setLoading(false);

      return result;
    }
  );

  const handleClose = () => {
    setOpen(false);
    setCurrentEvent(null);
  };

  useEffect(() => {
    async function fetchEvents() {
      const result = await getAllEvents();
      if (result.status === 'success' && 'data' in result) {
        setEvents(result.data.events as Event[]);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="p-8 font-geist-sans">
      <AdminPageHeader accentTitle="Events" title="Events" />
      <div className="flex justify-end items-center mb-6">
        {user?.role === 'admin' && (
          <Button
            className="flex items-center gap-2"
            onClick={() => setOpen(true)}
          >
            <Plus className="h-4 w-4" /> Add Event
          </Button>
        )}
      </div>

      {user?.role === 'admin' && (
        <>
          <EventRegistrationModal
            open={open}
            onOpenChange={handleClose}
            onSubmit={handleSubmit}
            defaultValues={currentEvent}
            isEditing={Boolean(currentEvent)}
            isLoading={loading}
          />
        </>
      )}

      {events.length > 0 ? (
        <DataTable
          // @ts-ignore
          columns={columns}
          data={events}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isAdmin={user?.role === 'admin'}
        />
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          No events found
        </p>
      )}

      <Dialog
        open={deleteDialog.open}
        onOpenChange={(open) => !open && setDeleteDialog({ open, event: null })}
      >
        <DialogContent className="font-geist-sans">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete&nbsp;&apos;
              {deleteDialog.event?.title}&nbsp;&apos; ? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialog({ open: false, event: null })}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventsDashboard;
