<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Flowly (portfolio piece)
description: Motion-first design system for a fictional workflow automation SaaS, built to showcase frontend craft in a portfolio context.
---

# Design System: Flowly (portfolio piece)

## 1. Overview

**Creative North Star: "The Motion Brief"**

Sistem ini hidup di dua tegangan yang sengaja tidak diselesaikan: tipografi yang **berani** dan motion yang **presisi**. Energi bukan datang dari gradient atau warna loudness — ia datang dari keputusan tipografi dan ritme komposisi, sementara motion language tetap pada disiplin Linear/Vercel/Stripe: ease-out-expo, timing function yang konsisten, stagger yang punya ritme. Hasilnya adalah halaman yang terasa hidup tanpa pernah kehilangan ketenangan. Ia adalah *brief yang bergerak*: setiap animasi punya satu pekerjaan, dan pekerjaan itu adalah menyampaikan pesan.

Personality sistem: **bertenaga, ekspresif, berani**. Ia menolak menjadi satu lagi landing page SaaS generik. Ia menolak cream-and-card-grid template yang sekarang menjadi cross-project monoculture AI. Ia menolak copy yang meminta maaf. Yang ia lakukan adalah commit pada setiap keputusannya — dari tipografi sampai CTA, dari warna sampai easing curve — dan membiarkan craft itu berbicara.

**Key Characteristics:**
- **Dark-first, bukan dark-by-default.** Surface deep ink bukan pilihan estetika kosong; ini adalah keputusan yang memungkinkan satu accent berani bernafas tanpa bersaing.
- **Tipografi membawa energi, motion membawa disiplin.** Dua kekuatan yang terpisah tapi terikat.
- **Choreographed, bukan decorative.** Motion adalah struktur naratif, bukan eye candy.
- **Honest fiction.** Produk fiktif; desain mengakuinya. CTA "Lihat source" lebih kuat dari "Mulai gratis" karena menunjukkan taste.
- **Reduced-motion is a feature, bukan kompromi.** Fallback `prefers-reduced-motion` adalah desain utuh, bukan afterthought.

## 2. Colors

Strategi warna sistem ini adalah **Committed**: deep ink surface mendominasi 30–50% layout, dengan satu accent berani yang muncul sebagai punctuation, bukan distribusi. Accent tidak pernah menjadi background — ia adalah momen.

### Primary

- **Deep Ink** `[to be resolved during implementation]`: surface utama, body bg, dan color field untuk hero/footer. Near-black dengan undertone halus; chroma sengaja sangat rendah (~0.01) supaya tidak terasa "warm" atau "cool" secara default. undertone akan ditentukan saat implementasi untuk menghindari cream/sand AI default.
- **Electric Yellow-Lime** `[to be resolved during implementation]`: satu-satunya accent. High-chroma, sharp, dengan lightness tinggi (~0.85) supaya punchy di atas deep ink. Tone ini membawa energi "go state" yang alami untuk workflow tool, tapi cukup distinctive untuk tidak meniru Linear hijau persis. Tidak pernah lebih dari 10% dari surface; keberadaannya yang jarang adalah point-nya.

### Neutral

- **Bone White** `[to be resolved during implementation]`: body text, label. Off-white dengan undertone sangat halus ke arah accent (bukan warm-default). Kontras minimum 4.5:1 terhadap Deep Ink — diverifikasi saat implementasi, bukan diasumsikan.
- **Smoke Gray** `[to be resolved during implementation]`: secondary text, divider, border halus, hover state. Bukan gray default Tailwind; diturunkan dari hue accent.
- **Ink Elevated** `[to be resolved during implementation]`: surface lift untuk card, modal, dropdown. Lebih terang dari Deep Ink tapi masih gelap. Memberi depth tanpa shadow.

### Named Rules

**The One Accent Rule.** Electric Yellow-Lime muncul di ≤10% dari surface manapun. Ia hanya muncul di CTA, focus ring, active state, dan satu momen "wow" di hero. Jika terlihat di tiga tempat sekaligus, ia sudah tersebar terlalu lebar.

**The No-Warmth-By-Default Rule.** Deep Ink tidak boleh jadi warm-tinted near-black "karena brand terasa warm". Tint yang ditambahkan ke neutral harus ke arah hue accent, bukan warm-by-default. Cream/sand/parchment/bone adalah token yang diprotes di sini.

## 3. Typography

**Display Font:** Geist (already loaded via scaffold)
**Body Font:** Geist (already loaded via scaffold)
**Label/Mono Font:** Geist Mono (already loaded via scaffold)

**Character:** Tipografi ini adalah keputusan *disiplin, bukan eksperiment*. Single family dipakai dengan size dan weight contrast yang kuat — energi datang dari keputusan komposisi, bukan dari font character. Display berani (700), body regular (400), label mono (500) di uppercase tracked. Cocok dengan referensi Linear/Vercel yang menahan godaan font swap.

### Hierarchy

- **Display** (Geist 700, `clamp(3rem, 7vw, 6rem)`, line-height 1.0, letter-spacing -0.04em): heading hero dan section break. Huruf tidak pernah lebih besar dari 6rem; di atas itu halaman berteriak, bukan merancang. `text-wrap: balance` pada h1–h3.
- **Headline** (Geist 600, `clamp(1.75rem, 3vw, 2.5rem)`, line-height 1.15, letter-spacing -0.02em): sub-heading section dan card title.
- **Title** (Geist 500, `1.25rem`, line-height 1.4): label di dalam komponen.
- **Body** (Geist 400, `1rem`–`1.125rem`, line-height 1.6, max-width 65–75ch): paragraf. Cap line length di 65–75ch tanpa kecuali.
- **Label** (Geist Mono 500, `0.75rem`, letter-spacing 0.08em, uppercase): eyebrow, metadata, tag. Bukan section grammar; satu label berani per section, diulang di semua section = AI scaffolding.

