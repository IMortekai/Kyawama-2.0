/**
 * Site-wide public content shared by every page.
 *
 * Sources: content/homepage-draft.json (editorial draft), the live site
 * views (W-H/W-A/W-P/W-S/W-F, re-read 23 Sep 2026) and the fact register in
 * docs/SOURCE-OF-TRUTH.md. Only public strings live here — claim IDs and
 * review notes stay in the docs so they never reach the browser.
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

export const routes = {
  home: "/",
  about: "/about",
  programme: "/programme",
  support: "/support",
  faq: "/faq",
} as const;

/** Header navigation. */
export const primaryNav: NavItem[] = [
  { label: "About", href: routes.about },
  { label: "Programme", href: routes.programme },
  { label: "FAQ", href: routes.faq },
];

export const supportNavAction: NavItem = {
  label: "Support the pilot",
  href: routes.support,
};

export const footerNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Programme", href: routes.programme },
  { label: "Support the pilot", href: routes.support },
  { label: "FAQ", href: routes.faq },
];

/** F09–F11 public roles; descriptions from the live About view. */
export const team = [
  {
    name: "Steve Carroll",
    role: "Founder & Board President",
    body: "Leads the Foundation’s purpose and connects the programme to remote-work expertise and supporters.",
  },
  {
    name: "Fanny Mutanda",
    role: "Zambia Program Lead",
    body: "Brings local leadership and lived experience of building a career inside a remote organisation.",
  },
  {
    name: "Raeesa Cassim",
    role: "Strategy & Program Lead",
    body: "Based in Cape Town, leads programme planning, partnerships, fundraising and pilot operations.",
  },
] as const;

/** F17 public contacts. Inbox delivery has not been tested. */
export const contacts = {
  steve: {
    name: "Steve Carroll",
    role: "Founder & Board President",
    email: "stephen@kyawama.org",
    topic: "Funding and partnerships",
    detail: "Funding conversations, partnerships and anything about why Kyawama exists.",
  },
  raeesa: {
    name: "Raeesa Cassim",
    role: "Strategy & Program Lead",
    email: "raeesa@kyawama.org",
    topic: "Programme, volunteering and learner recommendations",
    detail: "Programme planning, pilot operations, volunteering and learner recommendations.",
  },
} satisfies Record<string, Contact>;

export const mailto = (email: string) => `mailto:${email}`;

/** Shared closing band used above the footer on most pages. */
export const contactBand = {
  id: "contact",
  heading: "Start a conversation with Kyawama.",
  people: [contacts.steve, contacts.raeesa],
} as const;
