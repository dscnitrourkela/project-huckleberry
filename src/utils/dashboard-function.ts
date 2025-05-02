interface Event {
  id: string;
  title: string;
  timestamp: string;
}

interface Project {
  id: string;
  repo_name: string;
  published_at: string;
}

const formatProjectName = (name: string): string =>
  name
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const filterUpcomingEvents = (events: Event[]): Event[] => {
  const now = new Date();
  return events.filter((event) => new Date(parseInt(event.timestamp)) > now);
};

const mapPublishedProjects = (projects: Project[]) =>
  projects.map((project) => ({
    id: project.id,
    name: project.repo_name,
    updatedAt: new Date(project.published_at),
  }));

const mapUpcomingEvents = (events: Event[], limit: number = 3) =>
  events.slice(0, limit).map((event) => ({
    id: event.id,
    title: event.title,
    timestamp: new Date(parseInt(event.timestamp)),
  }));

export {
  formatProjectName,
  filterUpcomingEvents,
  mapUpcomingEvents,
  mapPublishedProjects,
};