### Named Rules

**The Single Family Rule.** Display, body, dan label adalah satu family. Tidak ada font swap untuk "kontras". Jika feels butuh kontras, kontras datang dari size + weight, bukan typeface.

**The Balance Wrap Rule.** Setiap h1–h3 memakai `text-wrap: balance`; paragraf panjang memakai `text-wrap: pretty`. Tidak ada orphan yang sengaja dibiarkan.

**The Display Ceiling Rule.** Display heading tidak pernah lebih besar dari `clamp(..., ..., 6rem)`. Huruf menyentuh di atas itu, dan halaman kehilangan commanding voice.

## 4. Elevation

Sistem ini **flat by default**, dengan depth datang dari **tonal layering**, bukan shadow. Deep Ink dan Ink Elevated cukup untuk memisahkan surface; shadow ambient ditambahkan hanya pada state responsif (hover, focus, modal). Pendekatan ini konsisten dengan referensi Linear/Vercel dan membuat motion (yang sudah menjadi sumber depth) tidak bersaing dengan shadow.

### Named Rules

**The Flat-At-Rest Rule.** Surface istirahat tanpa shadow. Shadow muncul hanya sebagai respon terhadap state (hover, focus, active, elevated overlay). Shadow yang selalu-ada adalah template, bukan desain.

**The Motion-Is-Depth Rule.** Pada sistem ini, motion adalah sumber depth primer. Translate-y, mask, dan stagger memberi ilusi kedalaman tanpa memerlukan shadow vocabulary yang besar. Jika shadow mulai membawa beban yang sama dengan motion, salah satu harus pergi — biasanya shadow.

## 5. Components

Seed mode tidak mendokumentasikan komponen karena belum ada. Setelah kode pertama ditulis, jalankan `/impeccable document` di scan mode untuk mengekstrak komponen nyata (tombol, input, nav, card) dari implementasi.

## 6. Do's and Don'ts

Concrete guardrails, di-quote langsung dari PRODUCT.md di mana relevan. Setiap anti-reference strategis punya padanan visual di sini.

### Do:

- **Do** commit pada satu accent dan gunakan sebagai punctuation, bukan distribusi. Electric Yellow-Lime ≤ 10% surface, tanpa pengecualian.
- **Do** biarkan tipografi membawa energi. Display berani (700) di `clamp(3rem, 7vw, 6rem)`, body regular (400), dengan size+weight contrast yang kuat.
- **Do** choreograph motion sebagai struktur naratif: page-load sequence, scroll-driven storytelling, mask reveal. Motion punya job, bukan dekorasi.
- **Do** hormati `prefers-reduced-motion: reduce`. Semua fade-up, mask, dan scroll-driven animation fallback ke crossfade atau instant transition. Konten tetap visible tanpa JavaScript.
- **Do** cap body text line length di 65–75ch tanpa kecuali.
- **Do** verifikasi kontras di ≥4.5:1 untuk body, ≥3:1 untuk large text. Placeholder text bukan pengecualian.
- **Do** komit pada dark surface dengan undertone netral, bukan warm-tinted. Tint ke arah hue accent, bukan warm-by-default.
- **Do** akui sifat fiktif作品 ini di CTA. "Lihat source" lebih kuat dari "Mulai gratis" untuk portofolio.

### Don't:

- **Don't** gunakan cream, sand, parchment, bone, atau warm-tinted near-white sebagai body bg. Ini adalah AI default 2026 yang harus ditolak, bukan dipilih. Pick a deep ink or true off-white at chroma 0.
- **Don't** gunakan template SaaS generik: hero metric template (big number + small label + supporting stats), identical card grid (icon + heading + text diulang), atau gradient text `background-clip: text`.
- **Don't** pakai border-left atau border-right lebih dari 1px sebagai colored accent pada card, list item, callout, atau alert. Rewrite dengan full border, background tint, atau icon.
- **Don't** pakai glassmorphism sebagai default. Blur dan glass card digunakan langka dan purposeful, atau tidak sama sekali.
- **Don't** pakai eyebrow uppercase tracked di atas setiap section ("FEATURES" / "PRICING" / "USE CASES"). Satu label berani per section boleh; pattern ini di semua section = AI scaffolding.
- **Don't** pakai numbered section markers (01 / 02 / 03) sebagai default scaffolding di atas setiap section. Pakai hanya jika section benar-benar sequence yang perlu nomor.
- **Don't** pakai bounce atau elastic easing. Default ease adalah `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) atau serupa — keluar masuk yang presisi.
- **Don't** animate CSS layout property (width, height, top, left) kecuali memang perlu. Gunakan transform dan opacity, dengan honor `prefers-reduced-motion`.
- **Don't** gate content visibility pada class-triggered transition. Default state harus sudah lengkap; transition hanya mempertegas.
- **Don't** pakai monospace sebagai lazy shorthand untuk "technical / developer". Brand ini workflow, bukan terminal — mono hanya untuk label dan metadata.
- **Don't** pakai copy generic: "Streamline your workflow", "Built for teams", "Get started in seconds". Tulis seperti orang yang berarti.
- **Don't** underestimate the page. Second-guessing, excessive whitespace sebagai penutup, atau minta maaf di copy = brand ini kehilangan suaranya.
