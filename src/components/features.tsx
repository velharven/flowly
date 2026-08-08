"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal, NumberCounter, ScaleIn } from "./reveal";

/* ============================================================
   Features — three varied layouts (no identical card grid)
   ============================================================ */

export function Features() {
  return (
    <section
      id="features"
      className="section-pad relative border-t border-border"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl mb-20 sm:mb-28">
            <span className="eyebrow text-muted">/ 02 — what it does</span>
            <h2 className="display-2 text-ink mt-4">
              Three things, each built to stay out of your way.
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-24 sm:gap-32">
          <FeatureNodeGraph />
          <FeatureCodeBlock />
          <FeatureLiveStatus />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Feature 1 — Visual workflow builder (node graph)
   ============================================================ */

function FeatureNodeGraph() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-5">
        <Reveal>
          <span className="eyebrow text-primary">/ 2.1 — builder</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="display-3 text-ink mt-3">Build it like a sentence.</h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="body-lg text-ink-soft mt-5 max-w-md">
            Drag, drop, and connect. Every step is a typed block &mdash;{" "}
            <span className="mono text-ink text-[0.92em]">trigger</span>,{" "}
            <span className="mono text-ink text-[0.92em]">action</span>,{" "}
            <span className="mono text-ink text-[0.92em]">condition</span>,{" "}
            <span className="mono text-ink text-[0.92em]">loop</span>. We give
            you the shapes; you write the story.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <ul className="mt-7 space-y-2.5 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>
                <span className="text-ink">Typed steps.</span> Each block has a
                schema; mismatched inputs are caught at the cursor.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>
                <span className="text-ink">Local-first.</span> The editor works
                offline; sync happens when you reconnect.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>
                <span className="text-ink">Versioned.</span> Every save is a
                diff. Roll back, branch, or A/B test a step in place.
              </span>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="lg:col-span-7">
        <ScaleIn amount={0.2}>
          <NodeGraphMock />
        </ScaleIn>
      </div>
    </div>
  );
}

function NodeGraphMock() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
        </div>
        <span className="eyebrow-sm text-muted">
          / workflows / pr-quality-gate.flow
        </span>
        <span className="eyebrow-sm text-primary">saved · 2s</span>
      </div>

      {/* Canvas */}
      <div className="relative h-[360px] sm:h-[420px] overflow-hidden">
        {/* grid background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <NodeGraphSVG />
      </div>
    </div>
  );
}

function NodeGraphSVG() {
  return (
    <svg
      viewBox="0 0 600 380"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Edges (curves between nodes) */}
      <g fill="none" stroke="var(--border-strong)" strokeWidth="1.4">
        <path d="M 130 100 C 200 100, 220 200, 290 200" />
        <path d="M 350 200 C 420 200, 420 100, 470 100" />
        <path d="M 350 200 C 420 200, 420 280, 470 280" />
        <path d="M 130 280 C 200 280, 220 200, 290 200" />
      </g>

      {/* Active edge highlight */}
      <g fill="none">
        <path
          d="M 130 100 C 200 100, 220 200, 290 200"
          stroke="url(#edgeGrad)"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0 200; 60 200; 0 200"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Nodes */}
      {[
        { x: 60, y: 60, label: "trigger", sub: "pr.opened", tone: "primary" },
        { x: 230, y: 160, label: "condition", sub: "is.api?", tone: "accent" },
        { x: 410, y: 60, label: "action", sub: "vitest", tone: "primary" },
        { x: 410, y: 240, label: "action", sub: "biome", tone: "primary" },
        { x: 60, y: 240, label: "trigger", sub: "schedule", tone: "muted" },
      ].map((n, i) => (
        <g key={i} transform={`translate(${n.x}, ${n.y})`}>
          <rect
            width="130"
            height="68"
            rx="8"
            fill="var(--bg)"
            stroke="var(--border)"
            strokeWidth="1.2"
          />
          <text
            x="12"
            y="22"
            fill={
              n.tone === "primary"
                ? "var(--primary)"
                : n.tone === "accent"
                  ? "var(--accent)"
                  : "var(--muted)"
            }
            fontSize="9"
            fontFamily="var(--font-mono)"
            letterSpacing="0.1em"
            style={{ textTransform: "uppercase" }}
          >
            {n.label}
          </text>
          <text
            x="12"
            y="46"
            fill="var(--ink)"
            fontSize="13"
            fontFamily="var(--font-mono)"
            fontWeight="500"
          >
            {n.sub}
          </text>
          {/* input handle */}
          <circle
            cx="0"
            cy="34"
            r="3"
            fill="var(--bg)"
            stroke="var(--border-strong)"
            strokeWidth="1.3"
          />
          {/* output handle */}
          <circle
            cx="130"
            cy="34"
            r="3"
            fill="var(--primary)"
            stroke="var(--primary)"
            strokeWidth="1.3"
          />
        </g>
      ))}

      {/* Cursor mock */}
      <g transform="translate(330, 220)">
        <path
          d="M0 0 L0 16 L4 12 L7 18 L9 17 L6 11 L11 11 Z"
          fill="var(--ink)"
          stroke="var(--bg)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ============================================================
   Feature 2 — Triggers that fire (live code block)
   ============================================================ */

