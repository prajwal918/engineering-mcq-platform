/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No next/image remotePatterns configured on purpose: diagram images are
  // rendered as plain <img> (see components/EngineeringDiagram.tsx) so this
  // app never asks the Image Optimization API to fetch an arbitrary external
  // URL. Add remotePatterns here only if next/image starts being used for
  // external hosts, and scope it to specific hostnames rather than a
  // wildcard.
};

export default nextConfig;
