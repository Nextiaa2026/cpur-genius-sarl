"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { services, siteIdentity } from "@/lib/site-data";

export function ServicesPageContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <Reveal variant="fade-up">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold text-brand-black">
          Nos Services
        </h1>
      </Reveal>

      <Reveal variant="fade-up" delay={200}>
        <p className="mt-4 max-w-2xl text-brand-black/70">
          {siteIdentity.name} propose une gamme complète de services créatifs et
          professionnels. Chaque expertise est pensée pour élever votre communication
          et donner à vos projets une dimension unique.
        </p>
      </Reveal>

      <ol className="mt-12 space-y-10">
        {services.map((service, i) => (
          <Reveal key={service.id} variant="fade-up" delay={i * 80}>
            <li className="grid overflow-hidden rounded-2xl border border-brand-black/10 bg-brand-white md:grid-cols-[minmax(240px,2fr)_3fr]">
              <div className="relative min-h-[220px] md:min-h-[280px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/10 md:bg-gradient-to-l md:from-transparent md:to-brand-white/20" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-mint">
                  {String(service.id).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-2 text-xl font-bold text-brand-black sm:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-black/70 sm:text-base">
                  {service.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
