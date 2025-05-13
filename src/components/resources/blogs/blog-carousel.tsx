'use client';

import { useState, useEffect } from 'react';
import BlogCard from '@/components/admin/blogs/blog-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getAllBlogs } from '@/actions/blogs';
import { BlogCardProps } from '@/types/admin/blogs';
import Loader from '@/components/shared/loader';

interface BlogCarouselProps {
  title?: string;
  description?: string;
}

export default function BlogCarousel({
  title = 'Recent Blogs',
}: BlogCarouselProps) {
  const [blogList, setBlogList] = useState<BlogCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogs();
        if ('data' in response) {
          // @ts-ignore
          setBlogList(response.data.blogs);
        } else {
          setBlogList([]);
        }
      } catch (error) {
        console.error('Error loading blogs:', error);
        setBlogList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="w-full max-w-7xl  sm:pt-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl text-center sm:text-left md:text-5xl xl:text-6xl font-bold sm:pl-12 text-black font-productsans">
        {title}
      </h2>

      <div className="relative min-h-[500px]">
        {loading ? (
          <div className="flex justify-center items-center min-h-[500px]">
            <Loader />
          </div>
        ) : blogList.length === 0 ? (
          <div className="text-center py-20 bg-white/80 dark:bg-card/80 rounded-lg shadow-sm min-h-[500px]">
            <p className="text-muted-foreground text-lg">No blogs available</p>
          </div>
        ) : (
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: false,
              slidesToScroll: 1,
              containScroll: 'trimSnaps',
            }}
            className="w-full min-h-[500px] sm:px-10"
          >
            <CarouselContent className="py-8 ml-0">
              {blogList.map((blog) => (
                <CarouselItem
                  key={blog.link}
                  className="lg:basis-1/2 xl:basis-1/3 px-4 pt-4 pb-12"
                >
                  <div className="h-full flex items-center">
                    <BlogCard {...blog} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="absolute left-0 rounded-none border-2 border-black bg-yellow-300 text-black h-10 w-10 
              transition-all duration-200 hidden sm:flex"
            />
            <CarouselNext
              className="absolute right-0 rounded-none border-2 border-black bg-yellow-300 text-black h-10 w-10
               transition-all duration-200 hidden sm:flex"
            />
          </Carousel>
        )}
      </div>
    </section>
  );
}
