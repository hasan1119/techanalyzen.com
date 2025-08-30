import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      "upload.wikimedia.org",
      "placehold.co",
      "i.postimg.cc",
      "i.pinimg.com",
      "i.pravatar.cc",
    ],
  },
};

export default nextConfig;
