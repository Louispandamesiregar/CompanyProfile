import type { NextConfig } from "next";

// Define if it's production build
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  // basePath: isProd ? "/CompanyProfile" : "", // Buka komentar ini HANYA jika Anda deploy ke GitHub Pages tanpa custom domain
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
