/**
 * Programme and planned-pilot values in one place so they cannot drift
 * between pages.
 *
 * RECONFIRM before publication (F04–F06, Q04/Q05): cohort size, duration,
 * weekly schedule, October 2026 start and venue. These describe plans,
 * not completed impact — render them statically, never as counters.
 */
export const pilotPlan = {
  learners: 15,
  weeks: 16,
  weeklyHours: 8,
  lessonsPerWeek: 3,
  lessonHours: 2,
  practiceHours: 2,
  plannedStart: "October 2026",
  country: "Zambia",
} as const;

export const learningStages = [
  {
    number: "01",
    short: "Digital basics",
    title: "Build digital confidence",
    body: "Practise using a computer, managing email and files, creating documents and staying safe online.",
  },
  {
    number: "02",
    short: "Professional practice",
    title: "Practise working professionally",
    body: "Develop the communication, teamwork and reliable working habits that remote teams depend on.",
  },
  {
    number: "03",
    short: "Next opportunities",
    title: "Prepare for opportunities",
    body: "Build a CV, prepare for interviews and learn to identify and apply for credible opportunities.",
  },
] as const;

/** F08 — keep wherever outcomes are discussed. */
export const employmentExpectation =
  "Kyawama supports preparation and the search for opportunities. Completing the course does not guarantee employment.";
