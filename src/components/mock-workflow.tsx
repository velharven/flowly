"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

/* ============================================================
   MockWorkflow — auto-play cinematic flow
   A real product-shape UI: trigger → action → result, with
   light pulses traveling through the connections on a loop.
   ============================================================ */

type NodeId = "trigger" | "action" | "result";
type Node = {
  id: NodeId;
  label: string;
  hint: string;
  icon: React.ReactNode;
};

const nodes: Node[] = [
  {
    id: "trigger",
    label: "PR opened",
    hint: "github.com/acme/api",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M7 1L2.5 11h3L4.5 13l4.5-10-3 0L7 1z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <path d="M7 1L7 13" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    id: "action",
    label: "Test + format",
    hint: "vitest · biome",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M3 7l3 3 5-6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 4.5l1-1.5M2.5 9.5l-1 1.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "result",
    label: "Notify #devs",
    hint: "slack · channel",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M2 8.5a3 3 0 016 0M8.5 8.5a3 3 0 11-3 3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="11.5" cy="3" r="1" fill="currentColor" />
        <circle cx="3" cy="11" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
];

const CYCLE = 4200;
const T_ACTIVE = {
  trigger: [0, 1200],
  action: [1200, 2400],
  result: [2400, 3600],
} as const;

export function MockWorkflow() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const phase = (tick * 50) % CYCLE;
  const active = (range: readonly [number, number]) =>
    phase >= range[0] && phase < range[1];

  return (
    <div
      className="relative w-full"
      role="img"
      aria-label="Mock workflow: a GitHub pull request opens, triggers tests and formatting, then notifies the dev channel."
    >
      <div className="relative rounded-2xl border border-border bg-surface/40 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, oklch(from var(--primary) l c h / 0.12), transparent 70%)",
          }}
        />

        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="eyebrow-sm text-muted">
              workflow / pr-quality-gate
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="eyebrow-sm text-muted tabular-nums">live</span>
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
          </div>
        </div>

        <div className="relative px-4 py-8 sm:px-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 sm:gap-0">
            {nodes.map((node, i) => (
              <FlowNode
                key={node.id}
                node={node}
                index={i}
                active={active(T_ACTIVE[node.id])}
                last={i === nodes.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px]">
          <span className="mono text-muted">last run · 12s ago</span>
          <span className="mono text-muted">avg latency · 4.2s</span>
        </div>
      </div>
    </div>
  );
}

function FlowNode({
  node,
  index,
  active,
  last,
}: {
  node: Node;
  index: number;
  active: boolean;
  last: boolean;
}) {
  return (
    <>
      <motion.div
        animate={
          active
            ? { borderColor: "var(--primary)", scale: 1.02 }
            : { borderColor: "var(--border)", scale: 1 }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col gap-2 rounded-xl border bg-bg/60 p-3.5"
        style={{ minHeight: 110 }}
      >
        {active && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              boxShadow:
                "0 0 0 1px var(--primary), 0 0 24px -4px var(--primary)",
            }}
          />
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-ink-soft">
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-md"
              style={{
                background: active
                  ? "oklch(from var(--primary) l c h / 0.14)"
                  : "var(--surface)",
                color: active ? "var(--primary)" : "var(--ink-soft)",
                transition: "all 240ms var(--ease-out-quart)",
              }}
            >
              {node.icon}
            </span>
            <span className="eyebrow-sm text-muted tabular-nums">
              0{index + 1}
            </span>
          </div>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: active ? "var(--primary)" : "var(--border-strong)",
              transition: "background 240ms var(--ease-out-quart)",
            }}
            aria-hidden
          />
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-[14px] font-medium text-ink leading-tight">
            {node.label}
          </p>
          <p className="mono text-[11px] text-muted mt-1">{node.hint}</p>
        </div>
      </motion.div>

      {!last && (
        <div
          className="hidden sm:flex items-center justify-center px-2 self-center"
          aria-hidden
          style={{ minWidth: 64 }}
        >
          <Connection active={active} />
        </div>
      )}
    </>
  );
}

function Connection({ active }: { active: boolean }) {
  return (
    <div className="relative h-px w-full overflow-visible">
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{ background: "var(--border-strong)" }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-px"
        initial={{ left: "0%", right: "100%" }}
        animate={
          active
            ? { left: "0%", right: "0%", opacity: 1 }
            : { left: "0%", right: "100%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full"
        style={{
          background: "var(--primary)",
          boxShadow:
            "0 0 8px var(--primary), 0 0 20px oklch(from var(--primary) l c h / 0.6)",
          opacity: active ? 1 : 0,
        }}
        initial={{ left: "0%" }}
        animate={{ left: active ? "100%" : "0%" }}
        transition={{
          duration: active ? 0.9 : 0,
          ease: [0.65, 0, 0.35, 1],
        }}
      />
      <span
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1"
      >
        <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
          <path
            d="M1 1l5 4-5 4"
            stroke={active ? "var(--primary)" : "var(--muted)"}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "stroke 240ms var(--ease-out-quart)" }}
          />
        </svg>
      </span>
    </div>
  );
}
