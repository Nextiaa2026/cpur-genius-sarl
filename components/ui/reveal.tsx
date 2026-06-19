"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";

const variantStyles: Record<RevealVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "translate-y-8 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-down": {
    hidden: "-translate-y-8 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-left": {
    hidden: "-translate-x-8 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  "fade-right": {
    hidden: "translate-x-8 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  scale: {
    hidden: "scale-95 opacity-0",
    visible: "scale-100 opacity-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  as?: ElementType;
}

export function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold, once });
  const styles = variantStyles[variant];

  return (
    <Component
      ref={ref}
      className={cn(
        "motion-reduce:translate-none motion-reduce:opacity-100 motion-reduce:transition-none transition-all ease-out",
        isVisible ? styles.visible : styles.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
