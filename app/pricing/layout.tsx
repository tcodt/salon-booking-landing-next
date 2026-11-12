import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "قیمت نرم‌افزار مدیریت سالن زیبایی | شروع رایگان با نارژین",
  description:
    "پلن‌ها و قیمت نرم‌افزار مدیریت سالن زیبایی نارژین. سالن خود را رایگان بسازید و نوبت‌دهی آنلاین را همین امروز شروع کنید.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children;
}
