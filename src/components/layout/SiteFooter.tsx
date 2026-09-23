import Link from "next/link";
import { brand, contactBand, footerNav, mailto } from "@/content/site";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { Arrow } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { Container, CurveEdge } from "@/components/ui/primitives";
import { seq } from "@/lib/motion";

/** Contact band (#contact) and site footer. Shared by every page. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-green text-cream">
      {/* Every page ends on a cream section */}
      <CurveEdge position="top" fill="cream" />
      <section id={contactBand.id} aria-labelledby="contact-heading" className="pb-16 pt-[calc(var(--section-y)+2rem)] lg:pb-24">
        <Container>
          <RevealWords
            id="contact-heading"
            text={contactBand.heading}
            accent={["Kyawama."]}
            accentClassName="text-yellow"
            className="max-w-[14ch] text-display font-extrabold tracking-[-0.04em]"
          />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20">
            {contactBand.people.map((person, index) => (
              <Reveal as="li" key={person.email} variant="scale" delay={seq.items + index * seq.itemStep}>
                <a
                  href={mailto(person.email)}
                  className="group flex h-full flex-col justify-between gap-10 rounded-(--radius-panel) bg-green-700 p-7 ring-1 ring-green-600 transition-[background-color,transform] duration-300 ease-out-soft hover:-translate-y-1 hover:bg-green-600 motion-reduce:hover:translate-y-0 sm:p-9"
                >
                  <div>
                    <p className="text-eyebrow font-semibold uppercase text-yellow">{person.topic}</p>
                    <p className="mt-5 font-display text-h3 font-semibold">{person.name}</p>
                    <p className="mt-1 text-sage">{person.role}</p>
                  </div>
                  <span className="flex items-center justify-between gap-4 border-t border-green-600 pt-5 font-semibold">
                    <span className="break-all">{person.email}</span>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-green transition-colors group-hover:bg-yellow">
                      <Arrow />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <div className="bg-green-900">
        <Container className="py-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Link href="/" className="inline-block rounded-sm" aria-label={`${brand.publicName} – home`}>
                <Logo tone="cream" className="w-[180px]" />
              </Link>
              <p className="mt-5 text-sage">{brand.meaning}</p>
            </div>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-7 gap-y-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sage underline-offset-4 transition-colors hover:text-cream hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="mt-12 text-sm text-sage">
            © {year} {brand.publicName}
          </p>
        </Container>
      </div>
    </footer>
  );
}
