# Session handoff

Last updated: 23 September 2026 (build session 1).

## Builder update
- **Date / working folder:** 23 Sep 2026 · `C:\Dev\Kyawama` (not a git repository yet).
- **Starting state:** planning package plus original logo `assets/brand/kyawama-logo.svg`. No app, no scaffold, no git.
- **Stack chosen (per Kris's instruction):** Next.js 16.3 (App Router, Turbopack), React 19.2, TypeScript, Tailwind CSS 4.3, Motion for React 13.4 (`motion/react`). Scaffolded with `create-next-app` in a temp folder and merged in, so existing `AGENTS.md`, `CLAUDE.md`, `README.md` and `.gitignore` were kept. The `.gitignore` gained the Next.js entries. `AGENTS.md` gained Next 16's managed "nextjs-agent-rules" block at the end. `next dev` re-adds that block if it's removed, so leave it or commit it.
- **Page output:** the homepage is fully static (`○ /`). It has no server runtime needs, database, CMS, auth or form backend.

## Built
| Area | Files |
|---|---|
| Design tokens (colour, type scale, layout, easing) | `src/app/globals.css` (`@theme`) |
| Fonts | Bricolage Grotesque (display) + Figtree (body) via `next/font/google`, self-hosted at build. Both are SIL OFL |
| Motion tokens | `src/lib/motion.ts`; boot script `src/lib/motion-boot.ts` |
| Motion primitives | `src/components/motion/` — `MotionProvider`, `Reveal`, `RevealGroup`/`RevealItem` |
| UI primitives | `src/components/ui/` — `Container`, `Section` (cream/sand/green tones), `Eyebrow`, `Heading`, `ButtonLink` (primary/ghostDark/ghostLight), `Logo` |
| Layout | `src/components/layout/SiteHeader.tsx` (sticky; accessible mobile menu), `SiteFooter.tsx` (contact band `#contact` + footer) |
| Homepage sections | `src/components/home/` — `Hero` + `HeroPath`, `Story`, `LearningJourney`, `Pilot`, `Support`, `Faq` |
| Content (public strings only) | `src/content/site.ts` (brand, nav, team, contacts), `programme.ts` (pilot values and stages, kept in one place), `home.ts` (homepage copy) |
| Favicon | `src/app/icon.svg`, built from the logo's own "K" glyph (the scaffold's Vercel icon was removed) |

Content is transcribed from `content/homepage-draft.json`. Claim IDs and review notes stay in docs, so none of that reaches the browser. The build output was scanned for `claimIds`, `reviewNote`, `Booster`, `Ace1t` and `RECONFIRM`: none found. To change copy, edit `src/content/*`; layout lives in the components.

### Small copy additions beyond the draft JSON (please review)
- Hero path labels: "Digital basics / Professional practice / Next opportunities" (from DESIGN-DIRECTION).
- Story panel label "Local leadership" above Fanny's name.
- Pilot: "Planned" badge, "A planned week" strip (Lesson 2 hours ×3, Supervised practice 2 hours).
- Support: CTA lead "Start with a short email about the support you have in mind." Each email address is shown under its button.
- Footer: "Kyawama means 'it is good' in Kikaonde." (F13), and each contact card gets a topic label taken from the FAQ contact split.
- Header nav follows the spec (Our story, Programme, Support the pilot). The footer also links The pilot and Contact.

## Motion behaviour
- Hero: copy enters in a staggered sequence (about 550 ms, 16 px). The underline under "fairer" draws in. The learning path draws in, its three stations pop in as the line reaches them, the dashed "continues beyond" tail and open end fade in, and the first station pulses 3 times and then stops.
- Learning journey: on desktop the rising route draws once when it comes into view and the stages follow in step. On mobile a vertical rail grows.
- Sections: subtle entry animations that run once. Pilot figures are static, with no count-up animation.
- FAQ: native `<details>` elements, so they work without JavaScript. The height transition is progressive, via `::details-content`.
- Hover: colour changes plus a 2 px arrow nudge.
- **Safety net:** an inline head script adds `html.motion-ready` only when reduced motion is off. If the page fails to hydrate within 3.5 s, it removes the class again. Without the class, CSS forces every `[data-motion]` element to its settled state. Reduced motion also removes smooth scrolling. Nothing uses scrolljacking, pinning or wheel interception.

## Checks actually run
| Check | Result |
|---|---|
| `npx tsc --noEmit` | pass |
| `npm run lint` (eslint-config-next) | pass, 0 problems |
| `npm run build` | pass; `/` prerendered static |
| Horizontal overflow at 1440 / 768 / 390 / 320 px (Playwright + Chrome) | none |
| Console errors or warnings on load and full scroll, all 4 widths | none |
| Reduced motion (emulated) | 0 hidden animated elements on load; `motion-ready` not set |
| JavaScript disabled (390 px) | 0 hidden animated elements; all content visible |
| Normal motion | reveals wait until scrolled into view. After a full scroll only 3 decorative elements are not fully opaque, all by design: the pulse ring and 2 dashed tails |
| Anchor targets | all `#main`, `#story`, `#programme`, `#pilot`, `#support`, `#contact` exist. Header link puts section top at 88 px under a 72 px header |
| Mobile menu | Enter opens it (`aria-expanded=true`). Escape closes it and returns focus to the toggle. A menu link closes the menu and scrolls to the target, with or without reduced motion. A bug was found and fixed: closing the menu cancelled the native smooth scroll |
| First Tab stop | "Skip to content" link |
| FAQ | opens on click |
| Mail links | only `mailto:stephen@kyawama.org` and `mailto:raeesa@kyawama.org`. Not sent, and inbox delivery not tested |
| Metadata | title set; `robots: noindex, nofollow` by default (set `KYAWAMA_ALLOW_INDEXING=true` at launch) |
| Public assets | `public/` contains only `brand/kyawama-logo.svg` (unmodified copy) |

**Not checked:** 200% browser zoom (only indirectly, via the 320 px pass), screen-reader pass, Safari/Firefox, real devices, Lighthouse/performance metrics, automated contrast tooling. Contrast was checked by hand against the brand values. Teal and decorative terracotta are used only for graphics, never for small text.

## Preview
```
npm install        # first time only
npm run dev        # http://localhost:3000 (shows the "Draft concept" badge)
# or production-like:
npm run build && npm start
```
A review deploy can show the draft badge by setting `NEXT_PUBLIC_REVIEW_BUILD=true`. Nothing has been deployed.

## Screenshots
`references/screenshots/review-2026-09-23/`: desktop fold and full page, tablet full, mobile fold and full, 320 px full, mobile menu open, reduced-motion full, no-JS mobile full.

## Unresolved (see OPEN-QUESTIONS.md)
- All pilot values (15 / 16 / 8 hours, October 2026, venue) are drafts that must be reconfirmed before publication (Q04/Q05).
- Steve's additional requirements are still pending (Q02). This pass refreshes the existing site only.
- No portraits or classroom photos. The Fanny panel is typographic by design until an approved image exists (Q09).
- New build questions: Q13–Q15.

## Recommended next task
Kris reviews the hero, story density, pilot panel and motion pacing on desktop and mobile. After feedback: initialise git, then build `/about`, `/programme`, `/support` and `/faq` from the same components and `src/content`, and switch the nav from anchors to routes.
