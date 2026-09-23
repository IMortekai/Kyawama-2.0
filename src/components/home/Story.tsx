import { story } from "@/content/home";
import { team } from "@/content/site";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { Container, Eyebrow, TextLink } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/**
 * People and origin. Editorial two-column layout: the heading stays in view
 * (CSS sticky — no scroll hijacking) while the story, Fanny's feature and the
 * team pass alongside it.
 */
export function Story() {
  return (
    <section id={story.id} aria-labelledby="story-heading" className="on-light relative bg-cream pb-(--section-y)">
      <Container>
        <div className="grid gap-12 border-t border-green/15 pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-24">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
              <Reveal variant="fade">
                <Eyebrow>{story.eyebrow}</Eyebrow>
              </Reveal>
              <RevealWords
                id="story-heading"
                text={story.heading}
                delay={80}
                className="mt-5 max-w-[13ch] text-h2 text-green"
              />
              <Reveal delay={seq.cta} className="mt-10 hidden lg:block">
                <TextLink href={story.link.href}>{story.link.label}</TextLink>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 font-display text-statement font-medium tracking-[-0.015em] text-ink">
              {story.body.map((paragraph, index) => (
                <Reveal key={paragraph} as="p" delay={seq.body + index * 120}>
                  {paragraph}
                </Reveal>
              ))}
            </div>

            {/* Local leadership feature — typographic until an approved portrait exists */}
            <Reveal variant="wipe" delay={seq.visual} className="mt-14 lg:mt-20">
              <figure className="relative isolate overflow-hidden rounded-(--radius-panel) bg-terracotta text-cream">
                <ParallaxLayer
                  className="pointer-events-none absolute -right-20 -top-24 -z-10 size-80"
                  y={[-30, 50]}
                  rotate={[-10, 20]}
                >
                  <svg viewBox="0 0 300 300" className="size-full" fill="none">
                    <circle cx="150" cy="150" r="140" stroke="var(--color-terracotta-deco)" strokeWidth="2" />
                    <circle cx="150" cy="150" r="100" stroke="var(--color-terracotta-deco)" strokeWidth="2" strokeDasharray="2 8" />
                    <circle cx="150" cy="150" r="44" fill="var(--color-yellow)" />
                  </svg>
                </ParallaxLayer>
                <div className="grid gap-8 p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-eyebrow font-semibold uppercase text-cream">{story.person.label}</p>
                    <p className="mt-4 font-display text-h2 font-bold tracking-tight">{story.person.name}</p>
                    <p className="mt-2 font-medium text-cream">{story.person.role}</p>
                  </div>
                  <figcaption className="max-w-xl border-t border-cream/25 pt-6 text-lead text-cream">
                    {story.person.body}
                  </figcaption>
                </div>
              </figure>
            </Reveal>

            <div className="mt-14">
              <Reveal variant="fade">
                <p className="text-eyebrow font-semibold uppercase text-body">{story.teamLabel}</p>
              </Reveal>
              <ul className="mt-5 grid gap-6 sm:grid-cols-3 sm:gap-6">
                {team.map((person, index) => (
                  <Reveal
                    as="li"
                    key={person.name}
                    delay={seq.items + index * seq.itemStep}
                    className="border-t-2 border-green/15 pt-5"
                  >
                    <p className="font-display text-h3 font-semibold text-ink">{person.name}</p>
                    <p className="mt-1 text-body">{person.role}</p>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={seq.cta} className="mt-12 lg:hidden">
              <TextLink href={story.link.href}>{story.link.label}</TextLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
