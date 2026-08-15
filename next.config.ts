import type { NextConfig } from "next";

// Define if it's production build
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  // basePath tidak diperlukan untuk Hostinger (custom domain)
  // basePath: isProd ? "/CompanyProfile" : "",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
