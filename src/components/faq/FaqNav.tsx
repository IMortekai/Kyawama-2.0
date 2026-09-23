"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cx } from "@/components/ui/primitives";
import { ease } from "@/lib/motion";

/**
 * Sticky list of FAQ groups that highlights the group currently in view.
 * Plain anchor links, so it still works as a table of contents without JS.
 */
export function FaqNav({ groups }: { groups: { id: string; title: string; count: number }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = groups
      .map((group) => document.getElementById(group.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups]);

  return (
    <nav aria-label="Question groups">
      <ol className="space-y-1">
        {groups.map((group) => {
          const current = group.id === active;
          return (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                aria-current={current ? "location" : undefined}
                className={cx(
                  "relative isolate flex items-center justify-between gap-4 rounded-2xl px-5 py-4 font-display text-lg font-semibold transition-colors duration-200",
                  current ? "text-cream" : "text-green hover:bg-cream-200",
                )}
              >
                {current && (
                  <motion.span
                    layoutId="faq-nav-active"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-2xl bg-green"
                    transition={{ duration: 0.4, ease }}
                  />
                )}
                <span>{group.title}</span>
                <span className={cx("text-sm tabular-nums", current ? "text-yellow" : "text-body")}>
                  {group.count}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
