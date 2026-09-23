"use client";

import { motion, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useScrollLinked } from "./useScrollLinked";

type ScrollOffset = Parameters<typeof useScrollLinked>[1];

/**
 * Restrained scroll-linked movement for decorative layers.
 * `y` and `rotate` map scroll progress [0, 1] to output ranges; the value at
 * `settled` progress is what server HTML and reduced-motion visitors see,
 * so choose ranges whose settled point is the neutral position.
 */
export function ParallaxLayer({
  children,
  className,
  y = [0, 0],
  rotate = [0, 0],
  scale = [1, 1],
  offset = ["start end", "end start"],
  settled = 0.5,
  decorative = true,
}: {
  children: ReactNode;
  className?: string;
  y?: [number, number];
  rotate?: [number, number];
  scale?: [number, number];
  offset?: ScrollOffset;
  settled?: number;
  /** Hide from assistive technology (default). Set false when it wraps real content. */
  decorative?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { progress } = useScrollLinked(ref, offset, settled);
  const translateY = useTransform(progress, [0, 1], y);
  const rotation = useTransform(progress, [0, 1], rotate);
  const scaling = useTransform(progress, [0, 1], scale);

  return (
    <motion.div
      ref={ref}
      aria-hidden={decorative ? true : undefined}
      className={className}
      style={{ y: translateY, rotate: rotation, scale: scaling }}
    >
      {children}
    </motion.div>
  );
}
