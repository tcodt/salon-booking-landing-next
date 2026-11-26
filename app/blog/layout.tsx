import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "بلاگ نارژین | آموزش مدیریت و افزایش درآمد سالن زیبایی",
  description:
    "مقاله‌های کاربردی برای صاحبان سالن زیبایی: کاهش لغو نوبت، افزایش درآمد، مدیریت مشتریان و کارکنان.",
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", locale: "fa_IR", siteName: "نارژین", url: "/blog", title: "بلاگ نارژین | آموزش مدیریت و افزایش درآمد سالن زیبایی", description: "مقاله‌های کاربردی برای صاحبان سالن زیبایی: کاهش لغو نوبت، افزایش درآمد، مدیریت مشتریان و کارکنان.", images: [{ url: "/images/logo-main.png", width: 1280, height: 1280, alt: "لوگوی نارژین" }] },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
