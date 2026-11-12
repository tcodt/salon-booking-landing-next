import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "بلاگ نارژین | آموزش مدیریت و افزایش درآمد سالن زیبایی",
  description:
    "مقاله‌های کاربردی برای صاحبان سالن زیبایی: کاهش لغو نوبت، افزایش درآمد، مدیریت مشتریان و کارکنان.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
