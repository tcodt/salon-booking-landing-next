"use client";

import { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import CtaSection from "./components/CtaSection/CtaSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`با تشکر! ایمیل شما ثبت شد: ${email}`);
    setEmail("");
  };

  return (
    <div
      className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 text-gray-800"
      dir="rtl"
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Section */}
      <Contact email={email} setEmail={setEmail} handleSubmit={handleSubmit} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
