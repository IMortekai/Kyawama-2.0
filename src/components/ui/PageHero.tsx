import type { CSSProperties, ReactNode } from "react";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Container, CurveEdge, cx } from "./primitives";
import { delay } from "@/lib/motion";

/**
 * Opening band for inner pages. Title words rise in on load with pure CSS
 * (no JS needed, readable within ~0.6s); the decorative motif drifts with
 * scroll. `motif` varies per page so each route has its own character.
 */
export function PageHero({
  eyebrow,
  heading,
  lead,
  motif,
  next = "cream",
  children,
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  motif: ReactNode;
  /** Colour of the section that follows, for the curved edge. */
  next?: "cream" | "sand";
  children?: ReactNode;
}) {
  const words = heading.split(" ");
  return (
    <section aria-labelledby="page-heading" className="relative isolate overflow-hidden bg-green text-cream">
      <ParallaxLayer
        className="pointer-events-none absolute -bottom-72 -right-64 -z-10 size-[34rem] opacity-80 sm:-bottom-56 sm:-right-40 lg:bottom-6 lg:right-0 lg:size-[32rem] lg:opacity-100 xl:right-[4%]"
        y={[0, -80]}
        rotate={[0, 10]}
        offset={["start start", "end start"]}
        settled={0}
      >
        <div className="anim-fade size-full" style={delay(200)}>
          {motif}
        </div>
      </ParallaxLayer>

      <Container className="relative pb-32 pt-16 sm:pt-24 lg:pb-44 lg:pt-28">
        <p
          className="anim-fade-up flex items-center gap-3 text-eyebrow font-semibold uppercase text-yellow"
          style={delay(0)}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </p>
        <h1
          id="page-heading"
          aria-label={heading}
          className="mt-7 max-w-[15ch] text-[clamp(2.75rem,1.5rem+4.4vw,5.5rem)] leading-[0.96] font-extrabold tracking-[-0.04em] lg:max-w-[13ch]"
        >
          {words.map((word, index) => (
            <span key={`${word}-${index}`} aria-hidden="true">
              <span className="kw-mask anim-line pb-[0.18em]! -mb-[0.18em]!">
                <span style={{ "--d": `${80 + index * 70}ms` } as CSSProperties}>{word}</span>
              </span>
              {index < words.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        <p
          className={cx("anim-fade-up mt-8 max-w-[40rem] text-lead text-sage")}
          style={delay(Math.min(80 + words.length * 70 + 120, 700))}
        >
          {lead}
        </p>
        {children && (
          <div className="anim-fade-up mt-10" style={delay(Math.min(80 + words.length * 70 + 260, 850))}>
            {children}
          </div>
        )}
      </Container>
      <CurveEdge position="bottom" fill={next} />
    </section>
  );
}
