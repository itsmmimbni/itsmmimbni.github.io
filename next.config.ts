import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Required for static hosting
  images: {
    unoptimized: true,   // GitHub Pages doesn't support Next.js image optimization
  },
  // If your repo is NOT 'itsmmimbni.github.io' (e.g. it's 'bni-portal'), 
  // you might need: basePath: '/bni-portal',
};

export default nextConfig;