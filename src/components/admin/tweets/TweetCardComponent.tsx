import React from 'react';
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

const TweetCard = ({ tweet }: TweetCardProps) => {
  return (
    <Card className="w-full max-w-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
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
              <span className="text-sm text-gray-500">
                {formatDate(tweet.created_at)}
              </span>
            </div>

            <p className="text-gray-800 whitespace-pre-wrap">{tweet.text}</p>
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
              <span>{tweet.public_metrics.reply_count}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
            >
              <Repeat2 className="h-5 w-5" />
              <span>{tweet.public_metrics.retweet_count}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
            >
              <Heart className="h-5 w-5" />
              <span>{tweet.public_metrics.like_count}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <Share className="h-5 w-5" />
              <span>{tweet.public_metrics.quote_count}</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TweetCard;
