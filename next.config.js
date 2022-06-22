/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.gitbook.com'],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  }
}

module.exports = nextConfig