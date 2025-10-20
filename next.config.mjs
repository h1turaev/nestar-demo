/** oldingi TypeScript fayldan shu kodni olib, quyidagicha yoz: */

// ❌ eski (TypeScript) variant
// import type { NextConfig } from "next";
// const nextConfig: NextConfig = { reactStrictMode: true };
// export default nextConfig;

// ✅ yangi (mjs) variant
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;