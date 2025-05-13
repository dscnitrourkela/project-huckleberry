import { MetadataRoute } from 'next';
import { baseUrl } from '@/config/seo/metadata';
import { mockProjects } from '@/config/seo/seo-data/projects';
import { mockEvents } from '@/config/seo/seo-data/event';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/resources', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/events', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.6, changeFrequency: 'weekly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));

  const projectRoutes: MetadataRoute.Sitemap = mockProjects.map((project) => ({
    url: `${baseUrl}/projects/`,
    lastModified: new Date(project.published_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const eventRoutes: MetadataRoute.Sitemap = mockEvents.map((event) => ({
    url: `${baseUrl}/events/${event.id}`,
    lastModified: new Date(event.timestamp),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...projectRoutes, ...eventRoutes];
}
