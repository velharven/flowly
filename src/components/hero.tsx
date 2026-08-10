"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { WordReveal, MaskReveal, Reveal } from "./reveal";

const TICKER_LIGHT =
  "WORKFLOW AUTOMATION · TRIGGER → ACTION → RESULT · OBSERVABLE · RELIABLE · ";
const TICKER_DARK =
  "ZAP · HOOK · LOOP · RETRY · LOG · REPLAY · BRANCH · SCHEDULE · ";

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
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 bg-primary text-bg overflow-hidden"
    >
      {/* Subtle white radial glow on green bg */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-[36rem] w-[72rem] max-w-[180vw] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.96 0.005 100 / 0.20) 0%, transparent 60%)",
        }}
      />

      <div className="container-page">
        <div className="max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="sr-only">Status indicator:</span>
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-bg"
                  style={{
                    animation:
                      "pulse-ring 2.4s var(--ease-out-quart) infinite",
                  }}
                />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-bg" />
              </span>
              <span className="eyebrow text-bg/80">
                Flowly · in private beta
              </span>
            </div>
          </Reveal>

          <motion.div style={{ y: yHeadline }}>
            <h1 className="display-1">
              <span className="text-bg">
                <WordReveal
                  text="Workflows that"
                  delay={0.10}
                  stagger={0.07}
                  duration={0.85}
                  amount={0.2}
                />
              </span>
              <span className="block text-bg/70">
                <WordReveal
                  text="run themselves."
                  delay={0.30}
                  stagger={0.07}
                  duration={0.85}
                  amount={0.2}
                />
              </span>
            </h1>
          </motion.div>

          <div className="mt-8 max-w-2xl">
            <MaskReveal delay={0.55} amount={0.2}>
              <p className="body-lg text-bg/85">
                Flowly turns the manual glue between your SaaS into reliable,
                observable workflows. Set a trigger. Define the steps. Watch it
                run — and never type that boring middle bit again.
              </p>
            </MaskReveal>
          </div>

          <Reveal delay={0.70} y={12} duration={0.7} amount={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {/* Black CTA with arrow — primary action in hero */}
              <a href="#cta" className="btn btn-dark">
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
              {/* Ghost CTA — dark border + dark text on green bg */}
              <a
                href="#how"
                className="btn bg-transparent text-bg border border-bg/40 hover:bg-bg/10 hover:border-bg/70"
              >
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
              <span className="mono text-xs text-bg/60 hidden sm:inline ml-1">
                · 2 min read
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.85} y={32} duration={1.0} amount={0.1}>
          <motion.div
            style={{
              y: yMock,
              opacity: opacityMock,
            }}
            className="mt-16 sm:mt-20 overflow-hidden rounded-xl"
          >
            <Ticker />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Ticker — dua garis: putih + hitam, teks berjalan (marquee)
   ============================================================ */

function Ticker() {
  return (
    <div aria-hidden className="rounded-xl overflow-hidden border border-bg/20">
      <div className="bg-ink text-bg overflow-hidden">
        <div className="marquee-track py-3 sm:py-4">
          <TickerSpan text={TICKER_LIGHT} />
          <TickerSpan text={TICKER_LIGHT} />
        </div>
      </div>
      <div className="bg-bg text-ink overflow-hidden">
        <div className="marquee-track marquee-track--reverse py-3 sm:py-4">
          <TickerSpan text={TICKER_DARK} />
          <TickerSpan text={TICKER_DARK} />
        </div>
      </div>
    </div>
  );
}

function TickerSpan({ text }: { text: string }) {
  return (
    <span className="shrink-0 mono text-sm sm:text-base font-medium uppercase tracking-[0.18em] px-4">
      {text}
    </span>
  );
}
