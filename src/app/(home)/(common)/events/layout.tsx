import { eventsMetadata } from '@/config/seo/events-metadata';

export const metadata = eventsMetadata;

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
