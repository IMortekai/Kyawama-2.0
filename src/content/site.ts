/**
 * Site-wide public content shared by every page.
 *
 * Source: content/homepage-draft.json (editorial draft, v0.1) and the fact
 * register in docs/SOURCE-OF-TRUTH.md. Only public strings live here — claim
 * IDs and review notes stay in the docs so they never reach the browser.
 */
import type { Contact, NavItem } from "./types";

export const brand = {
  shortName: "Kyawama",
  publicName: "The Kyawama Foundation",
  /** F13 – meaning as published by the organisation. */
  meaning: "Kyawama means “it is good” in Kikaonde.",
  description:
    "Kyawama helps adults in underserved Zambian communities build practical digital skills and prepare for opportunities in remote work.",
} as const;

/** Header/footer navigation. First pass: homepage anchors only. */
export const primaryNav: NavItem[] = [
  { label: "Our story", href: "/#story" },
  { label: "Programme", href: "/#programme" },
];

export const supportNavAction: NavItem = {
  label: "Support the pilot",
  href: "/#support",
};

export const footerNav: NavItem[] = [
  { label: "Our story", href: "/#story" },
  { label: "Programme", href: "/#programme" },
  { label: "The pilot", href: "/#pilot" },
  { label: "Support", href: "/#support" },
  { label: "Contact", href: "/#contact" },
];

/** F09–F11 public roles. */
export const team = [
  { name: "Steve Carroll", role: "Founder & Board President" },
  { name: "Fanny Mutanda", role: "Zambia Program Lead" },
  { name: "Raeesa Cassim", role: "Strategy & Program Lead" },
] as const;

/** F17 public contacts. Inbox delivery has not been tested. */
export const contacts = {
  steve: {
    name: "Steve Carroll",
    role: "Founder & Board President",
    email: "stephen@kyawama.org",
    topic: "Funding and partnerships",
  },
  raeesa: {
    name: "Raeesa Cassim",
    role: "Strategy & Program Lead",
    email: "raeesa@kyawama.org",
    topic: "Programme, volunteering and learner recommendations",
  },
} satisfies Record<string, Contact>;

export const mailto = (email: string) => `mailto:${email}`;
