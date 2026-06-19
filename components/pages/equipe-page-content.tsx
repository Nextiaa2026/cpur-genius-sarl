"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/lib/site-data";

export function EquipePageContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <Reveal variant="fade-up">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold text-brand-black">
          Notre Équipe
        </h1>
      </Reveal>

      <Reveal variant="fade-up" delay={200}>
        <p className="mt-4 text-brand-black/70">
          Les talents qui donnent vie à chaque projet C&apos;PUR GENIUIS DEN.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {team.map((member, i) => (
          <Reveal key={member.id} variant="fade-up" delay={i * 120}>
            <li className="overflow-hidden rounded-2xl border border-brand-black/10 bg-brand-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg font-bold text-brand-black">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm text-brand-black/60">{member.role}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
