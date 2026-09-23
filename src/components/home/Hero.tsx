"use client";

import { motion, type Variants } from "motion/react";
import { hero } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/primitives";
import { distance, duration, ease } from "@/lib/motion";
import { HeroPath } from "./HeroPath";

const group: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: distance.hero },
  shown: { opacity: 1, y: 0, transition: { duration: duration.hero, ease } },
};

/** Word in the headline that receives the drawn underline. */
const EMPHASIS = "fairer";

export function Hero() {
  const [first, second] = hero.headingLines;
  const [before, after] = second.split(EMPHASIS);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-green text-cream"
    >
      <Container className="relative grid items-center gap-12 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1.2fr_1fr] lg:gap-10 lg:pb-32 lg:pt-24">
        <motion.div variants={group} initial="hidden" animate="shown" className="max-w-2xl">
          <motion.p
            data-motion=""
            variants={item}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-eyebrow font-semibold uppercase text-yellow"
          >
            {hero.eyebrow.map((part, index) => (
              <span key={part} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-yellow/70" />}
                {part}
              </span>
            ))}
          </motion.p>

          <h1 id="hero-heading" className="mt-6 text-display font-extrabold tracking-[-0.035em]">
            <motion.span data-motion="" variants={item} className="block">
              {first}
            </motion.span>
            <motion.span data-motion="" variants={item} className="block">
              {before}
              <span className="relative inline-block">
                {EMPHASIS}
                <Underline />
              </span>
              {after}
            </motion.span>
          </h1>

          <motion.p data-motion="" variants={item} className="mt-7 max-w-[34rem] text-lead text-sage">
            {hero.body}
          </motion.p>

          <motion.div
            data-motion=""
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="ghostDark">
              {hero.secondaryCta.label}
            </ButtonLink>
          </motion.div>
        </motion.div>

        <div className="relative lg:-mr-6">
          <HeroPath />
        </div>
      </Container>

      {/* Soft arc into the cream story section */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-8 w-full text-cream sm:h-12 lg:h-16"
      >
        <path d="M0 64V40C360 6 1080 6 1440 40v24z" fill="currentColor" />
      </svg>
    </section>
  );
}

function Underline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-[0.12em] left-[-2%] h-[0.28em] w-[104%] overflow-visible"
      fill="none"
    >
      <motion.path
        data-motion-path=""
        d="M3 14C45 6 120 3 197 9"
        stroke="var(--color-terracotta-deco)"
        strokeWidth="7"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.55 }}
      />
    </svg>
  );
}
