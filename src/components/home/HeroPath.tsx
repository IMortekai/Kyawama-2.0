import type { CSSProperties } from "react";
import { learningStages } from "@/content/programme";
import { cx } from "@/components/ui/primitives";
import { delay, heroTimeline as T } from "@/lib/motion";

/**
 * Signature visual: an open path through three learning stations that
 * continues past the last one — possibilities, not guaranteed placement.
 * Animated with CSS keyframes only (drawn on load, no JS required); the
 * station labels are real text in an ordered list.
 */

const VIEW = { w: 600, h: 540 };

const stations = [
  { x: 150, y: 400, fill: "var(--color-yellow)", icon: "screen" },
  { x: 310, y: 292, fill: "var(--color-teal)", icon: "chat" },
  { x: 462, y: 190, fill: "var(--color-terracotta-deco)", icon: "door" },
] as const;

/** Label placement relative to each station (smaller offsets on phones). */
const labelPlacement = [
  "translate-x-[0.9rem] translate-y-[1.2rem] sm:translate-x-[1.6rem] sm:translate-y-[2rem]",
  "translate-x-[0.9rem] translate-y-[1.2rem] sm:translate-x-[1.6rem] sm:translate-y-[2rem]",
  "-translate-x-[72%] -translate-y-[calc(100%+1.6rem)] sm:-translate-y-[calc(100%+2.6rem)]",
];

const MAIN_PATH =
  "M 20 492 C 72 480 108 424 150 400 C 204 370 256 346 310 292 C 352 252 394 206 462 190";
const TAIL_PATH = "M 462 190 C 516 176 548 130 576 66";

export function HeroPath() {
  return (
    <div className="relative mx-auto aspect-[600/540] w-full max-w-[40rem]">
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        className="absolute inset-0 size-full overflow-visible"
        fill="none"
      >
        {/* Ambient motif dots */}
        <g className="anim-fade" style={delay(120)}>
          <circle cx="92" cy="266" r="8" fill="var(--color-teal)" opacity="0.85" />
          <circle cx="248" cy="494" r="5" fill="var(--color-yellow)" opacity="0.9" />
          <circle cx="516" cy="338" r="9" fill="var(--color-terracotta-deco)" opacity="0.8" />
          <circle cx="398" cy="446" r="4" fill="var(--color-sage)" opacity="0.7" />
          <circle cx="222" cy="160" r="4" fill="var(--color-sage)" opacity="0.5" />
        </g>

        {/* Soft under-glow of the route */}
        <path d={MAIN_PATH} stroke="var(--color-green-700)" strokeWidth="26" strokeLinecap="round" />

        {/* The route, drawn on load */}
        <path
          d={MAIN_PATH}
          pathLength={1}
          className="anim-draw"
          style={{ ...delay(T.path), "--dur": `${T.pathDuration}ms` } as CSSProperties}
          stroke="var(--color-cream)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Open continuation beyond the last station */}
        <path
          d={TAIL_PATH}
          className="anim-fade"
          style={delay(T.tail)}
          stroke="var(--color-cream)"
          strokeOpacity="0.75"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 12"
        />
        <g className="anim-pop" style={delay(T.tail + 200)}>
          <circle cx="576" cy="66" r="12" stroke="var(--color-cream)" strokeWidth="2.5" strokeDasharray="3 4" />
          <circle cx="544" cy="36" r="4" fill="var(--color-yellow)" />
          <circle cx="594" cy="112" r="3" fill="var(--color-teal)" />
          <circle cx="600" cy="26" r="2.5" fill="var(--color-sage)" />
        </g>

        {stations.map((station, index) => (
          <g key={station.icon} className="anim-pop" style={delay(T.stations[index])}>
            <circle cx={station.x} cy={station.y} r="40" fill={station.fill} opacity="0.18" />
            <circle cx={station.x} cy={station.y} r="25" fill={station.fill} />
            <StationIcon kind={station.icon} x={station.x} y={station.y} />
          </g>
        ))}

        {/* Three "you start here" pulses on the first station, then rest */}
        <circle
          className="anim-pulse"
          style={delay(T.tail + 300)}
          cx={stations[0].x}
          cy={stations[0].y}
          r="25"
          stroke="var(--color-yellow)"
          strokeWidth="2"
        />
      </svg>

      <ol className="absolute inset-0" aria-label="The learning journey">
        {learningStages.map((stage, index) => (
          <li
            key={stage.number}
            className="anim-fade-up absolute"
            style={{
              ...delay(T.stations[index] + 160),
              left: `${(stations[index].x / VIEW.w) * 100}%`,
              top: `${(stations[index].y / VIEW.h) * 100}%`,
            }}
          >
            <span
              className={cx(
                "flex w-max max-w-[7.5rem] items-center gap-2 rounded-full bg-green-700/95 py-1.5 pl-2 pr-3.5 text-[0.8125rem] font-semibold leading-tight text-cream shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)] ring-1 ring-green-600 sm:max-w-[12rem] sm:text-[0.9375rem]",
                labelPlacement[index],
              )}
            >
              <span className="rounded-full bg-green px-1.5 py-0.5 text-[0.6875rem] tabular-nums text-yellow">
                {stage.number}
              </span>
              {stage.short}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StationIcon({ kind, x, y }: { kind: "screen" | "chat" | "door"; x: number; y: number }) {
  const common = {
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
    transform: `translate(${x - 10} ${y - 10})`,
  };
  if (kind === "screen") {
    // A laptop: first digital steps
    return (
      <g {...common} stroke="var(--color-green)">
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
