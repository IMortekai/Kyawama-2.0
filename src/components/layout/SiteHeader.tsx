"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { primaryNav, supportNavAction } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { Container, cx } from "@/components/ui/primitives";
import { ease } from "@/lib/motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 900px)");
    const onBreakpoint = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <header
      className={cx(
        "on-light sticky top-0 z-50 bg-cream/95 backdrop-blur-sm transition-shadow duration-200",
        scrolled || open ? "shadow-[0_1px_0_var(--color-cream-300)]" : "shadow-none",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:rounded-full focus:bg-green focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Container className="flex h-(--header-h) items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-sm"
          aria-label="The Kyawama Foundation – home"
          aria-current={isCurrent("/") ? "page" : undefined}
        >
          <Logo className="w-[158px] min-[900px]:w-[180px]" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 min-[900px]:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className="relative rounded-full px-4 py-2 text-base font-medium text-ink/80 transition-colors hover:bg-cream-200 hover:text-ink aria-[current=page]:text-green"
            >
              {item.label}
              {isCurrent(item.href) && (
                <motion.span
                  layoutId="nav-current"
                  aria-hidden="true"
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-terracotta"
                  transition={{ duration: 0.35, ease }}
                />
              )}
            </Link>
          ))}
          <ButtonLink
            href={supportNavAction.href}
            size="md"
            arrow={false}
            className="ml-3"
            current={isCurrent(supportNavAction.href)}
          >
            {supportNavAction.label}
          </ButtonLink>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-green/25 px-4 text-sm font-semibold text-green min-[900px]:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <MenuGlyph open={open} />
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id={menuId}
            aria-label="Main"
            // Overlay below the header so opening it never shifts the page.
            className="absolute inset-x-0 top-full overflow-hidden border-t border-cream-300 bg-cream shadow-[0_24px_40px_-24px_rgb(18_70_58/0.35)] min-[900px]:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
          >
            <Container
              className="flex flex-col gap-1 pb-6 pt-3"
              onClick={(event) => {
                const link = (event.target as HTMLElement).closest("a");
                if (!link) return;
                setOpen(false);
                navigateToHash(event, link);
              }}
            >
              {[{ label: "Home", href: "/" }, ...primaryNav].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease, delay: 0.05 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="block rounded-xl px-3 py-3 font-display text-2xl font-semibold tracking-tight text-ink hover:bg-cream-200 aria-[current=page]:text-terracotta"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <ButtonLink href={supportNavAction.href} className="mt-3 w-full" size="lg">
                {supportNavAction.label}
              </ButtonLink>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * Unmounting the menu cancels a native smooth anchor scroll in Chromium, so
 * same-page hash links from the menu scroll explicitly and move focus.
 */
function navigateToHash(event: MouseEvent<HTMLElement>, link: HTMLAnchorElement) {
  const url = new URL(link.href);
  if (url.pathname !== window.location.pathname || !url.hash) return;
  const target = document.getElementById(url.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  history.pushState(null, "", url.hash);
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d={open ? "M5 5l10 10" : "M3 6.5h14"} className="transition-all duration-200" />
      <path d={open ? "M15 5 5 15" : "M3 13.5h14"} className="transition-all duration-200" />
    </svg>
  );
}
