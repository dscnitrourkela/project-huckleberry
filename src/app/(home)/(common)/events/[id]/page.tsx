import { Suspense } from 'react';
import EventDetail from '@/components/home/events/EventDetails';
import Loader from '@/components/shared/loader';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const events = await prisma.event.findMany({
    select: { id: true },
  });

  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: { id },
    select: {
      id: true,
      coverImage: true,
      title: true,
      subTitle: true,
      description: true,
      location: true,
      mode: true,
      eligibility: true,
      timestamp: true,
    },
  });

  if (!event) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      }
    >
      <EventDetail event={event} />
    </Suspense>
  );
}
