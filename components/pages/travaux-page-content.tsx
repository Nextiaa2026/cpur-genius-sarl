"use client";

import { Reveal } from "@/components/ui/reveal";
import { works } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function TravauxPageContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <Reveal variant="fade-up">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold text-brand-black">
          Notre Travail
        </h1>
      </Reveal>

      <Reveal variant="fade-up" delay={200}>
        <p className="mt-4 text-brand-black/70">
          Découvrez une sélection de nos réalisations en production, graphisme et
          communication.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <Reveal key={work.id} variant="scale" delay={i * 100}>
            <article
              className={cn(
                "aspect-square overflow-hidden rounded-xl bg-gradient-to-br p-6",
                work.gradient
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-white/70">
                {work.category}
              </span>
              <h2 className="mt-2 text-xl font-bold text-brand-white">
                {work.title}
              </h2>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
