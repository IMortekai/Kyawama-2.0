import type { Faq } from "@/content/types";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/**
 * Native <details> disclosures: work without JavaScript and are keyboard-
 * operable by default. Height transition is progressive (see .faq-item).
 */
export function FaqList({ items, labelledBy, className }: { items: Faq[]; labelledBy?: string; className?: string }) {
  return (
    <ul aria-labelledby={labelledBy} className={cx("border-b border-green/15", className)}>
      {items.map((item, index) => (
        <Reveal as="li" key={item.id} id={`q-${item.id}`} delay={seq.items + index * 70} className="border-t border-green/15">
          <details className="faq-item group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-terracotta sm:text-xl">
              {item.question}
              <span
                aria-hidden="true"
                className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-green/20 text-green transition-[background-color,color,transform] duration-300 ease-out-soft group-open:rotate-180 group-open:bg-green group-open:text-cream"
              >
                <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                <span className="absolute h-3.5 w-0.5 rounded bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>
            <p className="max-w-[62ch] pb-7 pr-14 text-body">{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </ul>
  );
}
