import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Centred content column with fluid side gutters. */
export function Container({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("mx-auto w-full max-w-site px-(--gutter)", className)} {...rest} />;
}

const tones = {
  cream: "bg-cream text-ink on-light",
  sand: "bg-cream-200 text-ink on-light",
  green: "bg-green text-cream",
} as const;

export type SectionTone = keyof typeof tones;

/** Page section with a colour tone and consistent vertical rhythm. */
export function Section({
  id,
  tone = "cream",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(tones[tone], "relative py-20 sm:py-24 lg:py-32", className)}
    >
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
        "text-eyebrow font-semibold uppercase",
        tone === "dark" ? "text-yellow" : "text-terracotta",
        className,
      )}
    >
      {children}
    </p>
  );
}

type HeadingProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  ...rest
}: HeadingProps<T>) {
  const Tag = (as ?? "h2") as ElementType;
  return (
    <Tag className={cx("text-h2", className)} {...rest}>
      {children}
    </Tag>
  );
}
