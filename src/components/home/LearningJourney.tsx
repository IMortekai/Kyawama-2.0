"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { programme } from "@/content/home";
import { employmentExpectation, learningStages } from "@/content/programme";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow, Heading, Section, cx } from "@/components/ui/primitives";
import { distance, duration, ease } from "@/lib/motion";

/*
 * Desktop: three columns joined by a rising curved route that continues past
 * the final stage. Mobile: a vertical rail. Both read in normal document order.
 * The rail geometry below assumes a 140px-high rail and equal-width columns.
 */
const RAIL_PATH = "M 0 128 C 80 128 140 108 200 100 C 330 84 470 76 600 68 C 730 60 870 44 1000 36";
const RAIL_TAIL = "M 1000 36 C 1080 31 1140 22 1200 8";

/** Marker offset from the top of each column, so stages visibly rise. */
const markerOffset = ["md:mt-[72px]", "md:mt-[40px]", "md:mt-[8px]"];
const markerColour = [
  "bg-yellow text-green",
  "bg-teal text-cream",
  "bg-terracotta text-cream",
];

const PATH_DELAY = 0.1;
const PATH_DURATION = 0.85;
const stageDelay = (index: number) => PATH_DELAY + 0.12 + index * 0.26;

const stageVariants: Variants = {
  hidden: { opacity: 0, y: distance.section },
  shown: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: duration.section, ease, delay: stageDelay(index) },
  }),
};

const markerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  shown: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 18, delay: stageDelay(index) },
  }),
};

export function LearningJourney() {
  const listRef = useRef<HTMLOListElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.3 });
  const state = inView ? "shown" : "hidden";

  return (
    <Section id={programme.id} tone="sand" labelledBy="programme-heading">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow>{programme.eyebrow}</Eyebrow>
            <Heading id="programme-heading" className="mt-4 max-w-[16ch] text-green">
              {programme.heading}
            </Heading>
          </div>
          <p className="text-lead text-body lg:col-span-5 lg:col-start-8 lg:self-end">
            {programme.intro}
          </p>
        </Reveal>

        <div className="relative mt-14 lg:mt-20">
          {/* Desktop route */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[140px] w-full overflow-visible md:block"
            fill="none"
          >
            <path d={RAIL_PATH} stroke="var(--color-cream-300)" strokeWidth="14" strokeLinecap="round" />
            <motion.path
              data-motion-path=""
              d={RAIL_PATH}
              stroke="var(--color-green)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: PATH_DURATION, ease: [0.45, 0, 0.2, 1], delay: PATH_DELAY }}
            />
            <motion.path
              data-motion=""
              d={RAIL_TAIL}
              stroke="var(--color-green)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 10"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 0.6 : 0 }}
              transition={{ duration: 0.4, delay: PATH_DELAY + PATH_DURATION }}
            />
          </svg>

          {/* Mobile rail */}
          <div aria-hidden="true" className="absolute bottom-6 left-7 top-7 w-[3px] -translate-x-1/2 bg-cream-300 md:hidden">
            <motion.div
              data-motion=""
              className="size-full origin-top bg-green"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ duration: PATH_DURATION + 0.3, ease, delay: PATH_DELAY }}
            />
          </div>

          <ol ref={listRef} className="relative grid gap-10 md:grid-cols-3 md:gap-0">
            {learningStages.map((stage, index) => (
              <li key={stage.number} className="flex gap-5 md:flex-col md:gap-0 md:px-6 md:text-center lg:px-8">
                <motion.span
                  data-motion=""
                  custom={index}
                  variants={markerVariants}
                  initial="hidden"
                  animate={state}
                  aria-hidden="true"
                  className={cx(
                    "relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold shadow-[0_0_0_8px_var(--color-cream-200)] md:mx-auto",
                    markerColour[index],
                    markerOffset[index],
                  )}
                >
                  {stage.number}
                </motion.span>
                <motion.div
                  data-motion=""
                  custom={index}
                  variants={stageVariants}
                  initial="hidden"
                  animate={state}
                  className="pt-2 md:pt-8"
                >
                  <p className="text-eyebrow font-semibold uppercase text-terracotta">
                    <span className="sr-only">Stage {stage.number}: </span>
                    {stage.short}
                  </p>
                  <h3 className="mt-2 text-h3 text-green">{stage.title}</h3>
                  <p className="mx-auto mt-3 max-w-[30ch] text-body md:max-w-[28ch]">{stage.body}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 flex max-w-3xl items-start gap-4 rounded-2xl border border-green/15 bg-cream/70 p-5 sm:p-6 md:mx-auto lg:mt-20">
          <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-green font-display text-sm font-bold text-cream">
            i
          </span>
          <p className="text-ink">{employmentExpectation}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
