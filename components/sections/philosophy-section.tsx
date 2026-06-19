"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { philosophy } from "@/lib/site-data";

export function PhilosophySection() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-8">
          <Reveal variant="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">
              {philosophy.label}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <p className="text-3xl font-bold leading-tight tracking-tight text-brand-black md:text-4xl lg:text-5xl xl:text-[clamp(2rem,4vw,3.5rem)]">
              {philosophy.text}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={800}>
            <Button
              asChild
              size="lg"
              className="bg-brand-black text-brand-white hover:bg-brand-black/90"
            >
              <Link href="/equipe">Découvrir le studio</Link>
            </Button>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={500} className="relative hidden size-48 shrink-0 lg:block xl:size-64">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={
                  i % 3 === 0
                    ? "bg-brand-mint"
                    : i % 5 === 0
                      ? "bg-brand-dark"
                      : "bg-brand-black/10"
                }
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