function FeatureCodeBlock() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <ScaleIn amount={0.2}>
          <CodeBlockMock />
        </ScaleIn>
      </div>
      <div className="lg:col-span-5 order-1 lg:order-2">
        <Reveal>
          <span className="eyebrow text-accent">/ 2.2 — triggers</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="display-3 text-ink mt-3">Triggers that don&rsquo;t sleep.</h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="body-lg text-ink-soft mt-5 max-w-md">
            Webhooks, schedules, file drops, message events, manual runs. We
            poll, listen, and wake up your workflow the moment something
            happens &mdash; and tell you when we did.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "webhook",
              "schedule",
              "email",
              "polling",
              "manual",
              "stream",
            ].map((t) => (
              <span
                key={t}
                className="mono text-[12px] text-ink-soft border border-border rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function CodeBlockMock() {
  const code = `trigger: onPullRequest
filter:
  - branch == "main"
  - changed.files < 80
do:
  - run: vitest run --changed
  - run: biome check --write
  - notify: #devs
    template: "✅ {{ pr.title }} passed"`;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 2;
      setShown(Math.min(code.length, i));
      if (i >= code.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [inView, code]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl border border-border bg-surface/60 overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="eyebrow-sm text-muted">pr-quality-gate.yml</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="eyebrow-sm text-primary tabular-nums">
            {Math.round((shown / code.length) * 100)}%
          </span>
        </div>
      </div>
      <pre className="p-5 sm:p-6 overflow-x-auto">
        <code className="mono text-[13px] leading-[1.7] text-ink-soft whitespace-pre">
          {colorizeCode(code.slice(0, shown))}
          <span
            aria-hidden
            className="inline-block w-1.5 h-3.5 align-middle bg-primary ml-0.5"
            style={{ animation: "blink 0.9s steps(2) infinite" }}
          />
        </code>
      </pre>
    </div>
  );
}

function colorizeCode(src: string) {
  // Very lightweight syntax highlighter; safe with XSS since we render as text.
  const tokens = src.split(/(\s+|[{}[\]:,"'`])/);
  return tokens.map((t, i) => {
    if (/^\s+$/.test(t)) return t;
    if (/^[{}[\]:,]$/.test(t))
      return (
        <span key={i} style={{ color: "var(--muted)" }}>
          {t}
        </span>
      );
    if (t === "true" || t === "false" || t === "null")
      return (
        <span key={i} style={{ color: "var(--accent)" }}>
          {t}
        </span>
      );
    if (/^(trigger|filter|do|run|notify|template|branch|changed|files)$/.test(t))
      return (
        <span key={i} style={{ color: "var(--primary)" }}>
          {t}
        </span>
      );
    if (/^(onPullRequest|vitest|biome|main|devs)$/.test(t))
      return (
        <span key={i} style={{ color: "var(--ink)" }}>
          {t}
        </span>
      );
    if (t.startsWith('"') || t.startsWith("'") || t.startsWith("`"))
      return (
        <span key={i} style={{ color: "var(--ink-soft)" }}>
          {t}
        </span>
      );
    if (/^[a-zA-Z_][\w-]*:$/.test(t) || /^[a-zA-Z_][\w-]*:/.test(t)) {
      const [k, ...rest] = t.split(":");
      return (
        <span key={i}>
          <span style={{ color: "var(--primary)" }}>{k}</span>
          <span style={{ color: "var(--muted)" }}>:</span>
          {rest.length ? rest.join(":") : ""}
        </span>
      );
    }
    return t;
  });
}

/* ============================================================
   Feature 3 — Live everywhere (ticking status board)
   ============================================================ */

function FeatureLiveStatus() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-5">
        <Reveal>
          <span className="eyebrow text-primary">/ 2.3 — observability</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="display-3 text-ink mt-3">It&rsquo;s running. You can see.</h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="body-lg text-ink-soft mt-5 max-w-md">
            Every run is a first-class object. Inspect inputs, replay, fork,
            pause. If something breaks, the workflow tells you why &mdash; in
            your terms, not ours.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-7">
        <ScaleIn amount={0.2}>
          <LiveStatusMock />
        </ScaleIn>
      </div>
    </div>
  );
}

function LiveStatusMock() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="eyebrow-sm text-muted">/ runs · last 24h</span>
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-primary"
              style={{
                animation: "pulse-ring 2s var(--ease-out-quart) infinite",
              }}
            />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="eyebrow-sm text-primary tabular-nums">live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border border-b border-border">
        <StatCell label="runs" value={1284} />
        <StatCell label="succeeded" value={1271} accent="primary" />
        <StatCell label="failed" value={4} accent="accent" />
        <StatCell label="p50 latency" value={4.2} decimals={1} suffix="s" />
      </div>

      <div className="p-4 sm:p-5 space-y-2">
        {(
          [
            { time: "12s", name: "pr-quality-gate", status: "ok" as const, dur: "3.1s" },
            { time: "44s", name: "pr-quality-gate", status: "ok" as const, dur: "2.7s" },
            {
              time: "1m",
              name: "pr-quality-gate",
              status: "warn" as const,
              dur: "12.4s",
              why: "biome: 3 format violations",
            },
            { time: "2m", name: "pr-quality-gate", status: "ok" as const, dur: "3.0s" },
            { time: "3m", name: "pr-quality-gate", status: "ok" as const, dur: "2.9s" },
          ]
        ).map((row, i) => (
          <RunRow key={i} {...row} />
        ))}
      </div>
    </div>
  );
}

