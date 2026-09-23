import { pilot } from "@/content/home";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Reveal } from "@/components/motion/Reveal";
import { CalendarGlyph, PilotFigures, PlannedBadge, PlannedWeek } from "@/components/pilot/PilotPlan";
import { Container, CurveEdge, Section, SectionIntro } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/** Planned pilot — full-bleed green band between the light sections. */
export function Pilot() {
  return (
    <Section
      id={pilot.id}
      tone="green"
      aria-labelledby="pilot-heading"
      className="overflow-hidden pb-[calc(var(--section-y)+3rem)] pt-[calc(var(--section-y)+3rem)]"
    >
      <CurveEdge position="top" fill="sand" />
      <ParallaxLayer
        className="pointer-events-none absolute -right-[26rem] top-10 size-[44rem] sm:-right-40"
        rotate={[-12, 12]}
        scale={[0.92, 1.08]}
      >
        <svg viewBox="0 0 400 400" fill="none" stroke="var(--color-green-600)" strokeWidth="1.2" className="size-full">
          <circle cx="200" cy="200" r="100" />
          <circle cx="200" cy="200" r="150" opacity="0.7" strokeDasharray="2 7" />
          <circle cx="200" cy="200" r="198" opacity="0.45" />
          <circle cx="200" cy="100" r="7" fill="var(--color-yellow)" stroke="none" />
          <circle cx="350" cy="200" r="5" fill="var(--color-teal)" stroke="none" />
        </svg>
      </ParallaxLayer>

      <Container className="relative">
        <Reveal variant="fade">
          <PlannedBadge />
        </Reveal>
        <SectionIntro
          className="mt-4"
          eyebrow={pilot.eyebrow}
          heading={pilot.heading}
          headingId="pilot-heading"
          tone="dark"
          layout="stack"
          accent={["practice."]}
        />

        <PilotFigures className="mt-16 lg:mt-20" />

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <PlannedWeek className="lg:col-span-7" />
          <div className="space-y-5 lg:col-span-5 lg:pt-9">
            <Reveal delay={seq.body}>
              <p className="text-sage">{pilot.body}</p>
            </Reveal>
            <Reveal delay={seq.cta}>
              <p className="flex gap-3 rounded-2xl bg-green-700 p-5 text-cream ring-1 ring-green-600">
                <CalendarGlyph />
                <span>{pilot.scheduleNote}</span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
      <CurveEdge position="bottom" fill="cream" />
    </Section>
  );
}
