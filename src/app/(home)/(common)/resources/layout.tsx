import { resourcesMetadata } from '@/config/seo/resources-metadata';

export const metadata = resourcesMetadata;

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
