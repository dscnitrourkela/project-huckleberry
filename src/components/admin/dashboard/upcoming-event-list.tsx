import { Calendar } from 'lucide-react';
import { DashboardListCard } from './dashboard-card';

interface DashboardStats {
  totalMembers: number;
  upcomingEvents: number;
  tweetCount: number;
  recentProjects: Array<{
    id: string;
    name: string;
    updatedAt: Date;
  }>;
  upcomingEventsList: Array<{
    id: string;
    title: string;
    timestamp: Date;
  }>;
}

export const UpcomingEventsList = ({
  events,
  isLoading = false,
}: {
  events: DashboardStats['upcomingEventsList'];
  isLoading?: boolean;
}) => (
  <DashboardListCard
    title="Upcoming Events"
    color="gdg-yellow"
    isLoading={isLoading}
    emptyMessage="No upcoming events"
  >
    <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
      {events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className="h-12 w-12 rounded-lg bg-gdg-yellow/10 flex items-center justify-center group-hover:bg-gdg-yellow/20 transition-colors">
              <Calendar className="h-6 w-6 text-gdg-yellow" />
            </div>
            <div>
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-muted-foreground">
                {event.timestamp.toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-muted-foreground py-4">No upcoming events</p>
      )}
    </div>
  </DashboardListCard>
);
