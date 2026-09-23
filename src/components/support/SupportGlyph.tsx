import type { ReactNode } from "react";
import type { SupportIcon } from "@/content/support";
import { cx } from "@/components/ui/primitives";

const paths: Record<SupportIcon, ReactNode> = {
  // Open hand with a seedling: funding the learning
  fund: (
    <>
      <path d="M3 14.5h3l3.5 1.5h4a1.5 1.5 0 0 0 0-3H10" />
      <path d="M6 18.5 3 17.5v-5l3-1 5 1.5" />
      <path d="M15 11V6.5M15 6.5c0-2 1.5-3.5 3.5-3.5 0 2-1.5 3.5-3.5 3.5ZM15 8c0-1.6-1.2-2.8-2.8-2.8 0 1.6 1.2 2.8 2.8 2.8Z" />
    </>
  ),
  // Laptop with signal: equipment and connectivity
  equip: (
    <>
      <rect x="4" y="4.5" width="14" height="10" rx="1.5" />
      <path d="M2 18h18M9.5 7.5a3.5 3.5 0 0 1 3 0M8.5 10a5 5 0 0 1 5 0" />
    </>
  ),
  // Building with a door: a place to learn
  venue: (
    <>
      <path d="M3 19V8l8-5 8 5v11" />
      <path d="M9 19v-6h4v6M1.5 19h19" />
    </>
  ),
  // Speech bubble: sharing experience
  share: (
    <>
      <path d="M3.5 5h15v10h-8l-4 3.5V15h-3z" />
      <path d="M7.5 9h7M7.5 12h4" />
    </>
  ),
  // Briefcase: opening doors to work
  work: (
    <>
      <rect x="2.5" y="7" width="17" height="11" rx="2" />
      <path d="M8 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 14 5v2M2.5 12h17" />
    </>
  ),
  // Two people: finding learners in the community
  refer: (
    <>
      <circle cx="8" cy="7.5" r="3" />
      <path d="M2.5 18.5c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
      <circle cx="15.5" cy="8.5" r="2.4" />
      <path d="M15 13.8c2.4 0 4.1 1.6 4.6 4.2" />
    </>
  ),
};

export function SupportGlyph({ kind, className }: { kind: SupportIcon; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 22 22"
      className={cx("size-6", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[kind]}
    </svg>
  );
}
