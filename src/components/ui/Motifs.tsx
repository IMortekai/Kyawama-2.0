import type { CSSProperties } from "react";

/**
 * Decorative page-hero motifs, all drawn from the same circle-and-path
 * language as the homepage learning path. Strokes draw on load (CSS only).
 */
const draw = (ms: number, dur = 1400) => ({ "--d": `${ms}ms`, "--dur": `${dur}ms` }) as CSSProperties;

const ring = "var(--color-green-600)";

/** About: two homes joined by a long arc — a connection across distance. */
export function OriginMotif() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="size-full">
      <circle cx="200" cy="200" r="190" stroke={ring} strokeWidth="1" />
      <circle cx="200" cy="200" r="130" stroke={ring} strokeWidth="1" strokeDasharray="1 6" />
      <path d="M 80 300 C 110 120 290 120 320 300" pathLength={1} className="anim-draw" style={draw(300)} stroke="var(--color-cream)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="80" cy="300" r="16" fill="var(--color-yellow)" className="anim-pop" style={draw(200)} />
      <circle cx="320" cy="300" r="16" fill="var(--color-terracotta-deco)" className="anim-pop" style={draw(1500)} />
      <circle cx="200" cy="165" r="5" fill="var(--color-teal)" className="anim-pop" style={draw(900)} />
    </svg>
  );
}

/** Programme: a rising route of weekly steps. */
export function RouteMotif() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="size-full">
      <circle cx="200" cy="200" r="190" stroke={ring} strokeWidth="1" />
      <path d="M 40 330 C 120 330 130 250 200 240 C 270 230 280 130 360 110" pathLength={1} className="anim-draw" style={draw(250)} stroke="var(--color-cream)" strokeWidth="2.5" strokeLinecap="round" />
      {[
        [40, 330, "var(--color-yellow)", 200],
        [200, 240, "var(--color-teal)", 850],
        [360, 110, "var(--color-terracotta-deco)", 1450],
      ].map(([x, y, fill, d]) => (
        <circle key={String(x)} cx={x as number} cy={y as number} r="13" fill={fill as string} className="anim-pop" style={draw(d as number)} />
      ))}
      {Array.from({ length: 16 }, (_, i) => (
        <circle key={i} cx={60 + i * 19} cy={372} r="3" fill="var(--color-sage)" opacity={0.25 + (i / 16) * 0.6} className="anim-fade" style={draw(400 + i * 50)} />
      ))}
    </svg>
  );
}

/** Support: an open doorway with arcs radiating outward. */
export function DoorMotif() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="size-full">
      {[70, 120, 170].map((r, i) => (
        <circle key={r} cx="200" cy="230" r={r} stroke={ring} strokeWidth="1" strokeDasharray={i === 1 ? "1 6" : undefined} />
      ))}
      <path d="M 160 300 V 160 H 240 V 300" pathLength={1} className="anim-draw" style={draw(250, 1100)} stroke="var(--color-cream)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 200 230 H 330 M 305 205 L 330 230 L 305 255" pathLength={1} className="anim-draw" style={draw(1100, 700)} stroke="var(--color-yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="120" cy="120" r="7" fill="var(--color-teal)" className="anim-pop" style={draw(700)} />
      <circle cx="300" cy="330" r="10" fill="var(--color-terracotta-deco)" className="anim-pop" style={draw(1400)} />
    </svg>
  );
}

/** FAQ: overlapping conversation rings. */
export function QuestionMotif() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="size-full">
      <circle cx="200" cy="200" r="190" stroke={ring} strokeWidth="1" />
      <circle cx="160" cy="190" r="80" pathLength={1} className="anim-draw" style={draw(250, 1200)} stroke="var(--color-cream)" strokeWidth="2.5" />
      <circle cx="250" cy="220" r="80" pathLength={1} className="anim-draw" style={draw(650, 1200)} stroke="var(--color-yellow)" strokeWidth="2.5" />
      <circle cx="205" cy="205" r="9" fill="var(--color-terracotta-deco)" className="anim-pop" style={draw(1500)} />
    </svg>
  );
}
