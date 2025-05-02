'use client';

import { getAllBlogs } from '@/actions/blogs';
import React, { useEffect, useState } from 'react';
import BlogCard from './blog-card';
import { Container } from '@/components/ui/container';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/ui/page-header';

const Blogs = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getAllBlogs();
      if ('data' in response) {
        console.log(response.data.blogs.items);
        setBlogList(response.data.blogs.items);
      } else {
        console.error(response.message);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Container>
      <PageHeader className="my-7">
        <PageHeaderHeading>Blog Posts</PageHeaderHeading>
        <PageHeaderDescription>
          Explore our latest thoughts, ideas, and insights
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogList.length > 0 &&
          blogList.map((blog: any) => <BlogCard blog={blog} key={blog.link} />)}
      </div>
    </Container>
  );
};

export default Blogs;
