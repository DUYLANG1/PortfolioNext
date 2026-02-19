import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "lottie-react",
      "react-type-animation",
    ],
  },
  reactCompiler: true,
  typedRoutes: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  // Use lottie-web light build (SVG renderer only) to reduce bundle ~137KB
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "lottie-web": "lottie-web/build/player/lottie_light.min.js",
    };
    return config;
  },
};

export default nextConfig;
