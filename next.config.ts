/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.narjin.ir",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.narjin.ir",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "narjin.ir",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/aida-public/**",
      },
      {
        protocol: "https",
        hostname: "queuingprojectapi.pythonanywhere.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/landing/article/:slug",
        destination: "https://api.narjin.ir/landing/article/:slug/",
      },
      {
        source: "/landing/article/",
        destination: "https://api.narjin.ir/landing/article/",
      },
      {
        source: "/landing/plans/",
        destination: "https://api.narjin.ir/landing/plans/",
      },
    ];
  },
};

export default nextConfig;
