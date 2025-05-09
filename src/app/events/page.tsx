import { Metadata } from 'next';
import { getAllEvents } from '@/actions/events';
import { eventsMetadata } from '@/config/seo/events-metadata';

export const metadata: Metadata = eventsMetadata;

export default function EventsPage() {
  return <div></div>;
}
