import type { ReactNode } from "react";
import { cx } from "./primitives";

const variants = {
  /** Terracotta: the single strongest action in a view. */
  primary:
    "bg-terracotta text-cream hover:bg-terracotta-dark shadow-[0_1px_0_rgb(0_0_0/0.08)]",
  /** Outline on green surfaces. */
  ghostDark: "border border-cream/35 text-cream hover:border-cream hover:bg-cream/10",
  /** Outline on cream surfaces. */
  ghostLight: "border border-green/30 text-green hover:border-green hover:bg-green hover:text-cream",
} as const;

const sizes = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-13 px-6 text-base sm:px-7",
} as const;

export type ButtonVariant = keyof typeof variants;

/**
 * Link styled as a button. All site actions are real navigation
 * (anchors or mailto), so this is always an <a>.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  arrow = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-150 ease-out-soft",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <span>{children}</span>
      {arrow && <Arrow />}
    </a>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={cx(
        "size-4 shrink-0 transition-transform duration-150 ease-out-soft group-hover:translate-x-0.5 motion-reduce:transform-none",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
    </svg>
  );
}
