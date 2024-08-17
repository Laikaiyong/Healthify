/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};

export default nextConfig;
