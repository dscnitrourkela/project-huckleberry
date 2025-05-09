'use client';

import { useState, useEffect } from 'react';
import TweetCard from './tweet-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tweet } from '@/types/admin/tweets';
import { fetchTweetsFromDB } from '@/handlers/tweets/tweetHandlers';
import { PageHeader, PageHeaderDescription } from '@/components/ui/page-header';

export default function TweetCarousel() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTweets = async () => {
      try {
        setLoading(true);
        const fetchedTweets = await fetchTweetsFromDB();
        setTweets(fetchedTweets || []);
      } catch (error) {
        console.error('Error loading tweets:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTweets();
  }, []);

  return (
    <section>
      <PageHeader className="text-center font-productsan mb-5 mt-20 px-4 py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-black text-black bg-green-300">
        Latest Tweets
      </PageHeader>
      <PageHeaderDescription className="text-center mx-auto mb-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:mt-6 lg:mt-4 px-4 py-2 bg-transparent max-w-3xl font-medium">
        Stay updated with our latest tweets and insights from the community.
      </PageHeaderDescription>
      <div className="relative min-h-[500px]">
        {loading ? (
          <div className="flex justify-center items-center min-h-[500px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : tweets.length === 0 ? (
          <div className="text-center py-20 bg-white/80 dark:bg-card/80 rounded-lg shadow-sm min-h-[500px]">
            <p className="text-muted-foreground text-lg">No tweets available</p>
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
              {tweets.map((tweet) => (
                <CarouselItem
                  key={tweet.id}
                  className=" lg:basis-1/3 px-4 pt-4"
                >
                  <div className="h-full flex items-center">
                    <TweetCard tweet={tweet} />
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
