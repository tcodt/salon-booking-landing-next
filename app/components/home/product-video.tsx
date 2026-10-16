"use client";

import { MdPlayArrow } from "react-icons/md";

export default function ProductVideo() {
  return (
    <section id="product-video" className="py-8 sm:py-xl bg-surface-home scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-margin-mobile">
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-primary-home group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5X9yQ3vR8Z0mK2pL4nO6wE1rT7uY9iU3oP5aS8dF0gH2jK4lZ6xC1vB3nM5qW7eR9tY0uI2oP4aS6dF8gH0jK2lZ4xC6vB8nM0qW2eR4tY6uI8oP0aS2dF4gH6jK8lZ0xC2vB4nM6qW")',
            }}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <MdPlayArrow className="text-3xl sm:text-4xl md:text-5xl text-primary-home mr-[-2px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
