import Image from 'next/image';
import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ExternalLink } from 'lucide-react';
import { BlogCardProps } from '@/types/admin/blogs';
import { useState } from 'react';

const BlogCard = (blog: BlogCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const extractImageUrl = (content: string) => {
    const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgTagMatch ? imgTagMatch[1] : null;
  };

  const extractAuthorUrl = (link: string) => {
    const authorUrlMatch = link.match(/https:\/\/[a-zA-Z0-9-]+\.medium\.com/);
    return authorUrlMatch ? authorUrlMatch[0] : null;
  };

  const imageUrl = extractImageUrl(blog.content);
  const authorUrl = extractAuthorUrl(blog.link);

  // Random background color (soft pastel)
  const randomBgColor = useMemo(() => {
    const bgColors = [
      'bg-yellow-50',
      'bg-blue-50',
      'bg-green-50',
      'bg-pink-50',
      'bg-purple-50',
    ];
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  }, []);

  const handleCardClick = () => {
    window.open(blog.link, '_blank');
  };

  return (
    <Card
      className={`w-full h-[420px] sm:h-[440px] flex flex-col overflow-hidden ${randomBgColor} 
        shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] transition-all duration-200 
      border-2 border-black rounded-md ${isHovering ? 'translate-x-[-3px] translate-y-[-3px]' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="p-0">
        <div className="h-[180px] relative overflow-hidden border-b-2 border-black">
          <Image
            src={imageUrl || '/placeholder-image.jpg'}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full border-2 border-black opacity-20"></div>
        </div>
      </CardHeader>

      <CardContent className="p-5 space-y-4 flex-1">
        <h3 className="font-extrabold text-lg line-clamp-2 text-black">
          {blog.title}
        </h3>

        <div className=" items-center justify-between text-sm hidden sm:flex">
          <Button
            variant="ghost"
            className="p-0 h-auto font-bold truncate max-w-[150px] text-black"
            onClick={(e) => {
              e.stopPropagation();
              window.open(authorUrl || '', '_blank');
            }}
          >
            {blog.author}
          </Button>
          <div className="flex items-center gap-2 bg-white px-2 py-1 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0)]">
            <CalendarIcon className="h-4 w-4" />
            <span className="font-bold">{blog.pubDate.split(' ')[0]}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pb-2 max-h-[70px] overflow-hidden">
          {blog.categories.slice(0, 2).map((category) => (
            <Badge
              key={category}
              className="text-xs border-2 border-black bg-white text-black font-bold py-1 px-2 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0)]"
            >
              {category}
            </Badge>
          ))}
          {blog.categories.length > 3 && (
            <Badge className="text-xs border-2 border-black bg-white text-black font-bold py-1 px-2 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0)]">
              +{blog.categories.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-extrabold border-2 border-black rounded-md 
          shadow-[3px_3px_0px_0px_rgba(0,0,0)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] 
          hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            window.open(blog.link, '_blank');
          }}
        >
          Read More <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
