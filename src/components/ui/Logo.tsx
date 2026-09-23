import { brand } from "@/content/site";
import { cx } from "./primitives";

/** Original supplied wordmark (assets/brand/kyawama-logo.svg), unmodified. */
const LOGO_SRC = "/brand/kyawama-logo.svg";
const RATIO = 434.176 / 99.4272;

/**
 * Renders the original logo. On green surfaces the same file is used as a
 * CSS mask so the artwork stays untouched while the fill becomes cream.
 */
export function Logo({
  tone = "green",
  height = 36,
  className,
}: {
  tone?: "green" | "cream";
  height?: number;
  className?: string;
}) {
  const width = Math.round(height * RATIO);

  if (tone === "green") {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- small static SVG, no optimisation needed
      <img
        src={LOGO_SRC}
        alt={brand.publicName}
        width={width}
        height={height}
        className={cx("block h-auto", className)}
        style={{ width, maxWidth: "100%" }}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={brand.publicName}
      className={cx("block bg-cream", className)}
      style={{
        width,
        maxWidth: "100%",
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
