import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { getSite } from "@/lib/site";
import { JsonLd, SITE_URL, intlPhone } from "@/lib/jsonld";

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
  applicationName: "نارژین",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "نارژین",
    images: [{ url: "/images/logo-main.png", width: 1280, height: 1280, alt: "لوگوی نارژین" }],
  },
  twitter: { card: "summary", images: ["/images/logo-main.png"] },
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
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "نارژین",
              url: SITE_URL,
              logo: `${SITE_URL}/images/logo-main.png`,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  telephone: intlPhone(site.settings.phone),
                  email: site.settings.email || undefined,
                  availableLanguage: "fa",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "نارژین",
              inLanguage: "fa-IR",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ]}
        />
        <Navbar />
        {children}
        <Footer settings={site.settings} />
      </body>
    </html>
  );
}
