import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'cdn-images-1.medium.com',
      },
      {
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
