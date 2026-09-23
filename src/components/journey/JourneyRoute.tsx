"use client";

import { motion, useMotionValueEvent, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { learningStages } from "@/content/programme";
import { useScrollLinked } from "@/components/motion/useScrollLinked";
import { cx } from "@/components/ui/primitives";
import { delay, seq } from "@/lib/motion";

/*
 * Scroll-linked learning journey.
 * Desktop: a rising route across three columns; scrolling draws it, a marker
 * travels along it and each stage lights up as the marker arrives. The route
 * then continues as a dashed line — possibilities, not a guaranteed outcome.
 * Mobile: a vertical rail that fills as you scroll.
 *
 * Without JS or with reduced motion, `progress` holds 1: the route is fully
 * drawn and every stage is shown in its active state. Text never depends on it.
 */
const W = 1200;
const H = 160;
const RAIL = "M 0 148 C 80 148 140 128 200 120 C 330 104 470 96 600 88 C 730 80 870 64 1000 56";
const TAIL = "M 1000 56 C 1080 51 1140 38 1200 20";
const STATION_X = [200, 600, 1000];
/** Marker offsets from the top of each column, so the stages visibly rise. */
const markerOffset = ["md:mt-[92px]", "md:mt-[60px]", "md:mt-[28px]"];
const colours = [
  { fill: "bg-yellow text-green", ring: "ring-yellow", text: "text-green" },
  { fill: "bg-teal text-cream", ring: "ring-teal", text: "text-green" },
  { fill: "bg-terracotta text-cream", ring: "ring-terracotta", text: "text-green" },
];

export function JourneyRoute({ detail = false, surface = "sand" }: { detail?: boolean; surface?: "sand" | "cream" }) {
  const listRef = useRef<HTMLOListElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { progress, enabled } = useScrollLinked(listRef, ["start 78%", "end 55%"]);

  // Where along the route each station sits (fraction of length), measured once.
  const stopsRef = useRef<number[] | null>(null);
  const [reached, setReached] = useState(3);

  const dotX = useTransform(progress, (p) => pointAt(pathRef.current, p).x);
  const dotY = useTransform(progress, (p) => pointAt(pathRef.current, p).y);
  const left = useTransform(dotX, (x) => `${(x / W) * 100}%`);
  // The route is drawn H px tall, so viewBox y maps 1:1 to pixels.
  const top = useTransform(dotY, (y) => `${y}px`);
  const tailOpacity = useTransform(progress, [0.92, 1], [0, 0.65]);
  const railScale = useTransform(progress, [0, 1], [0, 1]);

  useMotionValueEvent(progress, "change", (p) => {
    stopsRef.current ??= measureStops(pathRef.current);
    const count = stopsRef.current.filter((stop) => p >= stop - 0.02).length;
    setReached((current) => (current === count ? current : count));
  });

  const ringSurface = surface === "sand" ? "var(--color-cream-200)" : "var(--color-cream)";

  return (
    <div className="relative">
      {/* Desktop route */}
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-[160px] w-full overflow-visible md:block"
        fill="none"
      >
        <path d={RAIL} stroke="var(--color-cream-300)" strokeWidth="14" strokeLinecap="round" />
        <path d={TAIL} stroke="var(--color-cream-300)" strokeWidth="14" strokeLinecap="round" opacity="0.6" />
        <motion.path
          ref={pathRef}
          d={RAIL}
          stroke="var(--color-green)"
          strokeWidth="3.5"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
        <motion.path
          d={TAIL}
          stroke="var(--color-green)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 11"
          style={{ opacity: tailOpacity }}
        />
      </svg>

      {/* Travelling marker (desktop, only while scroll-linked) */}
      {enabled && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute z-20 hidden size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green ring-4 ring-cream shadow-[0_0_0_10px_rgb(18_70_58/0.12)] md:block"
          style={{ left, top }}
        />
      )}

      {/* Mobile rail */}
      <div aria-hidden="true" className="absolute bottom-10 left-7 top-7 w-1 -translate-x-1/2 rounded-full bg-cream-300 md:hidden">
        <motion.div className="size-full origin-top rounded-full bg-green" style={{ scaleY: railScale }} />
      </div>

      <ol ref={listRef} className="relative grid gap-12 md:grid-cols-3 md:gap-0">
        {learningStages.map((stage, index) => {
          const active = index < reached;
          return (
            <li key={stage.number} className="flex gap-5 md:flex-col md:gap-0 md:px-6 md:text-center lg:px-9">
              <span
                aria-hidden="true"
                className={cx(
                  "relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold ring-2 transition-[background-color,color,transform,box-shadow] duration-500 ease-out-soft md:mx-auto",
                  colours[index].ring,
                  markerOffset[index],
                  active ? cx(colours[index].fill, "scale-110") : cx("bg-cream", colours[index].text),
                )}
                style={{ boxShadow: `0 0 0 10px ${ringSurface}` }}
              >
                {stage.number}
              </span>
              <div data-reveal="up" suppressHydrationWarning className="pt-2 md:pt-9" style={delay(seq.items + index * 140)}>
                <p className="text-eyebrow font-semibold uppercase text-terracotta">
                  <span className="sr-only">Stage {stage.number}: </span>
                  {stage.short}
                </p>
                <h3 className="mt-2 text-h3 text-green">{stage.title}</h3>
                <p className="mx-auto mt-3 max-w-[30ch] text-body">{stage.body}</p>
                {detail && (
                  <ul className="mx-auto mt-6 max-w-[32ch] space-y-2 text-left">
                    {stage.topics.map((topic) => (
                      <li key={topic} className="flex gap-3 rounded-xl bg-cream/80 px-4 py-3 text-[0.9375rem] leading-snug text-ink ring-1 ring-cream-300">
                        <span aria-hidden="true" className={cx("mt-1.5 size-2 shrink-0 rounded-full", colours[index].fill.split(" ")[0])} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function pointAt(path: SVGPathElement | null, p: number) {
  if (!path) return { x: STATION_X[2], y: 56 };
  const total = path.getTotalLength();
  return path.getPointAtLength(Math.min(Math.max(p, 0), 1) * total);
}

/** Fraction of the route length at which each station's x position is reached. */
function measureStops(path: SVGPathElement | null) {
  if (!path) return [0.2, 0.6, 1];
  const total = path.getTotalLength();
  return STATION_X.map((x) => {
    let lo = 0;
    let hi = total;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (path.getPointAtLength(mid).x < x) lo = mid;
      else hi = mid;
    }
    return lo / total;
  });
}
