"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { WordReveal, MaskReveal, Reveal } from "./reveal";
import { MockWorkflow } from "./mock-workflow";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMock = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityMock = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-32 sm:pt-40 pb-16 sm:pb-24"
    >
      {/* Grid bg + radial glow */}
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-[36rem] w-[72rem] max-w-[180vw] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(from var(--primary) l c h / 0.14) 0%, transparent 60%)",
        }}
      />

      <div className="container-page">
        <div className="max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-primary"
                  style={{
                    animation:
                      "pulse-ring 2.4s var(--ease-out-quart) infinite",
                  }}
                />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="eyebrow text-primary">
                Flowly · v0.4 in private beta
              </span>
            </div>
          </Reveal>

          <motion.div style={{ y: yHeadline }}>
            <h1 className="display-1 text-ink">
              <WordReveal
                text="Workflows that"
                delay={0.15}
                stagger={0.07}
                duration={0.85}
                amount={0.2}
              />
              <br />
              <span className="text-ink-soft">
                <WordReveal
                  text="run themselves."
                  delay={0.45}
                  stagger={0.07}
                  duration={0.85}
                  amount={0.2}
                />
              </span>
            </h1>
          </motion.div>

          <div className="mt-8 max-w-2xl">
            <MaskReveal delay={0.85} amount={0.2}>
              <p className="body-lg text-ink-soft">
                Flowly turns the manual glue between your SaaS into reliable,
                observable workflows. Set a trigger. Define the steps. Watch it
                run — and never type that boring middle bit again.
              </p>
            </MaskReveal>
          </div>

          <Reveal delay={1.05} y={12} duration={0.7} amount={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#cta" className="btn btn-primary">
                Lihat source
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#how" className="btn btn-ghost">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M5.5 4.5l4 2.5-4 2.5v-5z"
                    fill="currentColor"
                  />
                </svg>
                See how it works
              </a>
              <span className="mono text-xs text-muted hidden sm:inline ml-1">
                · 2 min read
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1.25} y={32} duration={1.0} amount={0.1}>
          <motion.div
            style={{
              y: yMock,
              opacity: opacityMock,
            }}
            className="mt-16 sm:mt-20"
          >
            <MockWorkflow />
            <p className="mt-4 mono text-xs text-muted text-center sm:text-left">
              ↑ a real-shaped workflow: trigger → action → result. Lights move on
              their own; you only describe the shape.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
