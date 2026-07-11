import type { NextConfig } from "next";
import path from "node:path";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
