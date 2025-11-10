"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MobileVideo from "../MobileVideo/MobileVideo";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const salonImages = [
    "/images/slider-1.avif",
    "/images/slider-2.jpg",
    "/images/slider-3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === salonImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [salonImages.length]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#19705D" }}
          >
            مدیریت هوشمند، زیبایی بی‌نقص
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            با نارژین، دیگه نیازی به دفتر یادداشت و تماس تلفنی نیست! همه چیز، از
            رزرو نوبت تا مدیریت مشتریان و حساب‌ها، فقط با چند کلیک انجام می‌شود.
            نارژین کنار شماست تا کسب‌وکارتان را حرفه‌ای‌تر، سریع‌تر و زیباتر
            بسازید.
          </p>
          <div className="flex flex-col sm:flex-row space-y-reverse space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-4 gap-4">
            <a
              href="https://api.narjin.ir"
              className="px-8 py-3 rounded-lg text-white font-medium text-center transition hover:opacity-90"
              style={{ backgroundColor: "#19705D" }}
            >
              اطلاعات بیشتر
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <MobileVideo />

            {/* Image Slider */}
            {/* <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8"
              style={{ borderColor: "#19705D" }}
            >
              {salonImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Salon image ${index + 1}`}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              ))}
            </div> */}

            {/* Slider Dots */}
            {/* <div className="flex justify-center mt-4 space-x-reverse space-x-2">
              {salonImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentSlide ? "#19705D" : "#d1d5db",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}

            {/* Feature Badge */}
            {/* <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#19705D" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="mr-3">
                  <p className="font-bold">تخصص بالا</p>
                  <p className="text-sm text-gray-600">سالها تجربه</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
