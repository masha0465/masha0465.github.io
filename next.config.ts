import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages, Vercel, or any static host.
// If deployed under a sub-path (e.g. https://user.github.io/portfolio), set NEXT_PUBLIC_BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
