import React from 'react';

interface EventStructuredDataProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  imageUrl?: string;
  eventUrl: string;
  organizer: string;
}

export default function EventStructuredData({
  name,
  description,
  startDate,
  endDate,
  location,
  imageUrl,
  eventUrl,
  organizer,
}: EventStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    location: {
      '@type': 'Place',
      name: location,
    },
    image: imageUrl,
    url: eventUrl,
    organizer: {
      '@type': 'Organization',
      name: organizer,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
