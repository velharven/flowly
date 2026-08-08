# Flowly

> Landing page marketing fiktif untuk SaaS workflow automation. Piece portofolio — produknya tidak ada, kode-nya ada.

![Stack: Next.js 16 · React 19 · Tailwind v4 · Motion](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

---

## Apa ini

**Flowly** adalah landing page satu-halaman untuk SaaS fiktif bernama "Flowly" — tool workflow & otomatisasi untuk tim. Dibuat sebagai **piece portofolio**: tujuannya mendemonstrasikan craft frontend, terutama motion design, typography, dan composition.

Semua copy, brand, dan logo adalah fiksi. Source code, design system, dan animasi adalah nyata. CTA primer adalah "Lihat source" — pengunjung diarahkan ke repo, bukan ke produk.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Commands lain:

```bash
npm run build    # production build
npm run lint     # eslint
npm run start    # serve production build
```

**Catatan Windows:** Tambahkan folder ini ke exclusion Windows Defender. Turbopack menulis ribuan file ke `.next/` per menit dan antivirus cenderung mengunci/menghapus cache di tengah proses. Tanpa exclusion, dev server crash dengan `tokio-rt-worker panicked` terus-menerus.

```powershell
Add-MpPreference -ExclusionPath "C:\Users\Windows\Videos\for-porto\flowly-saas-minimax"
```

## Stack

| Layer            | Pilihan                                                                |
| ---------------- | ---------------------------------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Compiler) |
| Bahasa           | TypeScript (strict)                                                    |
| UI               | React 19                                                               |
| Styling          | [Tailwind CSS v4](https://tailwindcss.com) (OKLCH tokens via `@theme`) |
| Animasi          | [Motion](https://motion.dev) (v13, formerly framer-motion)             |
| Font body & UI   | Geist + Geist Mono (via `next/font/google`)                            |
| Font wordmark    | Ancola (via `next/font/local`, regular + italic)                       |
| Logo             | `flowlyipsum.svg` (custom)                                             |

## Design system

### Palette (OKLCH)

```
--bg            oklch(0.10 0.005 250)   Deep Ink        (surface)
--surface       oklch(0.13 0.006 250)   Ink Elevated    (card)
--ink           oklch(0.96 0.005 100)   Bone White      (text)
--muted         oklch(0.70 0.012 250)   Smoke Gray      (secondary)
--primary       oklch(0.78 0.20 140)    Electric Mint   (accent, ≤10% surface)
--accent        oklch(0.68 0.18 50)     Ember Coral     (signal)
--border        oklch(0.22 0.008 250)   Hairline
```

Strategi: **Committed** — deep ink mendominasi 30–50% surface, satu accent muncul sebagai punctuation, bukan distribusi.

### Typography

- **Display & body**: Geist (weight 400, 500, 600, 700)
- **Label & mono**: Geist Mono
- **Wordmark**: Ancola (logo font)
- Display heading: `clamp(2.75rem, 6.8vw, 5.75rem)`, line-height 0.95, letter-spacing −0.045em
- Body: 65–75ch max-width

### Motion

- Easing default: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Page-load: choreographed stagger dari atas ke bawah
- Scroll-driven: parallax + mask reveal di hero & manifesto
- Mask reveal: line-by-line sebagai section masuk viewport
- Auto-play cinematic: mock workflow di hero dengan light pulse yang loop

## Project structure

```
src/
├── app/
│   ├── fonts/              # Ancola TTF (regular + italic)
│   ├── globals.css         # Design tokens (OKLCH) + Tailwind v4 @theme
│   ├── layout.tsx          # Root layout, font config, metadata
│   └── page.tsx            # Single-page composition
└── components/
    ├── nav.tsx             # Sticky nav, scroll-reactive background
    ├── hero.tsx            # Hero dengan MockWorkflow
    ├── mock-workflow.tsx   # Auto-play cinematic flow visualization
    ├── manifesto.tsx       # 3-line scroll-driven typography
    ├── features.tsx        # 3 features dengan layout varied
    ├── how-it-works.tsx    # 01/02/03 sequence
    ├── testimonial.tsx     # Big-quote typography
    ├── final-cta.tsx       # "Lihat source" meta-CTA
    ├── footer.tsx          # Minimal footer
    └── reveal.tsx          # Reusable motion primitives
public/
└── flowlyipsum.svg         # Custom logo
```

## Sections

Single-page scroll, urutan:

1. **Nav** — sticky, background fade-in setelah scroll
2. **Hero** — per-word fade-up typography + auto-play mock workflow
3. **Manifesto** — 3 baris copy besar, scroll-driven parallax
4. **Features** — 3 layout berbeda (bukan card grid identik):
   - Visual builder (SVG node graph)
   - Triggers (live typing code block)
   - Observability (ticking status board)
5. **How it works** — 01/02/03 sequence (genuine process, justify angka)
6. **Testimonial** — single big quote, typography-first
7. **Final CTA** — "Lihat source" + portfolio stats
8. **Footer** — minimal: wordmark, sections, stack

## Notable technical decisions

- **No identical card grid** untuk features. Masing-masing punya visual treatment berbeda (SVG diagram, code block, status board) untuk menghindari AI-default SaaS template.
- **OKLCH throughout**. Tidak ada hex di source. Token nama semantic, bukan by-hue.
- **Single-family typography**. Display & body adalah Geist; kontras datang dari size + weight, bukan font swap.
- **Motion via transform/opacity only**. Tidak ada animated layout properties (width, height, top).
- **Real content, no filler**. Copy spesifik untuk workflow automation, bukan generic SaaS filler.
- **Honest fiction**. CTA "Lihat source" mengakui sifat fiktif作品 — lebih kuat dari "Mulai gratis" yang dusta.
- **Reusable reveal primitives** (`reveal.tsx`). `Reveal`, `WordReveal`, `MaskReveal`, `ScaleIn`, `NumberCounter`.

## Caveats

- **Produk fiktif.** Semua nama partner, testimonial, dan metrik adalah placeholder. Tidak ada Flowly beneran.
- **Testimonial fiktif.** "Maya Iwasaki" dan "Acme" tidak ada.
- **GitHub link di CTA adalah placeholder.** Ganti `https://github.com/yourname/flowly-portfolio` dengan repo asli Anda.

## License

MIT.

## Credits

- **Ancola** logo font — included in the repo under its own license (`src/app/fonts/iFonts-License.txt`)
- **Geist** & **Geist Mono** — Vercel
- **Motion** — formerly Framer Motion
- **Tailwind CSS** — Tailwind Labs
- **Next.js** — Vercel

---

Built as a portfolio piece. The product is fictional. The code is real.
