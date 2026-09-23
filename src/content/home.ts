/**
 * Homepage copy. Transcribed from content/homepage-draft.json (v0.1,
 * editorial draft) plus the live Home view for the statement band.
 * Edit copy here; layout lives in src/components/home.
 */
import { pilotPlan } from "./programme";
import { routes } from "./site";

export const hero = {
  eyebrow: ["Rural Zambia", "Digital skills", "Remote-work readiness"],
  headingLines: ["Digital skills.", "A fairer start."],
  emphasis: "fairer",
  body: "Kyawama helps adults in underserved Zambian communities build practical digital skills and prepare for opportunities in remote work.",
  primaryCta: { label: "Support the pilot", href: routes.support },
  secondaryCta: { label: "Explore the programme", href: "#programme" },
} as const;

/** From the live Home view ("The gap we exist to close"). */
export const statement = {
  eyebrow: "The gap we exist to close",
  heading: "Ability is everywhere. Access is not.",
  body: "Kyawama is built for people who are willing and able to work, but have never had a fair chance to become digitally literate.",
} as const;

export const story = {
  id: "story",
  eyebrow: "The people behind the programme",
  heading: "A personal connection. A practical beginning.",
  body: [
    "Steve Carroll’s time as a Peace Corps volunteer in Zambia began a lasting connection with a host family and their community.",
    "Later, his work with Fanny Mutanda helped shape the idea behind Kyawama: make practical learning and a first professional opportunity more accessible.",
  ],
  person: {
    label: "Local leadership",
    name: "Fanny Mutanda",
    role: "Zambia Program Lead",
    body: "Fanny now works as a Junior Campaign Manager at Ruvixx and brings her own experience of learning to work remotely to Kyawama’s programme.",
  },
  teamLabel: "The team",
  link: { label: "Read how Kyawama began", href: routes.about },
} as const;

export const programme = {
  id: "programme",
  eyebrow: "Learning that connects to everyday work",
  heading: "From digital basics to professional confidence.",
  intro:
    "The planned programme combines classroom teaching, supervised practice and preparation for working with remote teams. Previous computer experience is not required.",
  link: { label: "See the full programme", href: routes.programme },
} as const;

export const pilot = {
  id: "pilot",
  eyebrow: "Planned first cohort · Zambia",
  heading: "The first pilot, built around practice.",
  status: "Planned",
  facts: [
    { value: String(pilotPlan.learners), label: "learners planned" },
    { value: String(pilotPlan.weeks), label: "weeks of learning" },
    { value: String(pilotPlan.weeklyHours), label: "scheduled hours each week" },
  ],
  weekLabel: "A planned week",
  lessonLabel: "Lesson",
  practiceLabel: "Supervised practice",
  body: "The weekly plan includes three two-hour lessons and a two-hour supervised practice session. The course is free for selected learners.",
  scheduleNote: `The current plan is to begin in ${pilotPlan.plannedStart}. The classroom venue in ${pilotPlan.country} is being confirmed.`,
} as const;

export const support = {
  id: "support",
  eyebrow: "Help make the pilot possible",
  heading: "There is more than one way to open a door.",
  body: "The pilot needs practical support, from classroom resources to people who can share their experience. Talk to the team about the contribution that fits you or your organisation.",
  ctaLead: "Start with a short email about the support you have in mind.",
  link: { label: "All the ways to help", href: routes.support },
} as const;

export const homeFaq = {
  heading: "Common questions",
  ids: ["online", "experience", "job", "contact"],
  link: { label: "More answers", href: routes.faq },
} as const;
