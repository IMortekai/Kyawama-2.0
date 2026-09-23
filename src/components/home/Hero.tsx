import type { CSSProperties } from "react";
import { hero } from "@/content/home";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, CurveEdge } from "@/components/ui/primitives";
import { delay, heroTimeline as T } from "@/lib/motion";
import { HeroPath } from "./HeroPath";

/**
 * Hero. Load animation is pure CSS (line masks, fade-ups, drawn path): it
 * needs no JavaScript and is readable within ~0.7s. Scroll-linked parallax on
 * the decorative layers is added by Motion after hydration.
 */
export function Hero() {
  const [first, second] = hero.headingLines;
  const [before, after] = second.split(hero.emphasis);

  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-green text-cream">
      {/* Concentric arcs echo the existing site's motif; they turn slowly as you scroll */}
      <ParallaxLayer
        className="pointer-events-none absolute -right-[22rem] -bottom-[30rem] -z-10 size-[64rem] sm:-right-[14rem]"
        rotate={[0, 18]}
        offset={["start start", "end start"]}
        settled={0}
      >
        <svg viewBox="0 0 400 400" className="size-full anim-fade" fill="none" stroke="var(--color-green-600)" strokeWidth="0.8">
          <circle cx="200" cy="200" r="90" opacity="0.7" />
          <circle cx="200" cy="200" r="140" opacity="0.5" strokeDasharray="1 6" />
          <circle cx="200" cy="200" r="190" opacity="0.35" />
        </svg>
      </ParallaxLayer>

      <Container className="relative grid items-center gap-10 pb-28 pt-14 sm:pt-20 lg:min-h-[min(54rem,calc(100svh-var(--header-h)))] lg:grid-cols-[1.45fr_1fr] lg:gap-4 lg:pb-36 lg:pt-16">
        <div className="relative z-10 max-w-[46rem]">
          <p
            className="anim-fade-up flex flex-wrap items-center gap-x-3 gap-y-1 text-eyebrow font-semibold uppercase text-yellow"
            style={delay(T.eyebrow)}
          >
            {hero.eyebrow.map((part, index) => (
              <span key={part} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-yellow/70" />}
                {part}
              </span>
            ))}
          </p>

          <h1
            id="hero-heading"
            className="mt-7 text-[clamp(3rem,1.3rem+4.6vw,5.25rem)] leading-[0.94] font-extrabold tracking-[-0.04em]"
          >
            <span className="kw-mask anim-line block! pb-[0.3em]! -mb-[0.3em]!">
              <span style={delay(T.line)}>{first}</span>
            </span>
            <span className="kw-mask anim-line block! pb-[0.34em]! -mb-[0.34em]!">
              <span style={delay(T.line + T.lineStep)}>
                {before}
                <span className="relative inline-block text-yellow">
                  {hero.emphasis}
                  <Underline />
                </span>
                {after}
              </span>
            </span>
          </h1>

          <p className="anim-fade-up mt-8 max-w-[34rem] text-lead text-sage" style={delay(T.body)}>
            {hero.body}
          </p>

          <div className="anim-fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={delay(T.cta)}>
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghostDark">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <ParallaxLayer
          className="relative lg:-mr-10 xl:-mr-16"
          y={[0, -70]}
          offset={["start start", "end start"]}
          settled={0}
          decorative={false}
        >
          <HeroPath />
        </ParallaxLayer>
      </Container>

      <CurveEdge position="bottom" fill="cream" />
    </section>
  );
}

function Underline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-[0.14em] left-[-2%] h-[0.26em] w-[104%] overflow-visible"
      fill="none"
    >
      <path
        d="M3 14C45 6 120 3 197 9"
        pathLength={1}
        className="anim-draw"
        style={{ ...delay(T.line + T.lineStep + 520), "--dur": "650ms" } as CSSProperties}
        stroke="var(--color-terracotta-deco)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
