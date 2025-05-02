// @ts-nocheck - temp adjust

'use client';

import { Calendar, Layers, Users, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getAllEvents } from '@/actions/events';
import { getAllMembers } from '@/actions/members';
import { getPublishedRepos } from '@/actions/projects';
import { getTotalTweetCount } from '@/actions/tweets';
import { StatCard } from '@/components/admin/dashboard/stat-card';
import { RecentProjectsList } from '@/components/admin/dashboard/recent-project-list';
import { UpcomingEventsList } from '@/components/admin/dashboard/upcoming-event-list';
import { ErrorDisplay } from '@/components/admin/dashboard/error-component';
import {
  mapUpcomingEvents,
  mapPublishedProjects,
} from '@/utils/dashboard-function';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';

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

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalMembers: 0,
    upcomingEvents: 0,
    tweetCount: 0,
    recentProjects: [],
    upcomingEventsList: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [
          membersResponse,
          eventsResponse,
          publishedRepos,
          tweetCountResponse,
        ] = await Promise.all([
          getAllMembers(),
          getAllEvents(),
          getPublishedRepos(),
          getTotalTweetCount(),
        ]);

        if (
          membersResponse.status !== 'success' ||
          eventsResponse.status !== 'success'
        ) {
          throw new Error('Failed to fetch data');
        }

        const members =
          'data' in membersResponse ? membersResponse.data.data : [];
        const events =
          'data' in eventsResponse ? eventsResponse.data.events : [];
        const publishedProjects =
          'data' in publishedRepos
            ? publishedRepos.data.data.map((project: any) => ({
                ...project,
                published_at: project.published_at.toISOString(),
              }))
            : [];

        setStats({
          totalMembers: members.length,
          upcomingEvents: events.length,
          tweetCount: tweetCountResponse,
          recentProjects: mapPublishedProjects(publishedProjects),
          upcomingEventsList: mapUpcomingEvents(events),
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError(
          error instanceof Error
            ? error.message
            : 'Failed to load dashboard data'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="min-h-screen bg-background p-8 animate-fade-in">
      <div className="mx-auto max-w-7xl">
        <AdminPageHeader
          accentTitle="Dashboard"
          title="Dashboard"
          description="Welcome to GDSC NITR Dashbord"
        />

        <div className="grid gap-6 md:grid-cols-2 lxl:grid-cols-2 lg:grid-cols-4 font-geist-sans mb-8">
          <StatCard
            title="Published Projects"
            value={stats.recentProjects.length}
            icon={Layers}
            link="/admin/publish-projects"
            linkText="Manage Projects"
            isLoading={isLoading}
            color="gdg-green"
          />
          <StatCard
            title="Team Members"
            value={stats.totalMembers}
            icon={Users}
            link="/admin/members"
            linkText="View all members"
            isLoading={isLoading}
            color="gdg-blue"
          />
          <StatCard
            title="Upcoming Events"
            value={stats.upcomingEvents}
            icon={Calendar}
            link="/admin/events"
            linkText="View calendar"
            isLoading={isLoading}
            color="gdg-yellow"
          />
          <StatCard
            title="Tweets"
            value={stats.tweetCount}
            icon={Twitter}
            link="/admin/tweets"
            linkText="View all Tweets"
            isLoading={isLoading}
            color="gdg-red"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 font-geist-sans">
          <RecentProjectsList
            projects={stats.recentProjects}
            isLoading={isLoading}
          />
          <UpcomingEventsList
            events={stats.upcomingEventsList}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
