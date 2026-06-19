"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { showcaseInfo, siteIdentity } from "@/lib/site-data";

export function ShowcaseSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-cream">
      <div className="mx-auto grid h-full min-h-[100svh] max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-16 md:px-8 lg:py-24">
          <Reveal variant="fade-up" delay={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-dark">
              {siteIdentity.shortName}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <h2 className="font-display mt-4 text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-tight tracking-tight text-brand-black">
              {siteIdentity.name}
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={400}>
            <p className="font-script mt-3 text-2xl text-brand-dark sm:text-3xl">
              {siteIdentity.tagline}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={900}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-brand-black/70 sm:text-base">
              {siteIdentity.description}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {showcaseInfo.stats.map((stat, i) => (
              <Reveal key={stat.label} variant="scale" delay={1000 + i * 150}>
                <div className="text-center sm:text-left">
                  <p className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-brand-black/60 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade-up" delay={1400}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-brand-dark text-brand-white hover:bg-brand-dark/90"
              >
                <Link href="/contact">Commencer un projet</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-dark/20">
                <Link href="/equipe">Notre équipe</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade-left" delay={400} className="relative min-h-[50svh] lg:min-h-[100svh]">
          <Image
            src={showcaseInfo.image}
            alt="Équipe créative C'PUR GENIUIS DEN"
            fill
            className="object-cover object-top image-fade-footer lg:object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-cream via-brand-cream/80 to-transparent lg:h-64" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#006569] to-transparent opacity-30" />
        </Reveal>
      </div>
    </section>
  );
}
