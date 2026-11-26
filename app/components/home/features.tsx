import { siteIcon } from "@/lib/site-icons";
import type { SiteContent } from "@/lib/site";

export default function Features({ site }: { site: SiteContent }) {
  if (site.features.length === 0) return null;
  return (
    <section className="bg-background-home py-12 sm:py-16" id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            {site.settings.features_title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {site.features.map(({ icon, title, description }) => {
            const Icon = siteIcon(icon);
            return (
            <div key={title} className="rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:rounded-3xl sm:p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-home/10 text-primary-home">
                <Icon className="text-2xl" />
              </div>
              <h3 className="mb-2 text-base font-bold text-[#15241c] sm:text-lg">{title}</h3>
              <p className="text-sm leading-relaxed text-[#3d5a4c]">{description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
