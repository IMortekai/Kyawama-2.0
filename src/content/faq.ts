/**
 * FAQ content for /faq (all groups) and the homepage (a selection by id).
 * Source: live FAQ view (W-F) and homepage draft. Adjusted per the fact
 * register: legal wording (F18) and sponsor status (F15) are reconfirm items,
 * so answers avoid permanent status claims.
 */
import type { Faq } from "./types";

export const faqGroups: { id: string; title: string; intro: string; items: Faq[] }[] = [
  {
    id: "pilot",
    title: "The first pilot",
    intro: "Where the programme stands today.",
    items: [
      {
        id: "cohort",
        question: "Have you taught a cohort yet?",
        answer:
          "Not yet. The first cohort is planned to begin in October 2026 in Zambia, at a venue that is still being confirmed.",
      },
      {
        id: "online",
        question: "Is this an online course?",
        answer:
          "No. The pilot is planned as an in-person programme in Zambia. Guest teachers may join remotely while learners work together in the classroom with an on-site facilitator.",
      },
      {
        id: "ruvixx",
        question: "What is Ruvixx’s role?",
        answer:
          "Ruvixx supports the remote-work component. Members of its team contribute guest lessons, mentorship and practical guidance drawn from working in remote teams.",
      },
      {
        id: "legal",
        question: "Is Kyawama a registered nonprofit?",
        answer:
          // Current public wording (W-F). F18: reconfirm exact legal wording before launch.
          "The Kyawama Foundation is a soon-to-be-established US nonprofit preparing its first programme in Zambia. Organisational and due-diligence documents can be shared with serious prospective funders on request.",
      },
    ],
  },
  {
    id: "learners",
    title: "Learners and the course",
    intro: "For people recommending a learner, or thinking about joining.",
    items: [
      {
        id: "experience",
        question: "Do learners need computer experience?",
        answer:
          "No previous computer experience is required. Selection includes an English comprehension assessment because lessons are delivered in English.",
      },
      {
        id: "english",
        question: "Why is there an English assessment?",
        answer:
          "The course and most remote-work resources are in English. The assessment confirms that a learner can follow instructions, read material and complete written tasks. It does not test computer skills.",
      },
      {
        id: "job",
        question: "Does completing the course guarantee a job?",
        answer:
          "No, and Kyawama will not claim otherwise. The programme builds practical skills and professional readiness, with support in identifying and pursuing credible opportunities.",
      },
      {
        id: "refer",
        question: "How can I recommend someone?",
        answer:
          "Speak with the person first. Then email Raeesa with their name, community, contact details and why the programme may suit them. Every recommendation goes through the same selection process.",
      },
    ],
  },
  {
    id: "funding",
    title: "Funding and partnership",
    intro: "For funders, sponsors and collaborators considering the first pilot.",
    items: [
      {
        id: "sponsor",
        question: "Is there already a lead sponsor?",
        answer:
          "Kyawama is looking for an organisation that wants to lead support for the first pilot and, if it proves effective, its growth. Ask Steve about the current position.",
      },
      {
        id: "pays-for",
        question: "What would funding pay for?",
        answer:
          "Equipment, internet access, venue costs, facilitator time, teaching materials, assessments, learner support, administration and monitoring. The exact use is agreed with the funder before a contribution is accepted, and you may support one named area rather than the whole pilot.",
      },
      {
        id: "reporting",
        question: "How will you report back?",
        answer:
          "Reporting is agreed according to the type and scale of support. Kyawama expects to share delivery, attendance, completion, learner progress, lessons from the pilot and the use of your contribution — while protecting personal information.",
      },
      {
        id: "measure",
        question: "How will you measure whether it worked?",
        answer:
          "By tracking attendance, completion, assignments, growth in practical digital skills, learner feedback and readiness for remote work — and recording honestly what must change before another cohort runs.",
      },
      {
        id: "outside",
        question: "Can we help from outside Zambia?",
        answer:
          "Yes. Funding, equipment, remote mentoring, professional networks and work opportunities can come from anywhere. The programme itself stays locally delivered and centred on the Zambia cohort.",
      },
      {
        id: "contact",
        question: "Who should I contact?",
        answer:
          "Contact Steve about funding and partnerships. Contact Raeesa about programme delivery, volunteering and learner recommendations.",
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((group) => group.items);

export function faqsById(ids: string[]): Faq[] {
  return ids.map((id) => {
    const item = allFaqs.find((faq) => faq.id === id);
    if (!item) throw new Error(`Unknown FAQ id: ${id}`);
    return item;
  });
}

export const faqPage = {
  meta: {
    title: "FAQ",
    description:
      "Straight answers about Kyawama’s planned first pilot in Zambia, the course, and how funders and collaborators can help.",
  },
  hero: {
    eyebrow: "Questions",
    heading: "Straight answers.",
    lead: "About the planned first pilot, the course itself, and how funders and collaborators can help.",
  },
  closing: "Still have a question? Write to the team directly.",
} as const;
