import { Metadata } from 'next';
import { getTweetsFromDB } from '@/actions/tweets';
import { tweetsMetadata } from '@/config/seo/tweets-metadata';

export const metadata: Metadata = tweetsMetadata;

export default function TweetsPage() {
  return <div></div>;
}
