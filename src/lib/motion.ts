import type { CSSProperties } from "react";

/**
 * Motion tokens (docs/MOTION-SYSTEM.md). CSS keyframes and transitions live
 * in globals.css; these values drive sequencing and Motion for React.
 */
export const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Entrance order inside a section. Elements that enter view together follow
 * heading → supporting text → visual → items → call to action.
 * Values are delays in milliseconds applied through the `--d` custom property.
 */
export const seq = {
  heading: 0,
  body: 220,
  visual: 320,
  items: 380,
  itemStep: 90,
  cta: 560,
} as const;

/** Hero load timeline (ms). Headline is readable by ~0.7s, all settled by ~1.8s. */
export const heroTimeline = {
  eyebrow: 0,
  line: 90,
  lineStep: 110,
  body: 420,
  cta: 560,
  path: 260,
  pathDuration: 1300,
  stations: [520, 900, 1260],
  tail: 1500,
} as const;

/** Inline style helper for the CSS `--d` delay variable. */
export const delay = (ms: number) => ({ "--d": `${Math.round(ms)}ms` }) as CSSProperties;
