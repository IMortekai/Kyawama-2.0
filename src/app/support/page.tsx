import type { Metadata } from "next";
import { fundingAreas, supportPage as page, supportRoutes } from "@/content/support";
import { routes } from "@/content/site";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { RailMarker, ScrollRail } from "@/components/motion/ScrollRail";
import { ContactActions } from "@/components/support/ContactActions";
import { SupportGlyph } from "@/components/support/SupportGlyph";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DoorMotif } from "@/components/ui/Motifs";
import { PageHero } from "@/components/ui/PageHero";
import { Container, CurveEdge, Eyebrow, Section, SectionIntro, TextLink, cx } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

export const metadata: Metadata = page.meta;

/** Enquiry-only support page: no tiers, amounts, goals, progress bars or checkout. */
export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow} heading={page.hero.heading} lead={page.hero.lead} motif={<DoorMotif />}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#enquire">{page.hero.cta}</ButtonLink>
          <ButtonLink href="#routes" variant="ghostDark">
            {page.hero.secondaryCta}
          </ButtonLink>
        </div>
      </PageHero>

      {/* Six routes */}
      <Section id="routes" aria-labelledby="routes-heading" className="pt-[calc(var(--section-y)*0.7)]">
        <Container>
          <SectionIntro eyebrow={page.routes.eyebrow} heading={page.routes.heading} headingId="routes-heading" />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-(--radius-panel) bg-cream-300 ring-1 ring-cream-300 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {supportRoutes.map((route, index) => (
              <Reveal
                as="li"
                key={route.title}
                variant="fade"
                delay={seq.items + index * 70}
                className="group relative flex flex-col gap-8 bg-cream p-8 transition-colors duration-300 hover:bg-cream-200 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-full bg-green text-cream transition-transform duration-300 ease-out-soft group-hover:-rotate-6 group-hover:scale-105 motion-reduce:transform-none">
                    <SupportGlyph kind={route.icon} className="size-7" />
                  </span>
                  <span aria-hidden="true" className="font-display text-sm font-bold tabular-nums text-body">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-h3 text-green">{route.title}</h3>
                  <p className="mt-3 text-body">{route.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* What funding could cover */}
      <Section tone="green" aria-labelledby="funding-heading" className="overflow-hidden pt-[calc(var(--section-y)+3rem)] pb-[calc(var(--section-y)+3rem)]">
        <CurveEdge position="top" fill="cream" />
        <ParallaxLayer className="pointer-events-none absolute -right-60 top-0 size-[36rem]" rotate={[-15, 15]} y={[40, -40]}>
          <svg viewBox="0 0 400 400" fill="none" stroke="var(--color-green-600)" strokeWidth="1.2" className="size-full">
            <circle cx="200" cy="200" r="110" />
            <circle cx="200" cy="200" r="180" strokeDasharray="2 7" />
            <circle cx="20" cy="200" r="7" fill="var(--color-yellow)" stroke="none" />
          </svg>
        </ParallaxLayer>
        <Container className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal variant="fade">
              <Eyebrow tone="dark">{page.funding.eyebrow}</Eyebrow>
            </Reveal>
            <RevealWords
              id="funding-heading"
              text={page.funding.heading}
              delay={80}
              accent={["whole"]}
              accentClassName="text-yellow"
              className="mt-5 max-w-[14ch] text-h2 text-cream"
            />
            <Reveal as="p" delay={seq.body} className="mt-8 text-lead text-sage">
              {page.funding.body}
            </Reveal>
          </div>
          <ul className="flex flex-wrap content-start gap-3 lg:col-span-6 lg:col-start-7 lg:pt-8">
            {fundingAreas.map((area, index) => (
              <Reveal
                as="li"
                key={area}
                variant="scale"
                delay={seq.items + index * 60}
                className="rounded-full bg-green-700 px-5 py-3 font-display text-lg font-semibold text-cream ring-1 ring-green-600 sm:text-xl"
              >
                {area}
              </Reveal>
            ))}
          </ul>
        </Container>
        <CurveEdge position="bottom" fill="sand" />
      </Section>

      {/* Why + partner commitments */}
      <Section tone="sand" aria-labelledby="why-heading">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
              <Reveal variant="fade">
                <Eyebrow>{page.why.eyebrow}</Eyebrow>
              </Reveal>
              <RevealWords id="why-heading" text={page.why.heading} delay={80} className="mt-5 max-w-[13ch] text-h2 text-green" />
              <Reveal as="p" delay={seq.body} className="mt-8 text-lead text-body">
                {page.why.body}
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal variant="fade">
              <Eyebrow>{page.promise.eyebrow}</Eyebrow>
            </Reveal>
            <RevealWords as="h2" text={page.promise.heading} delay={80} className="mt-5 max-w-[15ch] text-[clamp(1.75rem,1.3rem+1.6vw,2.625rem)] leading-[1.05] text-green" />
            <ScrollRail className="mt-12">
              <ol className="space-y-12">
                {page.promise.points.map((point, index) => (
                  <li key={point.title} className="relative">
                    <RailMarker label={String(index + 1)} />
                    <Reveal delay={seq.items}>
                      <h3 className="text-h3 text-ink">{point.title}</h3>
                      <p className="mt-2 text-body">{point.body}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </ScrollRail>
          </div>
        </Container>
        <CurveEdge position="bottom" fill="cream" />
      </Section>

      {/* Enquiry */}
      <Section id="enquire" aria-labelledby="enquiry-heading" className="pt-[calc(var(--section-y)+2rem)]">
        <Container>
          <Reveal variant="wipe">
            <div className="relative isolate overflow-hidden rounded-(--radius-panel) bg-green-900 p-8 text-cream sm:p-12 lg:p-16">
              <ParallaxLayer className="pointer-events-none absolute -bottom-32 -left-24 -z-10 size-96" y={[40, -40]}>
                <svg viewBox="0 0 200 200" fill="none" className="size-full">
                  <circle cx="100" cy="100" r="90" stroke="var(--color-green-700)" strokeWidth="2" />
                  <circle cx="170" cy="60" r="8" fill="var(--color-terracotta-deco)" />
                </svg>
              </ParallaxLayer>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
                <div className="lg:col-span-6">
                  <p className="text-eyebrow font-semibold uppercase text-yellow">{page.contact.eyebrow}</p>
                  <RevealWords id="enquiry-heading" text={page.contact.heading} delay={80} className="mt-5 max-w-[14ch] text-h2 text-cream" />
                </div>
                <ContactActions tone="dark" className="lg:col-span-6" />
              </div>
              <p className={cx("mt-12 max-w-2xl border-t border-green-700 pt-6 text-sage")}>{page.contact.note}</p>
            </div>
          </Reveal>
          <Reveal delay={seq.cta} className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            <TextLink href={routes.faq}>{page.links.faq}</TextLink>
            <TextLink href={routes.programme}>{page.links.programme}</TextLink>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
