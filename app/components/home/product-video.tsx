"use client";

import { MdPlayArrow } from "react-icons/md";

export default function ProductVideo() {
  return (
    <section className="py-xl bg-surface-home">
      <div className="container mx-auto px-margin-mobile">
        <div className="fade-up relative max-w-5xl mx-auto rounded-4xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-surface-container-high group cursor-pointer">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-nbz07sdP3DItUhWdD-_7Nioe8bE3SYWAr_wR_0T9vXPgRaSUxwyuHj9xarMt-2OMjXXT48Xq8RPZXTrHZ5-DBgzbJbRKO5fA-RyH1wia39syQ-maS0aGU4qKB4HM18y_KrZfcmE_OyjYUfphjEIxCbfpYhct20EKotVrbfvFxlHiRD1QC5TbNHXK9CDFVDWa0dTqwuKSDkmS2mOf4w2ljVLJTgQYBfFNHwzzzz7Ifn4E7VQXW1GS75kd7HxGJnLR3DYwFC3DwdU")',
            }}
          />
          <div className="absolute inset-0 bg-primary-home/20 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl glow-pulse transition-transform group-hover:scale-110">
              <span
                className="material-symbols-outlined text-primary-home text-[48px]"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                <MdPlayArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
