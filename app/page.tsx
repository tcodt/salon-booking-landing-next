import { Metadata } from "next";
import Hero from "./components/home/hero";
import ProductVideo from "./components/home/product-video";
import Features from "./components/home/features";
import Comparison from "./components/home/comparison";
import Testimonials from "./components/home/testimonials";
import PricingTeaser from "./components/home/pricing-teaser";
import Faq from "./components/home/faq";
import ContactForm from "./components/home/contact-form";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "نرم‌افزار مدیریت سالن زیبایی و نوبت‌دهی | نارژین",
  description:
    "با نرم‌افزار مدیریت سالن زیبایی نارژین، نوبت‌ها، مشتریان، کارکنان و گزارش‌های مالی سالن خود را مدیریت کنید و رزرو آنلاین را ساده‌تر کنید.",
  keywords: [
    "نرم‌افزار مدیریت سالن زیبایی",
    "نرم‌افزار نوبت‌دهی سالن زیبایی",
    "مدیریت آرایشگاه",
    "رزرو آنلاین سالن زیبایی",
    "گزارش‌گیری مالی سالن زیبایی",
    "نارژین",
  ],
  robots: "index, follow",
  openGraph: {
    title: "نرم‌افزار مدیریت سالن زیبایی و نوبت‌دهی | نارژین",
    description:
      "نوبت‌دهی آنلاین، مدیریت مشتریان و کارکنان و گزارش‌های مالی سالن زیبایی با نارژین.",
    type: "website",
    locale: "fa_IR",
    url: "https://narjin.ir/",
    siteName: "نارژین",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductVideo />
      <Features />
      <Comparison />
      <Testimonials />
      <PricingTeaser />
      <Faq />
      <ContactForm />
    </main>
  );
}
