'use server';
import { asyncHandler, handleError, handleSuccess } from '@/utils';

export const getAllBlogs = asyncHandler(async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BLOGS_API_URL!);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (data.items) {
    const blogs = data.items;
    return handleSuccess({ blogs, message: 'Blogs fetched successfully' });
  }
  return handleError({ message: 'Blogs not found' });
});
