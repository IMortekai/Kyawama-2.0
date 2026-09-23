"use client";

import { useMotionValue, useReducedMotion, useScroll, type MotionValue } from "motion/react";
import { useEffect, useSyncExternalStore, type RefObject } from "react";

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

const subscribe = () => () => {};

/** True only in the browser after hydration. */
export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

/**
 * Scroll progress for a target element, as a MotionValue in [0, 1].
 *
 * Until the page has hydrated — and permanently when reduced motion is
 * requested — the value holds `settled`, so server HTML and static renders
 * show the finished state (e.g. a fully drawn route). Scroll-linked effects
 * never gate content: they only adjust decoration from that settled state.
 */
export function useScrollLinked(
  target: RefObject<HTMLElement | null>,
  offset: ScrollOffset,
  settled = 1,
): { progress: MotionValue<number>; enabled: boolean } {
  const mounted = useMounted();
  const reduce = useReducedMotion();
  const enabled = mounted && !reduce;
  const { scrollYProgress } = useScroll({ target, offset });
  const progress = useMotionValue(settled);

  useEffect(() => {
    if (!enabled) {
      progress.set(settled);
      return;
    }
    progress.set(scrollYProgress.get());
    return scrollYProgress.on("change", (value) => progress.set(value));
  }, [enabled, progress, scrollYProgress, settled]);

  return { progress, enabled };
}
