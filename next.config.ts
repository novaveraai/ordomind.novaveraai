import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ordomind.novaveraai",
  assetPrefix: "/ordomind.novaveraai/",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
