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
import FaqDropdown from "./components/FaqDropdown/FaqDropdown";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🟢 این بخش را میتونی بعداً به API یا EmailJS وصل کنی
    alert(`
      ✅ پیام شما ارسال شد!

      نام: ${name}
      ایمیل: ${email}
      شماره تماس: ${phone}
      پیام: ${message}
    `);

    // پاک کردن فرم
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
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

      {/* FAQ Section */}
      <FaqDropdown />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Section */}
      <Contact
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
