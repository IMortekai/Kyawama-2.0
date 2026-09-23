/**
 * Support content for the homepage section and /support.
 * Source: live Support view (W-S), fact register F15–F17.
 * Enquiry-only: no tiers, amounts, goals, progress bars or checkout.
 * F15 (no-sponsor statement) is a reconfirm item, so it is not repeated here.
 */
import { contacts, mailto } from "./site";

export type SupportIcon = "fund" | "equip" | "venue" | "work" | "share" | "refer";

export const supportRoutes: { icon: SupportIcon; title: string; short: string; body: string }[] = [
  {
    icon: "fund",
    title: "Fund the learning",
    short: "Discuss support for delivery, materials, learner needs or another agreed part of the pilot.",
    body: "Equipment, connectivity, venue, facilitator time, materials, assessments and learner support for sixteen weeks — the whole pilot or a single named area.",
  },
  {
    icon: "equip",
    title: "Equip the classroom",
    short: "Help with suitable computers, accessories or connectivity. Contact the team before arranging equipment.",
    body: "Laptops, mice, internet devices, data or connectivity. Please talk to the team before arranging anything so specifications and delivery can be confirmed.",
  },
  {
    icon: "venue",
    title: "Offer a place to learn",
    short: "Explore whether a suitable classroom with power, connectivity and secure storage could support the programme.",
    body: "A school, university or business with a safe classroom, reliable power, internet and secure equipment storage.",
  },
  {
    icon: "share",
    title: "Share experience",
    short: "Contribute teaching, mentoring or practical insight into working in remote teams.",
    body: "Guest lessons in digital literacy, remote-work culture, online safety, CVs and interviews — in person, or virtually into the classroom.",
  },
  {
    icon: "work",
    title: "Open doors to work",
    short: "Discuss credible work opportunities suitable for new remote workers.",
    body: "Credible entry-level roles, supervised projects, internships or mentorship appropriate for new remote workers.",
  },
  {
    icon: "refer",
    title: "Help find learners",
    short: "Help connect the team with potential learners in your community.",
    body: "Community organisations and local leaders who can identify learners who are offline and explain the programme in person.",
  },
];

export const fundingAreas = [
  "Equipment",
  "Internet access",
  "Venue costs",
  "Facilitator time",
  "Teaching materials",
  "Assessments",
  "Learner support",
  "Administration",
  "Monitoring",
] as const;

export const supportCtas = {
  primary: {
    label: "Talk about supporting the pilot",
    href: mailto(contacts.steve.email),
    email: contacts.steve.email,
  },
  secondary: {
    label: "Programme and volunteering enquiries",
    href: mailto(contacts.raeesa.email),
    email: contacts.raeesa.email,
  },
} as const;

export const supportPage = {
  meta: {
    title: "Support the pilot",
    description:
      "Fund, equip, host, teach or open doors for Kyawama’s planned first cohort in Zambia. Support starts with a conversation, not a checkout.",
  },
  hero: {
    eyebrow: "Support the pilot",
    heading: "Help make the first cohort possible.",
    lead: "The curriculum, local leadership and remote-work mentors are in place. There is no donate button here — supporting a first cohort starts with a conversation.",
    cta: "Start the conversation",
    secondaryCta: "Ways to help",
  },
  routes: {
    eyebrow: "Where support goes",
    heading: "Every contribution has a named job.",
  },
  funding: {
    eyebrow: "What funding could cover",
    heading: "A single named area, or the whole pilot.",
    body: "The exact use is agreed with you before a contribution is accepted. You may support one named area rather than the whole pilot.",
  },
  why: {
    eyebrow: "Why the pilot matters",
    heading: "Growth based on evidence, not ambition.",
    body: "The first cohort tests the curriculum in a real classroom and shows what learners actually need. If it works, Kyawama plans to strengthen the model, reach more communities in Zambia and explore adapting it for other African countries.",
  },
  promise: {
    eyebrow: "What partners can expect",
    heading: "Agreed before anything is accepted.",
    points: [
      { title: "Purpose", body: "What your support is for, agreed in advance." },
      { title: "Arrangements", body: "The practical details of delivery, equipment or time." },
      { title: "Reporting", body: "Attendance, completion, learner progress and what was learned." },
      { title: "Acknowledgement", body: "How you are recognised, while protecting learner privacy and dignity." },
    ],
  },
  links: { faq: "Questions funders ask", programme: "How the programme runs" },
  contact: {
    eyebrow: "Get in touch",
    heading: "Write to the team directly.",
    note: "Organisational and due-diligence documents are available to serious prospective funders and partners on request.",
  },
} as const;
