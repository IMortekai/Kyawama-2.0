import { story } from "@/content/home";
import { team } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/primitives";

export function Story() {
  return (
    <Section id={story.id} labelledBy="story-heading" className="pt-16 sm:pt-20 lg:pt-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{story.eyebrow}</Eyebrow>
            <Heading id="story-heading" className="mt-4 max-w-[14ch] text-green">
              {story.heading}
            </Heading>
          </Reveal>
          <Reveal className="space-y-5 text-lead text-body lg:col-span-6 lg:col-start-7 lg:pt-10" delay={0.08}>
            {story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        {/* Local leadership feature — text-led until an approved portrait exists */}
        <Reveal className="mt-16 lg:mt-24">
          <figure className="relative grid overflow-hidden rounded-(--radius-panel) bg-cream-200 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="relative flex min-h-56 flex-col justify-end overflow-hidden bg-terracotta p-8 text-cream sm:p-10">
              <svg
                aria-hidden="true"
                viewBox="0 0 300 300"
                className="absolute -right-16 -top-16 size-72 opacity-90"
                fill="none"
              >
                <circle cx="150" cy="150" r="140" stroke="var(--color-terracotta-deco)" strokeWidth="2" />
                <circle cx="150" cy="150" r="100" stroke="var(--color-terracotta-deco)" strokeWidth="2" />
                <circle cx="150" cy="150" r="44" fill="var(--color-yellow)" />
              </svg>
              <p className="relative text-eyebrow font-semibold uppercase text-cream">Local leadership</p>
              <p className="relative mt-3 font-display text-h2 font-bold tracking-tight">{story.person.name}</p>
              <p className="relative mt-2 font-medium text-cream/90">{story.person.role}</p>
            </div>
            <figcaption className="flex items-center p-8 sm:p-10 lg:p-14">
              <p className="max-w-xl font-display text-h3 font-semibold leading-snug tracking-tight text-green">
                {story.person.body}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-14 lg:mt-20">
          <p className="text-eyebrow font-semibold uppercase text-body">{story.teamLabel}</p>
          <RevealGroup as="ul" className="mt-5 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {team.map((person) => (
              <RevealItem as="li" key={person.name} className="border-t-2 border-green/15 pt-5">
                <p className="font-display text-h3 font-semibold text-ink">{person.name}</p>
                <p className="mt-1 text-body">{person.role}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}
