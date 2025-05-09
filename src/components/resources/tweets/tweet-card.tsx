'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Repeat2, MessageCircle, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { TweetCardProps } from '@/types/admin/tweets';
import { LOGO } from '@/config/common';

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
    <p className="text-black font-medium">
      {displayLines.map((line, lineIndex) => (
        <React.Fragment key={`line-${lineIndex}`}>
          {/* Process each word in the line */}
          {line.split(/(\s+)/).map((part, partIndex) => (
            <React.Fragment key={`${lineIndex}-${partIndex}`}>
              {part.startsWith('#') ? (
                <span className="text-blue-600 font-bold hover:underline cursor-pointer">
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
  const [isHovering, setIsHovering] = useState(false);

  // Update maxLength on window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxLength(60); // Very small screens
      } else if (window.innerWidth < 768) {
        setMaxLength(80); // Small screens
      } else {
        setMaxLength(180); // Medium and larger screens
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

  // Random rotation for neobrutalism effect
  const rotation = React.useMemo(() => {
    return Math.random() * 1 - 0.5; // Between -0.5 and 0.5 degrees
  }, []);

  // Random background color (soft pastel)
  const randomBgColor = React.useMemo(() => {
    const bgColors = [
      'bg-yellow-50',
      'bg-blue-50',
      'bg-pink-50',
      'bg-green-50',
      'bg-purple-50',
    ];
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  }, []);

  return (
    <Card
      className={`w-full max-w-xl ${randomBgColor} shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] transition-all duration-200 
      border-2 border-black rounded-md ${isHovering ? 'translate-x-[-3px] translate-y-[-3px]' : ''}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={openTwitter}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-14 w-14 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0)]">
            <AvatarImage src={LOGO} alt="DSC NITR" />
            <AvatarFallback className="bg-yellow-200 text-black font-bold">
              DSC
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-lg text-black">
                  DSC NIT Rourkela
                </h3>
                <p className="text-md text-gray-700 font-medium tracking-wider">
                  @dscnitrrourekla
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <div className="h-[150px] md:h-[210px] overflow-hidden font-sans font-lg tracking-wide pt-4 px-6">
        {formatTweetText(tweet.text, isExpanded, maxLength)}
      </div>
      <CardFooter className="pt-2 pb-4 px-6">
        <div className="w-full space-y-4">
          <Separator className="bg-black h-0.5" />
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 bg-white text-black font-bold border-2 border-black rounded-md hover:bg-blue-100 shadow-[2px_2px_0px_0px_rgba(0,0,0)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:inline">
                {tweet.public_metrics.reply_count}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 bg-white text-black font-bold border-2 border-black rounded-md hover:bg-green-100 shadow-[2px_2px_0px_0px_rgba(0,0,0)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <Repeat2 className="h-5 w-5" />
              <span className="hidden sm:inline">
                {tweet.public_metrics.retweet_count}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 bg-white text-black font-bold border-2 border-black rounded-md hover:bg-red-100 shadow-[2px_2px_0px_0px_rgba(0,0,0)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <Heart className="h-5 w-5" />
              <span className="hidden sm:inline">
                {tweet.public_metrics.like_count}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 bg-white text-black font-bold border-2 border-black rounded-md hover:bg-blue-100 shadow-[2px_2px_0px_0px_rgba(0,0,0)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
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
