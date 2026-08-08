"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Define the trigger.",
    body: "Pick from a growing library of sources — webhooks, schedules, file drops, message events — or wire your own. The schema is right there, not in a doc.",
    visual: TriggerVisual,
  },
  {
    n: "02",
    title: "Compose the steps.",
    body: "Drag, drop, type. Every block is typed end-to-end; mismatches surface at the cursor, not in production. Branch with conditions, loop over lists, retry on failure.",
    visual: ComposeVisual,
  },
  {
    n: "03",
    title: "Watch it run.",
    body: "Every run is logged, replayable, and observable. If something breaks, the workflow tells you exactly which step and why — in your terms, not ours.",
    visual: WatchVisual,
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });

  return (
    <section
      ref={ref}
      id="how"
      className="section-pad relative border-t border-border overflow-hidden"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <span className="eyebrow text-muted">/ 03 — how it works</span>
            <h2 className="display-2 text-ink mt-4">
              Three steps. Then it runs forever.
            </h2>
          </div>
        </Reveal>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky timeline rail */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="sticky top-32 h-[60vh] w-px ml-2 bg-border" />
            <motion.div
              className="absolute top-32 left-[3px] w-px origin-top"
              style={{
                height: useTransform(
                  scrollYProgress,
                  [0, 1],
                  ["0%", "60vh"]
                ) as unknown as string,
                background:
                  "linear-gradient(to bottom, var(--primary), var(--accent))",
              }}
            />
          </div>

          <div className="lg:col-span-11 space-y-20 sm:space-y-28">
            {steps.map((step, i) => (
              <StepBlock
                key={step.n}
                step={step}
                index={i}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepBlock({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  const Visual = step.visual;
  return (
    <Reveal delay={index * 0.05} amount={0.2}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-4">
            <span
              className="display-2 text-ink-soft leading-none tabular-nums"
              style={{ color: "var(--primary)" }}
            >
              {step.n}
            </span>
            <span className="eyebrow-sm text-muted">step</span>
          </div>
          <h3 className="display-3 text-ink mt-4">{step.title}</h3>
          <p className="body-lg text-ink-soft mt-5 max-w-md">{step.body}</p>
          {!isLast && (
            <div
              className="hidden lg:flex items-center gap-2 mt-8 text-muted"
              aria-hidden
            >
              <span className="h-px w-8 bg-border-strong" />
              <span className="mono text-[11px]">continue</span>
            </div>
          )}
        </div>
        <div className="lg:col-span-7">
          <Visual />
        </div>
      </div>
    </Reveal>
  );
}

/* ============================================================
   Visuals for each step
   ============================================================ */

function TriggerVisual() {
  const sources = [
    { name: "github", type: "webhook" },
    { name: "schedule", type: "cron · 5m" },
    { name: "stripe", type: "webhook" },
    { name: "email", type: "imap" },
    { name: "manual", type: "ui · api" },
  ];
  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="eyebrow-sm text-muted">/ sources</span>
        <span className="eyebrow-sm text-primary tabular-nums">5 active</span>
      </div>
      <ul className="space-y-2">
        {sources.map((s, i) => (
          <li
            key={s.name}
            className="flex items-center justify-between gap-3 px-3.5 py-3 rounded-lg border border-border bg-bg/60 hover:border-border-strong transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{
                  background: i === 0 ? "var(--primary)" : "var(--border-strong)",
                  animation: i === 0 ? "blink 1.6s steps(2) infinite" : undefined,
                }}
                aria-hidden
              />
              <span className="text-sm text-ink">{s.name}</span>
            </div>
            <span className="mono text-[11px] text-muted">{s.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComposeVisual() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 p-5 sm:p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="eyebrow-sm text-muted">/ steps</span>
        <span className="eyebrow-sm text-muted">4 blocks · 1 condition</span>
      </div>
      <ol className="space-y-3 relative">
        {[
          { label: "fetch PR data", type: "action" },
          { label: "filter: branch == main", type: "condition" },
          { label: "run vitest", type: "action" },
          { label: "post to #devs", type: "action" },
        ].map((s, i) => (
          <li
            key={i}
            className="relative flex items-center gap-3 px-3.5 py-3 rounded-lg border border-border bg-bg/60"
          >
            <span
              className="h-6 w-6 rounded-md flex items-center justify-center mono text-[11px] shrink-0"
              style={{
                background:
                  s.type === "condition"
                    ? "oklch(from var(--accent) l c h / 0.16)"
                    : "oklch(from var(--primary) l c h / 0.14)",
                color:
                  s.type === "condition" ? "var(--accent)" : "var(--primary)",
              }}
            >
              {i + 1}
            </span>
            <span className="text-sm text-ink flex-1 truncate">
              {s.label}
            </span>
            <span className="mono text-[10px] text-muted uppercase tracking-wider">
              {s.type}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function WatchVisual() {
  const runs = [
    { id: "#4821", status: "ok", time: "12s ago", dur: "3.1s" },
    { id: "#4820", status: "ok", time: "44s ago", dur: "2.7s" },
    { id: "#4819", status: "warn", time: "1m ago", dur: "12.4s" },
    { id: "#4818", status: "ok", time: "2m ago", dur: "3.0s" },
  ];
  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="eyebrow-sm text-muted">/ runs</span>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="eyebrow-sm text-primary">live</span>
        </div>
      </div>
      <ul className="space-y-1.5">
        {runs.map((r) => (
          <li
            key={r.id}
            className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-md hover:bg-surface transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{
                  background:
                    r.status === "ok" ? "var(--primary)" : "var(--accent)",
                }}
                aria-hidden
              />
              <span className="mono text-[12px] text-muted">{r.id}</span>
              <span className="mono text-[12px] text-ink-soft">{r.time}</span>
            </div>
            <span className="mono text-[12px] text-ink-soft tabular-nums">
              {r.dur}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <span className="mono text-[11px] text-muted">
          last 24h · 1284 runs · 99.7% ok
        </span>
        <a
          href="#cta"
          className="mono text-[11px] text-primary hover:text-ink transition-colors"
        >
          view all →
        </a>
      </div>
    </div>
  );
}
