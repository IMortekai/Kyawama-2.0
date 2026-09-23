"use client";

import { MotionConfig } from "motion/react";
import { useEffect, type ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-hydrated", "");

    // Follow live changes to the reduced-motion preference.
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => root.classList.toggle("motion-ready", !query.matches);
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
