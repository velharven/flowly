# Product

## Register

brand

## Platform

web

## Users

**Primary**: recruiter, hiring manager, dan klien potensial yang menilai craft frontend desainer/pemilik proyek ini. Mereka datang bukan untuk menggunakan produk, tapi untuk membaca kode di balik layar: typography choices, motion discipline, dan taste visual.

**Context**: scan cepat 5-15 detik, di tab baru, di antara评审 lain. Mencari satu momen yang bikin berhenti scroll. Tidak akan membaca dokumentasi; landing page adalah seluruh pitch.

**Secondary**: sesama desainer/developer yang mengunjungi portofolio untuk referensi, dan偶然 menemukan piece ini lewat link GitHub.

## Product Purpose

Piece portofolio: landing page marketing fiktif untuk SaaS bernama "Flowly" — tool workflow & otomatisasi untuk tim. Produknya sendiri tidak ada; keajaiban terjadi di balik landing page. Tujuannya mendemonstrasikan craft frontend: motion design yang presisi, typography berani, dan taste yang committed.

Success = pengunjung yangqualified (recruiter/klien) ingin membuka source code, mengontak desainer, atau menyimpan作品 ini sebagai referensi hire.

## Positioning

**Klaim strategis yang ditampilkan di setiap section**: motion yang tidak pernah dekoratif — setiap animasi melayani pesan, bukan sebaliknya. Tipografi besar, ritme yang disiplin, dan zero filler.

**The 10-second line**: "Motion is the craft. Not the decoration."

## Conversion & proof

- **Primary CTA**: "Lihat source" — tombol meta-portofolio yang jujur tentang sifat fiktif作品 ini, mengarahkan ke repo GitHub. Menunjukkan bahwa designer berani mengangkat tangan dan bilang "ini demonstrasi, bukan SaaS beneran."
- **Secondary CTA**: "Read the case study" atau link ke walkthrough singkat tentang keputusan teknis di balik hero animation.
- **Belief ladder** (urutan yang harus diyakini pengunjung):
  1. Orang ini paham motion design (bukan sekadar CSS transition).
  2. Motion di sini punya tujuan, bukan eye candy.
  3. Typography, color, dan layout juga punya taste — bukan afterthought.
  4. Repo-nya bersih dan layak dibaca.
  5. Saya ingin hire/kontak orang ini.
- **Proof on hand**: source code itu sendiri adalah bukti. Setiap keputusan (timing function, easing, prefer-reduced-motion fallback, semantic markup) adalah CV. Tambahkan: link repo GitHub di footer/CTA, dan opsional link ke write-up teknis.

## Brand Personality

**Voice**: confident, considered, sedikit nakal. Tidak minta maaf untuk hal yang tidak perlu.

**Tone**: berani tapi presisi. Energi datang dari tipografi dan komposisi, bukan dari gradient atau color loudness.

**3 kata**: bertenaga, ekspresif, berani (energetic, expressive, bold).

**Emotional goals**: berhenti scroll, rasa "ini orang tahu apa yang dilakukannya", small thrill dari animasi yang pas.

## Anti-references

- Landing page SaaS generik 2024-2026: hero metric template, identical card grid, eyebrow uppercase "FEATURES" / "PRICING" / "USE CASES" di atas setiap section, gradient text, glassmorphism default.
- Cream/sand AI default palette — warm tinted near-white yang jadi cross-project monoculture. Pilih tone yang committed: surface yang punya warna, atau true off-white di chroma 0.
- Motion yang decorative: bounce/elastic ease, infinite loop tanpa tujuan, parallax untuk parallax.
- Copy yang generic: "Streamline your workflow", "Built for teams", "Get started in seconds" — filler yang tidak bisa dilawan atau dibedakan.
- Flat hierarchy: heading dan body seberat. Tidak ada momen "ini yang penting" di halaman.

## Design Principles

1. **Motion is punctuation, not wallpaper.** Setiap animasi punya satu job: mengarahkan mata, menandai transisi, atau menghargai konteks. Tidak ada animasi yang ada "karena keren". Default state sudah lengkap; motion hanya mempertegas.
2. **Show, don't tell.** Halaman ini adalah portofolio. Jangan menulis "fast", "beautiful", "intuitive" — buktikan lewat keputusan visual. Copy menjelaskan apa produk *melakukan*; craft menjelaskan kenapa orang ini layak di-hire.
3. **Bold in voice, disciplined in motion.** Typography dan komposisi boleh ekspresif dan berani. Motion language tetap pada presisi Linear/Vercel/Stripe: ease-out-expo, timing function yang konsisten, stagger yang punya ritme.
4. **Confidence over reassurance.** Tidak ada second-guessing, tidak ada "if you want to" copy, tidak ada excessive white space sebagai penutup. Page ini commit pada setiap keputusannya, dari tipografi sampai CTA.
5. **Honest fiction.** Produk ini fiktif; CTA-nya mengakui itu. "Lihat source" lebih kuat daripada "Mulai gratis" — karena menunjukkan taste dan integritas, bukan menjual mimpi.

## Accessibility & Inclusion

- **WCAG 2.1 Level AA** minimum.
- **prefers-reduced-motion: reduce** wajib: semua fade-up, parallax, mask reveal, dan scroll-driven animation fallback ke crossfade halus atau instant transition. Tidak ada animasi yang gate content visibility — konten tetap terlihat penuh tanpa JavaScript.
- Body text kontras ≥ 4.5:1; large text (≥18px atau bold ≥14px) ≥ 3:1. Placeholder dan muted text mengikuti standar yang sama, bukan gray default.
- Keyboard navigation lengkap di semua interaksi; focus ring jelas dan visible (bukan `outline: none` lalu lupa kasih ganti).
- Semantic HTML: heading hierarchy benar (`h1` sekali per page), landmark roles eksplisit, `aria-label` di icon-only buttons, dan skip-to-content link.
- Bahasa Inggris untuk landing page copy (sesuai industri SaaS); tone sudahfinal di atas. Dokumentasi repo bilingual opsional.
