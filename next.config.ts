import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t2.genius.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
