'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Repeat2, MessageCircle, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { TweetCardProps } from '@/types/admin/tweets';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

// Format tweet text function that makes hashtags blue and truncates text if needed
const formatTweetText = (
  text: string,
  isExpanded: boolean = false,
  maxLength: number = 100
) => {
  // First split the text by line breaks to preserve them
  const isTruncated = !isExpanded && text.length > maxLength;
  const displayText = isTruncated ? text.slice(0, maxLength) : text;
  const displayLines = displayText.split('\n');

  return (
    <p className="text-black">
      {displayLines.map((line, lineIndex) => (
        <React.Fragment key={`line-${lineIndex}`}>
          {/* Process each word in the line */}
          {line.split(/(\s+)/).map((part, partIndex) => (
            <React.Fragment key={`${lineIndex}-${partIndex}`}>
              {part.startsWith('#') ? (
                <span className="text-blue-500 hover:underline cursor-pointer">
                  {part}
                </span>
              ) : (
                part
              )}
            </React.Fragment>
          ))}
          {/* Add line break except for the last line */}
          {lineIndex < displayLines.length - 1 && <br />}
        </React.Fragment>
      ))}
      {isTruncated && <span className="text-gray-500">...</span>}
    </p>
  );
};

const TweetCard = ({ tweet }: TweetCardProps) => {
  const [isExpanded] = useState(false);
  const [maxLength, setMaxLength] = useState(100);

  // Update maxLength on window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxLength(60); // Very small screens
      } else if (window.innerWidth < 768) {
        setMaxLength(80); // Small screens
      } else {
        setMaxLength(150); // Medium and larger screens
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openTwitter = () => {
    const tweetId = tweet.id;
    window.open(`https://twitter.com/i/web/status/${tweetId}`, '_blank');
  };

  return (
    <Card
      className="w-full max-w-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-yellow-50"
      onClick={openTwitter}
    >
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/api/placeholder/40/40" alt="DSC NITR" />
            <AvatarFallback>DSC</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base text-black">
                  DSC NIT Rourkela
                </h3>
                <p className="text-sm text-gray-500">@dscnitrrourekla</p>
              </div>
              <span className="text-sm text-gray-500 hidden sm:inline">
                {formatDate(tweet.created_at)}
              </span>
            </div>

            {/* Card content with fixed height and consistent size */}
            <div className="h-[150px] md:h-[210px] overflow-hidden pt-4">
              {formatTweetText(tweet.text, isExpanded, maxLength)}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="w-full space-y-4">
          <Separator />
          <div className="flex justify-between items-center px-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:inline">
                {tweet.public_metrics.reply_count}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
            >
              <Repeat2 className="h-5 w-5" />
              <span className="hidden sm:inline">
                {tweet.public_metrics.retweet_count}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
            >
              <Heart className="h-5 w-5" />
              <span className="hidden sm:inline">
                {tweet.public_metrics.like_count}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Share className="h-5 w-5" />
              <span className="hidden sm:inline">
                {tweet.public_metrics.quote_count}
              </span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TweetCard;
