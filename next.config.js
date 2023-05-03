/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
  // for production on vercel
  experimental: {
    appDir: true,
  },
  // so next has access to env, but NEVER post keys here, write as varible for access
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
};

module.exports = nextConfig;
