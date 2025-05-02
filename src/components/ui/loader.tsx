import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <span className="inline-flex items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-black dark:text-white" />
    </span>
  );
}
