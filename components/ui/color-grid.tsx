import { cn } from "@/lib/utils";

const GRID_COLORS = [
  "bg-brand-mint",
  "bg-brand-dark",
  "bg-brand-black/10",
  "bg-brand-white",
  "bg-brand-dark/50",
  "bg-brand-mint/60",
  "bg-brand-cream",
  "bg-brand-dark",
  "bg-brand-mint",
  "bg-brand-black/10",
  "bg-brand-white",
  "bg-brand-mint/40",
  "bg-brand-dark/70",
  "bg-brand-mint",
  "bg-brand-cream",
  "bg-brand-dark",
] as const;

interface ColorGridProps {
  className?: string;
  showOverlay?: boolean;
}

export function ColorGrid({ className, showOverlay = true }: ColorGridProps) {
  return (
    <div
      className={cn(
        "relative min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[400px] lg:min-h-[500px]",
        className
      )}
    >
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-1">
        {GRID_COLORS.map((color, i) => (
          <div key={i} className={cn("rounded-sm", color)} />
        ))}
      </div>

      {showOverlay && (
        <>
          <div className="absolute left-6 top-6 size-20 rounded-full bg-brand-dark/80 sm:left-8 sm:top-8 sm:size-24" />
          <div className="absolute right-10 top-16 size-14 rounded-full bg-brand-white sm:size-16" />
          <div className="absolute bottom-20 left-14 size-28 rounded-full bg-brand-dark/50 sm:size-32" />
          <div className="absolute bottom-8 right-8 size-16 rounded-full bg-brand-mint sm:size-20" />
          <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-brand-dark/20 sm:size-40" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
            <p className="font-serif-display text-lg italic text-brand-white drop-shadow-sm sm:text-xl">
              L&apos;art de communiquer avec pureté
            </p>
          </div>
        </>
      )}
    </div>
  );
}
