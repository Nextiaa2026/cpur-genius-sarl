"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
  enabled?: boolean;
}

function getCharDelay(char: string, baseSpeed: number) {
  if (char === " ") return baseSpeed * 1.8;
  if (char === "." || char === "," || char === ";" || char === ":") {
    return baseSpeed * 2.8;
  }
  if (char === "?" || char === "!") return baseSpeed * 3.2;
  return baseSpeed;
}

export function useTypewriter(
  text: string,
  { speed = 55, delay = 0, enabled = true }: UseTypewriterOptions = {}
) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!enabled) {
      setDisplayText("");
      setIsComplete(false);
      return;
    }

    if (reducedMotion) {
      setDisplayText(text);
      setIsComplete(true);
      return;
    }

    setDisplayText("");
    setIsComplete(false);

    let index = 0;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const typeNext = () => {
      if (cancelled || index >= text.length) {
        if (!cancelled) setIsComplete(true);
        return;
      }

      index += 1;
      setDisplayText(text.slice(0, index));

      if (index < text.length) {
        const charDelay = getCharDelay(text[index - 1], speed);
        const timeoutId = setTimeout(typeNext, charDelay);
        timeouts.push(timeoutId);
      } else {
        setIsComplete(true);
      }
    };

    const startId = setTimeout(typeNext, delay);
    timeouts.push(startId);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [text, speed, delay, enabled, reducedMotion]);

  return {
    displayText,
    isComplete,
    isTyping: enabled && !isComplete && !reducedMotion,
  };
}
