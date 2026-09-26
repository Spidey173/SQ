import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Forward all /api calls to the backend Vercel deployment
    const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, '') || 'https://sql-quest-backend.vercel.app';
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
