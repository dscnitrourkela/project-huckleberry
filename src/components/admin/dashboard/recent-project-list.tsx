import { formatProjectName } from '@/utils/dashboard-function';
import { Layers } from 'lucide-react';
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

export const RecentProjectsList = ({
  projects,
  isLoading = false,
}: {
  projects: DashboardStats['recentProjects'];
  isLoading?: boolean;
}) => (
  <DashboardListCard
    title="Published Projects"
    color="gdg-green"
    isLoading={isLoading}
    emptyMessage="No published projects"
  >
    <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className="h-12 w-12 rounded-lg bg-gdg-green/10 flex items-center justify-center group-hover:bg-gdg-green/20 transition-colors">
              <Layers className="h-6 w-6 text-gdg-green" />
            </div>
            <div>
              <p className="text-sm font-medium">
                {formatProjectName(project.name)}
              </p>
              <p className="text-xs text-muted-foreground">
                Published {project.updatedAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-muted-foreground py-4">
          No published projects
        </p>
      )}
    </div>
  </DashboardListCard>
);
