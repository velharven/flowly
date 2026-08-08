"use client";

import { MaskReveal, Reveal } from "./reveal";

export function FinalCTA() {

  return (
    <section
      id="cta"
      className="section-pad relative border-t border-border overflow-hidden"
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[28rem] w-[56rem] max-w-[180vw] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, oklch(from var(--primary) l c h / 0.18) 0%, transparent 60%)",
        }}
      />

      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-primary">/ 05 — open the brief</span>
          </Reveal>

          <h2 className="display-1 text-ink mt-6">
            <MaskReveal amount={0.2}>
              <span>The brief is the page.</span>
            </MaskReveal>
            <br />
            <span className="text-ink-soft">
              <MaskReveal amount={0.2} delay={0.08}>
                <span>The pitch is the code.</span>
              </MaskReveal>
            </span>
          </h2>

          <Reveal delay={0.25}>
            <p className="body-lg text-ink-soft mt-8 max-w-xl">
              Flowly is fictional. The motion, the typography, the structure,
              the copy &mdash; all built end-to-end for this portfolio piece.
              If the work resonates, the source is one click away.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/yourname/flowly-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.745.084-.73.084-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Lihat source di GitHub
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 3h6v6M11 3L3 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#top" className="btn btn-ghost">
                Back to top
                <span aria-hidden>↑</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl">
              {[
                { k: "files", v: "8" },
                { k: "lines of code", v: "1.4k" },
                { k: "motion primitives", v: "12" },
                { k: "tokens", v: "16" },
              ].map((stat) => (
                <div
                  key={stat.k}
                  className="border-l border-border-strong pl-4 py-1"
                >
                  <p className="display-3 text-ink tabular-nums leading-none">
                    {stat.v}
                  </p>
                  <p className="mono text-[11px] text-muted mt-2 uppercase tracking-wider">
                    {stat.k}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
