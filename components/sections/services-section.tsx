"use client";

import Image from "next/image";
import { ColorGrid } from "@/components/ui/color-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceRow } from "@/components/ui/service-row";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  const featured = services.slice(0, 6);

  return (
    <section className="bg-brand-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Ce que nous faisons"
            title="Nos Services"
          />
          <Reveal variant="fade-left" delay={400}>
            <p className="max-w-md text-sm text-brand-black/70 md:text-base">
              Nous ne nous contentons pas de concevoir ; nous définissons l&apos;avenir
              de votre communication avec pureté et créativité.
            </p>
          </Reveal>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {featured.map((service, i) => (
            <Reveal key={service.id} variant="fade-up" delay={i * 100}>
              <article className="group overflow-hidden rounded-2xl border border-brand-black/5 bg-brand-cream/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-mint">
                      {String(service.id).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-1 text-base font-bold text-brand-white sm:text-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="p-4 text-xs leading-relaxed text-brand-black/70 sm:text-sm">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr]">
          <Reveal variant="fade-right" delay={200} className="hidden lg:block">
            <ColorGrid />
          </Reveal>

          <div>
            {services.map((service, i) => (
              <Reveal key={service.id} variant="fade-left" delay={i * 50}>
                <ServiceRow
                  index={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
