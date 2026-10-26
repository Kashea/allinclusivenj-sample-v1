import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match the existing WordPress URLs (e.g. /kitchen-remodels/) so canonical links,
  // internal links and search-engine history all point at the same address.
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/category/uncategorized", destination: "/news/", permanent: true },
      { source: "/author/seoteam", destination: "/news/", permanent: true },
      { source: "/author/kyleyondermooncreative-com", destination: "/news/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "allinclusivenj.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
