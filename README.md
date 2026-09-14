# Engineering MCQ Platform

A Next.js 16 (App Router) + TypeScript MCQ platform with two modes per subject:
**Practice** (answers shown up front, free navigation, no score) and **Quiz**
(answers locked in one at a time, no skipping, scored results at the end).

This build merges subjects that were originally developed as separate
projects into one app: the dashboard auto-discovers every folder under
`data/subjects/` and lists it as a clickable card, so all of them show up
side by side with their own Practice/Quiz buttons.

| Subject | Folder id | Questions |
|---|---|---|
| Operating Systems | `operating-systems` | 44 |
| Theory of Computation | `theory-of-computation` | 45 |
| Computer Networks & Communication | `computer-networks` | 43 |
| Cryptography & Network Security | `cryptography-network-security` | 50 |

## Setup

Requires Node.js 20.9+ (Next.js 16's minimum).

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
```

Other scripts:

```bash
npm run build      # production build
npm run start       # run the production build
npm run typecheck   # tsc --noEmit
npm run lint         # eslint .
```

## Project structure

```
app/
  layout.tsx                 Root layout (dark theme, mobile viewport)
  page.tsx                   Dashboard -- lists every subject as a card
  quiz/[subjectId]/page.tsx  Resolves mode + loads that subject's questions
components/
  QuizClient.tsx              Quiz engine: both modes, nav, results
  MathText.tsx                 Renders "a^n" / "q_0" style notation as real sup/sub
  EngineeringDiagram.tsx      Pan/zoom viewer for external diagram images
  diagrams/
    DiagramRenderer.tsx        Lazy-loads a question's inline SVG diagram, by id
    FA*.tsx, FSMStateTable.tsx   Finite-automata figures (Theory of Computation)
    OsiLayersDiagram.tsx         7-layer OSI stack (Computer Networks)
  ui/                          Button, Card, Progress, Badge (shadcn-style primitives)
types/quiz.ts                 QuizMode, QuizOption, QuizQuestion, SubjectMeta
data/subjects/<id>/questions.ts  One file per subject, exports `questions`
utils/getSubjects.ts          Scans data/subjects/, applies SUBJECT_MAP
lib/utils.ts                  cn() classname helper
```

There is no separate subject "registry" file to keep in sync -- both the
dashboard's question counts and the quiz page's question loading use a
relative dynamic `import()` keyed by the folder name, which webpack can
statically trace. Dropping a folder in `data/subjects/` is enough for it to
be picked up everywhere.

## Adding a new subject

1. Create `data/subjects/<your-id>/questions.ts` exporting `questions: QuizQuestion[]`.
2. Optionally add an entry to `SUBJECT_MAP` in `utils/getSubjects.ts` with a
   title, description, and a [lucide-react](https://lucide.dev/icons) icon name.
   Without an entry, the dashboard still shows the subject with an
   auto-formatted title and a generic icon.
3. That's it -- the dashboard, routing, and quiz engine all pick it up
   automatically; nothing else needs to change.

**Question id convention:** give every question in a new subject an id
prefixed with something short and unique to that subject (`os-01`, `toc-fa1`,
`q15`, ...). `DiagramRenderer`'s id -> component map is flat across all
subjects, so a new subject that reused another subject's exact ids could
collide with its diagram registrations.

## Math notation

Question/option/explanation text can use plain-text conventions for
exponents and subscripts -- `a^n`, `a^(n+1)`, `q_0`, `S_(n+1)` -- and
`MathText` (used throughout `QuizClient`) renders them as real `<sup>`/`<sub>`
elements. Everything else (Σ, ε, δ, →, ∈, Φ, ∅, ∪, ∩, ⊆, etc.) is just the
literal Unicode character and needs no special handling. This is exercised
heavily by Theory of Computation's regular-expression and language questions.

## Adding a diagram to a question

- **Inline SVG** (for a self-contained figure like a tree, circuit, or state
  diagram): add a component under `components/diagrams/`, register it in
  `DiagramRenderer.tsx`'s `diagramLoaders` map, and key it by the question's
  `id`.
- **External reference image** (a photo, scan, or hosted diagram): set
  `diagramUrl` on that question in its `questions.ts`. `QuizClient` renders it
  through `EngineeringDiagram` (pan/pinch/zoom, 0.3x-8x), but only as a
  fallback when the question's id has no inline diagram registered.

If a question has neither, nothing renders in that slot.

## Data notes (per subject)

- **Operating Systems** (44 questions) -- extracted verbatim from
  `Unit1_MCQ.pdf` (OS services & system calls, process management,
  multithreading models). No question in this set describes a figure, so it
  has no inline diagrams.
- **Theory of Computation** (45 questions, Unit 1 only) -- transcribed
  verbatim from the department's MCQ bank, covering finite automata,
  regular languages/expressions, and grammars, plus a GATE-questions
  supplement. 9 finite-automata figures were rebuilt as inline SVG
  components. 4 GATE questions were intentionally left out because they (or
  their answer options) are hand-drawn diagrams that don't reconstruct
  reliably from the source PDF's extracted text -- guessing at the layout
  risked presenting a wrong diagram as fact. Regular Expressions,
  Context-Free Grammars, Pushdown Automata, Turing Machines, and
  Undecidability are not covered yet; adding each unit later is additive
  (new folder + optional `SUBJECT_MAP` entry), no changes to existing
  subjects needed.
- **Computer Networks & Communication** (43 questions, Unit 1 only) --
  merged and de-duplicated from two source files (a 30-question set and a
  17-question set, despite one file's name suggesting 20); 4 duplicate/
  near-duplicate pairs across the two were collapsed into one entry each.
  Explanations are original (neither source included rationale beyond an
  answer key). No question describes a figure; the one `OsiLayersDiagram` is
  a genuine bonus wired to the four questions asking which OSI layer does
  what, not an extraction from the source.
- **Cryptography & Network Security** (50 questions, Unit 1 only) -- the
  only subject here sourced from raw lecture slides (107 + 43 slides) rather
  than a pre-made question bank, so every question, option, and explanation
  is an original composition testing the slides' concepts and worked
  examples, not a transcription. Every numeric answer (Caesar, Additive,
  Multiplicative, and Affine ciphers, Playfair, Hill cipher, Vigenere, RSA)
  was independently recomputed in Python against the source's own worked
  examples before being used -- which caught one arithmetic slip in the
  source's own Caesar-cipher example ("Attack at Dawn"), quietly not reused.
  No inline diagrams; two genuinely useful figures in the source (the
  network-security model, and the attack-taxonomy tree) are covered through
  their own dedicated conceptual questions instead.

Across all four, question/option **text for the first three subjects is
verbatim** from their source material aside from purely cosmetic
normalization (stripping redundant "a)"/"1)" labels, collapsing inconsistent
blank-line runs to `_____`). Cryptography & Network Security is composed
text throughout, as noted above. Explanations for every subject were written
to support Practice Mode and are not part of the
original source text.

## Design choices worth knowing about

- **Next.js 16.3.5, not 15.** Next 15 moved to Maintenance LTS and reaches
  end-of-life on **October 21, 2026**; Next 16 is the current Active LTS
  line (released October 2025, so over a year mature by the time of this
  upgrade) and was the actively-recommended move rather than something to
  defer. Turbopack is now the default bundler for both `dev` and `build` --
  no config needed, it's just faster. This app doesn't use `next/image`,
  middleware, or any experimental Cache Components features, so it hit
  essentially none of Next 16's breaking changes.
- **React 19.3**, matching Next 16's recommended pairing (unchanged from
  before the upgrade). No React-19-only features are used, so downgrading
  to React 18.x is possible if preferred.
- **ESLint 9.x, not 10.** `next lint` was removed in Next 16 in favor of the
  plain ESLint CLI (`eslint .`, via a flat `eslint.config.mjs`) -- that part
  of the upgrade is straightforward. ESLint itself is pinned to `^9.39.5`
  rather than the `latest` 10.x line, though: `eslint-plugin-react@7.37.5`
  (bundled inside `eslint-config-next`, currently the newest release of that
  plugin) only declares peer support up to ESLint `^9.7` and crashes under
  ESLint 10 with `contextOrFilename.getFilename is not a function`. If
  `eslint-plugin-react` ships a 10.x-compatible release later, the pin in
  `package.json` can be dropped.
- **Tailwind CSS v3.4.19, not v4.** v4 (now at v4.3) changes configuration
  significantly -- CSS-based `@theme` instead of `tailwind.config.ts`, a new
  dark-mode variant syntax, a different PostCSS plugin. Worth it mainly for
  its much faster rebuild engine; not adopted here since this project's
  build times were never the bottleneck.
- **Dark theme only** (`className="dark"` hardcoded in `app/layout.tsx`),
  with a single cohesive color palette shared by every component -- there's
  no light-mode variant to keep in sync.
- **No `next/font/google`.** The app uses the system font stack, so it never
  needs network access to Google's font CDN and has zero font-loading
  flicker.
- **Diagram images use a plain `<img>`, not `next/image`.**
  `react-zoom-pan-pinch` needs direct control of the image element it
  transforms, `diagramUrl` can point at an arbitrary external host, and this
  app never asks next/image's optimizer to fetch external URLs (see
  `next.config.mjs`).

`npm audit` reports **0 vulnerabilities** as of the Next 16 upgrade -- the
one residual finding on Next 15.5.25 (its bundled PostCSS, one patch line
behind a build-time-only advisory) is resolved on 16.3.5.

## What was verified before delivery

Initial merge: a clean `npm install`, a clean `npm run typecheck` (zero
errors), a clean `npm run lint` (zero warnings/errors), and a successful
`npm run build` (dashboard prerendered as static, `/quiz/[subjectId]`
server-rendered on demand). The production server (`npm run start`) was
then started and smoke-tested with real requests: the dashboard renders all
three subject cards with the correct 44/45/43 question counts and working
Practice/Quiz links, `/quiz/operating-systems?mode=quiz` and `/quiz/
computer-networks?mode=practice` both render "Question 1 of N" with correct
text and options, Theory of Computation's math notation renders as real
`<sup>`/`<sub>` HTML rather than literal `^`/`_` characters, and an unknown
subject id correctly 404s.

Next 16 upgrade: the official `@next/codemod` upgrade and
`next-lint-to-eslint-cli` tools were run, then two real issues they
surfaced were fixed by hand -- an invalid `instant = false` route export
left over from the codemod (only valid with Cache Components enabled, which
this app doesn't use, so removed) and the ESLint 9-vs-10 crash above. All of
the same typecheck/lint/build/audit/smoke-test checks were then re-run and
passed identically on Next 16.3.5 with Turbopack.

Cryptography & Network Security addition: after the 50 questions were
drafted, `npm run typecheck`/`lint`/`build` were re-run clean, and the
production server was smoke-tested again -- the dashboard now shows four
subject cards with correct 44/45/43/50 counts, `/quiz/
cryptography-network-security` renders "Question 1 of 50" with correct text,
and superscript notation (`K^-1`, `9^7`, `M^e`, etc., used throughout the
RSA and modular-arithmetic questions) renders as real `<sup>` HTML through
the same `MathText` component Theory of Computation uses. If you hit
anything different locally, it's most likely a Node version mismatch (use
Node 20.9+).
