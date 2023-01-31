/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/next-blog-2023/' : '',
  basePath: !debug ? '/next-blog-2023/' : '',
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig

//basePath: '/next-blog-2023',