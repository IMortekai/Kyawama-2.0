import { statement } from "@/content/home";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ScrollHighlight } from "@/components/motion/ScrollHighlight";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/** Opening statement after the hero: the gap Kyawama exists to close. */
export function Statement() {
  return (
    <section aria-labelledby="statement-heading" className="on-light relative overflow-hidden bg-cream pb-(--section-y) pt-[calc(var(--section-y)*0.75)]">
      <ParallaxLayer
        className="pointer-events-none absolute -left-24 top-10 hidden size-72 lg:block"
        y={[60, -60]}
      >
        <svg viewBox="0 0 200 200" fill="none" className="size-full">
          <circle cx="100" cy="100" r="96" stroke="var(--color-cream-300)" strokeWidth="2" />
          <circle cx="100" cy="100" r="18" fill="var(--color-yellow)" />
        </svg>
      </ParallaxLayer>
      <ParallaxLayer
        className="pointer-events-none absolute -right-10 bottom-6 hidden size-40 lg:block"
        y={[-40, 40]}
      >
        <svg viewBox="0 0 200 200" fill="none" className="size-full">
          <circle cx="100" cy="100" r="60" fill="var(--color-teal)" opacity="0.14" />
          <circle cx="100" cy="100" r="14" fill="var(--color-terracotta-deco)" />
        </svg>
      </ParallaxLayer>

      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal variant="fade" className="flex justify-center">
            <Eyebrow>{statement.eyebrow}</Eyebrow>
          </Reveal>
          <RevealWords
            as="h2"
            id="statement-heading"
            text={statement.heading}
            delay={seq.heading + 80}
            accent={["Access", "not."]}
            className="mx-auto mt-6 max-w-[15ch] text-display font-extrabold tracking-[-0.04em] text-green"
          />
          <Reveal delay={seq.body}>
            <ScrollHighlight
              text={statement.body}
              className="mx-auto mt-10 max-w-4xl justify-center text-statement font-display font-semibold tracking-[-0.015em]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
