import TweetCarousel from '@/components/resources/tweets/tweet-carousel';
import BlogCarousel from '@/components/resources/blogs/blog-carousel';
import React from 'react';

export default function ResourcesPage() {
  return (
    <div className="mx-auto container px-0 sm:px-8">
      <TweetCarousel />
      <BlogCarousel />
    </div>
  );
}
