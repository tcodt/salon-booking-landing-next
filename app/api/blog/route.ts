/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/aida-public/**',
      },
      {
        protocol: 'https',
        hostname: 'queuingprojectapi.pythonanywhere.com',
        port: '',
        pathname: '/uploads/articles/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
    
        source: '/landing/article/:slug',
        destination: 'https://queuingprojectapi.pythonanywhere.com/landing/article/:slug/',
      
      },
      {
        source: '/landing/article/',
        destination: 'https://queuingprojectapi.pythonanywhere.com/landing/article/',
      },
    ];
  },
};

module.exports = nextConfig;