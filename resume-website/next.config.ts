import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      'shared_ui': '../packages/shared_ui/dist/index.js',
    },
  },
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'shared_ui': '../packages/shared_ui/dist/index.js',
    };
    return config;
  },
};

export default nextConfig;
