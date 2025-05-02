import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { EventRegistration, FieldConfig } from '@/types/admin/events';
import { formFields, getInitialValues } from '@/config/admin/events';
import { getFieldComponent } from './form-fields';
import Image from 'next/image';

interface EventRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: EventRegistration) => void;
  defaultValues?: Partial<EventRegistration> | null;
  isEditing?: boolean;
  isLoading?: boolean;
}
const EventRegistrationModal = ({
  open,
  onOpenChange,
  onSubmit,
  defaultValues,
  isEditing = false,
  isLoading = false,
}: EventRegistrationModalProps) => {
  const form = useForm<EventRegistration>({
    values: getInitialValues(defaultValues),
  });

  const handleSubmit = (data: EventRegistration) => {
    const formattedData = {
      ...data,
      timestamp: new Date(data.timestamp).getTime().toString(),
    };
    onSubmit(formattedData);
  };

  const renderFormField = (field: FieldConfig) => {
    const coverImage = form.getValues().coverImage as string;
    return (
      <div
        key={field.name}
        className={field.fullWidth ? 'col-span-2' : 'col-span-1'}
      >
        <FormField
          control={form.control}
          name={field.name}
          // @ts-ignore
          rules={field.rules}
          render={({ field: formField }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                {getFieldComponent(field.type)({
                  ...formField,
                  placeholder: field.placeholder,
                  type: field.type,
                  options: field.options,
                  label: field.label,
                  accept: field.accept,
                })}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {field.name === 'coverImage' &&
          typeof coverImage === 'string' &&
          coverImage && (
            <Image
              src={coverImage}
              alt={field.label}
              width={200}
              height={200}
              className="rounded-lg mt-2 w-full h-52 object-cover"
            />
          )}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl font-geist-sans"
        style={{ width: '100%', maxHeight: '95dvh', overflowY: 'auto' }}
      >
        <DialogHeader>
          <DialogTitle>
            {isEditing ? 'Edit Event' : 'Create New Event'}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Make changes to your event here. Click save when you're done."
              : 'Fill in the details for your new event.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {formFields.map(renderFormField as any)}
            </div>

            <DialogFooter>
              <Button type="submit" disabled={isLoading}>
                {isEditing ? 'Save Changes' : 'Create Event'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EventRegistrationModal;
