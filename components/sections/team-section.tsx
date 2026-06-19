"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { team } from "@/lib/site-data";

export function TeamSection() {
  return (
    <section className="bg-brand-cream py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          label="Les talents"
          title="Notre Équipe"
          subtitle="Des créatifs passionnés au service de votre vision."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.id} variant="fade-up" delay={i * 120}>
              <article className="group overflow-hidden rounded-2xl border border-brand-black/5 bg-brand-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg font-bold text-brand-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-brand-mint">{member.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={500} className="mt-8 text-center">
          <Link
            href="/equipe"
            className="text-sm font-medium text-brand-dark underline-offset-4 hover:underline"
          >
            Rencontrer toute l&apos;équipe
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
