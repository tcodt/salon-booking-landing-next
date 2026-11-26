import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { getSite } from "@/lib/site";

// فونت اصلی سایت: IRANSansX (نسخهٔ اعداد فارسی، وزن Medium) — فایل رسمی WOFF2 همان فونتِ قبلی (TTF).
// display=swap + preload خودکار + فونت جایگزین با متریک نزدیک تا متن تیتر بی‌دلیل منتظر فونت نماند.
const mainFont = localFont({
  src: "./fonts/IRANSansXFaNum-Medium.woff2",
  display: "swap",
  variable: "--font-main",
  adjustFontFallback: "Arial",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "نارژین | نرم‌افزار نوبت‌دهی و مدیریت سالن زیبایی",
  metadataBase: new URL("https://narjin.ir"),
  description:
    "نارژین نرم‌افزار تخصصی مدیریت سالن‌های زیبایی — رزرو آنلاین، مدیریت مشتریان، گزارش مالی و کارکنان",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo-main.png", type: "image/png", sizes: "1280x1280" },
    ],
    apple: [{ url: "/images/logo-main.png", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = await getSite();
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <link
          rel="icon"
          href="/images/favicon-32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/images/logo-main.png" />
      </head>
      <body
        className={`${mainFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer settings={site.settings} />
      </body>
    </html>
  );
}
