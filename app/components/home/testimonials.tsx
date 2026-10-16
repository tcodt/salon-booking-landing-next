"use client";

import { useEffect, useRef } from "react";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    name: "مریم سعادتی",
    role: "مدیر سالن زیبایی ماهور",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_IssQQixJH5pjI_zpUCxgkI3jyIQ9KbxcDwJW2mSA0s2YSEV07vJSueSofQQc92DyxdRdn9x_sGijQ0xmWUacpep7PIW1g7oISd_u66vmUnYZA2QNJHcIcBfSyf19YkLlENkZv0anv20D2YgzXMcd5yW9ESNOclXS0UpTTjHCEFdO7LYv9gCS6MEMetaHU3IXl98z5trmxXMl3PulTEFhSmhyL6fwHbdOICmhr3suUfa8XVNUdOYSLeEZZnfem38PjTXd2Cdzq-s",
    text: '"از وقتی نارژین رو فعال کردم، دیگه دغدغه تداخل نوبت‌ها رو ندارم. مشتری‌ها خیلی راحت از بایو اینستاگرام نوبتشون رو رزرو می‌کنن."',
  },
  {
    name: "رضا علوی",
    role: "مدیریت پیرایش مدرن",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeD_1evrhI849glnsGzexA4P0eBomnvKphKibun9uTasNrtekRf0ZnS4Vhm3xzFlrhcNcDjE7TpoLW2ggZAez3jl7PFz9ZFb_-wOuucbN66o65KsaPJR1YN2S7XqEwCk0DyOgmq2D1mgxa-CZX0sZLi7bwqGrpxwBWnYfdTZ_eRVVokwEUbodZshZnuIT34PSeNzvRHMxiD2LZ0-F219ADME61t8IhONL3YTgXQrubbCIT5H-3Rlhqz8eO0beJK2d3exZuHcd3-OI",
    text: '"سیستم حسابداری و درصدبندی آرایشگرها توی نارژین عالیه. هر شب گزارش دقیق درآمدم رو توی گوشیم دارم."',
  },
  {
    name: "سارا رضایی",
    role: "مرکز تخصصی ناخن سارا",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaalxJn4DfMgTCNUTXUdlA0-DzJMR3GN0L9TDTSdLILRrh0bc4Rk3CmTFLKVe5pftelKi1IO-zEfiq1Hl6j6qz2UtbEmTjtZBdU9OpUBWCPxCnPTZvcO20RlDwD4cS8dD8aCAiQzAaXK7NlcQFmYnUp63NsrmZafNBgSTDKZpkx_Hn4Tf30kSNPjXY8Znqxz8DcUUMfIiv2GGke3U3pZ1v7ikdG3TI_dB9e9HusI7uEyy7FxsCJhmjUL8aEx1yF5nll9Yb9zznDaw",
    text: '"ارسال پیامک یادآوری باعث شده کنسلی‌های ما نزدیک به صفر بشه. واقعاً برای هر سالنی واجبه."',
  },
  {
    name: "نیلوفر احمدی",
    role: "سالن تخصصی پوست و مو آوا",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_IssQQixJH5pjI_zpUCxgkI3jyIQ9KbxcDwJW2mSA0s2YSEV07vJSueSofQQc92DyxdRdn9x_sGijQ0xmWUacpep7PIW1g7oISd_u66vmUnYZA2QNJHcIcBfSyf19YkLlENkZv0anv20D2YgzXMcd5yW9ESNOclXS0UpTTjHCEFdO7LYv9gCS6MEMetaHU3IXl98z5trmxXMl3PulTEFhSmhyL6fwHbdOICmhr3suUfa8XVNUdOYSLeEZZnfem38PjTXd2Cdzq-s",
    text: '"با پنل آنلاین نارژین، نوبت‌دهی و مدیریت پرسنل خیلی ساده‌تر شده. مشتری‌ها هم از سرعت کار راضی‌ان."',
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const onMouseUp = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-xl bg-background-home" id="testimonials">
      <div className="container mx-auto px-4 sm:px-margin-mobile">
        <h2 className="text-2xl sm:text-3xl md:text-headline-lg font-extrabold text-center text-primary-home mb-8 sm:mb-xl">
          از زبان مدیران سالن‌ها
        </h2>

        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing -mx-1 px-1"
          id="testimonial-slider"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="w-[78vw] max-w-[300px] sm:w-[280px] sm:max-w-[300px] md:w-[320px] md:max-w-[340px] shrink-0 snap-center glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-outline-variant/20 shadow-sm select-none"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cover bg-center border-2 border-primary-fixed shrink-0"
                  style={{ backgroundImage: `url("${testimonial.image}")` }}
                  role="img"
                  aria-label={testimonial.name}
                />
                <div className="min-w-0">
                  <div className="font-bold text-base sm:text-lg text-primary-home truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-secondary-home truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-on-surface-variant-home leading-relaxed italic mb-4 sm:mb-5 min-h-[4.5rem]">
                {testimonial.text}
              </p>

              <div className="flex text-tertiary-home gap-0.5" aria-label="۵ ستاره">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg sm:text-xl leading-none">
                    <MdStar />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* نشانگر اسکرول برای موبایل */}
        <p className="mt-4 text-center text-xs text-on-surface-variant-home/70 md:hidden">
          برای دیدن نظرات بیشتر به چپ و راست بکشید
        </p>
      </div>
    </section>
  );
}
