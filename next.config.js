const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost", "portofolio-achmad96.vercel.app"],
    },
  },
};

module.exports = withContentlayer(nextConfig);
