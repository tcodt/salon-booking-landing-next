import { Metadata } from "next";
import Hero from "./components/home/hero";
import ProductVideo from "./components/home/product-video";
import Features from "./components/home/features";
import Comparison from "./components/home/comparison";
import Testimonials from "./components/home/testimonials";
import ContactForm from "./components/home/contact-form";

export const metadata: Metadata = {
  title: "نارژین | مدیریت و نوبت‌دهی آنلاین آرایشگاه",
  description:
    "نارژین هوشمندترین دستیار مدیریت سالن شماست. بدون تماس تلفنی، ۲۴ ساعته نوبت بگیرید و درآمدتان را افزایش دهید.",
  keywords: "نوبت‌دهی آنلاین, مدیریت آرایشگاه, سالن زیبایی, رزرو نوبت",
  robots: "index, follow",
  openGraph: {
    title: "نارژین | مدیریت و نوبت‌دهی آنلاین آرایشگاه",
    description:
      "نارژین هوشمندترین دستیار مدیریت سالن شماست. بدون تماس تلفنی، ۲۴ ساعته نوبت بگیرید و درآمدتان را افزایش دهید.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductVideo />
        <Features />
        <Comparison />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}
