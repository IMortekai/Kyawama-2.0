import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";
import { delay as delayStyle } from "@/lib/motion";

/**
 * Scroll-reveal primitives. Server components: they only emit attributes
 * that the inline observer (src/lib/reveal-script.ts) and CSS act upon, so
 * content is visible whenever that script is absent or reduced motion is on.
 */

export type RevealVariant = "up" | "fade" | "scale" | "wipe";

type RevealProps<T extends ElementType> = {
  as?: T;
  variant?: RevealVariant;
  /** Delay in ms — use the `seq` tokens for ordering inside a section. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "style" | "children">;

export function Reveal<T extends ElementType = "div">({
  as,
  variant = "up",
  delay = 0,
  className,
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      data-reveal={variant}
      // The observer adds `data-in` before hydration; that is expected.
      suppressHydrationWarning
      className={className}
      style={{ ...delayStyle(delay), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

type WordsProps<T extends ElementType> = {
  as?: T;
  text: string;
  delay?: number;
  className?: string;
  /** Words (exact match, punctuation included) to render with `accentClassName`. */
  accent?: string[];
  accentClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Heading whose words rise into place in sequence (45 ms apart).
 * The accessible name is the plain text; the split spans are hidden from
 * assistive technology so screen readers never read word fragments.
 */
export function RevealWords<T extends ElementType = "h2">({
  as,
  text,
  delay = 0,
  className,
  accent = [],
  accentClassName = "text-terracotta",
  ...rest
}: WordsProps<T>) {
  const Tag = (as ?? "h2") as ElementType;
  const words = text.split(" ");
  return (
    <Tag
      data-reveal="words"
      suppressHydrationWarning
      aria-label={text}
      className={className}
      style={delayStyle(delay)}
      {...rest}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden="true">
          <span className="kw-mask">
            <span
              className={accent.includes(word) ? accentClassName : undefined}
              style={{ "--wi": index } as CSSProperties}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
