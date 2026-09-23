import type { Metadata } from "next";
import { aboutPage as page } from "@/content/about";
import { routes, team } from "@/content/site";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { RailMarker, ScrollRail } from "@/components/motion/ScrollRail";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { OriginMotif } from "@/components/ui/Motifs";
import { PageHero } from "@/components/ui/PageHero";
import { Container, CurveEdge, Eyebrow, Section, cx } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

export const metadata: Metadata = page.meta;

const personAccent = ["bg-yellow", "bg-teal", "bg-terracotta-deco"];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow} heading={page.hero.heading} lead={page.hero.lead} motif={<OriginMotif />} />

      {/* Origin story — chapters on a rail that fills as you read */}
      <Section aria-labelledby="origin-heading" className="pt-[calc(var(--section-y)*0.7)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
                <Reveal variant="fade">
                  <Eyebrow>{page.story.eyebrow}</Eyebrow>
                </Reveal>
                <RevealWords id="origin-heading" text={page.story.heading} delay={80} className="mt-5 max-w-[12ch] text-h2 text-green" />
              </div>
            </div>
            <ScrollRail className="lg:col-span-8">
              <ol className="space-y-20 lg:space-y-28">
                {page.chapters.map((chapter, index) => (
                  <li key={chapter.title} className="relative">
                    <RailMarker label={String(index + 1).padStart(2, "0")} />
                    <Reveal variant="fade">
                      <p className="text-eyebrow font-semibold uppercase text-terracotta">{chapter.label}</p>
                    </Reveal>
                    <RevealWords as="h3" text={chapter.title} delay={80} className="mt-3 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-tight text-green" />
                    <div className="mt-6 space-y-5">
                      {chapter.body.map((paragraph, p) => (
                        <Reveal key={paragraph} as="p" delay={seq.body + p * 120} className={cx(p === 0 ? "text-lead text-ink" : "text-body")}>
                          {paragraph}
                        </Reveal>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollRail>
          </div>
        </Container>
      </Section>

      {/* The name */}
      <Section tone="sand" aria-labelledby="name-heading" className="overflow-hidden">
        <CurveEdge position="top" fill="cream" />
        <ParallaxLayer className="pointer-events-none absolute -left-40 top-1/4 size-[30rem]" y={[80, -80]} rotate={[0, 25]}>
          <svg viewBox="0 0 200 200" fill="none" className="size-full">
            <circle cx="100" cy="100" r="96" stroke="var(--color-cream-300)" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="64" stroke="var(--color-cream-300)" strokeWidth="1.5" strokeDasharray="1 5" />
            <circle cx="196" cy="100" r="4" fill="var(--color-terracotta-deco)" />
          </svg>
        </ParallaxLayer>
        <Container className="relative text-center">
          <Reveal variant="fade" className="flex justify-center">
            <Eyebrow>{page.name.eyebrow}</Eyebrow>
          </Reveal>
          <h2 id="name-heading" className="mt-8">
            <span data-reveal="words" suppressHydrationWarning className="block">
              <span className="kw-mask pb-[0.12em]! -mb-[0.12em]!">
                <span className="text-[clamp(4rem,2rem+9vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-green">
                  {page.name.word}
                </span>
              </span>
            </span>
            <Reveal as="span" delay={seq.body} className="mt-6 block font-display text-statement font-semibold text-terracotta">
              {page.name.meaning}
            </Reveal>
          </h2>
        </Container>
        <CurveEdge position="bottom" fill="green" />
      </Section>

      {/* Vision and mission */}
      <Section tone="green" aria-label="Vision and mission" className="overflow-hidden">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {page.purpose.map((item, index) => (
              <div key={item.label} className={cx(index === 1 && "lg:pt-32")}>
                <Reveal variant="fade">
                  <Eyebrow tone="dark">{item.label}</Eyebrow>
                </Reveal>
                <Reveal as="p" delay={seq.body} className="mt-6 font-display text-statement font-semibold tracking-[-0.015em] text-cream">
                  {item.body}
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
        <CurveEdge position="bottom" fill="cream" />
      </Section>

      {/* Team */}
      <Section aria-labelledby="team-heading" className="pt-[calc(var(--section-y)+2rem)]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal variant="fade">
                <Eyebrow>{page.team.eyebrow}</Eyebrow>
              </Reveal>
              <RevealWords id="team-heading" text={page.team.heading} delay={80} className="mt-5 max-w-[15ch] text-h2 text-green" />
            </div>
          </div>

          <ul className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-20">
            {team.map((person, index) => (
              <Reveal
                as="li"
                key={person.name}
                variant="scale"
                delay={seq.items + index * seq.itemStep}
                className={cx(
                  "relative isolate flex flex-col overflow-hidden rounded-(--radius-panel) bg-cream-200 p-8 ring-1 ring-cream-300 lg:p-10",
                  index === 1 && "md:translate-y-10",
                )}
              >
                <span aria-hidden="true" className={cx("absolute -right-10 -top-10 -z-10 size-32 rounded-full opacity-90", personAccent[index])} />
                <span aria-hidden="true" className="font-display text-sm font-bold tabular-nums text-body">0{index + 1}</span>
                <h3 className="mt-16 font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.25rem)] font-bold leading-tight tracking-tight text-green">
                  {person.name}
                </h3>
                <p className="mt-2 text-eyebrow font-semibold uppercase text-terracotta">{person.role}</p>
                <p className="mt-6 text-body">{person.body}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" delay={seq.cta} className="mt-20 max-w-2xl text-lead text-body md:mt-24">
            {page.team.note}
          </Reveal>
        </Container>
      </Section>

      {/* Closing */}
      <Section className="pt-0">
        <Container>
          <Reveal variant="wipe">
            <div className="flex flex-col items-start gap-8 rounded-(--radius-panel) bg-terracotta p-8 text-cream sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
              <RevealWords as="h2" text={page.closing.heading} className="max-w-[18ch] text-h2 text-cream" />
              <ButtonLink href={routes.support} variant="light" className="shrink-0">
                {page.closing.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
