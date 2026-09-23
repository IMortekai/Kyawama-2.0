# Open questions and working defaults

Prepared 23 September 2026. None of these prevents a useful local homepage concept. Do not repeatedly ask Kris for answers already present in later conversation.

## Ask Kris first
| ID | Question | Why it matters | Working default |
|---|---|---|---|
| Q01 | Is there already a Kyawama repo/scaffold and asset folder? Where should Claude work? | Prevents duplicate projects or overwritten work | Inspect locally and merge this package carefully |
| Q02 | Has Steve requested anything beyond a refreshed design, such as new content/pages, learner access or a different support journey? | Distinguishes a visual proposal from added functionality | Homepage concept using existing public programme and support paths |
| Q03 | Can the exact Ruvixx demo link/screenshots be added? | Allows precise comparison of the motion and composition Steve liked | Use recovered process lessons only; no claim of exact visual matching |

## Resolve with Steve/Raeesa during content review
| ID | Question | Owner to confirm | Default until answered |
|---|---|---|---|
| Q04 | Is the planned October 2026 start still realistic, and are 15 learners/16 weeks/eight hours per week unchanged? | Steve / Raeesa | Local draft labels these as planned; recheck before publishing |
| Q05 | What is the current venue, recruitment and sponsor status? | Raeesa / Steve | No invented location, intake form, deadline or no-sponsor claim |
| Q06 | Is the main website action still starting a sponsor conversation? Who handles each kind of enquiry? | Steve / Raeesa | Existing public email split: Steve for funding, Raeesa for programme |
| Q07 | What public brand/legal wording is approved, and what is the current nonprofit establishment status? | Steve | Public brand retained; no registered/tax-deductible claims |
| Q08 | Should Ace1t be mentioned publicly? If so, what is live, what is planned, who can access it, and what URL should be used? | Raeesa / Corrie / Kris | No public portal, logo strip or integration claim |
| Q09 | Which logo originals, portraits, classroom photos, video and story details may be used? | Steve / Raeesa | Abstract visual and text; no invented beneficiaries |
| Q10 | Are Fanny's and the team's current roles/story accurate and approved for emphasis? | Steve / Raeesa / relevant person | Existing public roles as local draft baseline |
| Q11 | What actual sponsorship information, budget breakdown and reporting commitments can be shared? | Steve / Raeesa | No invented amounts, formal tiers or funding progress bar |
| Q12 | Which curriculum/English-assessment details should a public visitor see? | Raeesa | High-level curriculum from current site, no internal manual downloads |

## Raised during the first build (23 Sep 2026)
| ID | Question | Owner | Default until answered |
|---|---|---|---|
| Q13 | Is the supplied `assets/brand/kyawama-logo.svg` the approved master? Is there a light/reversed version for green backgrounds? | Steve / Kris | Original file used as-is on cream; on green the same file is used as a CSS mask so it renders in cream, with the artwork untouched |
| Q14 | Are the small added labels acceptable (see SESSION-HANDOFF "Small copy additions")? | Kris | Keep them; edit in `src/content/` |
| Q15 | Where will the repo live and who hosts it? The folder is not yet under git | Kris | Local only; nothing deployed |

## Resolve before technical expansion or launch
- Hosting and domain owner; existing repo and deployment process; preview audience.
- Who edits content and how often; whether that warrants a CMS.
- Whether forms are actually needed; delivery destination, data handling and real success/error behaviour if added.
- Whether standalone Programme/Support pages should precede the other supporting pages.
- Primary sources and precise scopes for any retained connectivity/digital-skills statistics.

## Decision log
| Date | Item | Decision | Source / approver | Public use |
|---|---|---|---|---|
| 2026-09-23 | Initial proposal | Sponsor-focused homepage first, existing brand, purposeful motion | ChatGPT recommendation from U1/W/P1 | Draft only |
| 2026-09-23 | Ace1t | Keep public module off until rollout and wording are clarified | R1 caveats; editorial default | Internal context |
| 2026-09-23 | Scope of first build | Refresh the existing site, preserving brand, purpose and factual content. Steve's additional requirements are still pending (Q02 open). No learner accounts, donation checkout or Ace1t integration | Kris, build instruction | Draft only |
| 2026-09-23 | Stack | Next.js 16 + TypeScript + Tailwind CSS 4 + Motion for React | Kris, build instruction | n/a |
| 2026-09-23 | Logo | Original SVG supplied in `assets/brand/`; replaces the provisional text fallback (resolves the logo part of Q09 pending Q13) | Kris, supplied asset | Draft only |

Append actual answers here and update SOURCE-OF-TRUTH.md plus dependent content. Do not replace unknowns with assumptions merely to finish a page.
