import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceRowProps {
  title: string;
  description: string;
  index: number;
  image?: string;
  className?: string;
}

export function ServiceRow({
  title,
  description,
  index,
  image,
  className,
}: ServiceRowProps) {
  return (
    <div
      className={cn(
        "grid gap-4 border-b border-brand-black/10 py-5 sm:grid-cols-[auto_1fr_1.5fr] sm:items-center sm:gap-6 sm:py-6",
        className
      )}
    >
      {image && (
        <div className="relative size-14 shrink-0 overflow-hidden rounded-lg sm:size-16">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
      )}
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="text-xs font-bold text-brand-mint">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-sm font-bold uppercase tracking-wide text-brand-black">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-brand-black/70 sm:col-span-2 md:col-span-1 md:col-start-3">
        {description}
      </p>
    </div>
  );
}
