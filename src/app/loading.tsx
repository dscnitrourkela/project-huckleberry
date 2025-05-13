'use client';
import Loader from '@/components/shared/loader';

export default function Loading() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
}
