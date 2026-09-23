/**
 * Homepage copy. Transcribed from content/homepage-draft.json (v0.1,
 * editorial draft — not publication approval). Edit copy here; layout lives
 * in src/components/home.
 */
import { pilotPlan } from "./programme";
import { contacts, mailto } from "./site";

export const hero = {
  eyebrow: ["Rural Zambia", "Digital skills", "Remote-work readiness"],
  headingLines: ["Digital skills.", "A fairer start."],
  body: "Kyawama helps adults in underserved Zambian communities build practical digital skills and prepare for opportunities in remote work.",
  primaryCta: { label: "Support the pilot", href: "#support" },
  secondaryCta: { label: "Explore the programme", href: "#programme" },
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
    name: "Fanny Mutanda",
    role: "Zambia Program Lead",
    body: "Fanny now works as a Junior Campaign Manager at Ruvixx and brings her own experience of learning to work remotely to Kyawama’s programme.",
  },
  teamLabel: "The team",
} as const;

export const programme = {
  id: "programme",
  eyebrow: "Learning that connects to everyday work",
  heading: "From digital basics to professional confidence.",
  intro:
    "The planned programme combines classroom teaching, supervised practice and preparation for working with remote teams. Previous computer experience is not required.",
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
  body: "The pilot needs practical support, from classroom resources to people who can share their experience. Talk to us about the contribution that fits you or your organisation.",
  options: [
    {
      icon: "fund",
      title: "Fund the learning",
      body: "Discuss support for delivery, materials, learner needs or another agreed part of the pilot.",
    },
    {
      icon: "equip",
      title: "Equip the classroom",
      body: "Help with suitable computers, accessories or connectivity. Contact the team before arranging equipment.",
    },
    {
      icon: "venue",
      title: "Offer a place to learn",
      body: "Explore whether a suitable classroom with power, connectivity and secure storage could support the programme.",
    },
    {
      icon: "share",
      title: "Share experience",
      body: "Contribute teaching, mentoring or practical insight into working in remote teams.",
    },
  ],
  additional:
    "You can also discuss credible work opportunities or help connect the team with potential learners in your community.",
  ctaLead: "Start with a short email about the support you have in mind.",
  primaryCta: {
    label: "Talk about supporting the pilot",
    href: mailto(contacts.steve.email),
    email: contacts.steve.email,
  },
  secondaryCta: {
    label: "Programme and volunteering enquiries",
    href: mailto(contacts.raeesa.email),
    email: contacts.raeesa.email,
  },
} as const;

export type SupportIcon = (typeof support.options)[number]["icon"];

export const faq = {
  heading: "Common questions",
  items: [
    {
      question: "Is this an online course?",
      answer:
        "The pilot is planned as an in-person programme in Zambia. Guest teachers may join remotely while learners work together in the classroom.",
    },
    {
      question: "Do learners need computer experience?",
      answer:
        "No previous computer experience is required. Selection includes an English comprehension assessment because lessons are delivered in English.",
    },
    {
      question: "Does the course guarantee a job?",
      answer:
        "No. It builds practical skills and professional readiness, with support in identifying and pursuing credible opportunities.",
    },
    {
      question: "Who should I contact?",
      answer:
        "Contact Steve about funding and partnerships. Contact Raeesa about programme delivery, volunteering and learner recommendations.",
    },
  ],
} as const;

export const contact = {
  id: "contact",
  heading: "Start a conversation with Kyawama.",
  people: [contacts.steve, contacts.raeesa],
} as const;
