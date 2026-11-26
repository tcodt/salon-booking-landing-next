/** @type {import('next').NextConfig} */
const nextConfig = {
  // هدر X-Powered-By لازم نیست افشا شود
  poweredByHeader: false,
  // خروجی مستقل (server.js + فقط وابستگی‌های لازم) برای تصویر کوچک Docker
  output: "standalone",
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
  // هدرهای امنیتی «اضافه‌شونده». عمداً تکرار نشده‌اند: X-Content-Type-Options و Referrer-Policy
  // در قالب‌های nginx پروژه (deploy/nginx/*.template) تنظیم می‌شوند و تکرارشان دو هدر می‌سازد.
  // CSP کامل (script-src) عمداً نیست: Next اسکریپت‌های inline تزریق می‌کند و CSP مبتنی بر nonce رندر
  // پویا می‌خواهد؛ فقط زیرمجموعهٔ بدون ریسک اینجاست. Trusted Types هم فعال نشده (React/Next سازگار نیست).
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          {
            key: "Content-Security-Policy",
            value: "base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'",
          },
        ],
      },
    ];
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
