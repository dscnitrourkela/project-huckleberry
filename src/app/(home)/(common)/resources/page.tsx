import TweetCarousel from '@/components/resources/tweets/tweet-carousel';
import BlogCarousel from '@/components/resources/blogs/blog-carousel';

export default function ResourcesPage() {
  return (
    <div className="container mx-auto">
      <TweetCarousel />
      <BlogCarousel />
    </div>
  );
}
