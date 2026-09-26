import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Forward all /api calls to the backend Vercel deployment
    const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, '');
    if (!backendUrl) {
      return [];
    }
    return [
      {
        source: '/api/auth/:path*',
        destination: `${targetUrl}/api/auth/:path*`,
      },
      {
        source: '/api/challenges/:path*',
        destination: `${targetUrl}/api/challenges/:path*`,
      },
      {
        source: '/api/execution/:path*',
        destination: `${targetUrl}/api/execution/:path*`,
      },
      {
        source: '/api/gamification/:path*',
        destination: `${targetUrl}/api/gamification/:path*`,
      },
      {
        source: '/api/profile/:path*',
        destination: `${targetUrl}/api/profile/:path*`,
      },
      {
        source: '/api/admin/:path*',
        destination: `${targetUrl}/api/admin/:path*`,
      },
    ];
  },
};

export default nextConfig;
