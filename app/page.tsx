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
  title: "نارژین | مدیریت و نوبت‌دهی آنلاین آرایشگاه",
  description:
    "نارژین نرم‌افزار مدیریت سالن زیبایی: رزرو آنلاین، یادآوری پیامکی، مدیریت مشتریان و گزارش درآمد در یک پنل.",
  keywords: "نوبت‌دهی آنلاین, مدیریت آرایشگاه, سالن زیبایی, رزرو نوبت, نارژین",
  robots: "index, follow",
  openGraph: {
    title: "نارژین | مدیریت و نوبت‌دهی آنلاین آرایشگاه",
    description:
      "رزرو آنلاین، مدیریت مشتریان و گزارش مالی برای سالن‌های زیبایی.",
    type: "website",
    locale: "fa_IR",
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
