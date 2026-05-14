import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com", pathname: "/**" },
    ],
  }
};

export default withContentlayer(nextConfig);
