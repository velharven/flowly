"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { Reveal } from "./reveal";

type Sentence = {
  text: string;
  start: number;
  end: number;
};

const sentences: Sentence[] = [
  { text: "SaaS is great.", start: 0.0, end: 0.25 },
  {
    text: "The connective tissue between your SaaS is not.",
    start: 0.25,
    end: 0.5,
  },
  {
    text: "Five tools, ten logins, six Zapier zaps held together with sticky tape and a prayer.",
    start: 0.5,
    end: 0.75,
  },
  {
    text: "We make that tissue observable, reliable, and one keystroke away from editing.",
    start: 0.75,
    end: 1.0,
  },
];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section
        ref={ref}
        id="manifesto"
        className="relative"
        style={{ minHeight: "400vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden pb-12 sm:pb-16">
          <WaveField progress={scrollYProgress} position="top" />
          <WaveField progress={scrollYProgress} position="bottom" />
          <div className="container-page w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                <span className="eyebrow text-muted">/ 01 — manifesto</span>
                <p className="body-lg text-ink-soft mt-3 sm:mt-4 max-w-sm">
                  Four sentences. The reason this product exists.
                </p>
              </div>

              <div className="lg:col-span-9">
                {/*
                  Grid stacking: every sentence is placed in the same cell
                  (col-start-1 row-start-1). They share the same visual position
                  and replace each other via opacity + y transforms.
                */}
                <div className="manifesto-sentences text-ink grid">
                  {sentences.map((s, i) => (
                    <PinnedSentence
                      key={i}
                      text={s.text}
                      scrollStart={s.start}
                      scrollEnd={s.end}
                      scrollYProgress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <Reveal>
          <div className="max-w-xl">
            <p className="body-lg text-muted">
              That&rsquo;s it. No &ldquo;revolutionary protocol.&rdquo; No
              &ldquo;AI-powered synergies.&rdquo; Just a tool for the boring
              middle that eats most engineering hours.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ============================================================
   PinnedSentence — single sentence at the shared grid cell.
   Lifecycle:
   - 0% to 25%:   enter (slide up from y:40, fade in)
   - 0% to 50%:   word-by-word reveal (overlaps entry)
   - 25% to 75%:  hold (fully visible at y:0)
   - 75% to 100%: exit (slide up to y:-40, fade out)
   ============================================================ */

function PinnedSentence({
  text,
  scrollStart,
  scrollEnd,
  scrollYProgress,
}: {
  text: string;
  scrollStart: number;
  scrollEnd: number;
  scrollYProgress: MotionValue<number>;
}) {
  const words = text.split(" ");
  const range = scrollEnd - scrollStart;

  const entryEnd = scrollStart + 0.25 * range;
  const wordRevealEnd = scrollStart + 0.5 * range;
  const exitStart = scrollStart + 0.75 * range;

  const y = useTransform(
    scrollYProgress,
    [scrollStart, entryEnd, exitStart, scrollEnd],
    [40, 0, 0, -40]
  );
  const opacity = useTransform(
    scrollYProgress,
    [scrollStart, entryEnd, exitStart, scrollEnd],
    [0, 1, 1, 0]
  );

  const slice = (wordRevealEnd - scrollStart) / words.length;

  return (
    <motion.span
      className="col-start-1 row-start-1 will-change-[opacity,transform]"
      style={{ y, opacity }}
    >
      {words.map((word, i) => {
        const wordStart = scrollStart + slice * i;
        const wordEnd = wordStart + slice;
        const wordMid = wordStart + slice * 0.5;

        return (
          <PinnedWord
            key={i}
            word={word}
            isLast={i === words.length - 1}
            start={wordStart}
            mid={wordMid}
            end={wordEnd}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </motion.span>
  );
}

function PinnedWord({
  word,
  isLast,
  start,
  mid,
  end,
  scrollYProgress,
}: {
  word: string;
  isLast: boolean;
  start: number;
  mid: number;
  end: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0, 1, 1]
  );
  const y = useTransform(scrollYProgress, [start, end], [16, 0]);

  return (
    <motion.span
      className="inline-block will-change-[opacity,transform]"
      style={{ opacity, y }}
    >
      {word}
      {isLast ? "" : "\u00A0"}
    </motion.span>
  );
}

/* ============================================================
   WaveField — 3 garis putih melengkung yang muncul dari kanan
   ke kiri mengikuti scrollYProgress (kanan anchored, kiri tumbuh).
   Dua instance: top & bottom dari pinned manifesto.
   ============================================================ */

const WAVE_PATHS = [
  "M0 8 Q100 0 200 8 T400 8 T600 8 T800 8 T1000 8 T1200 8",
  "M0 15 Q100 7 200 15 T400 15 T600 15 T800 15 T1000 15 T1200 15",
  "M0 22 Q100 14 200 22 T400 22 T600 22 T800 22 T1000 22 T1200 22",
];

function WaveField({
  progress,
  position,
}: {
  progress: MotionValue<number>;
  position: "top" | "bottom";
}) {
  const reveals = [
    useTransform(progress, [0.0, 0.45], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]),
    useTransform(progress, [0.15, 0.65], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]),
    useTransform(progress, [0.3, 0.85], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]),
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 ${
        position === "top"
          ? "top-20 sm:top-24"
          : "bottom-10 sm:bottom-14"
      }`}
    >
      <svg
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        fill="none"
        className="h-8 sm:h-10 w-full"
      >
        {WAVE_PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="var(--ink)"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              clipPath: reveals[i],
              opacity: 0.7 - i * 0.15,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
