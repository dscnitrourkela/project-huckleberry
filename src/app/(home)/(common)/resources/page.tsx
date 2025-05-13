import TweetCarousel from '@/components/resources/tweets/tweet-carousel';
import BlogCarousel from '@/components/resources/blogs/blog-carousel';
import { resourcesMetadata } from '@/config/seo/resources-metadata';
import React from 'react';

export { resourcesMetadata as metadata };

export default function ResourcesPage() {
  return (
    <div className="mx-auto container px-0 sm:px-8">
      <TweetCarousel />
      <BlogCarousel />
    </div>
  );
}
