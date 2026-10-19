import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old org chart page was replaced by /divisi
      { source: "/struktur", destination: "/divisi", permanent: true },
    ];
  },
};

export default nextConfig;
