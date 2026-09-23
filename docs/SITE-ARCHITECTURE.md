# Site architecture

Current site has five views: Home, About, Program, Support and FAQ. Browser navigation between inspected views left the address at the same root URL. The redesign should give later pages real, shareable routes.

## Status (23 Sep 2026)
All five routes below are built on `feat/motion-and-pages`: `/`, `/about`, `/programme`, `/support`, `/faq`, plus a branded 404. Header: About, Programme, FAQ and the Support the pilot action. Footer: all routes. Homepage sections keep their anchors (`#story`, `#programme`, `#pilot`, `#support`) and link through to the matching pages.

## First pass (superseded): complete homepage only
Use real section anchors: `#story`, `#programme`, `#pilot`, `#support`, `#contact`. Header: Our story, Programme, Support the pilot. Support the pilot goes to `#support`; Email Steve opens `mailto:stephen@kyawama.org`. Programme/referral enquiries go to `mailto:raeesa@kyawama.org`.

No menu item should point at an unbuilt page. Footer navigation also uses the existing homepage anchors for this pass. The compact homepage FAQ can sit within the support area.

## Later routes
| Route | Purpose | Main content | Main action |
|---|---|---|---|
| `/` | Establish relevance and next step | Mission, story, programme, pilot, support | Discuss pilot support |
| `/about` | Build trust through people and origin | Steve's connection to Zambia, Fanny's journey, mission, team | Meet/contact the team |
| `/programme` | Explain delivery and eligibility | Audience, English assessment, classroom schedule, skills, referrals | Contact Raeesa |
| `/support` | Make collaboration concrete | Funding areas, equipment, venue, mentorship, opportunities, reporting | Contact Steve or Raeesa |
| `/faq` | Answer due-diligence and programme questions | Pilot status, legal wording, support, reporting, job expectations | Direct enquiry |

Optional later additions: a learning-resource link once the correct Ace1t destination and access model are confirmed; real stories/updates when material exists. Neither is a first-pass requirement.

## Content progression
Home makes the case; About establishes the people; Programme explains the mechanics; Support describes useful contributions; FAQ handles specifics. Keep repeated facts in shared content so the pilot date and contact details cannot drift between pages.

## Discovery and operational requirements
Use semantic links for navigation and buttons for actions; direct route loads and refreshes must work when supporting pages exist. Provide a meaningful page title, description and share image for each route. A deployed review build should be marked noindex; production indexing and canonical URLs should be configured deliberately at launch. Do not expose internal docs through a static directory listing.
