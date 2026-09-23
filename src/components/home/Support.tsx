import type { ReactNode } from "react";
import { support, type SupportIcon } from "@/content/home";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/primitives";
import { Faq } from "./Faq";

/**
 * Support routes. Enquiry-only: no tiers, amounts, goals or payment widget
 * (donation checkout is out of scope for the first pass).
 */
export function Support() {
  return (
    <Section id={support.id} labelledBy="support-heading" className="pt-12! sm:pt-16! lg:pt-20!">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow>{support.eyebrow}</Eyebrow>
            <Heading id="support-heading" className="mt-4 max-w-[15ch] text-green">
              {support.heading}
            </Heading>
          </div>
          <p className="text-lead text-body lg:col-span-5 lg:col-start-8 lg:self-end">{support.body}</p>
        </Reveal>

        <RevealGroup as="ul" className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:mt-16">
          {support.options.map((option) => (
            <RevealItem
              as="li"
              key={option.title}
              className="group flex gap-5 border-t border-green/15 py-7 sm:py-8"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream-200 text-green transition-colors duration-150 group-hover:bg-green group-hover:text-cream">
                <SupportGlyph kind={option.icon} />
              </span>
              <div>
                <h3 className="text-h3 text-ink">{option.title}</h3>
                <p className="mt-2 max-w-[42ch] text-body">{option.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="border-t border-green/15 pt-7">
          <p className="max-w-3xl text-ink">{support.additional}</p>
        </Reveal>

        <Reveal className="mt-12 rounded-(--radius-panel) bg-cream-200 p-6 sm:p-10 lg:mt-16 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
          <p className="max-w-md font-display text-h3 font-semibold text-green">
            {support.ctaLead}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-0 lg:shrink-0">
            <ContactAction {...support.primaryCta} variant="primary" />
            <ContactAction {...support.secondaryCta} variant="ghostLight" />
          </div>
        </Reveal>

        <Faq />
      </Container>
    </Section>
  );
}

function ContactAction({
  label,
  href,
  email,
  variant,
}: {
  label: string;
  href: string;
  email: string;
  variant: "primary" | "ghostLight";
}) {
  return (
    <div>
      <ButtonLink href={href} variant={variant} className="w-full">
        {label}
      </ButtonLink>
      <p className="mt-2 text-center text-sm text-body">{email}</p>
    </div>
  );
}

function SupportGlyph({ kind }: { kind: SupportIcon }) {
  const paths: Record<SupportIcon, ReactNode> = {
    // Open hand with a seedling: funding the learning
    fund: (
      <>
        <path d="M3 14.5h3l3.5 1.5h4a1.5 1.5 0 0 0 0-3H10" />
        <path d="M6 18.5 3 17.5v-5l3-1 5 1.5" />
        <path d="M15 11V6.5M15 6.5c0-2 1.5-3.5 3.5-3.5 0 2-1.5 3.5-3.5 3.5ZM15 8c0-1.6-1.2-2.8-2.8-2.8 0 1.6 1.2 2.8 2.8 2.8Z" />
      </>
    ),
    // Laptop: equipment and connectivity
    equip: (
      <>
        <rect x="4" y="4.5" width="14" height="10" rx="1.5" />
        <path d="M2 18h18M9.5 7.5a3.5 3.5 0 0 1 3 0M8.5 10a5 5 0 0 1 5 0" />
      </>
    ),
    // Building with a door: a place to learn
    venue: (
      <>
        <path d="M3 19V8l8-5 8 5v11" />
        <path d="M9 19v-6h4v6M1.5 19h19" />
      </>
    ),
    // Speech bubble: sharing experience
    share: (
      <>
        <path d="M3.5 5h15v10h-8l-4 3.5V15h-3z" />
        <path d="M7.5 9h7M7.5 12h4" />
      </>
    ),
  };
  return (
    <svg aria-hidden="true" viewBox="0 0 22 22" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[kind]}
    </svg>
  );
}
