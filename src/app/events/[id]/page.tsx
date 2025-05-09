import { Metadata } from 'next';
import { getEvent } from '@/actions/events';
import { formatTimestamp } from '@/utils';
import EventStructuredData from '@/components/seo/event-structured-data';
import { useState, useEffect } from 'react';
import { baseUrl } from '@/config/seo/metadata';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const eventResult = await getEvent(id);

  if (eventResult.status !== 'success' || !('data' in eventResult)) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.',
    };
  }

  const event = eventResult.data;
  const formattedDate = formatTimestamp(event.timestamp);

  return {
    title: event.title,
    description:
      event.description.substring(0, 160) +
      (event.description.length > 160 ? '...' : ''),
    keywords: [
      'GDSC',
      'NIT Rourkela',
      'event',
      event.title,
      event.mode,
      formattedDate,
      'tech event',
    ],
    alternates: {
      canonical: `${baseUrl}/events/${id}`,
    },
    openGraph: {
      title: `${event.title} | GDSC NIT Rourkela`,
      description:
        event.description.substring(0, 160) +
        (event.description.length > 160 ? '...' : ''),
      url: `${baseUrl}/events/${id}`,
      images: [
        {
          url: event.coverImage || '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(event.timestamp).toISOString(),
      authors: ['GDSC NIT Rourkela'],
      siteName: 'GDSC NIT Rourkela',
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description:
        event.description.substring(0, 160) +
        (event.description.length > 160 ? '...' : ''),
      images: [event.coverImage || '/opengraph-image.png'],
      creator: '@dscnitrourkela',
    },
  };
}

export default function EventPage({ params }: Props) {
  const { id } = params;
  // Fix the type by using the structure from the getEvent result
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      const eventResult = await getEvent(id);
      if (eventResult.status === 'success' && 'data' in eventResult) {
        // Store the event data directly, similar to generateMetadata function
        setEvent(eventResult.data);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!event) {
    return <div>Loading event details...</div>;
  }

  const startDate = new Date(event.timestamp).toISOString();

  return (
    <div>
      {/* Add structured data */}
      <EventStructuredData
        name={event.title}
        description={event.description}
        startDate={startDate}
        location={event.location || 'NIT Rourkela'}
        imageUrl={event.coverImage}
        eventUrl={`${baseUrl}/events/${id}`}
        organizer="GDSC NIT Rourkela"
      />

      {/* Event details rendering */}
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <div className="mb-6">
          <p className="text-lg text-gray-700">
            {formatTimestamp(event.timestamp)}
          </p>
          <p className="text-md text-gray-600">
            {event.location || 'Online Event'}
          </p>
        </div>

        {event.coverImage && (
          <div className="mb-6">
            <img
              src={event.coverImage}
              alt={event.title}
              className="rounded-lg max-h-[400px] w-full object-cover"
            />
          </div>
        )}

        <div className="prose max-w-none">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}
