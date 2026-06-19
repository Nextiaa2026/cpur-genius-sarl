"use client";

import { useRef, type ElementType } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useTypewriter } from "@/hooks/use-typewriter";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  startOnView?: boolean;
  enabled?: boolean;
  as?: ElementType;
  cursorClassName?: string;
}

export function TypewriterText({
  text,
  className,
  speed = 55,
  delay = 0,
  showCursor = true,
  startOnView = true,
  enabled = true,
  as: Component = "span",
  cursorClassName,
}: TypewriterTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.2,
    once: true,
  });

  const shouldType = enabled && (!startOnView || isVisible);
  const { displayText, isComplete, isTyping } = useTypewriter(text, {
    speed,
    delay,
    enabled: shouldType,
  });

  return (
    <Component ref={ref} className={className}>
      {displayText}
      {showCursor && isTyping && (
        <span
          className={cn(
            "typewriter-cursor ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-current align-middle",
            cursorClassName
          )}
          aria-hidden
        />
      )}
      {showCursor && isComplete && (
        <span className="sr-only">{text}</span>
      )}
    </Component>
  );
}
