import { primaryNav, routes } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, TextLink } from "@/components/ui/primitives";
import { delay } from "@/lib/motion";

export default function NotFound() {
  return (
    <section className="on-light bg-cream py-(--section-y)">
      <Container>
        <p className="anim-fade-up text-eyebrow font-semibold uppercase text-terracotta">Page not found</p>
        <h1 className="anim-fade-up mt-5 max-w-[14ch] text-h2 text-green" style={delay(100)}>
          This path doesn&rsquo;t lead anywhere yet.
        </h1>
        <div className="anim-fade-up mt-10 flex flex-wrap items-center gap-6" style={delay(220)}>
          <ButtonLink href={routes.home}>Back to the homepage</ButtonLink>
          {primaryNav.map((item) => (
            <TextLink key={item.href} href={item.href}>
              {item.label}
            </TextLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
