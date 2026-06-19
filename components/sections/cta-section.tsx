"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteIdentity } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-brand-cream py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <Reveal variant="fade-right" delay={200} className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=1000&fit=crop&q=80"
            alt="Créativité et collaboration"
            fill
            className="object-cover image-fade-bottom"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-brand-dark/20" />
        </Reveal>

        <div className="space-y-6">
          <Reveal variant="fade-up" delay={200}>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-tight text-brand-black">
              Prêt à défier le statu quo ?
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={600}>
            <p className="text-sm text-brand-black/70 sm:text-base">
              Contactez {siteIdentity.shortName} pour donner vie à votre prochain projet
              créatif, audio ou visuel.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={750}>
            <div className="space-y-2 text-sm text-brand-black/80">
              <p>
                <a
                  href={`mailto:${siteIdentity.contact.email}`}
                  className="hover:text-brand-dark"
                >
                  {siteIdentity.contact.email}
                </a>
              </p>
              <p>{siteIdentity.contact.phone}</p>
              <p>{siteIdentity.contact.address}</p>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={900}>
            <Button
              asChild
              size="lg"
              className="bg-brand-black text-brand-white hover:bg-brand-black/90"
            >
              <Link href="/contact">Commencer un projet</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
