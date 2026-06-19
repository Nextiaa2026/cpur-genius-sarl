import Image from "next/image";
import Link from "next/link";
import { navigation, siteIdentity } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Image
              src="/logo/logo-white.png"
              alt={siteIdentity.name}
              width={140}
              height={56}
              className="h-14 w-auto"
            />
            <p className="font-[family-name:var(--font-script)] text-2xl text-brand-mint">
              {siteIdentity.shortName}
            </p>
            <p className="text-sm text-brand-white/80">{siteIdentity.tagline}</p>
            <p className="text-xs uppercase tracking-wider text-brand-white/60">
              {siteIdentity.subtitle}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-mint">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-white/80 transition-colors hover:text-brand-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-mint">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-brand-white/80">
              <li>
                <a
                  href={`mailto:${siteIdentity.contact.email}`}
                  className="hover:text-brand-white"
                >
                  {siteIdentity.contact.email}
                </a>
              </li>
              <li>{siteIdentity.contact.phone}</li>
              <li>{siteIdentity.contact.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-mint">
              Réseaux
            </h3>
            <ul className="space-y-2">
              {siteIdentity.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-brand-white/80 transition-colors hover:text-brand-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-white/20 pt-8 md:flex-row">
          <p className="text-xs text-brand-white/60">
            © {new Date().getFullYear()} {siteIdentity.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-brand-white/60">
            <Link href="#" className="hover:text-brand-white">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-brand-white">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-brand-white/10 py-4">
        <p className="text-center font-[family-name:var(--font-heading)] text-[12vw] font-black leading-none text-brand-white/10 select-none">
          C&apos;PUR
        </p>
      </div>
    </footer>
  );
}
