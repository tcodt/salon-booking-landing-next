"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  FaBars, 
  FaTimes, 
  FaInstagram, 
  FaTelegramPlane, 
  FaPhone 
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/features", label: "قابلیت‌ها" },
    { href: "/pricing", label: "تعرفه‌ها" },
    { href: "/blog", label: "مقالات" },
  ];

  const socialLinks = [
    { 
      href: "https://instagram.com/narjin", 
      icon: FaInstagram, 
      label: "اینستاگرام",
      color: "hover:text-pink-600"
    },
    { 
      href: "https://t.me/narjin", 
      icon: FaTelegramPlane, 
      label: "تلگرام",
      color: "hover:text-blue-500"
    },
    { 
      href: "tel:09912146083", 
      icon: FaPhone, 
      label: "تماس تلفنی",
      color: "hover:text-green-600"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface/95 backdrop-blur-md shadow-[0px_4px_20px_rgba(6,95,70,0.05)]"
            : "bg-surface/80 backdrop-blur-sm"
        }`}
      >
        <nav className="flex items-center justify-between px-4 md:px-12 py-3 max-w-7xl mx-auto">
          {/* لوگو و نام برند */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image
                src="/images/logo-main.png"  // ✅ مسیر صحیح از ریشه public
                alt="نارژین"
                width={48}
                height={48}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-extrabold text-primary">
              نارژین
            </span>
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* دکمه‌های اقدام */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 active:scale-95 transition-all duration-200">
              شروع رایگان
            </button>
          </div>

          {/* دکمه همبرگر - موبایل */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-container transition-colors duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-primary" />
            ) : (
              <FaBars className="w-6 h-6 text-primary" />
            )}
          </button>
        </nav>
      </header>

      {/* منوی موبایل (اورلی) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* بک‌دراپ */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* سایدبار منو */}
        <div
          className={`absolute top-0 left-0 h-full w-80 bg-surface shadow-2xl transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* هدر سایدبار با لوگو */}
          <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo-main.png"  // ✅ مسیر صحیح از ریشه public
                  alt="نارژین"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-extrabold text-primary">نارژین</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-surface-container transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="w-5 h-5 text-on-surface-variant" />
            </button>
          </div>

          {/* لینک‌های منو */}
          <nav className="p-6 flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-200px)] mobile-menu-scroll">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* خط جداکننده */}
            <div className="h-px bg-outline-variant/30 my-4" />

            {/* دکمه اقدام در موبایل */}
            <button className="w-full bg-primary text-white px-6 py-3 rounded-xl text-base font-medium hover:opacity-90 active:scale-95 transition-all duration-200 mt-2">
              شروع رایگان
            </button>

            {/* شبکه‌های اجتماعی */}
            <div className="mt-8 pt-6 border-t border-outline-variant/30">
              <p className="text-sm text-on-surface-variant mb-4 text-center">
                ما را در شبکه‌های اجتماعی دنبال کنید
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-1 text-on-surface-variant transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* اطلاعات تماس */}
            <div className="mt-4 pt-4 border-t border-outline-variant/30">
              <p className="text-xs text-on-surface-variant text-center">
                پشتیبانی: 09912146083
              </p>
              <p className="text-xs text-on-surface-variant text-center mt-1">
                narjin.ir
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}