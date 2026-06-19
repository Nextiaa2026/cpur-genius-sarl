"use client";

import { useEffect, useState, type RefObject } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: UseIntersectionObserverOptions = {}
) {
  const { once = true, threshold = 0.15, root = null, rootMargin = "0px" } =
    options;
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, once, threshold, root, rootMargin]);

  return isIntersecting;
}
