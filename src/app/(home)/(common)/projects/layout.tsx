import { projectsMetadata } from '@/config/seo/projects-metadata';

export const metadata = projectsMetadata;

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
