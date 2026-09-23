"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { distance, duration, ease, stagger, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "p";
};

const tags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  p: motion.p,
};

/** Subtle once-only entry for a single block of content. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag
      data-motion=""
      className={className}
      initial={{ opacity: 0, y: distance.section }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: duration.section, ease, delay }}
    >
      {children}
    </Tag>
  );
}

const groupVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: stagger } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: distance.section },
  shown: { opacity: 1, y: 0, transition: { duration: duration.section, ease } },
};

/** Staggers direct `RevealItem` children once the group enters view. */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}) {
  const Tag = as === "ul" ? motion.ul : as === "ol" ? motion.ol : motion.div;
  return (
    <Tag
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="shown"
      viewport={viewportOnce}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag data-motion="" className={className} variants={revealItem}>
      {children}
    </Tag>
  );
}
