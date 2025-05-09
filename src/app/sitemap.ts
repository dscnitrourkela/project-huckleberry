import { MetadataRoute } from 'next';
import { getPublishedRepos } from '@/actions/projects';
import { getAllEvents } from '@/actions/events';
import { getAllMembers } from '@/actions/members';
import { getTweetsFromDB } from '@/actions/tweets';
import { baseUrl } from '@/config/seo/metadata';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/resources', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/team', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/events', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/tweets', priority: 0.7, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.6, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.6, changeFrequency: 'weekly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));

  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const projectsResult = await getPublishedRepos();
    if (projectsResult.status === 'success' && 'data' in projectsResult) {
      const projects = projectsResult.data.data;
      if (Array.isArray(projects)) {
        projectRoutes = projects.map((project: any) => ({
          url: `${baseUrl}/projects/${project.repo_name}`,
          lastModified: new Date(project.published_at),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }));
      }
    }
  } catch (error) {
    console.error('Error generating project sitemap entries:', error);
  }

  let eventRoutes: MetadataRoute.Sitemap = [];
  try {
    const eventsResult = await getAllEvents();
    if (eventsResult.status === 'success' && 'data' in eventsResult) {
      const events = eventsResult.data.events;
      eventRoutes = events.map((event: any) => ({
        url: `${baseUrl}/events/${event.id}`,
        lastModified: new Date(event.timestamp),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      }));
    }
  } catch (error) {
    console.error('Error generating event sitemap entries:', error);
  }

  return [...staticRoutes, ...projectRoutes, ...eventRoutes];
}
