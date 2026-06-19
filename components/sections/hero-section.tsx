"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { heroSlides, siteIdentity } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const total = heroSlides.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 12000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[active];

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {heroSlides.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === active ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-dark/70 to-brand-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-brand-black/20" />

      <div className="relative z-10 flex h-full flex-col justify-center px-4 md:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal variant="fade-down" delay={100} duration={600}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-mint sm:text-sm">
              {siteIdentity.subtitle}
            </p>
          </Reveal>

          <TypewriterText
            key={`title-${slide.id}`}
            text={slide.title}
            as="h1"
            speed={72}
            delay={500}
            startOnView={false}
            className="font-display block max-w-4xl text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-brand-white"
          />

          <TypewriterText
            key={`sub-${slide.id}`}
            text={slide.subtitle}
            as="p"
            speed={48}
            delay={2800}
            startOnView={false}
            showCursor={false}
            className="mt-5 block max-w-xl text-sm leading-relaxed text-brand-white/85 sm:text-base md:text-lg"
          />

          <Reveal variant="fade-up" delay={3200} duration={900}>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-white text-brand-dark hover:bg-brand-white/90"
              >
                <Link href="/travaux">Voir nos réalisations</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-white/40 bg-brand-white/10 text-brand-white backdrop-blur-sm hover:bg-brand-white/20"
              >
                <Link href="/services">Nos services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-between px-4 md:bottom-10 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Slide ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === active
                    ? "w-10 bg-brand-mint"
                    : "w-4 bg-brand-white/40 hover:bg-brand-white/60"
                )}
              />
            ))}
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={prev}
              aria-label="Slide précédent"
              className="flex size-10 items-center justify-center rounded-full border border-brand-white/30 text-brand-white transition-colors hover:bg-brand-white/10"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Slide suivant"
              className="flex size-10 items-center justify-center rounded-full border border-brand-white/30 text-brand-white transition-colors hover:bg-brand-white/10"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
