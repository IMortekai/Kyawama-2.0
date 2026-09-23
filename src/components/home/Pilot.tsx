import { pilot } from "@/content/home";
import { pilotPlan } from "@/content/programme";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Container, Eyebrow, Heading, Section, cx } from "@/components/ui/primitives";

/**
 * Planned pilot. Figures are plans (F04–F06, reconfirm before publication):
 * they render statically — no counting animation that would read as impact.
 */
export function Pilot() {
  const week = [
    ...Array.from({ length: pilotPlan.lessonsPerWeek }, (_, i) => ({
      key: `lesson-${i}`,
      label: pilot.lessonLabel,
      hours: pilotPlan.lessonHours,
      practice: false,
    })),
    { key: "practice", label: pilot.practiceLabel, hours: pilotPlan.practiceHours, practice: true },
  ];

  return (
    <Section id={pilot.id} labelledBy="pilot-heading" className="py-10! sm:py-14! lg:py-20!">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-(--radius-panel) bg-green px-6 py-12 text-cream sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="pointer-events-none absolute -right-40 -top-40 size-[36rem] sm:-right-24"
              fill="none"
              stroke="var(--color-green-600)"
              strokeWidth="1.5"
            >
              <circle cx="200" cy="200" r="100" />
              <circle cx="200" cy="200" r="150" opacity="0.7" />
              <circle cx="200" cy="200" r="198" opacity="0.45" />
            </svg>

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow tone="dark">{pilot.eyebrow}</Eyebrow>
                <span className="rounded-full border border-yellow/60 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-yellow">
                  {pilot.status}
                </span>
              </div>
              <Heading id="pilot-heading" className="mt-4 max-w-[15ch] text-cream">
                {pilot.heading}
              </Heading>

              <RevealGroup as="ul" className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-0 lg:mt-16">
                {pilot.facts.map((fact, index) => (
                  <RevealItem
                    as="li"
                    key={fact.label}
                    className={cx(
                      "border-t border-green-600 pt-5 sm:border-t-0 sm:pt-0 sm:pr-6",
                      index > 0 && "sm:border-l sm:pl-8 lg:pl-12",
                    )}
                  >
                    <p className="font-display text-figure font-extrabold tracking-[-0.04em] text-cream">
                      {fact.value}
                    </p>
                    <p className="mt-3 max-w-[14ch] text-lead font-medium text-sage">{fact.label}</p>
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <p className="text-eyebrow font-semibold uppercase text-sage">{pilot.weekLabel}</p>
                  <RevealGroup as="ol" className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {week.map((slot) => (
                      <RevealItem
                        as="li"
                        key={slot.key}
                        className={cx(
                          "flex min-h-24 flex-col justify-between rounded-2xl p-4",
                          slot.practice
                            ? "bg-yellow text-green"
                            : "bg-green-700 text-cream ring-1 ring-green-600",
                        )}
                      >
                        <span className="text-sm font-semibold leading-tight">{slot.label}</span>
                        <span className="font-display text-2xl font-bold">
                          {slot.hours}
                          <span className="ml-1 text-sm font-semibold">hours</span>
                        </span>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
                <div className="space-y-5 lg:col-span-5 lg:pt-9">
                  <p className="text-sage">{pilot.body}</p>
                  <p className="flex gap-3 rounded-2xl bg-green-700 p-4 text-cream ring-1 ring-green-600">
                    <CalendarGlyph />
                    <span>{pilot.scheduleNote}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function CalendarGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 size-5 shrink-0 text-yellow" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="2.5" y="4" width="15" height="13" rx="2" />
      <path d="M2.5 8.5h15M6.5 2v4M13.5 2v4" />
    </svg>
  );
}
