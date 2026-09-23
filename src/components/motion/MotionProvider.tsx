"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Motion for React is used only for scroll-linked decoration and small UI
 * transitions; entrances are CSS (see globals.css). `reducedMotion="user"`
 * makes any Motion animation respect the visitor's preference.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
