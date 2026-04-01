/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: ["@workspace/ui"],
  devIndicators: false,
}

export default nextConfig
