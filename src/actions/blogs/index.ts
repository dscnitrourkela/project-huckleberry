'use server';
import { handleError, handleSuccess } from '@/utils';

export async function getAllBlogs() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BLOGS_API_URL!);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return handleSuccess({ blogs: data, message: null });
  } catch (error) {
    console.error('Fetch error:', error);
    return handleError(error);
  }
}
