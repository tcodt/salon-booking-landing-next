/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/aida-public/**",
      },
      {
        protocol: "https",
        hostname: "queuingprojectapi.pythonanywhere.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
