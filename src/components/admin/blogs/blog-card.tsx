import Image from 'next/image';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';
import { BlogCardProps } from '@/types/admin/blogs';

const BlogCard = (blog: BlogCardProps) => {
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

  const handleCardClick = () => {
    window.open(blog.link, '_blank');
  };

  return (
    <Card
      className="w-full h-[400px] sm:h-[420px] md:h-[430px] flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-purple-50 cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader className="p-0">
        <div className="h-[160px] sm:h-[180px] relative overflow-hidden">
          <Image
            src={imageUrl || '/placeholder-image.jpg'}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3 flex-1">
        <h3 className="font-semibold text-lg line-clamp-2">{blog.title}</h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <Button
            variant="link"
            className="p-0 h-auto font-normal truncate max-w-[150px]"
            onClick={(e) => {
              e.stopPropagation();
              window.open(authorUrl || '', '_blank');
            }}
          >
            {blog.author}
          </Button>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{blog.pubDate.split(' ')[0]}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 overflow-hidden max-h-[60px] ">
          {blog.categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs ">
              {category}
            </Badge>
          ))}
          {blog.categories.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{blog.categories.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            window.open(blog.link, '_blank');
          }}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
