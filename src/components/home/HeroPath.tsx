"use client";

import { motion } from "motion/react";
import { learningStages } from "@/content/programme";
import { ease } from "@/lib/motion";

/**
 * Signature visual: an open path through three learning stations that
 * continues past the last one — possibilities, not guaranteed placement.
 * Decorative SVG; the station labels are real text in an ordered list.
 */

const VIEW = { w: 560, h: 500 };

const stations = [
  { x: 140, y: 372, fill: "var(--color-yellow)", icon: "screen" },
  { x: 290, y: 272, fill: "var(--color-teal)", icon: "chat" },
  { x: 430, y: 176, fill: "var(--color-terracotta-deco)", icon: "door" },
] as const;

/** Label placement relative to each station. */
const labelPlacement = [
  "translate-x-[0.9rem] translate-y-[1.2rem] sm:translate-x-[1.4rem] sm:translate-y-[1.9rem]",
  "translate-x-[0.9rem] translate-y-[1.2rem] sm:translate-x-[1.4rem] sm:translate-y-[1.9rem]",
  "-translate-x-[70%] -translate-y-[calc(100%+2.6rem)]",
];

const MAIN_PATH =
  "M 24 452 C 70 440 100 392 140 372 C 190 346 240 320 290 272 C 330 234 370 190 430 176";
const TAIL_PATH = "M 430 176 C 480 164 510 120 536 62";

// Timeline (seconds). Stations appear as the line reaches them.
const T = { dots: 0.1, path: 0.25, pathDur: 0.9, stations: [0.4, 0.72, 1.02], tail: 1.1 };

export function HeroPath() {
  return (
    <div className="relative mx-auto aspect-[560/500] w-full max-w-[34rem]">
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        className="absolute inset-0 size-full overflow-visible"
        fill="none"
      >
        {/* Concentric arcs echo the current site's path motif */}
        <g stroke="var(--color-green-600)" strokeWidth="1.5">
          <circle cx="600" cy="560" r="200" opacity="0.55" />
          <circle cx="600" cy="560" r="330" opacity="0.4" />
          <circle cx="600" cy="560" r="460" opacity="0.25" />
        </g>

        {/* Ambient motif dots */}
        <motion.g
          data-motion=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: T.dots }}
        >
          <circle cx="86" cy="248" r="7" fill="var(--color-teal)" opacity="0.85" />
          <circle cx="232" cy="456" r="5" fill="var(--color-yellow)" opacity="0.9" />
          <circle cx="480" cy="316" r="8" fill="var(--color-terracotta-deco)" opacity="0.8" />
          <circle cx="372" cy="414" r="4" fill="var(--color-sage)" opacity="0.7" />
          <circle cx="206" cy="150" r="4" fill="var(--color-sage)" opacity="0.5" />
        </motion.g>

        {/* Soft under-glow of the route */}
        <path d={MAIN_PATH} stroke="var(--color-green-700)" strokeWidth="22" strokeLinecap="round" />

        {/* The route */}
        <motion.path
          data-motion-path=""
          d={MAIN_PATH}
          stroke="var(--color-cream)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: T.pathDur, ease: [0.45, 0, 0.2, 1], delay: T.path }}
        />

        {/* Open continuation beyond the last station */}
        <motion.path
          data-motion=""
          d={TAIL_PATH}
          stroke="var(--color-cream)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 0.5, delay: T.tail }}
        />
        <motion.g
          data-motion=""
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease, delay: T.tail + 0.25 }}
          style={{ transformOrigin: "536px 62px" }}
        >
          <circle cx="536" cy="62" r="11" stroke="var(--color-cream)" strokeWidth="2.5" strokeDasharray="3 4" />
          <circle cx="506" cy="34" r="3.5" fill="var(--color-yellow)" />
          <circle cx="552" cy="104" r="3" fill="var(--color-teal)" />
          <circle cx="558" cy="26" r="2.5" fill="var(--color-sage)" />
        </motion.g>

        {stations.map((station, index) => (
          <motion.g
            key={station.icon}
            data-motion=""
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: T.stations[index] }}
            style={{ transformOrigin: `${station.x}px ${station.y}px` }}
          >
            <circle cx={station.x} cy={station.y} r="36" fill={station.fill} opacity="0.18" />
            <circle cx={station.x} cy={station.y} r="23" fill={station.fill} />
            <StationIcon kind={station.icon} x={station.x} y={station.y} />
          </motion.g>
        ))}

        {/* A few gentle "you start here" pulses on the first station, then rest */}
        <motion.circle
          data-motion=""
          cx={stations[0].x}
          cy={stations[0].y}
          r="23"
          stroke="var(--color-yellow)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0, 0.7, 0], scale: [1, 1, 2.1] }}
          transition={{ duration: 1.8, delay: 1.6, repeat: 2, repeatDelay: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: `${stations[0].x}px ${stations[0].y}px` }}
        />
      </svg>

      <ol className="absolute inset-0" aria-label="The learning journey">
        {learningStages.map((stage, index) => (
          <motion.li
            key={stage.number}
            data-motion=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: T.stations[index] + 0.12 }}
            className="absolute"
            style={{
              left: `${(stations[index].x / VIEW.w) * 100}%`,
              top: `${(stations[index].y / VIEW.h) * 100}%`,
            }}
          >
            <span
              className={`flex w-max max-w-[7.5rem] sm:max-w-[11rem] items-center gap-2 rounded-full bg-green-700/90 py-1.5 pl-2 pr-3.5 text-[0.8125rem] font-semibold leading-tight text-cream shadow-[0_6px_24px_-8px_rgb(0_0_0/0.45)] ring-1 ring-green-600 sm:text-sm ${labelPlacement[index]}`}
            >
              <span className="rounded-full bg-green px-1.5 py-0.5 text-[0.6875rem] tabular-nums text-yellow">
                {stage.number}
              </span>
              {stage.short}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function StationIcon({ kind, x, y }: { kind: "screen" | "chat" | "door"; x: number; y: number }) {
  const common = {
    stroke: "var(--color-green)",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
    transform: `translate(${x - 10} ${y - 10})`,
  };
  if (kind === "screen") {
    // A laptop: first digital steps
    return (
      <g {...common}>
        <rect x="3" y="3.5" width="14" height="9.5" rx="1.5" />
        <path d="M1 16.5h18" />
      </g>
    );
  }
  if (kind === "chat") {
    // Two speech bubbles: working with a team
    return (
      <g {...common} stroke="var(--color-cream)">
        <path d="M2.5 4.5h9v6h-5l-3 2.5v-2.5h-1z" />
        <path d="M13.5 8h4v6h-1v2.5l-3-2.5h-4.5v-2" />
      </g>
    );
  }
  // An open door with an arrow: opportunity
  return (
    <g {...common} stroke="var(--color-cream)">
      <path d="M4 18V2.5h8.5V18" />
      <path d="M9 10h9M15 7l3 3-3 3" />
    </g>
  );
}
