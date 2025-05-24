import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
import { formatTimestamp } from '@/utils';
import { baseUrl } from '@/config/seo/metadata';

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: {
      id: id,
    },
  });

  if (!event) {
    return {
      title: 'Event Not Found',
      description:
        "The event you're looking for doesn't exist or has been removed.",
    };
  }

  const formattedTime = event.timestamp
    ? formatTimestamp(event.timestamp)
    : 'Date TBA';
  const eventLocation = event.location ? `at ${event.location}` : '';
  const eventMode = event.mode ? `(${event.mode})` : '';

  const metaDescription = `${event.subTitle}. Join us on ${formattedTime} ${eventLocation} ${eventMode}. ${event.description?.substring(0, 120)}...`;

  return {
    title: `${event.title}`,
    description: metaDescription,
    openGraph: {
      title: event.title,
      description: event.subTitle!,
      images: [
        {
          url: event.coverImage!,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      type: 'website',
      url: `${baseUrl}/events/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.subTitle!,
      images: [event.coverImage!],
    },
    alternates: {
      canonical: `${baseUrl}/events/${id}`,
    },
  };
}

export default function EventPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
