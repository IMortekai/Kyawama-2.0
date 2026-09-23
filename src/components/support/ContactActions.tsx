import { supportCtas } from "@/content/support";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cx } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/** The two enquiry routes: Steve (funding) and Raeesa (programme). */
export function ContactActions({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  const actions = [
    { ...supportCtas.primary, variant: "primary" as const },
    { ...supportCtas.secondary, variant: dark ? ("ghostDark" as const) : ("ghostLight" as const) },
  ];
  return (
    <div className={cx("grid gap-5 sm:grid-cols-2", className)}>
      {actions.map((action, index) => (
        <Reveal key={action.href} delay={seq.cta + index * seq.itemStep}>
          <ButtonLink href={action.href} variant={action.variant} className="w-full">
            {action.label}
          </ButtonLink>
          <p className={cx("mt-2 text-center text-sm", dark ? "text-sage" : "text-body")}>{action.email}</p>
        </Reveal>
      ))}
    </div>
  );
}
