"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteIdentity } from "@/lib/site-data";

export function ContactPageContent() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <Reveal variant="fade-up">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold text-brand-black">
          Contact
        </h1>
      </Reveal>

      <Reveal variant="fade-up" delay={200}>
        <p className="mt-4 text-brand-black/70">
          Parlons de votre prochain projet. Notre équipe est à votre écoute.
        </p>
      </Reveal>

      <Reveal variant="scale" delay={400}>
        <div className="mt-12 space-y-6 rounded-2xl border border-brand-black/10 bg-brand-white p-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-dark">
              Email
            </h2>
            <a
              href={`mailto:${siteIdentity.contact.email}`}
              className="mt-1 block text-brand-black hover:text-brand-dark"
            >
              {siteIdentity.contact.email}
            </a>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-dark">
              Téléphone
            </h2>
            <p className="mt-1 text-brand-black">{siteIdentity.contact.phone}</p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-dark">
              Adresse
            </h2>
            <p className="mt-1 text-brand-black">{siteIdentity.contact.address}</p>
          </div>

          <Button asChild className="bg-brand-dark text-brand-white hover:bg-brand-dark/90">
            <Link href={`mailto:${siteIdentity.contact.email}`}>
              Envoyer un message
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
