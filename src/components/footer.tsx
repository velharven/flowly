"use client";

import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element -- SVG vector asset, no optimization needed */}
                <img
                  src="/flowlyipsum.svg"
                  alt=""
                  width={28}
                  height={20}
                  className="h-5 w-auto"
                />
                <span className="wordmark text-[20px] leading-none text-ink">
                  Flowly
                </span>
              </div>
              <p className="text-sm text-ink-soft max-w-sm">
                Built as a portfolio piece. The product is fictional. The code
                is real &mdash; and one click away.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={0.05}>
              <p className="eyebrow-sm text-muted mb-4">Sections</p>
              <ul className="space-y-2.5">
                {[
                  { label: "Manifesto", href: "#manifesto" },
                  { label: "Features", href: "#features" },
                  { label: "How it works", href: "#how" },
                  { label: "Source", href: "#cta" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-soft hover:text-ink transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="eyebrow-sm text-muted mb-4">Stack</p>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                <li>
                  <span className="text-ink">Next.js 16</span>{" "}
                  <span className="mono text-muted text-[11px]">app router</span>
                </li>
                <li>
                  <span className="text-ink">React 19.2</span>{" "}
                  <span className="mono text-muted text-[11px]">compiler</span>
                </li>
                <li>
                  <span className="text-ink">Motion</span>{" "}
                  <span className="mono text-muted text-[11px]">+ scroll</span>
                </li>
                <li>
                  <span className="text-ink">Tailwind v4</span>{" "}
                  <span className="mono text-muted text-[11px]">oklch tokens</span>
                </li>
                <li>
                  <span className="text-ink">Geist</span>{" "}
                  <span className="mono text-muted text-[11px]">sans + mono</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="mono text-[11px] text-muted">
              © 2026 · flowly · portfolio piece · not a real product
            </p>
            <p className="mono text-[11px] text-muted">
              designed and built in oklch
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
