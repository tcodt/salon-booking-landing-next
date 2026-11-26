import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd, breadcrumb, faqPage } from "@/lib/jsonld";
import { FEATURE_FAQS } from "./faqs";

const title = "امکانات نرم‌افزار مدیریت سالن زیبایی | نارژین";
const description =
  "رزرو آنلاین با لینک اختصاصی، تقویم نوبت‌ها، پرونده مشتری، مدیریت کارکنان و گزارش درآمد سالن زیبایی در یک پنل فارسی. ۱۴ روز رایگان شروع کنید.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/features" },
  openGraph: { type: "website", locale: "fa_IR", siteName: "نارژین", url: "/features", title, description, images: [{ url: "/images/logo-main.png", width: 1280, height: 1280, alt: "لوگوی نارژین" }] },
};

export default function FeaturesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={[breadcrumb([{ name: "امکانات", path: "/features" }]), faqPage(FEATURE_FAQS)]} />
      {children}
    </>
  );
}
