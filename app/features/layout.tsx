import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "امکانات نارژین | نوبت‌دهی آنلاین، مدیریت مشتری و گزارش مالی",
  description:
    "رزرو آنلاین، پرونده مشتری، مدیریت کارکنان و گزارش مالی سالن زیبایی؛ همه در یک پنل ساده و فارسی. سالن خود را رایگان بسازید.",
  alternates: { canonical: "/features" },
};

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return children;
}
