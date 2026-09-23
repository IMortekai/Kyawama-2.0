"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { primaryNav, supportNavAction } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { Container, cx } from "@/components/ui/primitives";
import { ease } from "@/lib/motion";

export function SiteHeader() {
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
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

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
        <Link href="/" className="shrink-0 rounded-sm" aria-label="The Kyawama Foundation – home">
          <Logo height={34} className="w-[130px]! sm:w-[148px]!" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.9375rem] font-medium text-ink/80 transition-colors hover:bg-cream-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={supportNavAction.href} size="md" arrow={false} className="ml-3">
            {supportNavAction.label}
          </ButtonLink>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-green/25 px-4 text-sm font-semibold text-green md:hidden"
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
            className="absolute inset-x-0 top-full overflow-hidden border-t border-cream-300 bg-cream shadow-[0_24px_40px_-24px_rgb(18_70_58/0.35)] md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease }}
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
              {primaryNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 font-display text-2xl font-semibold tracking-tight text-ink hover:bg-cream-200"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink
                href={supportNavAction.href}
                className="mt-3 w-full"
                size="lg"
              >
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
 * same-page links from the menu scroll explicitly and move focus to the target.
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
      <path
        d={open ? "M5 5l10 10" : "M3 6.5h14"}
        className="transition-all duration-200"
      />
      <path
        d={open ? "M15 5 5 15" : "M3 13.5h14"}
        className="transition-all duration-200"
      />
    </svg>
  );
}
