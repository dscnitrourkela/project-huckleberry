import { teamMetadata } from '@/config/seo/team-metadata';

export const metadata = teamMetadata;

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
