# Implementation start

## 0. Inspect the real project
Read existing instructions and inspect files, git status, package manifest and assets. The notes mention a prior scaffold; its existence and contents have not been verified here. Do not assume this documentation folder is the whole app, and do not overwrite a scaffold just to match a preferred stack.

If the project is empty, use a small mainstream setup suited to a public content website with later shareable routes. Prefer Kris's existing working stack if available; check its current official documentation when implementing. Record the choice. Do not add authentication, a database or CMS for the homepage concept.

## 1. Establish the foundation
- Translate BRAND.md into central design tokens.
- Create shared container, section, heading, button/link and contact components.
- Keep the draft copy in a dedicated data/content module, separate from layout.
- Map only selected content fields into the UI. Do not glob-import Markdown or source folders.
- Build a proper header, footer and responsive grid before adding motion.

## 2. Build the complete static homepage
Follow HOMEPAGE-SPEC.md and the draft JSON. Make every visible action work: local anchors and public email links. Use the abstract journey visual if real media is unavailable. Use semantic elements and readable source order. Keep the page complete enough for a useful design review.

## 3. Add motion deliberately
Apply MOTION-SYSTEM.md. Tune the hero, journey and a few section transitions. Include the reduced-motion version from the start. Keep ordinary scrolling and immediate access to all text.

## 4. Verify material risks
- Use the repo's existing build/lint/type checks where available. Do not create trivial tests just to mirror markup.
- Inspect desktop around 1440 px, tablet around 768 px and narrow mobile around 390 px, plus a 320 px overflow check.
- Check keyboard navigation, visible focus, menu behaviour, anchor offsets, email destinations and FAQ operation.
- Check text at 200% zoom and with reduced motion. Check all text/background combinations for contrast.
- Test a failed or disabled animation path: meaningful content must remain visible.
- Confirm no claim has turned a planned pilot into delivered impact or promised employment.
- Inspect generated output for internal raw text, document names and private notes. Only intended production assets should be shipped.
- Report measurable performance results only if actually measured; do not call the site fast based on appearance.

## 5. Return a reviewable result
Give Kris the local preview instructions, desktop/mobile screenshots, a short list of changes, actual checks performed, and unresolved choices. Update SESSION-HANDOFF.md. Ask for focused visual feedback on hero, story, density and motion before building secondary pages.

## Proposed app organisation
Adapt to the chosen framework; these are responsibilities, not mandatory paths.

| Area | Responsibility |
|---|---|
| App/pages | Routing, metadata and page composition |
| Components/layout | Header, footer, container, section |
| Components/home | Hero, Story, LearningJourney, Pilot, Support, FAQ |
| Content | Public strings and programme values |
| Styles | Tokens, typography, responsive layout, reduced motion |
| Public approved assets | Selected logo, photos, fonts and social image only |

## Before a later launch
Resolve the publication-critical items in OPEN-QUESTIONS.md; obtain original media; confirm hosting/repo ownership and content maintenance; add real page metadata and any required organisational/privacy information for the actual functionality. Publication is a separate instructed step. Do not assume the earlier Ruvixx Booster port workflow applies here.
