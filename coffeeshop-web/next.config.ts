import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Untuk Docker deployment
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
