import type { Metadata } from "next";
import { faqGroups, faqPage as page } from "@/content/faq";
import { FaqList } from "@/components/faq/FaqList";
import { FaqNav } from "@/components/faq/FaqNav";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { ContactActions } from "@/components/support/ContactActions";
import { QuestionMotif } from "@/components/ui/Motifs";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

export const metadata: Metadata = page.meta;

export default function FaqPage() {
  const nav = faqGroups.map((group) => ({ id: group.id, title: group.title, count: group.items.length }));

  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow} heading={page.hero.heading} lead={page.hero.lead} motif={<QuestionMotif />} />

      <Section className="pt-[calc(var(--section-y)*0.7)]" aria-label="Frequently asked questions">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
              <Reveal variant="fade">
                <FaqNav groups={nav} />
              </Reveal>
            </div>
          </aside>

          <div className="space-y-24 lg:col-span-8 lg:space-y-32">
            {faqGroups.map((group) => (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-[calc(var(--header-h)+2rem)]">
                <RevealWords id={`${group.id}-heading`} text={group.title} className="text-h2 text-green" />
                <Reveal as="p" delay={seq.body} className="mt-4 text-lead text-body">
                  {group.intro}
                </Reveal>
                <FaqList items={group.items} labelledBy={`${group.id}-heading`} className="mt-10" />
              </section>
            ))}

            <Reveal variant="wipe">
              <div className="rounded-(--radius-panel) bg-cream-200 p-8 ring-1 ring-cream-300 sm:p-10">
                <RevealWords as="h2" text={page.closing} className="max-w-[20ch] text-[clamp(1.75rem,1.3rem+1.6vw,2.625rem)] leading-[1.05] text-green" />
                <ContactActions className="mt-8" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
