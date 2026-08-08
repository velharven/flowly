"use client";

import { MaskReveal, Reveal } from "./reveal";

export function Testimonial() {
  return (
    <section
      className="section-pad relative border-t border-border"
      aria-label="What teams say about Flowly"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <span className="eyebrow text-muted">/ 04 — what teams say</span>
          </div>
        </Reveal>

        <figure className="max-w-4xl">
          <blockquote className="display-2 text-ink">
            <span className="text-primary" aria-hidden>
              &ldquo;
            </span>
            <MaskReveal amount={0.2}>
              <span>
                We replaced four Zapier zaps and a Slack bot with one Flowly
                workflow.
              </span>
            </MaskReveal>
            <br />
            <MaskReveal amount={0.2} delay={0.08}>
              <span>
                The thing just runs. We forgot it was there for a month.
              </span>
            </MaskReveal>
            <span className="text-primary" aria-hidden>
              &rdquo;
            </span>
          </blockquote>

          <Reveal delay={0.4} amount={0.3}>
            <figcaption className="mt-10 flex items-center gap-4">
              <span
                aria-hidden
                className="h-px w-10 bg-border-strong"
              />
              <div>
                <p className="text-sm text-ink">Maya Iwasaki</p>
                <p className="mono text-[12px] text-muted mt-0.5">
                  Engineering Lead · Acme (fictional)
                </p>
              </div>
            </figcaption>
          </Reveal>
        </figure>
      </div>
    </section>
  );
}
