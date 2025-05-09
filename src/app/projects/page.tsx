import { Metadata } from 'next';
import { getPublishedRepos } from '@/actions/projects';
import { projectsMetadata } from '@/config/seo/projects-metadata';

export const metadata: Metadata = projectsMetadata;

export default function ProjectsPage() {
  return <div></div>;
}
