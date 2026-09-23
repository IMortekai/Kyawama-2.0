/**
 * Programme and planned-pilot content, shared by the homepage and /programme.
 * Source: live Program view (W-P) and fact register F02–F08, F14.
 *
 * RECONFIRM before publication (F04–F06, Q04/Q05): cohort size, duration,
 * weekly schedule, October 2026 start and venue. These describe plans,
 * not completed impact — render them statically, never as counters.
 */
import { contacts, mailto } from "./site";

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

/**
 * Three stages of the learning journey. `topics` groups the live site's
 * "What learners cover" list by stage — an editorial grouping (Q16), not a
 * week-by-week syllabus.
 */
export const learningStages = [
  {
    number: "01",
    short: "Digital basics",
    title: "Build digital confidence",
    body: "Practise using a computer, managing email and files, creating documents and staying safe online.",
    topics: [
      "Using a laptop, keyboard, mouse and common settings",
      "Connecting to Wi-Fi and using the internet responsibly",
      "Creating and managing email and online accounts",
      "Documents, spreadsheets and managing files",
      "Online safety, privacy, scams and responsible behaviour",
    ],
  },
  {
    number: "02",
    short: "Professional practice",
    title: "Practise working professionally",
    body: "Develop the communication, teamwork and reliable working habits that remote teams depend on.",
    topics: [
      "Professional email, online meetings and teamwork",
      "Remote work expectations, time zones, reliability and trust",
      "Healthy screen habits, movement and personal wellbeing",
    ],
  },
  {
    number: "03",
    short: "Next opportunities",
    title: "Prepare for opportunities",
    body: "Build a CV, prepare for interviews and learn to identify and apply for credible opportunities.",
    topics: ["CVs, online profiles, job searches and interview preparation"],
  },
] as const;

/** F08 — keep wherever outcomes are discussed. */
export const employmentExpectation =
  "Kyawama supports preparation and the search for opportunities. Completing the course does not guarantee employment.";

export const programmePage = {
  meta: {
    title: "Programme",
    description:
      "A planned sixteen-week, in-person programme in Zambia combining digital literacy with preparation for remote work. No previous computer experience required.",
  },
  hero: {
    eyebrow: "Our programme",
    heading: "Patient teaching, in a real classroom.",
    lead: "Sixteen weeks combining basic digital literacy with professional preparation for remote work — designed for adults who may be using a laptop for the first time.",
    cta: "What learners cover",
  },
  audience: {
    eyebrow: "Who it is for",
    heading: "Built for adults who have not had a fair chance to learn.",
    criteria: [
      "Adults of working age in underserved, rural or remote Zambian communities",
      "Who have not had a fair opportunity to build basic digital literacy",
      "Who can attend every in-person class and practice session",
      "Who can follow lessons delivered in English",
    ],
    note: "Previous computer experience is not required.",
  },
  delivery: {
    eyebrow: "How it runs",
    heading: "Learning a digital skill takes repetition.",
    body: [
      "Three two-hour lessons each week, plus a two-hour supervised session for homework, revision and practice.",
      "Classes are planned in person at a venue in Zambia that is still being confirmed. When guest teachers and mentors join virtually, learners still attend the classroom together, supported by the on-site facilitator.",
    ],
    partner: {
      label: "Remote-work lessons",
      body: "The remote-work component is supported by Ruvixx, an established remote organisation whose team contributes guest lessons, mentorship and practical guidance.",
    },
  },
  curriculum: {
    eyebrow: "What learners cover",
    heading: "From first steps to professional confidence.",
    intro: "The topics below come from the planned curriculum, grouped by the stage of the journey they mainly support.",
  },
  selection: {
    eyebrow: "Selection",
    heading: "An English check, not a computer test.",
    body: "Because the course and most remote-work material is in English, applicants complete a short English comprehension assessment. It is not a computer test, and no digital experience is needed to take it.",
  },
  after: {
    eyebrow: "After the course",
    heading: "Honest preparation and a stronger chance to compete.",
    body: "Kyawama helps learners identify credible opportunities, understand how to apply and prepare professionally. Completing the course does not guarantee employment.",
  },
  links: { support: "Support the pilot", faq: "Read the FAQ" },
  referral: {
    eyebrow: "Recommend a learner",
    heading: "Many of the people this is for will never see this website.",
    body: "If you know someone who could benefit, speak with them first. Then email the team with their name, community, contact details and why the programme may suit them. Every recommendation goes through the same selection process.",
    cta: { label: "Recommend a learner", href: mailto(contacts.raeesa.email), email: contacts.raeesa.email },
  },
} as const;
