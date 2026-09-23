/**
 * /about content. Source: live About view (W-A), fact register F09–F13.
 * Fanny's journey predates the programme; she is not a pilot graduate (F10).
 */
export const aboutPage = {
  meta: {
    title: "About",
    description:
      "How Kyawama began with a host family in Zambia, the people leading it, and the vision and mission behind the programme.",
  },
  hero: {
    eyebrow: "About us",
    heading: "It began with a host family in Zambia.",
    lead: "Kyawama is a Kikaonde word meaning “it is good.” The name speaks to what comes from access, patient teaching and a genuine chance to learn.",
  },
  story: {
    eyebrow: "Our story",
    heading: "Two chapters, one idea.",
  },
  chapters: [
    {
      label: "Chapter one",
      title: "How Kyawama began",
      body: [
        "Kyawama began with Steve Carroll’s service as a Peace Corps volunteer in Zambia, where he lived with a host family whose welcome grew into a lifelong bond.",
        "Through that family and the wider community, Steve met young people with intelligence and ambition but no access to computers, digital learning or remote career pathways — and asked what would become possible if practical digital skills were within reach.",
      ],
    },
    {
      label: "Chapter two",
      title: "From one opportunity to a programme",
      body: [
        "Years later, Steve trained Fanny Mutanda in remote work and gave her the chance to learn through real experience. Fanny is now a Junior Campaign Manager at Ruvixx and Kyawama’s Zambia Program Lead.",
        "Her progression showed what patient teaching and a fair opportunity make possible. Kyawama exists to offer that support as a structured programme — while recognising that every learner’s path will differ.",
      ],
    },
  ],
  name: {
    eyebrow: "In Kikaonde",
    word: "Kyawama",
    meaning: "“it is good”",
  },
  purpose: [
    {
      label: "Our vision",
      body: "To build a globally scalable programme that prepares individuals for remote work, enabling them to create lasting careers and uplift their communities.",
    },
    {
      label: "Our mission",
      body: "To equip individuals in underserved communities with the digital skills, professional readiness and pathways required to secure dignified remote work with global companies, unlocking long-term career growth and meaningful economic mobility.",
    },
  ],
  team: {
    eyebrow: "The team",
    heading: "Local leadership, practical experience.",
    note: "Kyawama is supported by a growing board, facilitators, advisers and guest teachers who share its commitment to practical, dignified opportunity.",
  },
  closing: {
    heading: "Help put the first cohort in that classroom.",
    cta: "Ways to support the pilot",
  },
} as const;
