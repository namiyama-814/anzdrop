import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  transpilePackages: ["api"],
  ignoreBuildErrors: true,
};

export default nextConfig;
