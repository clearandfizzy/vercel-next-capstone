import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['fantastic-broccoli-g4p9559pqgh7p-3000.app.github.dev'],
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'fantastic-broccoli-g4p9559pqgh7p-3000.app.github.dev',
      ],
    },
  },
};

export default nextConfig;