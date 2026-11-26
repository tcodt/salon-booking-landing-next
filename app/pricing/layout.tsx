import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd, breadcrumb } from "@/lib/jsonld";

const title = "قیمت نرم‌افزار مدیریت سالن زیبایی | تعرفه پلن‌های نارژین";
const description =
  "تعرفه و مقایسهٔ پلن‌های نرم‌افزار مدیریت سالن زیبایی نارژین: امکانات هر پلن، دورهٔ آزمایشی ۱۴ روزه و روش پرداخت. سالن خود را رایگان بسازید.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { type: "website", locale: "fa_IR", siteName: "نارژین", url: "/pricing", title, description, images: [{ url: "/images/logo-main.png", width: 1280, height: 1280, alt: "لوگوی نارژین" }] },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "تعرفه", path: "/pricing" }])} />
      {children}
    </>
  );
}
