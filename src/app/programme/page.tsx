import type { Metadata } from "next";
import { pilot } from "@/content/home";
import { programmePage as page } from "@/content/programme";
import { routes } from "@/content/site";
import { JourneyRoute } from "@/components/journey/JourneyRoute";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { CalendarGlyph, PilotFigures, PlannedBadge, PlannedWeek } from "@/components/pilot/PilotPlan";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RouteMotif } from "@/components/ui/Motifs";
import { PageHero } from "@/components/ui/PageHero";
import { Container, CurveEdge, Eyebrow, Section, SectionIntro, TextLink, cx } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

export const metadata: Metadata = page.meta;

export default function ProgrammePage() {
  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow} heading={page.hero.heading} lead={page.hero.lead} motif={<RouteMotif />}>
        <ButtonLink href="#curriculum" variant="ghostDark">
          {page.hero.cta}
        </ButtonLink>
      </PageHero>

      {/* Who it is for */}
      <Section aria-labelledby="audience-heading" className="pt-[calc(var(--section-y)*0.7)]">
        <Container>
          <SectionIntro eyebrow={page.audience.eyebrow} heading={page.audience.heading} headingId="audience-heading" />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {page.audience.criteria.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                variant="scale"
                delay={seq.items + index * seq.itemStep}
                className="flex flex-col gap-8 rounded-(--radius-panel) bg-cream-200 p-7 ring-1 ring-cream-300"
              >
                <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-full bg-green text-cream">
                  <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4.5 10.5 3.5 3.5 7.5-8" />
                  </svg>
                </span>
                <p className="text-lead font-medium leading-snug text-ink">{item}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={seq.cta} className="mt-8">
            <p className="inline-flex items-center gap-3 rounded-full bg-yellow px-5 py-2.5 font-semibold text-green">
              <span aria-hidden="true" className="size-2 rounded-full bg-green" />
              {page.audience.note}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* How it runs + the planned pilot */}
      <Section tone="green" aria-labelledby="delivery-heading" className="overflow-hidden pt-[calc(var(--section-y)+3rem)]">
        <CurveEdge position="top" fill="cream" />
        <ParallaxLayer className="pointer-events-none absolute -left-72 bottom-0 size-[40rem] sm:-left-48" rotate={[10, -10]}>
          <svg viewBox="0 0 400 400" fill="none" stroke="var(--color-green-600)" strokeWidth="1.2" className="size-full">
            <circle cx="200" cy="200" r="120" />
            <circle cx="200" cy="200" r="190" strokeDasharray="2 7" />
          </svg>
        </ParallaxLayer>
        <Container className="relative">
          <SectionIntro
            eyebrow={page.delivery.eyebrow}
            heading={page.delivery.heading}
            headingId="delivery-heading"
            tone="dark"
            layout="stack"
            accent={["repetition."]}
            lead={
              <div className="space-y-5">
                {page.delivery.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            }
          />

          <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
            <PlannedWeek className="lg:col-span-7" />
            <Reveal delay={seq.visual} className="rounded-(--radius-panel) bg-green-900 p-7 ring-1 ring-green-600 lg:col-span-5 lg:mt-9">
              <p className="text-eyebrow font-semibold uppercase text-yellow">{page.delivery.partner.label}</p>
              <p className="mt-4 text-lead text-cream">{page.delivery.partner.body}</p>
            </Reveal>
          </div>

          <div className="mt-20 border-t border-green-600 pt-14 lg:mt-28">
            <Reveal variant="fade" className="flex flex-wrap items-center gap-3">
              <PlannedBadge />
              <Eyebrow tone="dark">{pilot.eyebrow}</Eyebrow>
            </Reveal>
            <PilotFigures className="mt-12" />
            <Reveal delay={seq.cta} className="mt-12 max-w-2xl">
              <p className="flex gap-3 rounded-2xl bg-green-700 p-5 text-cream ring-1 ring-green-600">
                <CalendarGlyph />
                <span>{pilot.scheduleNote}</span>
              </p>
            </Reveal>
          </div>
        </Container>
        <CurveEdge position="bottom" fill="cream" />
      </Section>

      {/* Curriculum on the journey route */}
      <Section id="curriculum" aria-labelledby="curriculum-heading" className="pt-[calc(var(--section-y)+2rem)]">
        <Container>
          <SectionIntro
            eyebrow={page.curriculum.eyebrow}
            heading={page.curriculum.heading}
            headingId="curriculum-heading"
            lead={page.curriculum.intro}
          />
          <div className="mt-16 lg:mt-24">
            <JourneyRoute detail surface="cream" />
          </div>
        </Container>
      </Section>

      {/* Selection and after the course */}
      <Section tone="sand" aria-label="Selection and outcomes">
        <CurveEdge position="top" fill="cream" />
        <Container className="grid gap-6 pt-8 lg:grid-cols-2">
          {[page.selection, page.after].map((block, index) => (
            <Reveal
              key={block.eyebrow}
              variant="scale"
              delay={index * seq.itemStep}
              className={cx(
                "flex flex-col rounded-(--radius-panel) p-8 sm:p-10 lg:p-12",
                index === 0 ? "bg-cream ring-1 ring-cream-300" : "bg-green text-cream",
              )}
            >
              <p className={cx("text-eyebrow font-semibold uppercase", index === 0 ? "text-terracotta" : "text-yellow")}>
                {block.eyebrow}
              </p>
              <RevealWords
                as="h2"
                text={block.heading}
                delay={120}
                className={cx("mt-5 max-w-[16ch] text-[clamp(1.75rem,1.3rem+1.6vw,2.625rem)] leading-[1.05]", index === 0 ? "text-green" : "text-cream")}
              />
              <p className={cx("mt-6 text-lead", index === 0 ? "text-body" : "text-sage")}>{block.body}</p>
            </Reveal>
          ))}
        </Container>
        <CurveEdge position="bottom" fill="cream" />
      </Section>

      {/* Recommend a learner */}
      <Section aria-labelledby="referral-heading" className="pt-[calc(var(--section-y)+2rem)]">
        <Container>
          <Reveal variant="wipe">
            <div className="relative isolate overflow-hidden rounded-(--radius-panel) bg-green-900 p-8 text-cream sm:p-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:p-16">
              <ParallaxLayer className="pointer-events-none absolute -right-24 -top-24 -z-10 size-96" rotate={[-15, 15]}>
                <svg viewBox="0 0 200 200" fill="none" className="size-full">
                  <circle cx="100" cy="100" r="90" stroke="var(--color-green-700)" strokeWidth="2" />
                  <circle cx="100" cy="100" r="55" stroke="var(--color-green-700)" strokeWidth="2" strokeDasharray="2 6" />
                  <circle cx="10" cy="100" r="7" fill="var(--color-yellow)" />
                </svg>
              </ParallaxLayer>
              <div className="lg:col-span-7">
                <p className="text-eyebrow font-semibold uppercase text-yellow">{page.referral.eyebrow}</p>
                <RevealWords
                  id="referral-heading"
                  text={page.referral.heading}
                  delay={100}
                  className="mt-5 max-w-[18ch] text-h2 text-cream"
                />
              </div>
              <div className="mt-8 lg:col-span-5 lg:mt-0 lg:self-end">
                <Reveal as="p" delay={seq.body} className="text-lead text-sage">
                  {page.referral.body}
                </Reveal>
                <Reveal delay={seq.cta} className="mt-8">
                  <ButtonLink href={page.referral.cta.href}>{page.referral.cta.label}</ButtonLink>
                  <p className="mt-2 text-sm text-sage">{page.referral.cta.email}</p>
                </Reveal>
              </div>
            </div>
          </Reveal>
          <Reveal delay={seq.cta} className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            <TextLink href={routes.support}>{page.links.support}</TextLink>
            <TextLink href={routes.faq}>{page.links.faq}</TextLink>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
