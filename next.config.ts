import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repository-name>; account sites
// (owner.github.io) are served from the root. The workflow exposes this value
// automatically when building on GitHub Actions.
const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const basePath = repository && repository !== `${owner}.github.io` ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
