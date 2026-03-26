import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/famis_website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
