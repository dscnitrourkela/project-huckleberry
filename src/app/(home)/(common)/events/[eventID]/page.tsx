import EventDetail from '@/components/home/events/EventDetails';
export default async function EventPage({
  params,
}: {
  params: Promise<{ eventID: string }>;
}) {
  const { eventID } = await params;
  return <EventDetail eventID={eventID} />;
}
