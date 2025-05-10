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
    <section className="w-full max-w-7xl pt-6 sm:pt-8  sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl text-center sm:text-left md:text-5xl xl:text-6xl font-bold sm:pl-12 text-black font-productsans">
        Latest Tweets
      </h2>

      <div className="relative min-h-[500px]">
        {loading ? (
          <div className="flex justify-center items-center min-h-[500px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : tweets.length === 0 ? (
          <div className="text-center py-20  rounded-lg shadow-sm min-h-[500px]">
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
                  className="lg:basis-1/2 xl:basis-1/3 px-4 pt-4"
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
