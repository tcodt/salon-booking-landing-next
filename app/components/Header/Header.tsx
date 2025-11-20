"use client";

import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-sm relative md:fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center border shadow-sm border-[#19705D]">
            <Image
              src="/images/logo-main.png"
              alt="Logo"
              className="w-full h-full object-cover"
              fill
              sizes="64px"
            />
          </div>
          <span
            className="mr-3 text-4xl font-bold"
            style={{ color: "#19705D", fontFamily: "IranNastaliq" }}
          >
            نارژین
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8 space-x-reverse space-x-8">
          <a
            href="#services"
            className="hover:text-opacity-80 transition"
            style={{ color: "#19705D" }}
          >
            خدمات
          </a>
          <a
            href="#about"
            className="hover:text-opacity-80 transition"
            style={{ color: "#19705D" }}
          >
            درباره ما
          </a>
          <a
            href="#testimonials"
            className="hover:text-opacity-80 transition"
            style={{ color: "#19705D" }}
          >
            نظرات مشتریان
          </a>
          <a
            href="#contact"
            className="hover:text-opacity-80 transition"
            style={{ color: "#19705D" }}
          >
            تماس با ما
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded shadow-lg absolute top-full left-4 z-50">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a
                href="#services"
                className="py-2 hover:text-opacity-80 transition"
                style={{ color: "#19705D" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                خدمات
              </a>
              <a
                href="#about"
                className="py-2 hover:text-opacity-80 transition"
                style={{ color: "#19705D" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                درباره ما
              </a>
              <a
                href="#testimonials"
                className="py-2 hover:text-opacity-80 transition"
                style={{ color: "#19705D" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                نظرات مشتریان
              </a>
              <a
                href="#contact"
                className="py-2 hover:text-opacity-80 transition"
                style={{ color: "#19705D" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                تماس با ما
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
