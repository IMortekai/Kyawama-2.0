import type { CSSProperties } from "react";
import { pilot } from "@/content/home";
import { pilotPlan } from "@/content/programme";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/**
 * Planned pilot figures and weekly structure (F04–F06, reconfirm before
 * publication). Figures are static text — they reveal like any other text and
 * never count up, so they cannot read as achieved impact. Shared by the
 * homepage and /programme.
 */
export function PilotFigures({ className }: { className?: string }) {
  return (
    <ul className={cx("grid gap-10 sm:grid-cols-3 sm:gap-0", className)}>
      {pilot.facts.map((fact, index) => (
        <li
          key={fact.label}
          className={cx(
            "border-t border-green-600 pt-6 sm:border-t-0 sm:pt-0 sm:pr-6",
            index > 0 && "sm:border-l sm:pl-8 lg:pl-12",
          )}
        >
          <p
            data-reveal="words"
            suppressHydrationWarning
            className="font-display text-figure font-extrabold tracking-[-0.05em] text-cream"
            style={{ "--d": `${seq.items + index * seq.itemStep}ms` } as CSSProperties}
          >
            <span className="kw-mask">
              <span>{fact.value}</span>
            </span>
          </p>
          <Reveal as="p" variant="fade" delay={seq.items + index * seq.itemStep + 200} className="mt-4 max-w-[14ch] text-lead font-medium text-sage">
            {fact.label}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function PlannedWeek({ className }: { className?: string }) {
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
    <div className={className}>
      <p className="text-eyebrow font-semibold uppercase text-sage">{pilot.weekLabel}</p>
      <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {week.map((slot, index) => (
          <Reveal
            as="li"
            variant="scale"
            key={slot.key}
            delay={seq.items + index * seq.itemStep}
            className={cx(
              "flex min-h-28 flex-col justify-between rounded-2xl p-4",
              slot.practice ? "bg-yellow text-green" : "bg-green-700 text-cream ring-1 ring-green-600",
            )}
          >
            <span className="text-sm font-semibold leading-tight">{slot.label}</span>
            <span className="font-display text-3xl font-bold">
              {slot.hours}
              <span className="ml-1 text-sm font-semibold">hours</span>
            </span>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function PlannedBadge({ label = pilot.status }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-yellow/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-yellow">
      <span aria-hidden="true" className="size-1.5 rounded-full border border-yellow" />
      {label}
    </span>
  );
}

export function CalendarGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 size-5 shrink-0 text-yellow" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="2.5" y="4" width="15" height="13" rx="2" />
      <path d="M2.5 8.5h15M6.5 2v4M13.5 2v4" />
    </svg>
  );
}
