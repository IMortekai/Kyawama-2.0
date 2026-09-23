# Motion system

Proposal. Purpose: guide attention, explain progression and give interaction a responsive feel. The page must stay usable as a static layout.

| Element | Behaviour | Starting range | Reduced-motion/mobile treatment |
|---|---|---|---|
| Hero | Brief coordinated entry of copy and visual | 350–600 ms, 8–16 px translation | Render settled; no delay to reading or CTA |
| Learning path | Line/markers reveal once on entry | 600–900 ms total | Fully drawn static path |
| Section content | Subtle once-only entry | 250–450 ms; stagger at most 60–90 ms | Immediate display |
| Buttons/links | Colour, border and arrow response | 120–180 ms | Keep colour/focus feedback; no movement needed |
| Photos, when supplied | Optional restrained crop/reveal | Under 600 ms | Static crop; no continuous panning |
| FAQ | Simple expansion, measured height if used | 180–250 ms | Instant or minimal transition |

These are initial tuning values, not rigid requirements. Cap the first pass at a few coherent effects. Use the project's existing motion library if it has one; don't add a heavy dependency for basic hover transitions.

## Required behaviour
- Respect `prefers-reduced-motion` in CSS and any animation library. Disable transforms, parallax and smooth scrolling when reduced motion is requested.
- Content is present and accessible on initial load. A failed script or observer must not leave text at opacity zero.
- Prefer transform/opacity; avoid repeated layout work on scroll.
- Trigger staged effects once. Do not replay every time a visitor scrolls backwards.
- Decorative paths and shapes are not focusable; meaningful labels remain normal text.
- Keep hover effects optional; touch and keyboard users receive the same information.

## Excluded from this proposal
Scrolljacking, wheel interception, mandatory pinned storytelling, forced horizontal scrolling, custom cursors, incessant marquees, autoplay background video and count-up impact statistics. Ordinary anchor scrolling is fine with a reduced-motion fallback.

## Review
Observe actual behaviour on a narrow screen and with reduced motion enabled. If an effect competes with reading, simplify it. Motion quality is judged by pacing and purpose, not the number of animated elements.


## Implementation (23 Sep 2026, feat/motion-and-pages)
The approved second pass made motion more visible. How it is built:

| Layer | Mechanism | Used for | Failure / reduced motion |
|---|---|---|---|
| Load animation | Pure CSS keyframes (`.anim-line`, `.anim-fade-up`, `.anim-draw`, `.anim-pop`) | Hero line reveals, page-hero word reveals, drawn path motifs | Needs no JS; always ends visible. Off under reduced motion |
| Scroll reveal | `[data-reveal]` + inline `<head>` observer (`src/lib/reveal-script.ts`) | Section entrances: `up`, `fade`, `scale`, `wipe`, `words` | Hidden only after the observer exists. No JS, script error or reduced motion → nothing hidden. Independent of the React bundle; **no timeout** |
| Scroll-linked | Motion for React via `useScrollLinked` | Learning-journey route (draw, travelling marker, stage activation), parallax motifs, statement highlight, chapter/commitment rails | Server HTML and reduced motion render the settled (finished) state; decoration only |
| UI | Motion for React / CSS transitions | Mobile menu, nav indicator, hover, FAQ disclosure | `MotionConfig reducedMotion="user"`; global CSS duration clamp |

Sequencing inside a section follows `seq` in `src/lib/motion.ts`: heading → supporting text (220 ms) → visual (320 ms) → items (380 ms + 90 ms steps) → CTA (560 ms). Headings reveal word by word (45 ms apart) with the plain text as their accessible name. Paragraphs reveal as whole blocks. There are no letter-by-letter effects. The hero headline is readable by about 0.7 s.

Still excluded: scroll hijacking, pinned storytelling, count-up figures (pilot numbers reveal like text), autoplay video and continuous loops (the hero pulse runs three times).
