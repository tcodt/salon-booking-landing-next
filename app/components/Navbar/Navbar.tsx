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
  FaPhone,
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
      color: "hover:text-pink-600",
    },
    {
      href: "https://t.me/narjin",
      icon: FaTelegramPlane,
      label: "تلگرام",
      color: "hover:text-blue-500",
    },
    {
      href: "tel:09912146083",
      icon: FaPhone,
      label: "تماس تلفنی",
      color: "hover:text-green-600",
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
        className={
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-[0px_4px_20px_rgba(6,95,70,0.08)] transition-all duration-300"
            : "fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-primary-home/5 transition-all duration-300"
        }
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-12">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0 md:h-12 md:w-12">
              <Image
                src="/images/logo-main.png"
                alt="نارژین"
                width={48}
                height={48}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className="text-xl font-extrabold text-primary md:text-2xl">
              نارژین
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-base font-medium text-primary transition-colors duration-300"
                    : "text-base font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://panel.narjin.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            >
              شروع رایگان
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 rounded-lg p-2 transition-colors duration-200 hover:bg-surface-container md:hidden"
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-primary" />
            ) : (
              <FaBars className="h-6 w-6 text-primary" />
            )}
          </button>
        </nav>
      </header>

      <div
        className={
          isMenuOpen
            ? "pointer-events-auto fixed inset-0 z-40 opacity-100 transition-all duration-500"
            : "pointer-events-none fixed inset-0 z-40 opacity-0 transition-all duration-500"
        }
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          role="presentation"
        />

        <div
          className={
            isMenuOpen
              ? "absolute top-0 right-0 h-full w-[min(20rem,88vw)] max-w-[320px] translate-x-0 bg-surface shadow-2xl transition-all duration-500 ease-out"
              : "absolute top-0 right-0 h-full w-[min(20rem,88vw)] max-w-[320px] translate-x-full bg-surface shadow-2xl transition-all duration-500 ease-out"
          }
        >
          <div className="flex items-center justify-between border-b border-outline-variant/30 p-6">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src="/images/logo-main.png"
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
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg p-2 transition-colors hover:bg-surface-container"
              aria-label="بستن منو"
            >
              <FaTimes className="h-5 w-5 text-on-surface-variant" />
            </button>
          </div>

          <nav className="flex max-h-[calc(100vh-220px)] flex-col gap-2 overflow-y-auto p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  pathname === link.href
                    ? "rounded-xl bg-primary/10 px-4 py-3 text-base font-medium text-primary transition-colors"
                    : "rounded-xl px-4 py-3 text-base font-medium text-on-surface-variant transition-colors hover:bg-surface-container"
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://panel.narjin.ir"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mx-4 mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white"
            >
              شروع رایگان
            </a>
          </nav>

          <div className="absolute right-0 bottom-0 left-0 border-t border-outline-variant/30 p-6">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isTel = social.href.startsWith("tel:");
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isTel ? undefined : "_blank"}
                    rel={isTel ? undefined : "noopener noreferrer"}
                    className={
                      "flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all " +
                      social.color
                    }
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-3 text-center text-xs text-on-surface-variant">
              پشتیبانی: 09912146083
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
