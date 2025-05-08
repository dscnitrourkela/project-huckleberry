'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { bulkUploadMembers } from '@/actions/members';

type ValidationError = {
  status: 'error';
  message: string;
  details: Array<{ rowIndex: number; missingFields: string[] }>;
};

type SuccessResponse = {
  status: 'success';
  data: {
    message: string;
    data: any;
  };
};

type ErrorResponse = {
  status: 'error';
  message: string;
};

type UploadResponse = ValidationError | SuccessResponse | ErrorResponse;

export default function BulkUpload() {
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'text/csv') {
      toast.error('Please upload a CSV file');
      return;
    }

    setIsLoading(true);
    try {
      const text = await file.text();
      const result = (await bulkUploadMembers(text)) as UploadResponse;

      if (result.status === 'success') {
        toast.success(result.data.message, {
          onAutoClose: () => {
            window.location.reload();
          },
        });
      } else if (result.status === 'error') {
        if ('details' in result) {
          const errorMessage = result.details
            .map(
              ({ rowIndex, missingFields }) =>
                `Row ${rowIndex}: Missing ${missingFields.join(', ')}`
            )
            .join('\n');
          toast.error(
            <div className="whitespace-pre-line">
              {result.message}
              {'\n\n'}
              {errorMessage}
            </div>
          );
        } else {
          toast.error(result.message);
        }
      }
    } catch (error) {
      console.error('Error uploading members:', error);
      toast.error('Failed to upload members');
    } finally {
      setIsLoading(false);
      event.target.value = '';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="hidden"
        id="csv-upload"
        disabled={isLoading}
      />
      <Button
        onClick={() => document.getElementById('csv-upload')?.click()}
        disabled={isLoading}
        className="font-geist-sans"
      >
        <Upload className="mr-2 h-4 w-4" />
        {isLoading ? 'Uploading...' : 'Bulk Upload'}
      </Button>
    </div>
  );
}
