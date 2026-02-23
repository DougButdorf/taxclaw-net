/** @type {import('next').NextConfig} */
const nextConfig = {
  // This repo lives inside a larger workspace that also has a lockfile.
  // Explicitly set tracing root to this project to avoid Next.js root inference warnings.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
