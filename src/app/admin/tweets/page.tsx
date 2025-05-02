'use client';

import { StatCard } from '@/components/admin/dashboard/stat-card';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import TweetCard from '@/components/admin/tweets/TweetCardComponent';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Twitter, RefreshCw, Clock } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Tweet } from '@/types/admin/tweets';
import Instructions from '@/components/admin/tweets/instructions';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';
import {
  fetchTweetCount,
  fetchTweetsFromDB,
  handleUpdateFetchedAt,
  handleFetchLatestTweet,
  handleFetchAllDSCTweets,
} from '@/handlers/tweets/tweetHandlers';

export default function TweetsPage() {
  const [tweets, setTweets] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lastFetchedDate, setLastFetchedDate] =
    useState<string>('Not Fetched Yet');
  const [fetchedTweets, setFetchedTweets] = useState<Tweet[]>([]);
  const [lastFetchedTimestamp, setLastFetchedTimestamp] = useState<Date | null>(
    null
  );

  // Success callback after fetching tweets
  const handleFetchSuccess = async () => {
    // Update UI with latest data
    const count = await fetchTweetCount();
    setTweets(count);

    const tweets = await fetchTweetsFromDB();
    setFetchedTweets(tweets);

    const fetchedDate = await handleUpdateFetchedAt('latest', new Date());
    if (fetchedDate) {
      const formattedDate = new Date(fetchedDate).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      setLastFetchedDate(formattedDate);
      setLastFetchedTimestamp(new Date(fetchedDate));
    }
  };

  // Initialize data on component mount
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);
      try {
        const count = await fetchTweetCount();
        setTweets(count);

        const tweets = await fetchTweetsFromDB();
        setFetchedTweets(tweets);

        const fetchedDate = await handleUpdateFetchedAt('latest');
        if (fetchedDate) {
          const formattedDate = new Date(fetchedDate).toLocaleString('en-GB', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          });
          setLastFetchedDate(formattedDate);
          setLastFetchedTimestamp(new Date(fetchedDate));
        }
      } catch (error) {
        console.error('Error initializing data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  return (
    <div className="font-geist-sans min-h-screen bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 py-8 sm:px-6 ">
        <AdminPageHeader accentTitle="Manage Tweets" title="Tweets" />

        <Instructions />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="lg:col-span-1">
            <StatCard
              title="Total DSC Tweets"
              value={tweets}
              icon={Twitter}
              isLoading={isLoading}
            />
          </div>

          <div className="lg:col-span-2">
            <StatCard
              title="Last Fetched"
              value={lastFetchedDate}
              icon={Clock}
              isLoading={isLoading}
            />
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gdg-gray">
                  Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button
                  onClick={() =>
                    handleFetchLatestTweet(
                      lastFetchedTimestamp,
                      setIsLoading,
                      handleFetchSuccess
                    )
                  }
                  disabled={isLoading}
                  className="w-full text-sm bg-gdg-blue hover:bg-gdg-blue/90 text-white transition-all duration-300 flex items-center gap-2"
                >
                  <RefreshCw
                    className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`}
                  />
                  {isLoading ? 'Fetching...' : 'Fetch Latest Tweet'}
                </Button>
                <Button
                  onClick={() =>
                    handleFetchAllDSCTweets(
                      lastFetchedTimestamp,
                      setIsLoading,
                      handleFetchSuccess
                    )
                  }
                  disabled={isLoading}
                  variant="outline"
                  className="w-full text-sm border-gdg-red text-gdg-red hover:bg-gdg-red/10 transition-all duration-300 flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  {isLoading ? 'Fetching...' : 'Fetch All Tweets'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 -top-10 h-px bg-gradient-to-r from-transparent via-gdg-blue/20 to-transparent" />
          <h2 className="text-2xl sm:text-3xl font-medium text-center my-10 tracking-tight text-gdg-dark">
            GDSC Twitter Feed
          </h2>
        </div>

        {fetchedTweets.length === 0 ? (
          <Card className="my-12 py-12 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <Twitter className="h-12 w-12 text-gdg-blue/30 mb-4" />
              <h3 className="text-xl font-medium text-gdg-gray mb-2">
                No tweets fetched yet
              </h3>
              <p className="text-gdg-gray/70">
                Use the fetch buttons above to retrieve tweets from Twitter
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="px-1 sm:px-4 mb-12 max-w-[70rem] mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {fetchedTweets.map((tweet) => (
                  <CarouselItem
                    key={tweet.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full transform transition-all duration-300 hover:scale-[1.02]">
                      <TweetCard tweet={tweet} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious className="relative sm:absolute bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-gdg-blue hover:text-white transition-all duration-300" />
                <CarouselNext className="relative sm:absolute bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-gdg-blue hover:text-white transition-all duration-300" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
