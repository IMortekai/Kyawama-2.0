import { programme } from "@/content/home";
import { employmentExpectation } from "@/content/programme";
import { JourneyRoute } from "@/components/journey/JourneyRoute";
import { Reveal } from "@/components/motion/Reveal";
import { Container, CurveEdge, Section, SectionIntro, TextLink } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

export function LearningJourney() {
  return (
    <Section id={programme.id} tone="sand" aria-labelledby="programme-heading" className="pt-[calc(var(--section-y)+2rem)]">
      <CurveEdge position="top" fill="cream" />
      <Container>
        <SectionIntro
          eyebrow={programme.eyebrow}
          heading={programme.heading}
          headingId="programme-heading"
          lead={programme.intro}
        />

        <div className="mt-16 lg:mt-24">
          <JourneyRoute />
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-green/15 pt-10 lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="flex max-w-2xl items-start gap-4">
            <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-green font-display text-sm font-bold text-cream">
              i
            </span>
            <p className="text-ink">{employmentExpectation}</p>
          </Reveal>
          <Reveal delay={seq.cta}>
            <TextLink href={programme.link.href}>{programme.link.label}</TextLink>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
