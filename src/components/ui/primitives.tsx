import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { seq } from "@/lib/motion";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Centred content column with fluid side gutters. */
export function Container({ className, ...rest }: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("mx-auto w-full max-w-site px-(--gutter)", className)} {...rest} />;
}

const tones = {
  cream: "bg-cream text-ink on-light",
  sand: "bg-cream-200 text-ink on-light",
  green: "bg-green text-cream",
  deep: "bg-green-900 text-cream",
} as const;

export type SectionTone = keyof typeof tones;

/** Page section with a colour tone and the shared vertical rhythm. */
export function Section({
  tone = "cream",
  className,
  children,
  ...rest
}: { tone?: SectionTone } & ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cx(tones[tone], "relative py-(--section-y)", className)} {...rest}>
      {children}
    </section>
  );
}

/** Small uppercase label above a heading. */
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cx(
        "flex items-center gap-3 text-eyebrow font-semibold uppercase",
        tone === "dark" ? "text-yellow" : "text-terracotta",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}

/**
 * Eyebrow + word-revealed heading + optional lead, sequenced
 * heading → supporting text. The standard opening for a section.
 */
export function SectionIntro({
  eyebrow,
  heading,
  headingId,
  lead,
  tone = "light",
  layout = "split",
  as = "h2",
  className,
  headingClassName,
  accent,
}: {
  eyebrow?: string;
  heading: string;
  headingId?: string;
  lead?: ReactNode;
  tone?: "light" | "dark";
  layout?: "split" | "stack";
  as?: "h1" | "h2";
  className?: string;
  headingClassName?: string;
  accent?: string[];
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "grid gap-6",
        layout === "split" && "lg:grid-cols-12 lg:items-end lg:gap-12",
        className,
      )}
    >
      <div className={layout === "split" ? "lg:col-span-7" : undefined}>
        {eyebrow && (
          <Reveal variant="fade">
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <RevealWords
          as={as}
          id={headingId}
          text={heading}
          delay={seq.heading + 80}
          accent={accent}
          accentClassName={dark ? "text-yellow" : "text-terracotta"}
          className={cx(
            "mt-5 max-w-[17ch] text-h2",
            dark ? "text-cream" : "text-green",
            headingClassName,
          )}
        />
      </div>
      {lead && (
        <Reveal
          delay={seq.body}
          className={cx(
            "text-lead",
            dark ? "text-sage" : "text-body",
            layout === "split" ? "lg:col-span-5 lg:pb-2" : "max-w-2xl",
          )}
        >
          {typeof lead === "string" ? <p>{lead}</p> : lead}
        </Reveal>
      )}
    </div>
  );
}

/** Inline arrow link for "read more" moves between pages. */
export function TextLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const Tag = href.startsWith("/") ? Link : "a";
  return (
    <Tag
      href={href}
      className={cx(
        "group inline-flex items-center gap-3 font-semibold underline decoration-2 underline-offset-[6px] transition-colors duration-150",
        tone === "dark"
          ? "text-cream decoration-yellow/60 hover:decoration-yellow"
          : "text-green decoration-terracotta/40 hover:decoration-terracotta",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cx(
          "flex size-8 items-center justify-center rounded-full transition-transform duration-200 ease-out-soft group-hover:translate-x-1 motion-reduce:transform-none",
          tone === "dark" ? "bg-yellow text-green" : "bg-green text-cream",
        )}
      >
        <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
        </svg>
      </span>
    </Tag>
  );
}

const edgeFill = {
  cream: "text-cream",
  sand: "text-cream-200",
  green: "text-green",
  deep: "text-green-900",
} as const;

/**
 * Curved transition between a section and its neighbour. Place inside the
 * section it belongs to; `fill` is the colour of the neighbouring section.
 */
export function CurveEdge({
  position,
  fill,
  className,
}: {
  position: "top" | "bottom";
  fill: keyof typeof edgeFill;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={cx(
        "pointer-events-none absolute inset-x-0 h-8 w-full sm:h-12 lg:h-20",
        position === "top" ? "top-0" : "bottom-0",
        edgeFill[fill],
        className,
      )}
    >
      {position === "bottom" ? (
        <path d="M0 80V52C320 8 1120 8 1440 52v28z" fill="currentColor" />
      ) : (
        <path d="M0 0v28C320 72 1120 72 1440 28V0z" fill="currentColor" />
      )}
    </svg>
  );
}
