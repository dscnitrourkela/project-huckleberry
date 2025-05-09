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
import { PageHeaderDescription, PageHeader } from '@/components/ui/page-header';

interface BlogCarouselProps {
  title?: string;
  description?: string;
}

export default function BlogCarousel({
  title = 'Recent Blogs',
  description = 'Explore our latest thoughts, ideas, and insights',
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
    <section className="py-4">
      <PageHeader className="text-center font-productsan mb-5 mt-20 px-4 py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-black text-black bg-orange-300">
        {title}
      </PageHeader>
      <PageHeaderDescription className="text-center mx-auto mb-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:mt-6 lg:mt-4 px-4 py-2 bg-transparent max-w-2xl font-medium">
        {description}
      </PageHeaderDescription>

      <div className="relative min-h-[500px]">
        {loading ? (
          <div className="flex justify-center items-center min-h-[500px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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
                  className="lg:basis-1/3 px-4 pt-4 pb-12"
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
