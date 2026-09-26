import type { NextConfig } from "next";

const envUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
const backendUrl = (envUrl && envUrl.startsWith("http"))
  ? envUrl.replace(/\/api\/?$/, '')
  : 'https://sql-quest-backend.vercel.app';

const nextConfig: NextConfig = {
  async rewrites() {
    // Forward all /api calls to the backend Vercel deployment
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
