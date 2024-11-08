/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Add this line
    esmExternals: false,
  },
  webpack: (config, { isServer }) => {
    // Add this configuration
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  // Add this transpilePackages option
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
