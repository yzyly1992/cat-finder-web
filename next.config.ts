import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Setup dev platform for Cloudflare Pages in development
if (process.env.NODE_ENV === 'development') {
  (async () => {
    const { setupDevPlatform } = await import('@cloudflare/next-on-pages/next-dev');
    await setupDevPlatform();
  })();
}

export default nextConfig;
