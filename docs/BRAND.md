# Brand baseline

Observed on the live site on 23 September 2026. These are implementation observations, not a supplied official brand manual.

| Role | Colour | Use |
|---|---|---|
| Primary green | `#12463A` | Hero, footer, major panels |
| Warm cream | `#FAF6EC` | Main light background and light text |
| Terracotta | `#B8442C` | Primary action background |
| Dark terracotta | `#96331F` | Observed action hover |
| Ink | `#201C1A` | Primary text on light surfaces |
| Body grey | `#52504C` | Supporting text on cream |
| Pale sage | `#C3D4CD` | Supporting text on green |
| Yellow | `#F2B33D` | Small accents and stage markers |
| Teal | `#159A8C` | Secondary illustrative accent |

The public source also uses decorative terracotta `#D5573B`. Avoid using decorative swatches for small text without a contrast check.

## Typography
Observed heading family: **Bricolage Grotesque**. Body/interface: **Figtree**. **Newsreader** appears as a small italic accent. Preserve this starting combination if usable fonts are available; avoid adding more families. For the first build prioritise two families and sensible local fallbacks. Check font licensing/availability when adding files.

## Name and wordmark
Use **Kyawama** in ordinary copy and **The Kyawama Foundation** where the full public brand is appropriate. Keep legal claims separate. Kris supplied `assets/brand/kyawama-logo.svg` as the working logo asset for this demo (a single-fill `#12463A` export). Treat it as a working asset, not an officially approved master. Use it unmodified at its original proportions. No cream export has been supplied, so dark surfaces use the same file as a CSS mask filled with cream; swap in the cream file in `src/components/ui/Logo.tsx` when it arrives. Do not trace or redraw the logo.

## Media
Lead with real people and place when approved assets become available: Fanny, teaching, learners practising, classroom context. Capture names, rights, consent and captions in the asset inventory. Do not label stock or generated people as actual Kyawama participants. Missing media must not force a fabricated success story.

The first concept can use an original abstract learning-path graphic made in CSS/SVG, circles and a continuous path inspired by the site's existing motif. This graphic represents a process, not measured impact.
