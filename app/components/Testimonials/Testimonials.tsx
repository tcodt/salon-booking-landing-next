"use client";
import { useState, useEffect, useCallback } from "react";

const testimonialsData = [
  {
    name: "احمد رضایی",
    text: "خدمات حرفه‌ای و محیطی بسیار تمیز. پرسنل خوش برخورد و متخصص. حتماً توصیه می‌کنم.",
  },
  {
    name: "رضا محمدی",
    text: "بهترین آرایشگاهی که تا حالا رفتم. کوتاهی مو عالی و اصلاح صورت بی‌نظیر. حتماً دوباره مراجعه خواهم کرد.",
  },
  {
    name: "امیر حسینی",
    text: "تجربه‌ای عالی و متفاوت. از کیفیت خدمات بسیار راضی بودم. قیمت‌ها هم منصفانه است.",
  },
  {
    name: "مهدی قربانی",
    text: "رفتار حرفه‌ای و فضای بسیار عالی. قطعاً همیشه مشتری می‌مونم.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ✅ Infinite carousel with smooth transitions
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  }, []);

  // ✅ Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handlePrev = () => {
    prevSlide();
  };

  const handleNext = () => {
    nextSlide();
  };

  // ✅ Calculate visible testimonials for infinite effect
  const getVisibleTestimonials = () => {
    const total = testimonialsData.length;
    const prev = current === 0 ? total - 1 : current - 1;
    const next = (current + 1) % total;

    return [
      testimonialsData[prev],
      testimonialsData[current],
      testimonialsData[next],
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#19705D" }}>
            نظرات مشتریان
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نظر برخی از همراهان ما درباره کیفیت خدمات
          </p>
        </div>

        {/* ✅ Enhanced Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            {/* ✅ Main Carousel */}
            <div className="relative w-full overflow-hidden">
              <div className="flex justify-center items-center">
                {/* Previous Card (hidden on mobile) */}
                <div className="hidden md:block transform scale-90 opacity-60 transition-all duration-300">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm w-64 mx-2">
                    <div className="flex items-center mb-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#19705D" }}
                      >
                        <span className="text-white font-bold text-sm">
                          {visibleTestimonials[0].name.charAt(0)}
                        </span>
                      </div>
                      <div className="mr-3">
                        <h3 className="font-bold text-sm">
                          {visibleTestimonials[0].name}
                        </h3>
                        <div className="flex text-yellow-400 text-sm">
                          {"★".repeat(5)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-sm">
                      {visibleTestimonials[0].text}
                    </p>
                  </div>
                </div>

                {/* ✅ Current Active Card */}
                <div
                  className={`bg-gray-50 p-8 rounded-xl shadow-lg mx-2 max-w-md w-full transform transition-all duration-500 ${
                    isTransitioning
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#19705D" }}
                    >
                      <span className="text-white font-bold text-lg">
                        {testimonialsData[current].name.charAt(0)}
                      </span>
                    </div>
                    <div className="mr-3">
                      <h3 className="font-bold">
                        {testimonialsData[current].name}
                      </h3>
                      <div className="flex text-yellow-400">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    {testimonialsData[current].text}
                  </p>
                </div>

                {/* Next Card (hidden on mobile) */}
                <div className="hidden md:block transform scale-90 opacity-60 transition-all duration-300">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm w-64 mx-2">
                    <div className="flex items-center mb-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#19705D" }}
                      >
                        <span className="text-white font-bold text-sm">
                          {visibleTestimonials[2].name.charAt(0)}
                        </span>
                      </div>
                      <div className="mr-3">
                        <h3 className="font-bold text-sm">
                          {visibleTestimonials[2].name}
                        </h3>
                        <div className="flex text-yellow-400 text-sm">
                          {"★".repeat(5)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-sm">
                      {visibleTestimonials[2].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white shadow-lg px-4 py-3 rounded-full text-xl hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            aria-label="مشاهده نظر قبلی"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white shadow-lg px-4 py-3 rounded-full text-xl hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            aria-label="مشاهده نظر بعدی"
          >
            ›
          </button>

          {/* ✅ Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrent(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "bg-[#19705D] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                } h-3`}
                aria-label={`رفتن به نظر ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
