# Flowly

> A fictional workflow-automation SaaS landing page. A portfolio piece — the product doesn't exist, the code does.

![Stack: Next.js 16 · React 19 · Tailwind v4 · Motion](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

---

## What is this

**Flowly** is a single-page landing site for a fictional SaaS called "Flowly" — a workflow automation tool for teams. Built as a **portfolio piece**: its purpose is to demonstrate frontend craft, especially motion design, typography, and composition.

All copy, branding, and the logo concept are fiction. The source code, design system, and animations are real. The primary CTA is "View source" — visitors are pointed at the repository, not at a product.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build
npm run lint     # eslint
npm run start    # serve production build
```

**Windows note:** Add this folder to the Windows Defender exclusion list. Turbopack writes thousands of files to `.next/` per minute and the antivirus tends to lock or delete its cache mid-write. Without the exclusion, the dev server crashes with repeated `tokio-rt-worker panicked` errors.

```powershell
Add-MpPreference -ExclusionPath "C:\Users\Windows\Videos\for-porto\flowly-saas-minimax"
```

## Stack

| Layer          | Choice                                                                |
| -------------- | --------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Compiler) |
| Language       | TypeScript (strict)                                                    |
| UI             | React 19                                                               |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com) (OKLCH tokens via `@theme`) |
| Animation      | [Motion](https://motion.dev) (v13, formerly framer-motion)             |
| Body & UI font | Geist + Geist Mono (via `next/font/google`)                            |
| Wordmark font  | Ancola (via `next/font/local`, regular + italic)                       |
| Logo           | Inline SVG logomark (also served as favicon via `src/app/icon.svg`)    |

## Design system

### Palette (OKLCH)

```
--bg            oklch(0.10 0.005 250)   Deep Ink        (surface)
--surface       oklch(0.13 0.006 250)   Ink Elevated    (card)
--ink           oklch(0.96 0.005 100)   Bone White      (text)
--muted         oklch(0.70 0.012 250)   Smoke Gray      (secondary)
--primary       oklch(0.70 0.20 140)    Electric Mint   (accent, hero bg)
--primary-deep  oklch(0.56 0.18 140)    Mint pressed    (hover)
--accent        oklch(0.68 0.18 50)     Ember Coral     (signal)
--border        oklch(0.22 0.008 250)   Hairline
```

Strategy: **Committed** — the hero surface IS the brand green; elsewhere deep ink dominates and the accent appears as punctuation, not distribution.

### Typography

- **Display & body**: Geist (weights 400–700)
- **Label & mono**: Geist Mono
- **Wordmark**: Ancola (logo font)
- Display heading: `clamp(2.75rem, 6.8vw, 5.75rem)`, line-height 0.95, letter-spacing −0.04em
- Body: 65–75ch max width
- Manifesto pinned sentences: compact mobile clamp, full `display-2` scale on ≥1024px

### Motion

- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Page load: choreographed top-down stagger
- Hero: word-by-word blur-up reveal (per-word stagger)
- Manifesto: **scroll-pinned 400vh scrub** — four sentences share one grid cell and replace each other, revealing word-by-word, driven by `useScroll`/`useTransform`
- Wave lines: 3 white curved SVG strokes at the top and bottom of the manifesto, revealed right-to-left as scroll progress advances (scroll-progress indicator)
- Navbar: black text over the green hero, white after 75vh of scroll

## Project structure

```
src/
├── app/
│   ├── fonts/              # Ancola TTF (regular + italic)
│   ├── globals.css         # Design tokens (OKLCH) + Tailwind v4 @theme
│   ├── icon.svg            # Logo served as favicon
│   ├── layout.tsx          # Root layout, font config, metadata
│   └── page.tsx            # Single-page composition
└── components/
    ├── nav.tsx             # Sticky nav, scroll-reactive colors, active-link scrollspy
    ├── hero.tsx            # Green hero: headline, CTAs, green→black boundary gradient
    ├── manifesto.tsx       # Scroll-pinned 4-sentence word-by-word reveal + wave lines
    ├── features.tsx        # 3 features with varied layouts
    ├── how-it-works.tsx    # 01/02/03 sequence
    ├── testimonial.tsx     # Big-quote typography
    ├── final-cta.tsx       # "View source" meta-CTA
    ├── footer.tsx          # Minimal footer
    └── reveal.tsx          # Reusable motion primitives
public/
└── flowlyipsum.svg         # Logo asset (footer + references)
```

## Sections

Single-page scroll, in order:

1. **Nav** — sticky, backdrop blur after scroll; links turn black→white; active section highlighted (IntersectionObserver scrollspy)
2. **Hero** — green (`--primary`) background, per-word blur-up headline, black "View source" CTA, smooth green→black gradient into the manifesto
3. **Manifesto** — pinned 400vh scroll scrub: 4 sentences replace each other word-by-word at the same position, plus white wave lines acting as a scroll-progress indicator
4. **Features** — 3 distinct layouts (not an identical card grid):
   - Visual builder (SVG node graph)
   - Triggers (live typing code block)
   - Observability (ticking status board)
5. **How it works** — 01/02/03 sequence (a genuine process, so the numbers earn their place)
6. **Testimonial** — single big quote, typography-first
7. **Final CTA** — "View source" + portfolio stats
8. **Footer** — minimal: wordmark, sections, stack

## Notable technical decisions

- **No identical card grid** for features — each has its own visual treatment (SVG diagram, code block, status board) to avoid the AI-default SaaS template.
- **OKLCH throughout** — no hex in source; semantic token names, not hue-based ones.
- **Single-family typography** — display and body share Geist; contrast comes from size + weight, not font swaps.
- **Motion via transform/opacity only** — no animated layout properties (width, height, top).
- **Scroll-pinned manifesto** — the section holds the reader for ~4 viewports while sentences scrub in, an intentionally dramatic narrative beat.
- **Real content, no filler** — copy is specific to workflow automation, not generic SaaS boilerplate.
- **Honest fiction** — the "View source" CTA admits the product is fictional; stronger than a fake "Get started".
- **Reusable reveal primitives** (`reveal.tsx`) — `Reveal`, `WordReveal`, `MaskReveal`, `ScaleIn`, `NumberCounter`.

## Caveats

- **Fictional product** — all partner names, testimonials, and metrics are placeholders. There is no real Flowly.
- **Fictional testimonial** — "Maya Iwasaki" and "Acme" don't exist.
- **GitHub link is a placeholder** — replace `https://github.com/yourname/flowly-portfolio` in `final-cta.tsx` with your real repository.

## License

MIT.

## Credits

- **Ancola** logo font — included under its own license (`src/app/fonts/iFonts-License.txt`)
- **Geist** & **Geist Mono** — Vercel
- **Motion** — formerly Framer Motion
- **Tailwind CSS** — Tailwind Labs
- **Next.js** — Vercel

---

Built as a portfolio piece. The product is fictional. The code is real.
