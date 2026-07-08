import type { NextConfig } from "next";

// Define if it's production build
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  // Gunakan basePath hanya saat build/deploy ke GitHub Pages.
  // Sesuaikan dengan nama repository GitHub Anda.
  basePath: isProd ? "/CompanyProfile" : "",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