function StatCell({
  label,
  value,
  decimals = 0,
  suffix = "",
  accent,
}: {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
  accent?: "primary" | "accent";
}) {
  return (
    <div className="p-4 sm:p-5">
      <p className="eyebrow-sm text-muted mb-2">{label}</p>
      <p
        className="display-3 text-ink tabular-nums leading-none"
        style={{
          color:
            accent === "primary"
              ? "var(--primary)"
              : accent === "accent"
                ? "var(--accent)"
                : "var(--ink)",
        }}
      >
        <NumberCounter to={value} decimals={decimals} suffix={suffix} />
      </p>
    </div>
  );
}

function RunRow({
  time,
  name,
  status,
  dur,
  why,
}: {
  time: string;
  name: string;
  status: "ok" | "warn" | "fail";
  dur: string;
  why?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, delay: inView ? 0.05 * 1 : 0, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-surface transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="h-1.5 w-1.5 rounded-full shrink-0"
          style={{
            background:
              status === "ok"
                ? "var(--primary)"
                : status === "warn"
                  ? "var(--accent)"
                  : "var(--muted)",
          }}
          aria-hidden
        />
        <span className="mono text-[12px] text-muted tabular-nums shrink-0">
          {time}
        </span>
        <span className="mono text-[12px] text-ink truncate">{name}</span>
        {why && (
          <span className="mono text-[11px] text-accent truncate hidden sm:inline">
            — {why}
          </span>
        )}
      </div>
      <span className="mono text-[12px] text-ink-soft tabular-nums shrink-0">
        {dur}
      </span>
    </motion.div>
  );
}
