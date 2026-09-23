import { brand } from "@/content/site";
import { cx } from "./primitives";

/** Supplied working logo (assets/brand/kyawama-logo.svg), unmodified. */
const LOGO_SRC = "/brand/kyawama-logo.svg";
const RATIO = 434.176 / 99.4272;

/**
 * Renders the supplied logo at its original proportions; size it with a
 * width class. No cream export has been supplied yet, so on dark surfaces
 * the same file is used as a CSS mask filled with cream — the artwork itself
 * is untouched. Swap in the cream file here once it is available.
 */
export function Logo({ tone = "green", className }: { tone?: "green" | "cream"; className?: string }) {
  if (tone === "green") {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- small static SVG, no optimisation needed
      <img
        src={LOGO_SRC}
        alt={brand.publicName}
        width={434}
        height={99}
        className={cx("block h-auto", className)}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={brand.publicName}
      className={cx("block bg-cream", className)}
      style={{
        aspectRatio: `${RATIO}`,
        maskImage: `url(${LOGO_SRC})`,
        WebkitMaskImage: `url(${LOGO_SRC})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
