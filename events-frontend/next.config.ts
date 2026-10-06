import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Emit a self-contained server in .next/standalone for a small Docker image
  output: "standalone",
};

export default nextConfig;
