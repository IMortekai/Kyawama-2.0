# Kyawama website — start here

Prepared 23 September 2026. **Working proposal for Kris and Claude Code; not founder-approved requirements.**

This is the planning and content starter for Kyawama's new website. Claude builds locally; ChatGPT and Kris shape the brief and review the result. It follows the GoManzanas/Ruvixx process: source → distil → structure → design → specify → build → review.

## The starting decision

Create a lively, credible website that helps a prospective supporter understand the first Zambia pilot and start a conversation. Keep Kyawama's identity, make the people and programme easier to understand, and use motion to explain the journey. Build the homepage first.

The existing site already has a useful story and clear fundraising intent. The internal notes add the planned Ace1t work and relationship context. Neither source is a blanket publication approval for new claims.

## Use this folder

1. Extract this package into your local Kyawama project folder. If a repo/scaffold already exists, merge the documentation carefully; retain existing code, assets and instructions. Do not overwrite an existing `CLAUDE.md` or `AGENTS.md` blindly.
2. Add original logos and approved media under `assets/`. The included screenshot is a reference, not a production asset.
3. Open Claude Code in that folder and paste `prompts/01-START-CLAUDE.md`.
4. Review the first desktop and mobile homepage. Resolve the questions that affect public claims before publication, then extend the other pages.

No application scaffold or framework installation is included. Claude should inspect the actual local project before choosing or changing the stack.

## File map

| Location | Purpose |
|---|---|
| `CLAUDE.md`, `AGENTS.md` | Entry instructions and working boundaries |
| `docs/MASTER-BRIEF.md` | Goal, audience, scope and acceptance criteria |
| `docs/SOURCE-OF-TRUTH.md` | Fact register, provenance and reconciliation |
| `docs/BRAND.md` | Observed colours, fonts and asset handling |
| `docs/DESIGN-DIRECTION.md` | Recommended visual treatment |
| `docs/SITE-ARCHITECTURE.md` | Homepage-first structure and later routes |
| `docs/HOMEPAGE-SPEC.md` | Section-by-section build specification |
| `docs/MOTION-SYSTEM.md` | Motion purpose, behaviour and reduced-motion rules |
| `docs/CONTENT-RULES.md` | Public copy rules and source priority |
| `content/homepage-draft.json` | Editable draft content for the first build |
| `docs/IMPLEMENTATION-START.md` | Build sequence and checks |
| `docs/OPEN-QUESTIONS.md` | Decisions for Kris, Steve and Raeesa |
| `docs/SESSION-HANDOFF.md` | Current state and continuation log |
| `sources/CURRENT-SITE-AUDIT.md` | Findings from all five current site views |
| `sources/raw/` | Unmodified internal Booster capture; reference only |
| `references/` | Reference notes and existing homepage screenshot |
| `assets/ASSET-INVENTORY.csv` | Asset status and acquisition needs |
| `assets/brand/`, `assets/photos/`, `assets/video/` | Places for original supplied media |
| `prompts/01-START-CLAUDE.md` | Copy-and-paste builder handoff |

## Main review items

- The live site describes a planned October 2026 pilot: 15 learners, 16 weeks, eight scheduled hours weekly. Keep these as **planned**, and reconfirm before publication.
- The public FAQ says establishment as a US nonprofit is pending. Do not assert registration, tax deductibility or charitable status beyond approved wording.
- Ace1t is planned to support curriculum delivery internally. A public portal, live rollout and public partnership announcement are not established requirements.
- Steve liking Ruvixx supports a design proposal with more motion; it does not confirm particular effects or additional functionality.
- Photos and original logo files were not supplied with this request. The notes mention an earlier asset collection/scaffold, whose local contents remain unknown.

The raw notes contain internal business information. Keep this package within the working project; deploy only selected application files and approved assets. Do not publish the project root as a static directory.

## Website app (added 23 September 2026)

The homepage concept is now built in this folder: Next.js 16, TypeScript, Tailwind CSS 4 and Motion for React.

```
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run build
```

App code is in `src/`. Copy is in `src/content/`, tokens are in `src/app/globals.css`, and the only public asset is `public/brand/kyawama-logo.svg`. See `docs/SESSION-HANDOFF.md` for what was built and checked.
