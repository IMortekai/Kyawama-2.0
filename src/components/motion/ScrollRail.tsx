"use client";

import { motion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cx } from "@/components/ui/primitives";
import { useScrollLinked } from "./useScrollLinked";

/**
 * Vertical rail that fills as its content scrolls past — used for sequences
 * (origin chapters, partner commitments). Children place their own markers
 * against the rail at `left: 0`. Fully filled without JS / reduced motion.
 */
export function ScrollRail({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { progress } = useScrollLinked(ref, ["start 70%", "end 60%"]);

  return (
    <div ref={ref} className={cx("relative pl-12 sm:pl-16", className)}>
      <div
        aria-hidden="true"
        className={cx(
          "absolute bottom-3 left-[13px] top-3 w-[3px] rounded-full",
          tone === "dark" ? "bg-green-600" : "bg-cream-300",
        )}
      >
        <motion.div
          className={cx("size-full origin-top rounded-full", tone === "dark" ? "bg-yellow" : "bg-terracotta")}
          style={{ scaleY: progress }}
        />
      </div>
      {children}
    </div>
  );
}

/** Marker dot aligned to a ScrollRail; place inside a `relative` item. */
export function RailMarker({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "absolute -left-12 top-0 flex size-[30px] items-center justify-center rounded-full font-display text-xs font-bold sm:-left-16",
        tone === "dark" ? "bg-yellow text-green ring-4 ring-green" : "bg-green text-cream ring-4 ring-cream",
      )}
    >
      {label}
    </span>
  );
}
