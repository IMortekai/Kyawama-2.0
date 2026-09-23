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
