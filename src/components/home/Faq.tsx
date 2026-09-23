import { faq } from "@/content/home";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Native <details> disclosures: work without JavaScript, keyboard-operable by
 * default. Height transition is progressive (see .faq-item in globals.css).
 */
export function Faq() {
  return (
    <div className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-4">
        <h3 id="faq-heading" className="text-h2 text-green">
          {faq.heading}
        </h3>
      </Reveal>
      <Reveal className="lg:col-span-8" delay={0.06}>
        <ul aria-labelledby="faq-heading" className="border-b border-green/15">
          {faq.items.map((item) => (
            <li key={item.question} className="border-t border-green/15">
              <details className="faq-item group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-terracotta sm:text-xl">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-green/20 text-green transition-colors group-open:bg-green group-open:text-cream"
                  >
                    <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                    <span className="absolute h-3.5 w-0.5 rounded bg-current transition-transform duration-200 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-6 pr-12 text-body">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
