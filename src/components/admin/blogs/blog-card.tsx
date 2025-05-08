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

interface BlogCardProps {
  blog: {
    content: string;
    title: string;
    link: string;
    author: string;
    pubDate: string;
    categories: string[];
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
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

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={imageUrl || ''}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        <h3 className="font-semibold text-lg line-clamp-2">{blog.title}</h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <Button
            variant="link"
            className="p-0 h-auto font-normal"
            onClick={() => window.open(authorUrl || '', '_blank')}
          >
            {blog.author}
          </Button>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{blog.pubDate.split(' ')[0]}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => window.open(blog.link, '_blank')}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
