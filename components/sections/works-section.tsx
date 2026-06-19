"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { works } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function WorksSection() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex items-end justify-between">
          <SectionHeading
            label="Portfolio"
            title="Nos Travaux"
            subtitle="Une sélection de projets qui illustrent notre approche créative et graphique."
          />
          <Reveal variant="fade" delay={500}>
            <Link
              href="/travaux"
              className="hidden text-sm font-medium text-brand-dark underline-offset-4 hover:underline md:block"
            >
              Voir tout
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <Reveal
              key={work.id}
              variant="scale"
              delay={i * 120}
              className={cn(
                i === 0 && "sm:col-span-2 lg:col-span-1"
              )}
            >
              <article
                className={cn(
                  "group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br",
                  work.gradient,
                  i === 0 && "sm:aspect-[2/1] lg:aspect-square"
                )}
              >
                <div className="absolute inset-0 bg-brand-black/0 transition-colors group-hover:bg-brand-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-white/70">
                    {work.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-brand-white md:text-2xl">
                    {work.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
