import { aboutUsMetadata } from '@/config/seo/about-us-metadata';

export const metadata = aboutUsMetadata;

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
