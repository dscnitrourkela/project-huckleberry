'use server';
import { asyncHandler, handleSuccess } from '@/utils';

export const getAllBlogs = asyncHandler(async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BLOGS_API_URL!);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return handleSuccess({ blogs: data, message: null });
});
