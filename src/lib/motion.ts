/**
 * Motion tokens. Values follow docs/MOTION-SYSTEM.md starting ranges.
 * Reduced motion is handled globally (see globals.css and MotionProvider):
 * animated elements carry `data-motion` so they render settled when motion
 * is off or the app fails to hydrate.
 */
export const ease = [0.22, 1, 0.36, 1] as const;

export const duration = {
  hover: 0.15,
  section: 0.42,
  hero: 0.55,
  path: 0.9,
} as const;

export const distance = {
  section: 14,
  hero: 16,
} as const;

export const stagger = 0.08;

/** Trigger once, slightly before the element is fully in view. */
export const viewportOnce = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -8% 0px",
} as const;
