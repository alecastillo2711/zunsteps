/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/zunsteps",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
