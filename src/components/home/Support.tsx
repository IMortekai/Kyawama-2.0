import { homeFaq, support } from "@/content/home";
import { faqsById } from "@/content/faq";
import { supportRoutes } from "@/content/support";
import { FaqList } from "@/components/faq/FaqList";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ContactActions } from "@/components/support/ContactActions";
import { SupportGlyph } from "@/components/support/SupportGlyph";
import { Container, Section, SectionIntro, TextLink, cx } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/**
 * Support routes. Enquiry-only: no tiers, amounts, goals or payment widget.
 */
export function Support() {
  const [primary, ...rest] = supportRoutes.slice(0, 4);
  const secondary = supportRoutes.slice(4);

  return (
    <Section id={support.id} aria-labelledby="support-heading">
      <Container>
        <SectionIntro
          eyebrow={support.eyebrow}
          heading={support.heading}
          headingId="support-heading"
          lead={support.body}
        />

        {/* Bento: funding leads, the other practical routes sit alongside */}
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal
            as="li"
            variant="scale"
            delay={seq.items}
            className="relative isolate overflow-hidden rounded-(--radius-panel) bg-green p-8 text-cream md:col-span-2 lg:col-span-1 lg:row-span-2 lg:p-10"
          >
            <ParallaxLayer className="pointer-events-none absolute -bottom-24 -right-24 -z-10 size-72" rotate={[-20, 20]}>
              <svg viewBox="0 0 200 200" fill="none" className="size-full">
                <circle cx="100" cy="100" r="90" stroke="var(--color-green-600)" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="60" stroke="var(--color-green-600)" strokeWidth="1.5" strokeDasharray="2 6" />
                <circle cx="100" cy="10" r="6" fill="var(--color-yellow)" />
              </svg>
            </ParallaxLayer>
            <span className="flex size-14 items-center justify-center rounded-full bg-yellow text-green">
              <SupportGlyph kind={primary.icon} className="size-7" />
            </span>
            <h3 className="mt-10 text-h2 text-cream">{primary.title}</h3>
            <p className="mt-4 max-w-[36ch] text-lead text-sage">{primary.short}</p>
          </Reveal>
          {rest.map((route, index) => (
            <Reveal
              as="li"
              variant="scale"
              key={route.title}
              delay={seq.items + (index + 1) * seq.itemStep}
              className={cx(
                "group flex flex-col gap-6 rounded-(--radius-panel) bg-cream-200 p-7 ring-1 ring-cream-300 transition-[transform,box-shadow] duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgb(18_70_58/0.45)] motion-reduce:hover:translate-y-0 sm:p-8",
                index === 2 && "lg:col-span-2",
              )}
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-cream text-green ring-1 ring-cream-300 transition-colors duration-200 group-hover:bg-green group-hover:text-cream">
                <SupportGlyph kind={route.icon} />
              </span>
              <div>
                <h3 className="text-h3 text-ink">{route.title}</h3>
                <p className="mt-2 max-w-[48ch] text-body">{route.short}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {secondary.map((route, index) => (
            <Reveal
              as="li"
              key={route.title}
              delay={seq.cta + index * seq.itemStep}
              className="flex items-start gap-4 rounded-2xl border border-dashed border-green/25 p-5"
            >
              <SupportGlyph kind={route.icon} className="mt-0.5 shrink-0 text-terracotta" />
              <p className="text-ink">
                <strong className="font-semibold">{route.title}.</strong> {route.short}
              </p>
            </Reveal>
          ))}
        </ul>

        {/* Enquiry panel */}
        <Reveal variant="wipe" className="mt-16 lg:mt-24">
          <div className="relative isolate overflow-hidden rounded-(--radius-panel) bg-green-900 p-8 text-cream sm:p-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-16">
            <ParallaxLayer className="pointer-events-none absolute -left-16 -top-24 -z-10 size-80" y={[-30, 30]}>
              <svg viewBox="0 0 200 200" fill="none" className="size-full">
                <circle cx="100" cy="100" r="90" stroke="var(--color-green-700)" strokeWidth="2" />
                <circle cx="150" cy="150" r="10" fill="var(--color-terracotta-deco)" />
              </svg>
            </ParallaxLayer>
            <RevealWords
              as="h3"
              text={support.ctaLead}
              className="max-w-[18ch] text-h2 text-cream lg:col-span-6"
            />
            <ContactActions tone="dark" className="mt-10 lg:col-span-6 lg:mt-0" />
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <RevealWords as="h3" id="faq-heading" text={homeFaq.heading} className="text-h2 text-green" />
            <Reveal delay={seq.cta} className="mt-8">
              <TextLink href={homeFaq.link.href}>{homeFaq.link.label}</TextLink>
            </Reveal>
          </div>
          <FaqList items={faqsById([...homeFaq.ids])} labelledBy="faq-heading" className="lg:col-span-8" />
        </div>

        <Reveal delay={seq.cta} className="mt-14">
          <TextLink href={support.link.href}>{support.link.label}</TextLink>
        </Reveal>
      </Container>
    </Section>
  );
}
