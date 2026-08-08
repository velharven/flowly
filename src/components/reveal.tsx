"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  type Variants,
} from "motion/react";
import { useEffect, useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

/* ============================================================
   Reveal — fade-up element on enter view
   ============================================================ */

type RevealProps = ComponentPropsWithoutRef<typeof motion.div> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  amount = 0.4,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   WordReveal — per-word stagger fade-up
   ============================================================ */

type WordRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  duration = 0.7,
  amount = 0.4,
  once = true,
  as = "span",
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, amount });
  const words = text.split(" ");
  const Component = motion[as];

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{ whiteSpace: "pre" }}
        >
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={{
              hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

/* ============================================================
   MaskReveal — line-by-line mask reveal as section enters view
   ============================================================ */

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function MaskReveal({
  children,
  className,
  delay = 0,
  amount = 0.5,
  once = true,
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={inView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 1 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ============================================================
   ScrollProgress — drives a value from scroll progress
   ============================================================ */

export function useScrollProgress() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, scrollYProgress };
}

/* ============================================================
   ScaleIn — slight scale on enter
   ============================================================ */

export function ScaleIn({
  children,
  delay = 0,
  amount = 0.3,
  className,
}: {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   NumberCounter — counts up to value when in view
   ============================================================ */

export function NumberCounter({
  to,
  duration = 1.4,
  decimals = 0,
  className,
  prefix = "",
  suffix = "",
}: {
  to: number;
  duration?: number;
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    const fixed = v.toFixed(decimals);
    return `${prefix}${fixed}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 4);
      count.set(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration, count]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
}

/* ============================================================
   Re-export
   ============================================================ */

export { useScroll, useTransform, useInView, motion };
export type { Variants };
