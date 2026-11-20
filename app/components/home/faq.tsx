"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

import type { SiteContent } from "@/lib/site";

export default function Faq({ site }: { site: SiteContent }) {
  const faqs = site.faqs.map((f) => ({ q: f.question, a: f.answer }));
  const [open, setOpen] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section className="bg-[#eef4f0] py-12 sm:py-16" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
          {site.settings.faq_title}
        </h2>
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-primary-home/10 bg-white">
                <button type="button" className="flex w-full items-center justify-between gap-3 px-4 py-4 text-right text-sm font-bold text-[#15241c] sm:px-5 sm:text-base" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="min-w-0 flex-1">{item.q}</span>
                  <MdExpandMore className={`shrink-0 text-2xl text-primary-home transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-primary-home/10 px-4 pb-4 pt-3 text-sm leading-relaxed text-[#3d5a4c] sm:px-5">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
