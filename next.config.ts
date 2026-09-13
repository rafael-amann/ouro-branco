import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/ouro-branco" : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(isGitHubPages ? { output: "export" as const, trailingSlash: true } : {}),
  basePath,
  images: { unoptimized: isGitHubPages },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;