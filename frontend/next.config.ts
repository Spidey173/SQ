import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // In local dev, forward /api to local FastAPI server (http://127.0.0.1:8000)
    // In Vercel monorepo deployment, /api is handled directly by vercel.json -> api/index.py
    const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, '');
    if (!backendUrl && process.env.NODE_ENV === 'production') {
      return [];
    }
    const targetUrl = backendUrl || 'http://127.0.0.1:8000';
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
