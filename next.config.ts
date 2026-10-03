import type { NextConfig } from "next";

// GitHub Pages serves the site under /MyPortfolio; in dev it runs at the root.
// Keep in sync with BASE_PATH in src/data/portfolio.ts
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/MyPortfolio' : '',
  assetPrefix: isProd ? '/MyPortfolio/' : '',
};

export default nextConfig;