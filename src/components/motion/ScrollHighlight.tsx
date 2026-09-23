"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { cx } from "@/components/ui/primitives";
import { useScrollLinked } from "./useScrollLinked";

/**
 * Paragraph whose words darken from muted to full colour as it scrolls
 * through the viewport. Both colours meet large-text contrast, so the
 * sentence is always readable; without JS or with reduced motion it renders
 * in the finished colour.
 */
export function ScrollHighlight({
  text,
  className,
  from = "#8c8a84",
  to = "#12463a",
}: {
  text: string;
  className?: string;
  from?: string;
  to?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { progress } = useScrollLinked(ref, ["start 85%", "end 50%"]);
  const words = text.split(" ");

  return (
    <p ref={ref} className={cx("flex flex-wrap gap-x-[0.28em]", className)}>
      {words.map((word, index) => (
        <Word
          key={`${word}-${index}`}
          progress={progress}
          range={[index / words.length, (index + 1) / words.length]}
          from={from}
          to={to}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  from,
  to,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  from: string;
  to: string;
}) {
  const color = useTransform(progress, range, [from, to]);
  return <motion.span style={{ color }}>{children}</motion.span>;
}
