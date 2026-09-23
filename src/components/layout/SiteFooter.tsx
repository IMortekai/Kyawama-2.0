import Link from "next/link";
import { contact } from "@/content/home";
import { brand, footerNav, mailto } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Arrow } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/primitives";

/** Contact band (#contact) and site footer. Shared by every page. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green text-cream">
      <section id={contact.id} aria-labelledby="contact-heading" className="pb-16 pt-20 sm:pt-24 lg:pb-20 lg:pt-28">
        <Container>
          <Reveal>
            <h2 id="contact-heading" className="max-w-[16ch] text-h2">
              {contact.heading}
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-14">
            {contact.people.map((person, index) => (
              <Reveal as="li" key={person.email} delay={index * 0.08}>
                <a
                  href={mailto(person.email)}
                  className="group flex h-full flex-col justify-between gap-8 rounded-3xl bg-green-700 p-6 ring-1 ring-green-600 transition-colors duration-150 hover:bg-green-600 sm:p-8"
                >
                  <div>
                    <p className="text-eyebrow font-semibold uppercase text-yellow">{person.topic}</p>
                    <p className="mt-4 font-display text-h3 font-semibold">{person.name}</p>
                    <p className="mt-1 text-sage">{person.role}</p>
                  </div>
                  <span className="flex items-center justify-between gap-4 border-t border-green-600 pt-5 font-semibold">
                    <span className="break-all">{person.email}</span>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-green transition-colors group-hover:bg-yellow">
                      <Arrow />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="border-t border-green-600 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="inline-block rounded-sm" aria-label={`${brand.publicName} – home`}>
              <Logo tone="cream" height={34} className="w-[150px]!" />
            </Link>
            <p className="mt-4 text-sage">{brand.meaning}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sage underline-offset-4 transition-colors hover:text-cream hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-sm text-sage">
          © {year} {brand.publicName}
        </p>
      </Container>
    </footer>
  );
}
