"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-black/5 bg-brand-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo-teal-dark.png"
            alt="C'PUR GENIUIS DEN"
            width={120}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-black/80 transition-colors hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-brand-dark text-brand-white hover:bg-brand-dark/90">
            <Link href="/contact">Commencer un projet</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg border border-brand-black/10 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-brand-black transition-transform",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-brand-black transition-opacity",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-brand-black transition-transform",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-brand-black/5 bg-brand-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-black/80"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-brand-dark text-brand-white">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Commencer un projet
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
