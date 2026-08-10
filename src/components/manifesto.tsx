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
        className="relative border-t border-border"
        style={{ minHeight: "400vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container-page w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                <span className="eyebrow text-muted">/ 01 — manifesto</span>
                <p className="body-lg text-ink-soft mt-4 max-w-sm">
                  Four sentences. The reason this product exists.
                </p>
              </div>

              <div className="lg:col-span-9">
                {/*
                  Grid stacking: every sentence is placed in the same cell
                  (col-start-1 row-start-1). They share the same visual position
                  and replace each other via opacity + y transforms.
                */}
                <div className="display-2 text-ink grid">
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
