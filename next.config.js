/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'


const nextConfig = {
  reactStrictMode: true,
  images: {
    path: "/",
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig

//basePath: '/next-blog-2023',