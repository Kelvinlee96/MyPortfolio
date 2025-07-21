import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Uncomment these lines if hosting on a subdomain (like username.github.io/portfolio)
  // basePath: '/MyPortfolio',
  // assetPrefix: '/MyPortfolio/',
};

export default nextConfig;