"use client";

import { Reveal } from "@/components/ui/reveal";
import { works } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function WorkStripSection() {
  return (
    <section className="overflow-hidden bg-brand-black py-4">
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 md:px-8">
        {works.map((work, i) => (
          <Reveal
            key={work.id}
            variant="fade-right"
            delay={i * 80}
            className="shrink-0"
          >
            <div
              className={cn(
                "relative h-32 w-48 overflow-hidden rounded-lg bg-gradient-to-br md:h-40 md:w-64",
                work.gradient
              )}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-white/70">
                  {work.category}
                </span>
                <span className="text-sm font-bold text-brand-white">
                  {work.title}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
