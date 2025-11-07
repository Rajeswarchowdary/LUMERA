import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "images.immediate.co.uk",
      },
      {
        protocol: "https",
        hostname: "gatherforbread.com",
      },
      {
        protocol: "https",
        hostname: "espressa.es",
      },
      {
        protocol: "https",
        hostname: "frostingandfettuccine.com",
      },
      {
        protocol: "https",
        hostname: "brot.ae",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;