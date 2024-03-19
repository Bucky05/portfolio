/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'default',
    // Missing comma here
    unoptimized: true
}
}

module.exports = nextConfig
