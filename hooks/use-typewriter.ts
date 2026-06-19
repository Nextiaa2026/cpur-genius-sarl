"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
  enabled?: boolean;
}

export function useTypewriter(
  text: string,
  { speed = 35, delay = 0, enabled = true }: UseTypewriterOptions = {}
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
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayText(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay, enabled, reducedMotion]);

  return { displayText, isComplete, isTyping: enabled && !isComplete && !reducedMotion };
}
