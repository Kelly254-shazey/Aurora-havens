import type { NextConfig } from 'next';
import path from 'path';

const withBundleAnalyzer = (() => {
  try {
    const analyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
    });
    return analyzer;
  } catch {
    return (config: NextConfig) => config;
  }
})();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', '@tanstack/react-query'],
  },
  outputFileTracingRoot: path.join(__dirname, '../../'),
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' http://localhost:3001 https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'" },
        ],
      },
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  transpilePackages: ['@aurora-havens/shared'],
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
    NEXT_PUBLIC_GOOGLE_MAPS_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '',
  },
};

export default withBundleAnalyzer(nextConfig);
