# Kyawama Foundation: Raw Knowledge Capture from Booster Staging

> **Status:** RAW capture, not website copy. Not summarized or reorganized on purpose.
> **Extraction date:** 2026-09-23
> **Extracted by:** Claude Code (Opus 5.5), for kristijanzana@gomanzanas.com
> **Mode:** READ-ONLY. Nothing in Booster or Glory was created, edited, uploaded, or deleted.

## 0. Source / Index

### How this was retrieved
- **MCP server:** `booster-stage` (Booster staging)
- **Wiki queried:** **Glory Wiki**. CDE project id `019fa5c5-532f-7241-86f3-ed736ddc5359`, owner Corrie Stroup (owner id `019b6b3a-6984-733e-9530-ca795fb72db8`). This was the only wiki `discover_wikis` returned.
- **Access method:** The Glory Wiki is only reachable through `query_wiki`, where the wiki's own agent answers natural-language questions. Its underlying pages (such as `entities/kyawama.md`) **cannot be read directly** through this MCP, so every Glory section below is the **agent's answer, quoted verbatim**. It is not raw page text.
- **Other resources checked:** `search_items` across all accessible organizations (GoManzanas and the user's Private org), plus the organization and project overviews. See section 99 for the results of those checks.

### Conventions
- Text under **"Booster/Glory response (verbatim)"** is copied exactly from the MCP output.
- Text under **"Observations (Claude)"** is my own commentary. It is not from Booster.
- Each entry records the tool, the query, the `query_id`, and the Glory page paths the answer cites.

### What was found (index)
| # | Source | Type | Key content |
|---|---|---|---|
| 1 | Glory: overview answer | wiki agent synthesis | Founder, mission, location, full timeline Aug 6 to Sep 23 2026 |
| 2 | Booster item `019ba965-...` "Use Ace1t to help Steve's nonprofit in Zambia" | Booster item (Ace1t project), Jan 2026 | Earliest record; English-for-remote-work framing; Ace1t capabilities; 5 contributions |
| 3 | Glory: `entities/kyawama.md` | wiki page (near-verbatim) | **Primary source.** Frontmatter, sources, dated sections Sep 1 to Sep 23 |
| 4 | Glory: `entities/steve-carroll.md` | wiki agent answer | Founder profile (Ruvixx CRO) + Kyawama relationship |
| 5 | Glory: Raeesa Cassim | wiki agent answer | Point of contact / product owner; meetings; no contact info |
| 6 | Glory: `entities/ace1t.md` Sep 17 section | wiki agent answer | "Channel deal, not a seat deal"; YouTube integration |
| 7 | Glory: 5 MB asset limit | wiki agent answer | Upload cap context (not Kyawama-specific) |
| 8 | Glory: timeline syntheses Aug/Sep 2026 | wiki quotes w/ line refs | All dated entries, incl. **website redesign** hints |
| 9 | Glory: website work Sep 22-23 | wiki quotes | "QM website" redesign; Kyawama assets gathered and site scaffolded by Kristijan |
| 10 | Glory: project-status sheet rows | wiki source pages | Sheet row (Sep 16), removed Sep 18 |
| 11 | Glory: Aug 27 entry | wiki quote | Email chain; "Rayisa from South Africa"; Steve as distribution channel |
| 12 | Glory: institutional details | wiki agent answer | "Recently started"; Raeesa is the only employee; no size or funding data |
| 13 | Glory: minor mentions | wiki quotes | Corrie, Ling, Luis, webinar-concept pages |
| 14 | Glory: transcript reliability | wiki quotes | Name-variant decode table |
| 15 | Booster project "Ruvixx demo website" | Booster project | Empty (0 items) |
| 98 | Register | Claude | All wiki pages, raw sources, and unretrievable materials |
| 99 | Access log | Claude | Searches, blocked queries, timeouts |

**Duplication note:** Sections 1, 3, 4, 5, 6, 8 and 12 repeat many of the same facts, because they are different views of the same underlying wiki material. I kept every copy instead of choosing one. **Section 3 is the closest to the primary page text.**

---

## 1. Glory Wiki: Overview of Kyawama Foundation

- **Tool:** `query_wiki`
- **Query:** "What is the Kyawama Foundation? Please give everything you know about it, including mission, history, founders, programs, and location."
- **query_id:** `0b177322cab9`
- **Cited pages:** `entities/kyawama.md`, `entities/steve-carroll.md`

### Booster/Glory response (verbatim)

Kyawama (confirmed spelling, per Corrie on 2026-09-01) is the non-profit founded by Steve Carroll of Ruvixx. Note that "Kavana Foundation" / "Kavano Foundation" are speech-to-text mangles of the same name that appear in the Sep 22 and Sep 23 Gemini notes; the wiki treats Kyawama as the correct form. Main page: `entities/kyawama.md`, with supporting detail on `entities/steve-carroll.md`.

**Founder and affiliation.** Founded by Steve Carroll. The relationship to GoManzanas runs "through Ruvixx but separate" (Steve is Ruvixx; the charity is not). Point of contact is Raeesa Cassim, recorded as the nonprofit's product owner for the Ace1t work.

**Mission.** Trains people in underserved communities in remote-work skills, for companies like Ruvixx. Ling's earliest description (Aug 6 2026) was helping African students learn the skills for remote work. Corrie's project sheet (Sep 16 2026) frames it as a "digital literacy programme"; the wiki flags that these two framings have never been reconciled.

**Location.** Rural Zambia, described by Steve Carroll himself on the Sep 11 2026 Booster Sync. An earlier record said South Africa (from an Aug 27 summary layer); Zambia supersedes it as the founder's own word.

**History in the wiki.**
- Aug 6 2026: first appearance, via Ling in DM, as a charity Steve was starting, with an ask around Ace1t supporting English evaluation (a quiz) and curriculum development.
- Aug 27 2026: Corrie reports an email chain with Steve and its operator, ahead of a first meeting about Ace1t.
- Sep 1 2026: first meeting done; Corrie's read was a good fit for putting its modules and workshops onto Ace1t.
- Sep 9 to 10 2026: materials arrive, Corrie builds a workbook from them and demos it; Lynn is introduced.
- Sep 11 2026: described first-hand by Steve; testing on Ace1t begins the following week.
- Sep 17 2026: delivery shape becomes concrete (see programs below); Lynn's involvement assigned, with an email introduction made.
- Sep 18 2026: reclassified as Ace1t work rather than consulting work and removed from the GoManzanas Project Status sheet. The wiki is explicit that this was a reclassification, not a cancellation.
- Sep 22 2026: Kristijan asked to prepare a proposal drawing on the wiki, ahead of meeting Steve. Incidental find: Kyawama's website uses the same orange and deep green as his Ruvixx demo.
- Sep 23 2026: scope stated most clearly to date.

**Programs and the Ace1t work.** Two stages on one platform: Raeesa onboards and trains her instructors (train-the-trainer), then those instructors toggle to teacher roles and run the actual student programme through Ace1t. As of Sep 23 2026, essentially the entire Kyawama curriculum is to be hosted on Ace1t: the instructor manual uploaded as PDF reading books, a couple of workbooks built with Lynn, plus Kyawama's YouTube material integrated, replacing paper worksheets and printouts. That makes it content migration rather than feature development, which the page notes does not match the Aug 6 framing (English evaluation plus curriculum development); nobody has reconciled the two.

**Caveats the wiki itself raises.** The page carries `confidence: medium`. Size of the organisation is not recorded, there is no website URL captured (Luis asked Steve for one on Sep 11, and nothing has landed), no live date for the programme, and no confirmation in the record that the instructor-to-teacher toggle in Ace1t actually exists, though it is described as if routine. The Aug 6 source is a Ling DM that predates Glory's own Slack pull, so it cannot be checked against raw material from here.

### Observations (Claude)
- Name variants in the source: "Kyawama" (canonical), plus "Kavana Foundation" and "Kavano Foundation" (transcription errors). There is a location conflict (South Africa vs. rural Zambia) and a mission-framing conflict (remote-work skills vs. digital literacy). The wiki itself flags both.

---

## 2. Booster Item: "Use Ace1t to help Steve's nonprofit in Zambia"

- **Tool:** `get_item` + `get_item_full_context`
- **Item id:** `019ba965-f252-7798-b047-df3f3d493807`
- **Organization:** GoManzanas (`019b6b39-9f23-700a-b7ba-54170bc5dde8`)
- **Project:** Ace1t
- **Item type:** null (idea/riff-style item)
- **Status:** EXPLORING (is_finished: false)
- **Creator:** Ling Xiao (username `lingo`, user id `019b6c91-3f71-7468-b88b-87404e6d2db6`)
- **Created:** 2026-01-10T19:33:09Z · **Updated:** 2026-01-16T17:26:23Z
- **Contributions:** 5 · **Reactions:** none · **Summary versions:** none returned
- **Found via:** `search_items` for "Zambia", "Steve", and "nonprofit". The item does **not** contain the word "Kyawama".

### Description (verbatim)
Use Ace1t to help Steve start his Zambia non-profit to help teach people how to do remote work.

### Overview (verbatim)
This project utilizes the Ace1t AI platform to equip Zambian individuals with English skills for remote work. Key features include automated grading and dynamic content generation, while current planning focuses on clarifying the nonprofit's specific mission to prioritize educational modules.

### Summary (verbatim)

# Global Summary: Use Ace1t to help Steve's nonprofit in Zambia

## 1. Executive Summary
This initiative aims to deploy the Ace1t AI-powered edutech platform to support Steve's nonprofit in Zambia, specifically focusing on equipping local individuals with the English proficiency needed for US-based remote work. The project is currently refining technical specifications and seeking clarity on the nonprofit's primary mission to tailor module deployment.

## 2. Key Features & Decisions
- **Remote Work Empowerment:** Thanks to **Ling Xiao**, it was established that the core idea is utilizing Ace1t's English training (listening, speaking, and accent training) to help Zambians secure remote work with US-based companies.
- **Automated Rubric Grading:** **Corrie Stroup** confirmed a fully automated, rubric-based grading system for simple and complex open-ended assignments, allowing teachers to focus on oversight rather than manual assessment. System includes easy completion tracking and score exportation.
- **Dynamic Content Generation:** **Corrie Stroup** clarified that Ace1t uses teacher-defined 'seed' prompts to generate infinite, non-repeating practice questions with instant feedback.
- **Feedback and Progress:** According to **Corrie Stroup**, feedback includes error identification and stylistic rewrite suggestions, while progress is tracked via a simple score history to maintain interface simplicity.
- **Subject & UI Optimization:** **Corrie Stroup** noted the platform is optimized for writing tasks and currently limited in math due to LLM reasoning and graphing constraints. The current UI is better suited for shorter writing tasks than long-form essays.

## 3. Open Questions
- **Nonprofit Mission Clarification:** **Corrie Stroup** highlighted the need to define whether the target is general community education, training for specific beneficiaries, or improving the English skills of the nonprofit's staff. This is required to prioritize specific Ace1t modules.

## 4. Technical Architecture
- **Core Engine:** AI-backed edutech platform utilizing LLMs for generation and assessment.
- **Input Model:** Teacher-defined 'seed' prompts for infinite question generation.
- **Assessment Model:** Automated rubric-based grading for open-ended text.
- **Reporting:** Exportable score history and completion tracking system.

### Contributions (verbatim, chronological)
1. **Ling Xiao** (`lingo`), 2026-01-10T19:39:30Z, sentiment neutral, approved, id `019ba96b-c4a4-76bd-96b4-88372419f174`:
   > The core idea involves utilizing Ace1t, an AI-powered education platform specializing in English language training (including listening, speaking, and accent training), to empower Steve's nonprofit in Zambia. The objective is to equip Zambian individuals with strong English proficiency, a critical skill to secure remote work opportunities, particularly with US-based companies.
2. **Corrie Stroup** (`corrie`), 2026-01-14T14:01:37Z, neutral, approved, id `019bbccf-dd76-76ad-ae47-5a15178349ba`:
   > The conversation successfully identified and prioritized a critical knowledge gap: the specific mission and target beneficiaries of Steve's nonprofit in Zambia. It was clarified that before determining how Ace1t modules can be prioritized, it is essential to understand whether the nonprofit focuses on general community education, training for its beneficiaries, or improving the English skills of its staff. This understanding is crucial for tailoring Ace1t's application effectively.
3. **Corrie Stroup**, 2026-01-14T18:14:15Z, neutral, approved, id `019bbdb7-2517-71a8-9016-1e1c3d586f57`:
   > Clarified the core functionality of Ace1t as an AI-backed edutech platform that uses teacher-defined 'seed' prompts to generate infinite, non-repeating practice questions with automated grading and instant feedback. Established that the platform is optimized for writing-based subjects but currently limited in math due to LLM reasoning and graphing constraints.
4. **Corrie Stroup**, 2026-01-14T18:18:13Z, neutral, approved, id `019bbdba-c6c9-7614-96a5-7cd63f2f18bd`:
   > Refined technical specifications for Ace1t, establishing that while the platform technically supports both long-form essays and short writing tasks, the current UI is better suited for shorter inputs. The feedback mechanism was clarified to include both error identification and stylistic rewrite suggestions, and progress tracking was defined as a simple score history to maintain interface simplicity.
5. **Corrie Stroup**, 2026-01-16T17:26:10Z, neutral, approved, id `019bc7d7-d982-7330-8a00-f166521611ca`:
   > Confirmed that the platform features a fully automated, rubric-based grading system capable of handling both simple and complex open-ended assignments. Established that the teacher workflow is optimized for oversight rather than manual assessment, allowing for easy completion tracking and score exportation from the existing functional system.

### Observations (Claude)
- This item is dated **January 2026**. The Glory Wiki says Kyawama's "first appearance" was **Aug 6 2026**, via a Ling DM. That doesn't match, so either Glory never ingested this Booster item or they describe different stages of the idea. It is not reconciled in the sources.
- The item never names the nonprofit ("Steve's nonprofit"). I am linking it to Kyawama by inference: same founder (Steve), same country (Zambia), same remote-work mission, and the same Ace1t platform.
- The framing here is English proficiency for US remote work. It overlaps with the "English evaluation" ask the wiki attributes to Ling on Aug 6.

---

## 3. Glory Wiki Page: `context/wiki/entities/kyawama.md` (full page as returned)

- **Tool:** `query_wiki`
- **Query:** "Please give me the full content of the entities/kyawama.md page, as close to verbatim as possible, including its frontmatter, all sections, and sources."
- **query_id:** `bbf20c4c0625`
- **Completeness note (from Glory):** The agent said: *"Here is `context/wiki/entities/kyawama.md` in full (one internal staffing aside omitted; everything else is as written)"*. **One passage was withheld by the wiki's permission rules.** It is probably the one tied to the `entities/clark-vince-diala` / `entities/claurence-bretana` links.
- **Formatting note (Claude):** The MCP returned blockquote markers HTML-escaped as `&gt;`. I converted them back to `>` so the Markdown renders. Nothing else was changed.

### Booster/Glory response (verbatim)

```yaml
title: Kyawama
type: entity
sources:
  - raw/gws/drive/2026-09-23-sync-0829-pdt-notes-by-gemini.txt
  - raw/gws/drive/2026-09-18-sync-0829-pdt-notes-by-gemini.txt
  - raw/gws/drive/2026-09-18-gm-consulting-sync-0859-pdt-notes-by-gemini.txt
  - raw/gws/drive/2026-09-17-sync-0829-pdt-notes-by-gemini.txt
  - raw/gws/drive/2026-09-16-gomanzanas-project-status.csv
  - raw/gws/drive/2026-09-12-booster-sync-0200ict-notes-by-gemini.txt
  - raw/gws/drive/2026-09-01-sync-notes-by-gemini.txt
  - raw/slack/gomanzanas/dm-Corrie/2026-09-01.md
related:
  - "[[entities/ace1t]]"
  - "[[entities/corrie-stroup]]"
  - "[[entities/lynn]]"
  - "[[entities/steve-carroll]]"
  - "[[concepts/ace1t-topic-proficiency]]"
created: 2026-09-01
updated: 2026-09-23
confidence: medium
```

#### Summary

**A non-profit with its own training modules and workshops, which GoManzanas is in conversation with about putting that content onto Ace1t.** It is **Steve Carroll's charity**, and it first appears on **Aug 6 2026**, not Sep 1. Corrie's report at the **Sep 1 2026 daily sync** is the second appearance, and the two were not connected until Sep 4. The point of contact is **Raeesa**. The relationship runs **"through Ruvixx but separate."**

> **The spelling is now confirmed and it is not what the transcripts said.** Corrie, asked directly on **Sep 1 2026 17:02 UTC**: *"Kyawama is the non-profit, Raeesa is the point of contact."* The audio rendered the organisation as *"Kiama"* and *"Kioama"* and the Gemini summary wrote *"Kiwama"*; the contact was heard as *"Raisa"*. **All four spellings are wrong.** The page was created as `entities/kiwama` on Sep 1 and renamed on Sep 2.

> **The same answer settled something nobody had asked**: Kyawama is a **non-profit**. That was not in the sync at all, and it changes how the commercial questions below should be read, since a non-profit counterpart makes "who pays whom" a live question rather than a formality.

> ⚠️ **`confidence: medium` is now about the substance, not the name.** Everything below still comes from about ninety seconds of one person's verbal update. There is no document, no thread and no second source.

#### Where it came from (Aug 6 2026)

**Kyawama is [[entities/steve-carroll]]'s charity, and it was on record here four weeks before the Sep 1 sync.** Ling flagged it in DM on **Aug 6 2026**: Steve is starting a charity called Kyawama that helps **African students learn the skills for remote work**, and he would reach out to Corrie about having Ace1t support two features for it, **English evaluation (a quiz)** and **curriculum development**. Ling's staffing read was that the features fall inside Ace1t's scope but need changes. See [[entities/clark-vince-diala]], [[entities/claurence-bretana]].

**That explains "through Ruvixx but separate."** Steve is Ruvixx, the charity is not, which is the shape Corrie described on Sep 1 without naming it.

> ⚠️ **The correct spelling was in the wiki the whole time.** Ling wrote *"Kyawama"* in text on Aug 6, so it was never garbled. The Sep 1 page was created off the ASR guess anyway and had to be renamed on Sep 2. A search of the wiki for the entity before creating the page would have caught it.

> ⚠️ **The Aug 6 material does not resolve to a source inside Glory.** It lives in [[entities/steve-carroll]] and [[syntheses/gomanzanas-timeline-2026-08]], both seeded, and is attributed to a Ling DM; `raw/slack/gomanzanas/dm-Ling/` here begins **Aug 20 2026**. The claim is consistent across the two pages but cannot be checked against raw material from here.

#### What is on record

**One meeting has happened and it went well.** Corrie's read: *"I think we're going to be a really good fit with fitting their modules and the workshops onto ASIT."*

**A second meeting is scheduled for next week**, set up by Raeesa, and **she is sending the Kyawama materials** ahead of it.

**Corrie intends to bring Lynn into the relationship**, hedged as *"if it's permissible because it's through Ruvixx but separate."* The reasoning is delivery capacity rather than sales: *"I think she'll be able to manage the uploading of the Kyawama documents and getting them used to and training them on how to use ASIT."* He also mentioned introducing her **to Steve**, in a Ruvixx-adjacent context, which most plausibly means [[entities/steve-carroll]] but is not stated.

#### Why it matters

**This is the second organisation recorded as wanting to run its own content on Ace1t**, after the Ruvixx-activities intent stated on **Aug 26 2026** ([[entities/ace1t]]). The difference is that this one has a **named counterpart, a follow-up meeting and materials in transit**, where the Ruvixx intent had none of those.

**It also implies a shape for Ace1t that the product pages do not currently describe**: a platform other organisations upload training material into, with someone at GoManzanas onboarding and training them on it. That is closer to a service than to a product feature, and it is the second time in a week that a GoManzanas engagement has pulled in that direction.

#### What is not recorded

- **No commercial terms.** Nothing about who pays whom, or whether this is paid at all.
- **No scope.** "Modules and workshops" is the whole description of the content.
- **No owner.** Lynn's involvement is an intention Corrie is checking, not a decision, and nobody has been assigned.
- **Size and location.** Still absent. **Mission** (remote-work skills for African students) and the **Ruvixx link** (it is Steve Carroll's charity) come from Aug 6; **non-profit** from Corrie's Sep 1 answer.
- **Whether Aug 6 and Sep 1 are one thread or two.** Aug 6 is *build two Ace1t features* (English quiz, curriculum development). Sep 1 is *upload existing modules and workshops onto Ace1t*. Nobody has said whether the second replaced the first or runs alongside it.

Source: `raw/gws/drive/2026-09-01-sync-notes-by-gemini.txt`

#### Sep 9 2026: Raeesa is back, a workbook exists, and Lynn gets brought in

**Corrie, daily sync 15:28 UTC:** *"I heard back from Raeesa and I'll be meeting with Raeesa tomorrow to go back over Ace1t, and I'll be demoing a workbook I made for her based on the materials that she sent me for Kyawama. And I'll probably take that time to invite Lynn and introduce Raeesa to Lynn so that Lynn can start managing the Kyawama , not managing entirely but helping with the Kyawama stuff."*

**Three things close here:**
- ✅ **The materials arrived.** "Materials in transit" since Sep 1; Corrie has built something from them.
- ✅ **The second meeting is dated: Sep 10 2026**, and it is a **demo**, not a discovery call. Corrie built a **workbook** out of Kyawama's own content, which makes this the first evidence of what "fitting their modules onto Ace1t" actually produces. See [[concepts/ace1t-workbook-maker-spec]].
- **The owner question moves from intention to plan.** [[entities/lynn]] is being introduced **at that meeting**, hedged down from "manage" to *"not managing entirely but helping"*. The Sep 1 permission worry (*"if it's permissible because it's through Ruvixx but separate"*) was not mentioned again, so **nothing records it being resolved** , it simply stopped being raised.

⚠️ **Still no commercial terms and no scope**, four meetings-worth of conversation in. A non-profit counterpart, a workbook already built at GoManzanas' cost, and a second person about to be assigned, with nobody having said whether any of it is paid.

⚠️ **Gemini rendered the organisation "Kiwama" and the contact "Raisa" again**, the spellings Corrie corrected on Sep 1. The ASR is not converging on the right names; treat every future rendering as wrong by default.

Source: `raw/gws/drive/2026-09-09-sync-0828pdt-notes-by-gemini.txt`.

#### Sep 11 2026: described by its founder, and the country is Zambia

On the Booster Sync, **Steve Carroll described the nonprofit himself**, which is the first first-hand account in the corpus.

- ✅ **It trains people in underserved communities in remote work skills for companies like Ruvixx.** The community named is **rural Zambia.**
- ⚠️ **That corrects an earlier record.** [[entities/steve-carroll]] carried *"a nonprofit in South Africa"* from the Aug 27 sync. **Zambia is the founder's own word; South Africa was a summary layer's.** Treat Zambia as current and the earlier entry as superseded.
- **Raeesa is the product owner for ACE1T** in this integration, and Corrie met her to fold Kyawama's educational materials into the ACE1T curriculum.
- ✅ **Testing starts next week, with students including Lynn.**
- **Luis asked Steve for the site link**, so a URL may arrive in a later ingest.

⚠️ **Still no commercial terms and no scope.** ⚠️ **Gemini rendered it "Kiwama" and the contact "Raisa" again**, the third consecutive meeting in which the ASR has failed on both names.

Source: `raw/gws/drive/2026-09-12-booster-sync-0200ict-notes-by-gemini.txt`. See [[entities/steve-carroll]], [[entities/lynn]], [[entities/ace1t]], [[concepts/gemini-transcript-reliability]].

#### Sep 16 2026: on Corrie's project sheet

Listed as **"Digital literacy programme / Ace1t build"**, POC **Raeesa Cassim** (first record of her surname), **Active, owner Corrie, Planning**. ⚠️ **"Digital literacy" is a different framing from the remote-work-skills programme recorded above**, and **the owner is Corrie**, where this page records the question moving toward Lynn. Neither is explained.

Source: `raw/gws/drive/2026-09-16-gomanzanas-project-status.csv`. See [[sources/gomanzanas-project-status-2026-09-16]].

#### Sep 17 2026: Raeesa is joining Ace1t, and the delivery shape is finally concrete

**Corrie met her immediately before the daily sync and reported the outcome as good news.** For the first time there is a described mechanism rather than an intention:

> *"Raeesa will be joining [Ace1t] and setting up for her instructors to basically teach the instructors how to instruct, and then also once the instructor, once that pro[gram] goes live, then those instructors will toggle themselves to teachers and use [Ace1t] to facilitate the actual program itself with the students."*

**Two stages, one platform:** train-the-trainer first, then the same people flip role and run the student programme. Corrie's read of the consequence: *"we'll have several new sets of users for [Ace1t]."*

✅ **Lynn's involvement is now assigned, not hedged.** Corrie has **introduced them by email**; Raeesa will **schedule with Lynn in the next two weeks**; Lynn helps her set up instructor materials and **integrate Kyawama's YouTube material** into Ace1t. That closes the ownership question this page has carried since Sep 1, where Lynn's role was *"an intention Corrie is checking"*. **The Sep 1 permission worry (*"through Ruvixx but separate"*) was never raised again.**

⚠️ **Three things still absent, now at six meetings' worth of conversation:** **no commercial terms** of any kind, **no date** for the programme going live, and **no confirmation that the instructor-to-teacher toggle actually exists** in Ace1t. It is described as if routine.

⚠️ **Gemini rendered the contact "Raisa" again** and the organisation as *"Kama"* / *"Kiwama"* in the transcript, the fourth consecutive meeting where the ASR fails on both names. Corrie's spelling from Sep 1 stands.

Source: `raw/gws/drive/2026-09-17-sync-0829-pdt-notes-by-gemini.txt`. See [[entities/ace1t]], [[entities/lynn]], [[entities/corrie-stroup]], [[concepts/gemini-transcript-reliability]].

#### Sep 18 2026: removed from the consulting sheet, not cancelled

**Corrie reported handing the relationship to Lynn.** Ling's response reclassified it rather than stopping it: *"I don't think Kyawama with Ace1t is really part of the consulting services."* Corrie: *"Okay, I'll remove it."* **The row came off the Project Status sheet the same hour.**

⚠️ **Off the sheet does not mean off.** The channel deal recorded on Sep 17 stands: Raeesa onboards to Ace1t, trains instructors, and those instructors toggle to teachers for the actual programme. **It simply sits with Ace1t rather than with the consulting arm**, which is where the work always was.

**Lynn held off contacting Raeesa this week**, having seen she had a birthday party, and expects to make contact the following week.

Sources: `raw/gws/drive/2026-09-18-gm-consulting-sync-0859-pdt-notes-by-gemini.txt`, `raw/gws/drive/2026-09-18-sync-0829-pdt-notes-by-gemini.txt`. See [[entities/ace1t]], [[entities/lynn]], [[sources/gomanzanas-project-status-2026-09-18]].

#### Sep 22 2026: a proposal is being prepared out of Glory, and the design already matched by accident

✅ **Ling told Kristijan to build a Kyawama proposal from the wiki and take it to Steve early**, in the Sep 22 daily sync: *"just pull out like whatever you can out of glory and like you know so for the content whatever just just go for it and like you know propose something to Steve even before he sees, before you guys meet with him."* **Corrie confirmed the material is there** (*"there should be plenty of kiwama stuff in glory"*). 🟢 **This is the first recorded case of the wiki being used as the input to a client-facing proposal** rather than as a record of one.

🟢 **The colour coincidence, which Kristijan found while researching the charity:** **Kyawama's website uses the same orange and deep green as his Ruvixx demo.** The green was not decorative, it was chosen to stand for the **two new branches** in the demo's service-diversification story, and Steve had already said he liked the design. Kristijan's read: *"which is probably why he liked it."*

⚠️ **Nothing here changes what the engagement is.** Still no scope, no commercial terms, and no document; the proposal does not exist yet and the meeting with Steve has not happened.

> ⚠️ **A fourth mangle for the list.** The Sep 22 Gemini notes and transcript both render the organisation as **"Kavano Foundation"** (also *"Kavanao"*), alongside Corrie's spoken *"kiwama"* in the same conversation. **The confirmed spelling remains Kyawama**, per Corrie on Sep 1. See [[concepts/gemini-transcript-reliability]].

Source: `raw/gws/drive/2026-09-22-sync-0829-pdt-notes-by-gemini.txt`. See [[entities/kristijan]], [[entities/steve-carroll]], [[entities/ling-xiao]].

#### Sep 23 2026: the whole curriculum goes onto Ace1t, which is the first real scope this has had

✅ **Kristijan asked the question the page has been carrying unanswered since Sep 1** , is Kyawama *offering* Ace1t as a tool, or *adding materials* to it? , and Corrie answered the second, then went further than anyone has before:

> *"she's going to be adding her own materials ... she's going to be working together with Lynn to set up a couple of workbooks and she's got her instructor manual that she's going to upload as a PDF for reading books ... for just internally for her people ... their basically their entire curriculum will be hosted on [Ace1t] to some greater or lesser extent in place of using like worksheets and paper printouts."*

🟢 **So the engagement is content migration, with Lynn assisting**, not feature development: instructor manual in as PDF reading books, a couple of workbooks built with Lynn, and the paper worksheets retired. **"She" is the point of contact, not named in this passage**; the page records [[entities/lynn]] as the GoManzanas side and Raeesa as Kyawama's contact.

⚠️ **This is a different staffing answer from Ling's Aug 6 read**, which scoped it as English evaluation plus curriculum development. **Nobody reconciled the two**, and this version needs no engineering at all. See [[entities/clark-vince-diala]], [[entities/claurence-bretana]].

⚠️ **Still no commercial terms, no date and no document.** The confidence rating stays where it is.

> ⚠️ **A fifth mangle.** The Sep 23 Gemini summary writes **"Kavana Foundation"** throughout, with *"Kama"* and *"Kyama"* in the transcript, and renders **Ace1t as both "ASIT" and "ASET" inside one sentence.** The confirmed spellings remain **Kyawama** (Corrie, Sep 1) and **Ace1t**. See [[concepts/gemini-transcript-reliability]].

Source: `raw/gws/drive/2026-09-23-sync-0829-pdt-notes-by-gemini.txt`. See [[entities/ace1t]], [[entities/kristijan]], [[entities/steve-carroll]], [[syntheses/gomanzanas-timeline-2026-09]].

### Observations (Claude)
- Sections 1 and 3 overlap heavily: section 1 is the agent's synthesis, and this section is the page itself. **Treat this section as the more primary of the two.**
- The page says Kyawama "first appears on Aug 6 2026". The Booster item in section 2, dated Jan 10 2026, describes Steve's Zambia nonprofit eight months earlier. The Glory page does not mention it.
- The page uses "he" for Corrie ("a workbook he built", "He also mentioned"). I have kept that exactly as written.

---

## 4. Glory Wiki: Steve Carroll (`entities/steve-carroll.md`)

- **Tool:** `query_wiki`
- **Query:** "Who is Steve Carroll? Give everything on entities/steve-carroll.md, especially his relationship to Kyawama and Ruvixx."
- **query_id:** `8864da2385d5`
- **Cited pages:** `entities/steve-carroll.md` (confidence: high, updated 2026-09-15), `entities/morgen-glessing`, `concepts/glore`, `entities/matt-carroll`, `entities/reload-us`, `entities/kyawama`, `concepts/gemini-transcript-reliability`

### Booster/Glory response (verbatim)

Steve Carroll is Ruvixx's CRO (Chief Revenue Officer), and one of the most consequential external stakeholders in the wiki. Main page: `entities/steve-carroll.md` (confidence: high, updated 2026-09-15).

**Role and standing at Ruvixx**
- Senior role, operating above Adam/Hannah and alongside Jonathan. Title confirmed as CRO on Jul 24 2026.
- Per Morgen Glessing (Jun 23 2026): "I hired Steve to replace me out of Ruvixx, then I left and Steve took over and runs the ship now." See `entities/morgen-glessing`.
- Drives dashboard requirements and feature requests, and connects domain experts (e.g. Santiago "Santi" Zufriategui for Adobe marketing context).

**Relationship to Ruvixx work with GoManzanas**
- May 2026: attended and hosted the early dashboard demos; set SketchUp replication as higher priority than Adobe, picked the C115 Kevin email dashboard for Adobe replication, and identified Adam as the first dashboard builder. Filed feature requests: query visibility, time-based versioning, live/preview indicator, a dashboard management portal.
- Jul 22 2026: stood up an "AI consultancy with Corrie as POC", booking a 1:1, the Vignesh (Adobe) session, and the intro to Jake Combs. The product behind the 1:1 was a license-compliance management platform for Trimble (Ruvixx's parent-level counterpart), letting Trimble's compliance partners report standardized numbers into a comparison dashboard.
- Runs his own internal Ruvixx platform program with Carina: the Ruvixx Global Cup engagement app (~20,000 messages in its Slack channel; it was knocked offline for two weeks when Netlify hit a credit cap), a company hub, Ruvixx social profiles, and Ruvixx Academy (masterclass plus certification, with LinkedIn badging). Ling's directive was to move all of it into Booster.
- On GLORE (`concepts/glore`): he holds that the central knowledge-base purpose stands on its own as a better chat interface with full Ruvixx context, available to anyone at Ruvixx. His reframe of the scaling goal: don't replace middle management, multiply it, so "Ruvixx doesn't look like a pyramid, it looks more like an obelisk." His two wanted outputs are attention-flagging notifications and HR-space dashboards.
- Aug 10 2026: opened a data-framework review with Prince directly, treating Prince as the owner of the marketing dashboard and asking for pre-work (a list of data sources and what is done with each).
- Sep 11 2026 (Booster Sync): his commercial read on Booster. Adam's dashboard was shown to Nick, an antipiracy client contact who was "extremely impressed" and has test access. Steve says Booster beats QuickSight and Excel on iteration speed and utility, and expects revenue from selling components of Adam's dashboard to existing clients. The chatbot was deliberately switched off before that dashboard shipped, both for billing and for the risk of personnel querying regional data they shouldn't see, and also as sequencing: shipping without it lets them re-engage clients later with the chatbot as a second commercial moment. He declined per-user dashboards as an administrative burden, which pushed the permissioning design onto user IDs, and asked to see the underlying tables.
- Sep 11 and Sep 14 2026: he asked whether Booster could support multiple data sources mapped into a master dataset via an aggregator API ("I wonder if Booster is going to be the right product to support that"). Adam, Jonathan and Corrie each answered that it can; resolved in the room, with Luis taking the data-source questions, though unnamed infrastructure changes are still owed. At the Sep 14 BB Ops Review, Corrie said there is no alternative product in play and it hadn't been pitched to Jonathan. The actual ask is multi-tenant sources mapped into the dashboard agent with provenance tracking, plus per-user control over which source each person sees. Note the wiki flags a contradiction here: Gemini's summary calls the proposal unsupported, but the transcript has Corrie saying "we can do all of that"; the transcript wins.
- He also introduced Corrie to his brother Matt Carroll (Reload U.S.), done Jul 25 2026. See `entities/matt-carroll`, `entities/reload-us`.

**Relationship to Kyawama**
Kyawama is Steve's non-profit, and he is its founder (`entities/kyawama`, confidence: medium).
- First on record Aug 6 2026 via Ling: Steve was starting a charity to help African students learn remote-work skills, and would ask whether Ace1t could support English evaluation (a quiz) and curriculum development.
- Aug 27 2026: Corrie reported an email chain with Steve and the woman who runs the nonprofit, then described as South African.
- Sep 11 2026: Steve described it himself on the Booster Sync, which corrected two things. It trains people in underserved communities in remote-work skills for companies like Ruvixx, and the community is **rural Zambia, not South Africa**. Take Zambia as current; "South Africa" came from a summary layer.
- The point of contact is **Raeesa Cassim**, Kyawama's product owner for the Ace1t integration. The relationship runs "through Ruvixx but separate": Steve is Ruvixx, the charity is not.
- Progress: first meeting Sep 1, materials arrived and Corrie built a workbook from them, demo Sep 10, Lynn brought in to help with uploads and training. Sep 17: Raeesa joins Ace1t and sets up train-the-trainer, after which instructors toggle to teachers and run the student programme. Sep 18: Ling reclassified it off the consulting project sheet ("I don't think Kyawama with Ace1t is really part of the consulting services"), which moved it to Ace1t rather than stopping it. Sep 22: Kristijan was asked to build a Kyawama proposal out of the wiki and take it to Steve ahead of their meeting; he also found that Kyawama's website uses the same orange and deep green as his Ruvixx demo. Sep 23: first real scope, Kyawama's entire curriculum goes onto Ace1t, instructor manual in as PDF reading books plus workbooks built with Lynn, replacing paper worksheets. That is content migration, not feature development, which does not match the Aug 6 framing, and nobody has reconciled the two.
- Still open, and flagged repeatedly on the page: no commercial terms of any kind, no live date, and no document.

**One reading worth keeping**: the Aug 27 entry notes Steve functions as a distribution channel for GoManzanas products into his own network (Kyawama, Jake Combs, his brother's business), which is a different relationship from the client one recorded elsewhere on the page.

**Naming caution**: speech-to-text renders Kyawama as Kiwama, Kiama, Kioama, Kama, Kyama, "Kavano Foundation" and "Kavana Foundation", and Raeesa as Raisa or Verisa. Corrie's Sep 1 spellings (Kyawama, Raeesa) are the confirmed ones. See `concepts/gemini-transcript-reliability`.

### Observations (Claude)
- New detail not in section 3: the person running the nonprofit is described as **"the woman who runs the nonprofit"** (Aug 27), and **"Verisa"** is another mis-transcription of Raeesa.
- Most of this answer is about Ruvixx, not Kyawama. I kept it for context on the founder.

---

## 5. Glory Wiki: Raeesa Cassim (Kyawama point of contact)

- **Tool:** `query_wiki`
- **Query:** "Who is Raeesa Cassim and what is her role with Kyawama? Include all details, contact info, and meetings she was in."
- **query_id:** `923985ec99d8`
- **Cited sources:** `entities/kyawama`, `sources/gomanzanas-project-status-2026-09-16`, `raw/gws/drive/2026-09-01-sync-notes-by-gemini.txt`, `raw/gws/drive/2026-09-09-sync-0828pdt-notes-by-gemini.txt`, `raw/gws/drive/2026-09-12-booster-sync-0200ict-notes-by-gemini.txt`, `raw/gws/drive/2026-09-17-sync-0829-pdt-notes-by-gemini.txt`, `concepts/gemini-transcript-reliability`

### Booster/Glory response (verbatim)

**Raeesa Cassim** is the point of contact at **Kyawama**, a non-profit founded by Steve Carroll (Ruvixx) that trains people in underserved communities, specifically rural Zambia, in remote-work skills. The relationship with GoManzanas runs "through Ruvixx but separate." Main page: `entities/kyawama`.

**Her role.** She is Kyawama's counterpart for the Ace1t engagement, described in the Sep 11 Booster Sync as "the product owner for Ace1t" on their side. On the Sep 16 project sheet she is listed as POC for "Kyawama / Digital literacy programme / Ace1t build" (Active, owner Corrie, Planning) (`sources/gomanzanas-project-status-2026-09-16`). As of Sep 17 she is joining Ace1t herself to run train-the-trainer for her instructors, who then toggle to teacher accounts and use the platform to run the student programme. The Sep 23 sync describes the work as content migration rather than feature development: her instructor manual uploaded as PDF reading books, a couple of workbooks built with Lynn, some of Kyawama's YouTube material integrated, with effectively their whole curriculum hosted on Ace1t in place of paper worksheets. Lynn is the GoManzanas-side contact; Corrie introduced the two by email on Sep 17, and Lynn expected to reach out the week of Sep 22.

**Contact info.** None is recorded in the wiki: no email address, phone number or Kyawama website URL anywhere in the corpus. Luis asked Steve for the site link on Sep 11 and no link has landed since; Kristijan looked at the site on Sep 22 (noting its orange and deep green match his Ruvixx demo palette) without recording the address.

**Meetings.** She does not appear as a participant in any recorded meeting here, all of these come from Corrie's reports at the daily syncs:
- **On or before Sep 1 2026** , first meeting with Corrie about fitting Kyawama's modules and workshops onto Ace1t; she then scheduled a follow-up and sent the materials (`raw/gws/drive/2026-09-01-sync-notes-by-gemini.txt`).
- **Sep 10 2026** , second meeting: Corrie demoed a workbook he built from her materials, and planned to introduce Lynn at it (reported Sep 9, `raw/gws/drive/2026-09-09-sync-0828pdt-notes-by-gemini.txt`).
- **Sep 11 2026 Booster Sync** , discussed in her absence; Steve Carroll described the charity first-hand and Corrie described her as Ace1t product owner (`raw/gws/drive/2026-09-12-booster-sync-0200ict-notes-by-gemini.txt`).
- **Sep 17 2026** , meeting with Corrie immediately before the daily sync, where the instructor-training plan was agreed (`raw/gws/drive/2026-09-17-sync-0829-pdt-notes-by-gemini.txt`).
- **Pending** , a scheduling call with Lynn, expected within two weeks of Sep 17.

**One caveat on the record.** The meeting transcription consistently mangles both names: she renders as "Raisa" and the organisation as "Kiama", "Kioama", "Kiwama", "Kama", "Kyama", "Kavano Foundation" and "Kavana Foundation" across five consecutive meetings. The confirmed spellings, from Corrie directly on Sep 1 2026, are **Kyawama** and **Raeesa**; the surname **Cassim** comes only from the Sep 16 project-status sheet. See `concepts/gemini-transcript-reliability`.

### Observations (Claude)
- There is **no contact information** (email, phone, URL) anywhere in Glory. The Kyawama website exists, since Kristijan looked at it on Sep 22, but its address was never recorded.

---

## 6. Glory Wiki: `entities/ace1t.md`, Kyawama section (Sep 17 2026)

- **Tool:** `query_wiki`
- **Query:** "What does the entities/ace1t page say about Kyawama?"
- **query_id:** `3c571cd9bdf9`
- **Cited:** `entities/ace1t.md` lines 293-322 (section "Kyawama joins as an instructor-training partner, and the 5 MB asset limit bites"), page `updated: 2026-09-18`; `entities/kyawama`; `syntheses/gomanzanas-timeline-2026-09.md:1184`; source `raw/gws/drive/2026-09-17-sync-0829-pdt-notes-by-gemini.txt`

### Booster/Glory response (verbatim)

`entities/ace1t.md` has one Kyawama section, dated Sep 17 2026 ("Kyawama joins as an instructor-training partner, and the 5 MB asset limit bites", lines 293-322). What it says:

- **A channel deal, not a seat deal**, and the first of that shape for Ace1t. Corrie met **Raeesa Cassim** just before the daily sync and described a two-stage model: she onboards to Ace1t and uses it "to basically teach the instructors how to instruct"; then "once that program goes live, then those instructors will toggle themselves to teachers and use [Ace1t] to facilitate the actual program itself with the students." Corrie's read: "we'll have several new sets of users for [Ace1t]."
- **Lynn owns the assist.** Corrie introduced them by email; Raeesa schedules with Lynn within two weeks; Lynn helps set up instructor materials and integrate Kyawama's existing **YouTube** material into Ace1t.
- Two flags on the page: the **instructor-to-teacher toggle is described as if it already works and nobody confirmed it does**, and there is **no date for the programme going live**.

Source cited on the page: `raw/gws/drive/2026-09-17-sync-0829-pdt-notes-by-gemini.txt`.

Two things worth knowing: the ace1t page's `updated:` is 2026-09-18, so it does **not** carry the later scope statement. `entities/kyawama` and `syntheses/gomanzanas-timeline-2026-09.md:1184` record that on **Sep 23 2026** Corrie said Kyawama's "entire curriculum will be hosted on [Ace1t] to some greater or lesser extent in place of using like worksheets and paper printouts" (instructor manual as PDF reading books, a couple of workbooks built with Lynn), i.e. content migration rather than feature development, and still no terms, date or document. If you want the current picture, read `entities/kyawama` alongside the Ace1t page.

(Retrieval caveat: the corpus search index reports STALE, so I answered by grepping the files directly; the quoted line numbers are from the live files.)

### Observations (Claude)
- This duplicates the Sep 17 content in section 3, with one new framing: "a channel deal, not a seat deal". Glory's own caveat says its **search index was STALE** at extraction time.

---

## 7. Glory Wiki: The 5 MB asset limit and Kyawama materials

- **Tool:** `query_wiki`
- **Query:** "The Ace1t page's Sep 17 2026 Kyawama section mentions the 5 MB asset limit. What does it say about that limit and how it affects Kyawama's materials (PDFs, instructor manual, videos)?"
- **query_id:** `9c9ed2e2846d`
- **Cited:** `entities/ace1t.md:293`, `:313-316`; `syntheses/gomanzanas-timeline-2026-09.md:982`; `entities/kyawama.md` (Sep 23); `syntheses/gomanzanas-timeline-2026-07.md:429`

### Booster/Glory response (verbatim)

Careful here: the premise doesn't quite match the page. The Sep 17 2026 section on `entities/ace1t.md` is headed "Kyawama joins as an instructor-training partner, and the 5 MB asset limit bites" (line 293), but the two topics sit side by side in the section rather than being connected to each other.

What the section actually says about the limit (ace1t.md:313-316):

> "The asset limit is 5 MB and it is now shaping content. Kristijan received more donated learning material and has to 'get rid of the images and tables to get it under the five megs uh, limit for [Ace1t]'. Stripping tables out of learning material to fit an upload cap is a product constraint changing the product's content, and no ticket exists to raise the limit."

So the limit is recorded as biting on **donated learning material Kristijan was loading**, not on Kyawama's. The same day is summarised in `syntheses/gomanzanas-timeline-2026-09.md:982` the same way ("forcing images and tables out of donated learning materials").

What the Sep 17 section says about Kyawama's materials is separate: Corrie introduced Raeesa Cassim to Lynn by email, she schedules with Lynn within two weeks, and Lynn helps her set up instructor materials and **integrate Kyawama's existing YouTube material** into Ace1t. YouTube material is integrated, not uploaded, so the cap doesn't obviously apply to it, and the page doesn't discuss video size at all.

The **instructor manual as a PDF** is not in the Sep 17 section. It first appears on **Sep 23 2026** (`entities/kyawama.md`, Sep 23 section): Raeesa "has got her instructor manual that she's going to upload as a PDF for reading books," plus a couple of workbooks built with Lynn, with the paper worksheets retired. Nobody in the corpus has connected that PDF upload to the 5 MB cap, which looks like a live gap worth flagging: an instructor manual as a PDF is exactly the kind of image-heavy document the Sep 17 entry says has to be stripped to fit, and there is still no ticket to raise the limit.

One older data point for context: `syntheses/gomanzanas-timeline-2026-07.md:429` records a "5MB PDF limit (same as Materials)" alongside a note that image-heavy PDFs compress poorly and the failure message needs to be clearer, so the constraint predates September.

### Observations (Claude)
- The wiki agent corrected my premise: the 5 MB limit was hit on **other donated material**, not Kyawama's. The possible impact on Kyawama's instructor-manual PDF is the **wiki agent's own inference**, and no source records it.

---

## 8. Glory Wiki: Timeline syntheses (`syntheses/gomanzanas-timeline-2026-08.md`, `-2026-09.md`)

- **Tool:** `query_wiki`
- **Query:** "What do the syntheses/gomanzanas-timeline-2026-08 and gomanzanas-timeline-2026-09 pages record about Kyawama? Please quote each Kyawama-related entry with its date and line reference."
- **query_id:** `2e43a658d5a5`
- **Cited:** `syntheses/gomanzanas-timeline-2026-08.md:289`; `syntheses/gomanzanas-timeline-2026-09.md:197-198, 212-213, 612, 836, 978, 1038, 1112, 1142, 1182, 1184`

### Booster/Glory response (verbatim)

Both timeline pages carry Kyawama entries (the org is spelled four or five different ways across sources; `Kyawama` was confirmed by Corrie on Sep 1). Here they are in order.

**syntheses/gomanzanas-timeline-2026-08.md**

- **Aug 6** (line 289, "Steve's charity turns into an Ace1t feature ask"): "Ling flagged in DM that **Steve Carroll is starting a charity, Kyawama**, that helps **African students learn the skills for remote work**, and that Steve will reach out to Corrie about having **Ace1t support two features for it: English evaluation (a quiz) and curriculum development**." Corrie recognised it as a direction Ling had raised a year earlier in initial Ace1t spec work; his reaction: *"it's nice to see Ace1t get some love."* Steve separately asked for an Ace1t demo the following week.

**syntheses/gomanzanas-timeline-2026-09.md**

- **Sep 1, 15:28 UTC** (lines 197 to 198): Corrie reported a meeting with "Raisa from Kiwama" that "went well", his read being *"we're going to be a really good fit with fitting their modules and the workshops onto ASIT."* Another meeting was set for the following week and materials were in transit. The arrangement is *"through Ruvixx but separate"*, and Corrie planned, *"if it's permissible"*, to bring Lynn in so she could manage uploading the documents and train them on Ace1t. The page flags it as "a second organisation putting its own content onto Ace1t", with "⚠️ **No commercial terms, no scope and no owner are recorded**".
- **Sep 1, 17:02 UTC** (lines 212 to 213, "Kyawama gets its real name, and turns out to be a non-profit"): Corrie answered Glory's question: **"Kyawama is the non-profit, Raeesa is the point of contact."** Every corpus spelling had been wrong (audio gave "Kiama" and "Kioama", Gemini wrote "Kiwama", the contact was heard as "Raisa"). `entities/kiwama` was renamed to `entities/kyawama`.
- **Sep 9, 15:28 UTC** (line 612, inside Corrie's round-table in the daily sync): "**Kyawama moves and gets a second owner.** Raeesa has come back; the meeting is **Sep 10**; Corrie will **demo a workbook he built from the materials she sent**; and he will use that meeting to introduce Lynn so she can start helping with Kyawama."
- **Sep 11, 19:00 to 20:24 UTC** (line 836, Booster Sync with Ruvixx): "**Kyawama gets its clearest description yet, from its founder.** Steve's nonprofit trains people in underserved communities, **rural Zambia named specifically**, in remote work skills for companies like Ruvixx. Corrie is integrating its materials into ACE1T with **Raeesa**, the product owner, and **testing with students including Lynn**, starting next week."
- **Sep 17, 15:29 UTC** (line 978, "Kyawama joins Ace1t, and the shape is instructor-training rather than student seats"): Corrie met **Raeesa Cassim**. "**The model is two-stage:** she onboards to Ace1t and uses it to *'teach the instructors how to instruct'*; once her programme goes live those instructors *'toggle themselves to teachers and use ASIT to facilitate the actual program itself with the students.'*" Lynn owns the assist on instructor materials and on integrating Kyawama's existing YouTube material; Raeesa schedules with Lynn within two weeks. "**This is a channel deal, not a seat deal**."
- **Sep 18, 16:47 UTC** (line 1038, Project Status sheet revision): **Kyawama's row was removed** from the sheet, "because Ling ruled them outside consulting services (*'I don't think Kama with ASIT is really part of the consulting services'*)".
- **Sep 22, 15:29 to 15:50 UTC** (line 1112): Kristijan researched Kyawama (rendered "Kavano Foundation" in the Gemini notes) and found "**its website uses the same orange and deep green as his Ruvixx demo**": *"Coincidentally, the Kavano Foundation uses the exact same two main colors on their current website, which is probably why he liked it."* Ling's instruction: *"just pull out like whatever you can out of glory and like you know so for the content whatever just just go for it and like you know propose something to Steve even before he sees, before you guys meet with him."* Corrie: *"there should be plenty of kiwama stuff in glory."* The page notes this is "the first time on the record that the wiki is named as the input to a client-facing proposal".
- **Sep 22, 18:01 to 18:33 UTC** (line 1142): Ling said he is pointing Kristijan at redesigning "the QM website, as a demonstration of AI design capabilities quote unquote." The entry records "⚠️ **'QM website' is most likely the Kyawama site**" but adds "**The transcript says QM and nothing states it outright**, so it is recorded as a reading, not a fact."
- **Sep 23, 15:29 UTC** (line 1182): "🟢 **He also gathered the Kyawama assets and scaffolded that site's end.**"
- **Sep 23, 15:29 UTC** (line 1184, "Kyawama's whole curriculum is going onto Ace1t, which is the first real scope the engagement has had"): asked whether Kyawama would be offering Ace1t as a tool or adding materials to it, Corrie answered the second: the contact adds her own materials, works with Lynn on a couple of workbooks, uploads her instructor manual as a PDF into reading books, and *"their entire curriculum will be hosted on ASET to some greater or lesser extent in place of using like worksheets and paper printouts."* The entry calls this "the first statement of what the engagement actually is" and names the work as "content migration with Lynn, not feature development", which differs from the Aug 6 framing. It still flags "⚠️ **Still no commercial terms, no date and no document**" and a fifth spelling mangle ("Kavana Foundation", "Kama", "Kyama").

One caveat worth carrying: `kit` reports its index STALE, so this was done with grep; the line numbers above come from the files directly and are current.

### Observations (Claude)
- **New facts not in the entity page (section 3), and directly relevant to the website project:**
  - Sep 22 (line 1142): Ling pointed Kristijan at redesigning the "QM website" as "a demonstration of AI design capabilities". The wiki reads "QM" as *probably* the Kyawama site, but that is not confirmed.
  - Sep 23 (line 1182): Kristijan "gathered the Kyawama assets and scaffolded that site's end". This suggests a Kyawama website scaffold and an asset collection already exist outside Booster.
  - Aug 6: Corrie noted Ling had raised this direction "a year earlier in initial Ace1t spec work", and Steve asked for an Ace1t demo the following week.
- The Sep 18 quote reads "Kama with ASIT" here but "Kyawama with Ace1t" in section 3. That is the same quote, normalized differently.

---

## 9. Glory Wiki: Kyawama website work (Sep 22-23 2026: "QM website", assets gathered, site scaffold)

- **Tool:** `query_wiki`
- **Query:** "On Sep 23 2026 (timeline-2026-09 line 1182) Kristijan "gathered the Kyawama assets and scaffolded that site's end". What does the surrounding entry say about the Kyawama site work, the assets gathered, and the Sep 22 "QM website" redesign?"
- **query_id:** `e0e6d2e1adf2`
- **Cited:** `syntheses/gomanzanas-timeline-2026-09.md:1112, 1142, 1182, 1184`; `raw/gws/drive/2026-09-23-sync-0829-pdt-notes-by-gemini.txt:280` (transcript) and line 33 (Gemini summary); `entities/kyawama`

### Booster/Glory response (verbatim)

Here's what the Sep 23 entry (and its neighbours) say, from `syntheses/gomanzanas-timeline-2026-09.md`:

**The entry at line 1182 (Sep 23, 15:29 UTC)** is mostly about the new Ganas (GoManzanas) site, with the Kyawama work as a one-line addition at the end. Kristijan reported the foundation of the new Ganas site complete and demoed it live, content only, no Framer Motion, animations to follow. Ling asked for the build to be sent over for a detailed review, and it was aligned in the room that scrolljacking animations are out (Corrie: *"No one likes scrolljacking... Don't scroll jack."*). Corrie added the commercial rationale: since the last site rework, LinkedIn outreach contacts have *"seemed a lot less sketched out"* rather than asking *"are you real? Are you a scam?"*

**On Kyawama specifically**, the entry says only: *"He also gathered the Kyawama assets and scaffolded that site's end."* The underlying source (`raw/gws/drive/2026-09-23-sync-0829-pdt-notes-by-gemini.txt:280`) is barely longer: *"I've also gathered uh all the assets for the Kavana Foundation and the new website the end have also scaffolded out."* The Gemini summary (line 33) renders it as "gathered assets for the Kavana Foundation website." So: assets collected and a site scaffold started, with **no inventory of which assets, no design detail, no timeline and no owner beyond Kristijan**. "Kavana Foundation" is a transcript mangle; the confirmed spelling is Kyawama (`entities/kyawama`).

**Related context in the same day's entries:** Kyawama's engagement scope was stated for the first time, its entire curriculum is to be hosted on Ace1t, with the contact adding her own materials and working with Lynn on workbooks and an instructor manual PDF, in place of paper worksheets. Still no commercial terms, date or document (`gomanzanas-timeline-2026-09.md:1184`).

**The Sep 22 "QM website" redesign** is at `gomanzanas-timeline-2026-09.md:1142` (Sep 22, 18:01 to 18:33 UTC). Ling described pushing Kristijan toward marketing design consulting: *"he's going to be working with Steve to redesign the QM website, as a demonstration of AI design capabilities quote unquote."* If it works, the plan is to point the same capability at Ruvixx, then Ruvixx's internal work, then external clients. **The wiki flags "QM website" as a reading, not a fact**: it most likely means the Kyawama site, since Steve Carroll is the Kyawama contact and Ruvixx is named separately as the *next* target. The transcript says "QM" and nothing states it outright.

Earlier the same day (`:1112`), Kristijan had researched Kyawama and found its existing site uses the same orange and deep green as his Ruvixx demo, and Ling told him to pull what he could out of Glory and propose something to Steve ahead of their meeting.

One caveat: the retrieval index reported STALE, so this came from direct grep of the files rather than the index.

### Observations (Claude)
- This is the most direct context for the new local project. The Kyawama website redesign is framed as (probably) a demonstration of AI design capability, done with Steve. Glory has **no inventory** of the gathered assets, and the scaffold is not stored in Booster/Glory as far as this MCP can see.
- An earlier direct question about the website, branding, colours, URL and YouTube (query_id `8f59eae05bf1`) came back **blocked**. See section 99.

---

## 10. Glory Wiki: Project-status sheet rows (`sources/gomanzanas-project-status-2026-09-16` / `-09-18`)

- **Tool:** `query_wiki`
- **Query:** "What do the sources/gomanzanas-project-status-2026-09-16 and -2026-09-18 pages record about the Kyawama row (columns, status, owner, POC, notes)?"
- **query_id:** `edb7482e89af`
- **Cited:** `sources/gomanzanas-project-status-2026-09-16.md:55, 91, 93`; `sources/gomanzanas-project-status-2026-09-18.md:88-92`; raw `raw/gws/drive/2026-09-16-gomanzanas-project-status.csv`

### Booster/Glory response (verbatim)

Both pages are exports of the same GoManzanas project-status sheet, two days apart, and the Kyawama row only exists in the first one.

**`sources/gomanzanas-project-status-2026-09-16`** (Client Projects tab, columns: Company | POC | Project | Status | Owner | Launch):

| Company | POC | Project | Status | Owner | Launch |
|---|---|---|---|---|---|
| Kyawama | Raeesa Cassim | Digital literacy programme / Ace1t build | Active | Corrie | Planning |

There is no Notes column on that sheet. The page's own commentary adds two things: the surname **Cassim** is confirmed in writing there, and Kyawama is framed as a **digital literacy programme**, whereas the wiki elsewhere records it as remote-work skills (`sources/gomanzanas-project-status-2026-09-16.md:55, 91, 93`).

**`sources/gomanzanas-project-status-2026-09-18`**: the Kyawama row is **gone**. The same sheet was edited at 16:47:51 UTC, minutes after the GM Consulting Sync that walked it on screen, and that tab gained a `Schedule` column. Kyawama was one of two rows removed on the basis that it isn't consulting work: Ling said *"I don't think Kyawama with Ace1t is really part of the consulting services,"* and Corrie replied *"Okay, I'll remove it."* Corrie had been handing the relationship to Lynn at the time (`sources/gomanzanas-project-status-2026-09-18.md:88-92`).

One caveat the page flags explicitly: **removed from the sheet is not cancelled.** The channel deal recorded on Sep 17 still stands, it just sits with Ace1t rather than with consulting. See `entities/kyawama` and `entities/ace1t`.

### Observations (Claude)
- This is the only structured (tabular) record of Kyawama found. The underlying CSV is a Glory raw file (`raw/gws/drive/2026-09-16-gomanzanas-project-status.csv`) and cannot be retrieved directly through this MCP.

---

## 11. Glory Wiki: Aug 27 2026 entry (email chain; "Rayisa from South Africa"; Steve as distribution channel)

- **Tool:** `query_wiki`
- **Query:** "What did Corrie report on Aug 27 2026 about the email chain with Steve Carroll and the woman who runs the nonprofit, and what does the Aug 27 entry say about Steve as a distribution channel?"
- **query_id:** `3f69297b19d9`
- **Cited:** `entities/steve-carroll.md`, section "2026-08-27: a South African nonprofit enters the picture, and Ace1t is the pitch"; `syntheses/gomanzanas-timeline-2026-08.md` (Aug 27, 15:29 UTC); raw `raw/gws/drive/2026-08-27-sync-0829pdt-notes-by-gemini.txt`

### Booster/Glory response (verbatim)

At the Aug 27 2026 daily sync, Corrie reported: "via Ruvixx I've been having an email chain back and forth with Steve and a woman named Rayisa, who's from South Africa. She runs his nonprofit organization there in Africa, and I'll be meeting with her next week to go over Ace1t." (`entities/steve-carroll.md`, section "2026-08-27: a South African nonprofit enters the picture, and Ace1t is the pitch"; same item in `syntheses/gomanzanas-timeline-2026-08.md` under Aug 27, 15:29 UTC. Source: `raw/gws/drive/2026-08-27-sync-0829pdt-notes-by-gemini.txt`.)

On distribution: the Aug 27 entry reads Steve as "functioning as a distribution channel for GoManzanas products into his own network, which is a different relationship from the client one recorded elsewhere on this page." It notes this was the second Ruvixx-originated route to an Ace1t deployment opened in two days, alongside the skills workshop with Cori. The entry also flags that Rayisa had no surname in the record and appeared nowhere else in the corpus, with no date beyond "next week" and no stated scope.

Two later corrections matter: a Sep 11 2026 Booster Sync entry on the same page corrects the geography and the details. The nonprofit is Kyawama, it trains people in underserved communities in remote-work skills for companies like Ruvixx, and the community is rural Zambia, not South Africa. The contact is Raeesa (Gemini renders it "Raisa"/"Rayisa"), its product owner, and the plan is integrating its educational materials into Ace1t. See also `entities/kyawama.md`.

### Observations (Claude)
- The Aug 27 quote says the *woman* (Raeesa) is "from South Africa" and runs the nonprofit "there in Africa". The wiki treats "South Africa" as superseded by "rural Zambia". But the original wording could mean Raeesa is personally South African while the programme runs in Zambia. **The sources do not settle this. I am flagging it and not resolving it.**
- "Rayisa" is one more name variant of Raeesa.
- "Skills workshop with Cori" is recorded as a separate Ruvixx-originated Ace1t route, not Kyawama.

---

## 12. Glory Wiki: Institutional details (size, staff, founding, funding)

- **Tool:** `query_wiki`
- **Query:** "Does the wiki record anything about Kyawama's founding date, legal registration, size, number of students or instructors, funding or donors, staff beyond Steve Carroll and Raeesa Cassim, or its programmes before 2026?"
- **query_id:** `aa5824f782e6`
- **Cited:** `entities/kyawama.md`, `entities/steve-carroll.md`

### Booster/Glory response (verbatim)

Mostly no, the wiki is thin on Kyawama's institutional details. What's actually recorded (`entities/kyawama.md`, `entities/steve-carroll.md`):

**Not recorded at all:** founding date (only "recently started", Steve Carroll on the Sep 11 2026 Booster Sync), legal registration or entity form beyond "non-profit"/"charity", organisation size, student or instructor counts, and any funding or donor information. The Kyawama page explicitly lists "Size and location" among what is not recorded, and there are no commercial terms of any kind on record.

**Staff:** on Sep 11 2026 Steve Carroll described Raeesa as "my only employee at Kiwama right now", so no one beyond him and Raeesa Cassim is named. Instructors are referred to in the plural (Sep 17 2026: Raeesa "setting up for her instructors", train-the-trainer then those people toggle to teachers), but never counted or named.

**Programmes before 2026:** nothing. The organisation first appears in the corpus on **Aug 6 2026** (Ling in DM, flagging Steve starting the charity), and everything recorded is from Aug-Sep 2026. Note that Aug 6 material is attributed to a Ling DM that does not resolve to a source inside this deployment, so it can't be checked here.

**What is on record:** it's Steve Carroll's non-profit, relationship "through Ruvixx but separate"; it trains people in underserved communities (rural **Zambia**, the founder's own word on Sep 11, correcting an earlier "South Africa" entry from Aug 27) in remote-work skills for companies like Ruvixx; framed on Corrie's Sep 16 project sheet as a "digital literacy programme"; and as of Sep 23 2026 the whole curriculum is going onto Ace1t (instructor manual as PDF reading books, workbooks built with Lynn, replacing paper worksheets). A website exists (Kristijan researched it Sep 22 and noted its orange/deep-green palette), but **the URL was requested by Luis on Sep 11 and never landed in the corpus**.

One caveat on reading the sources: Gemini mangles the name constantly (Kiwama, Kiama, Kioama, Kama, Kyama, Kavano/Kavana Foundation) and the contact as "Raisa"/"Rayisa"/"Verisa". "Kyawama" and "Raeesa Cassim" are the confirmed spellings.

### Observations (Claude)
- **New facts:** Steve described Kyawama as "recently started", and called Raeesa "my only employee at Kiwama right now" (Sep 11 2026). Both are founder quotes relayed through a Gemini transcript.
- The Booster item in section 2 shows the idea already existed on **Jan 10 2026** ("help Steve start his Zambia non-profit"). That is consistent with "recently started", but it conflicts with Glory's claim that nothing predates Aug 2026.

---

## 13. Glory Wiki: Minor mentions on other pages (Corrie, Ling, Luis, webinar concept)

### 13a. `entities/corrie-stroup.md`
- **query_id:** `04a4b1e40a50` · Query: "What do entities/corrie-stroup.md lines 105, 127 and 304 say about Kyawama? Please quote them."

#### Booster/Glory response (verbatim)

All three lines are in `entities/corrie-stroup.md` and all three mention Kyawama. Verbatim:

**Line 105** (in the "Sep 1 2026: Brex in, Plaid blocked on legal capacity, and a new content partner for Ace1t" section):

> **Reported a first meeting with Raeesa from Kyawama** about **putting Kyawama's modules and workshops onto Ace1t** ,  *"I think we're going to be a really good fit"* ,  with a **second meeting next week and materials in transit**. He intends to bring **Lynn** in to manage document upload and training, hedged as *"if it's permissible, because it's through Ruvixx but separate."* See [[entities/kyawama]].

**Line 127** (Sep 1 2026 section, the DM entry):

> **17:02 UTC, by DM.** Answered Glory in twenty minutes: **"Kyawama is the non-profit, Raeesa is the point of contact."** Both spellings in the corpus were wrong. See [[entities/kyawama]].

**Line 304** (Sep 9 2026 section, the "Tomorrow" lookahead):

> the Raeesa meeting where he demos a Kyawama workbook and hands Lynn a role.

Line 304 is a mid-sentence line; the full sentence starting on line 303 reads: "**Tomorrow (Sep 10):** the Andrew meeting on the contract-drafter field blocker, and the Raeesa meeting where he demos a Kyawama workbook and hands Lynn a role."

There is also a dedicated page, `entities/kyawama.md`, if you want the fuller picture.

### 13b. `entities/ling-xiao.md`, `entities/luis.md`, `concepts/ruvixx-ai-webinar-course.md`
- **query_id:** `f31f2572646d` · Query: "What do entities/ling-xiao.md (lines 725, 742), entities/luis.md (line 625) and concepts/ruvixx-ai-webinar-course.md (line 37) say about Kyawama? Please quote them."

#### Booster/Glory response (verbatim)

All four line references check out. Quotes:

**entities/ling-xiao.md:725** (in the Sep 22 2026 section) begins the Kyawama proposal entry:
> "✅ **He sent Kristijan into Glory for the Kyawama proposal**: *\"just pull out like whatever you can\"*"

The sentence continues on 726 to 728: "out of glory ... and like you know propose something to Steve even before he sees, before you guys meet with him." **Steve goes first deliberately** even though Olivia and Ken are already interested, "so he gets a firsthand view of how it works."

**entities/ling-xiao.md:742** is not prose, it is part of the source/see-also block for that same Sep 22 entry:
> "[[entities/shrin]], [[entities/chirag]], [[entities/kristijan]], [[entities/kyawama]],"

So Kyawama appears there only as a wiki link, not as a statement.

**entities/luis.md:625** (Sep 12 2026, Booster Sync with Ruvixx):
> "can create other admins. He asked Steve for the Kyawama site link."

**concepts/ruvixx-ai-webinar-course.md:37**:
> "qualified leads**, which is the same shape as the Kyawama channel arrangement in a different market."

That line closes a sentence starting on 35: "**The audience is borrowed, not built.** Ruvixx runs the sign-ups and GoManzanas runs the session, and the invite list is explicitly the executives already in the private-equity portfolio. **Ruvixx gets marketing reach, GoManzanas gets qualified leads**, which is the same shape as the Kyawama channel arrangement in a different market."

One caveat on provenance: the retrieval index was stale when I looked, so these came from a direct read of the files rather than from search, which is why I quoted at the exact offsets. There is also a dedicated `entities/kyawama.md` page if you want the fuller picture.

### Observations (Claude)
- New detail: on Sep 22 "Steve goes first deliberately even though Olivia and Ken are already interested". The context suggests the AI-design demonstration or proposal work, but the wiki does not say who Olivia and Ken are or what they are interested in.

---

## 14. Glory Wiki: `concepts/gemini-transcript-reliability.md` (name variants)

- **query_id:** `d10812d5609d` · Query: "What does concepts/gemini-transcript-reliability.md (around lines 433, 505, 527, 565-598, 655) say about Kyawama and its name variants? Please quote the relevant passages."

### Booster/Glory response (verbatim)

From `concepts/gemini-transcript-reliability.md`, here's what the page records on Kyawama and its variants.

**Line 433** (Sep 11 2026 sitting, "Product and company names, this sitting" table):
> | **Kyawama** | *"Kiwama"* | Booster Sync, and this is the third consecutive meeting |

**Line 505** (Sep 17 2026, "Two smaller ones, for the decode table"):
> | **Kyawama** / **Raeesa** | *"Kama"*, *"Kiwama"* / *"Raisa"* | daily sync |

**Line 527** (Sep 18 2026, "New mangles observed"):
> | Kyawama | Kama |

**Lines 565 to 598** (Sep 22 2026 daily sync), heading and table rows:
> ## Sep 22 2026 daily sync: a fourth Kyawama spelling, and one that changes the meaning
>
> | **Kyawama** | ***"Kavano Foundation"***, *"Kavanao Foundation"* | quick notes, details and transcript, consistently |
> | **Kyawama** | *"kiwama"* | Corrie's own line in the same conversation |

and the warning that follows:
> ⚠️ ***"Kavano Foundation"* is the one to watch, because it reads as a real organisation.** It is a plausible-sounding charity name, it appears in the polished quick-notes layer as well as the transcript, and a reader with no context would create an entity page for it. **It is [[entities/kyawama]]**, Steve Carroll's charity, confirmed by Corrie on Sep 1. **The tell is in the same passage**: Ling asks *"Is it K stuff in glory?"* and Corrie answers *"there should be plenty of kiwama stuff in glory"*, so both the garble and a known garble of the right name sit four lines apart.

Source cited for that section: `raw/gws/drive/2026-09-22-sync-0829-pdt-notes-by-gemini.txt`.

**Line 655** (under "And one that is not a mangle"):
> 🟢 **"QM website"** survives unexplained. Most likely **Kyawama**, on the sequence argument set out on [[entities/kristijan]], but nothing in either meeting states it, so it is recorded as an open reading rather than added to the table.

So the recorded variants are Kiwama, Kama, Kavano Foundation / Kavanao Foundation, plus "QM website" held as an unconfirmed reading. Related: `entities/kyawama` (renamed from `entities/kiwama` on 2026-09-02 on Corrie's confirmation) and `entities/steve-carroll`.

One caveat on method: the retrieval index is currently reporting STALE, so these line numbers come from grepping the file directly rather than from the index.

### Observations (Claude): consolidated name-variant list
| Canonical | Variants seen in sources |
|---|---|
| **Kyawama** (organisation) | Kiwama, Kiama, Kioama, Kama, Kyama, Kavano Foundation, Kavanao Foundation, Kavana Foundation; possibly "QM" (unconfirmed) |
| **Raeesa Cassim** (point of contact) | Raisa, Rayisa, Verisa |
| **Ace1t** (platform) | ASIT, ASET, ACE1T |

- **Important for the website project:** the official name is recorded only as "Kyawama". "Kyawama Foundation" (the name used in this task) does not appear in any Glory answer in that form. The only "... Foundation" forms Glory records are transcription mangles. **The organisation's formal legal or public name is therefore unconfirmed in Booster.**

---

## 15. Booster Project: "Ruvixx demo website" (checked for context; empty)

- **Tool:** `get_project_overview`
- **Project id:** `01a0c51f-4d5d-723e-af1c-bcdf12ea1c53` · Org: GoManzanas · Mode: IDEATION · Color: `#3b82f6`
- **Created/updated:** 2026-09-21T17:59:18Z
- **Contents:** no description, no north star, **0 items**, no contributors.
- **Why checked (Claude):** Glory says Kristijan's Ruvixx demo uses the same orange and deep green as Kyawama's website. The Booster project holds nothing, so the colour values are **not** retrievable from Booster.

---

## 98. Register of Glory Wiki pages/sources referenced (none directly readable via MCP)

**Wiki pages that mention Kyawama** (from the page inventory, query_id `e31ab4b80314`, which said "Fourteen wiki pages mention Kyawama or a garbled variant (plus `index.md` and `log.md`...)"):

| Page | Lines (as reported) | Captured here? |
|---|---|---|
| `entities/kyawama.md` | whole page | ✅ Section 3 (one "internal staffing aside" withheld) |
| `entities/steve-carroll.md` | Kyawama parts | ✅ Sections 4, 11 (via agent synthesis) |
| `entities/ace1t.md` | 293-322 | ✅ Sections 6, 7 |
| `entities/corrie-stroup.md` | 105, 127, 304 | ✅ Section 13a |
| `entities/lynn.md` | 153, 215-231, 281-286, 315 | ❌ **Blocked** (query_id `05207bd58e1e`) |
| `entities/kristijan.md` | 449-495, 525 | ❌ **Blocked** (query_id `cc5e4af32bf9`) |
| `entities/ling-xiao.md` | 725, 742 | ✅ Section 13b |
| `entities/luis.md` | 625 | ✅ Section 13b |
| `concepts/gemini-transcript-reliability.md` | 433, 505, 527, 565-598, 655 | ✅ Section 14 |
| `concepts/ruvixx-ai-webinar-course.md` | 37 | ✅ Section 13b |
| `syntheses/gomanzanas-timeline-2026-08.md` | 289 | ✅ Section 8 |
| `syntheses/gomanzanas-timeline-2026-09.md` | 197-213, 608-612, 836, 978, 1038, 1112, 1142, 1182, 1184 | ✅ Sections 8, 9 |
| `sources/gomanzanas-project-status-2026-09-16.md` | 55, 91, 93, 119 | ✅ Section 10 |
| `sources/gomanzanas-project-status-2026-09-18.md` | 88-92 | ✅ Section 10 |
| `index.md`, `log.md` | n/a | Not queried (TOC / ingest log) |

**Other related pages named in answers but not queried for Kyawama content:** `concepts/ace1t-topic-proficiency`, `concepts/ace1t-workbook-maker-spec`, `concepts/glore`, `entities/clark-vince-diala`, `entities/claurence-bretana`, `entities/morgen-glessing`, `entities/matt-carroll`, `entities/reload-us`, `entities/shrin`, `entities/chirag`, `syntheses/gomanzanas-timeline-2026-07.md` (5 MB limit, line 429).

**Raw source files cited by Glory** (these exist in Glory's corpus but **cannot be retrieved** through the MCP):
- `raw/slack/gomanzanas/dm-Corrie/2026-09-01.md`
- `raw/gws/drive/2026-08-27-sync-0829pdt-notes-by-gemini.txt`
- `raw/gws/drive/2026-09-01-sync-notes-by-gemini.txt`
- `raw/gws/drive/2026-09-09-sync-0828pdt-notes-by-gemini.txt`
- `raw/gws/drive/2026-09-12-booster-sync-0200ict-notes-by-gemini.txt` (the Sep 11 Booster Sync)
- `raw/gws/drive/2026-09-16-gomanzanas-project-status.csv`
- `raw/gws/drive/2026-09-17-sync-0829-pdt-notes-by-gemini.txt`
- `raw/gws/drive/2026-09-18-sync-0829-pdt-notes-by-gemini.txt`
- `raw/gws/drive/2026-09-18-gm-consulting-sync-0859-pdt-notes-by-gemini.txt`
- `raw/gws/drive/2026-09-22-sync-0829-pdt-notes-by-gemini.txt`
- `raw/gws/drive/2026-09-23-sync-0829-pdt-notes-by-gemini.txt` (line 33 summary, line 280 transcript cited)
- The Aug 6 2026 Ling DM: **not in Glory's corpus** (`raw/slack/gomanzanas/dm-Ling/` starts Aug 20 2026)

**Kyawama materials mentioned in sources, none of which is stored in or retrievable from Booster/Glory:**
- Kyawama's training "modules and workshops" (sent by Raeesa to Corrie, ~Sep 1-9 2026)
- A workbook Corrie built from those materials (demoed Sep 10 2026)
- Kyawama instructor manual (to be uploaded as a PDF "reading book" on Ace1t)
- "A couple of workbooks" to be built with Lynn
- Kyawama's YouTube material (to be integrated into Ace1t; no channel URL recorded)
- Kyawama's existing website (orange + deep green palette; **no URL recorded**)
- Kyawama assets gathered by Kristijan and a site scaffold (Sep 23 2026; no inventory recorded)

---

## 99. Access log: searches, blocked queries, failures

### Booster `search_items` (all accessible orgs), second pass included
| Query | Result |
|---|---|
| Kyawama | 0 |
| Kyawam | 0 |
| Kiwama | 0 |
| Kavana | 0 |
| Glory | 0 |
| Raeesa | 0 |
| charity | 0 |
| digital literacy | 0 |
| underserved | 0 |
| Carroll | 0 |
| Zambia | 1 → item `019ba965-...` (section 2) |
| Steve | 1 → same item |
| nonprofit | 1 → same item |
| non-profit | 1 → same item |
| remote work | 1 → same item |
| Ace1t | 34 hits; only `019ba965-...` is Kyawama-related. The rest cover Ace1t dashboards, hiring, workbooks for Vietnamese audiences, and so on. |
| foundation | 40+ hits; none Kyawama-related (substring hits on "foundation"/"foundational") |
| Africa | 2 hits (Nigeria travel tour ideas); not related |
| instructor | 1 hit (Argentina travel); not related |
| Ruvixx | 20 hits (RVX Dashboards, team journal); none mention Kyawama |

### Organizations / projects inspected
- **GoManzanas** org (`019b6b39-9f23-700a-b7ba-54170bc5dde8`): 14 spaces, 34 projects, 475 items, 18 members. The overview lists only *recent* spaces and projects; there is no tool to list every project, so coverage relies on `search_items`.
- **Private** org (`019c00f2-d32d-77e7-ad17-a7a9b63ab37c`): 1 project ("Health"), 2 items. Neither is related.
- **Glory Wiki** (`019fa5c5-532f-7241-86f3-ed736ddc5359`): visible only through `discover_wikis`/`query_wiki`. Its items are not returned by `search_items`.

### Glory queries that returned the uniform refusal (`blocked: true`)
Per the tool's guidance, **I did not rephrase these to probe the restriction.**
| query_id | Topic |
|---|---|
| `8f59eae05bf1` | Kyawama website/branding/colours/URL/YouTube + Kristijan's Ruvixx demo design |
| `05207bd58e1e` | `entities/lynn` page on Kyawama |
| `ca66f68841f5` | Kyawama training materials/modules/workshops/curriculum and the Sep 10 workbook |
| `cc5e4af32bf9` | `entities/kristijan.md` lines 449-495, 525 |

(The refusal is intentionally the same whether a topic is restricted or simply has no data, so these may be restrictions or real gaps.)

### Glory queries that failed (timeout)
Four queries sent in parallel failed with "Could not reach the Booster API: Request timed out". Their topics were later covered by sequential queries (sections 8, 9, 12) or were blocked (see above):
- Sep 22/23 meeting notes on Kyawama
- Steve on the Sep 11 Booster Sync
- Materials/curriculum/workbook/Lynn
- Website/branding/proposal

### Glory's own retrieval caveat
Several answers noted that Glory's `kit` search index reported **STALE**, so the wiki agent grepped files directly. Recent ingests may therefore be missing from index-based answers.
