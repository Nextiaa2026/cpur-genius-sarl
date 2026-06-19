import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {label && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-brand-mint" : "text-brand-dark"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold tracking-tight",
          dark ? "text-brand-white" : "text-brand-black"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-base md:text-lg",
            dark ? "text-brand-white/80" : "text-brand-black/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
