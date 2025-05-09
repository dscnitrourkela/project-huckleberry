import Blogs from '@/components/admin/blogs/blogs';
import { resourcesMetadata } from '@/config/seo/resources-metadata';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = resourcesMetadata;

const page = () => {
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default page;
