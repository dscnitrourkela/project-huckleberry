'use client';

import { useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full space-y-4">
        <Alert
          variant="destructive"
          className="border-destructive/50 dark:border-destructive"
        >
          <XCircle className="h-5 w-5" />
          <AlertTitle className="ml-2">Error</AlertTitle>
          <AlertDescription className="mt-2">
            {error.message || 'Something went wrong! Please try again.'}
            {error.digest && (
              <p className="text-xs mt-2 text-muted-foreground">
                Error ID: {error.digest}
              </p>
            )}
          </AlertDescription>
        </Alert>

        <Button
          variant="outline"
          onClick={() => reset()}
          className="w-full transition-colors hover:bg-accent"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
