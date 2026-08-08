"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MaskReveal, Reveal } from "./reveal";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const line1 = useTransform(scrollYProgress, [0, 0.5], [40, -40]);
  const line2 = useTransform(scrollYProgress, [0, 0.5], [60, -60]);
  const line3 = useTransform(scrollYProgress, [0, 0.5], [80, -80]);

  return (
    <section
      ref={ref}
      id="manifesto"
      className="section-pad relative border-t border-border"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="eyebrow text-muted">/ 01 — manifesto</span>
                <p className="body-lg text-ink-soft mt-4 max-w-sm">
                  Three sentences. The reason this product exists.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <h2 className="display-2 text-ink">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  style={{ y: line1 }}
                >
                  <MaskReveal amount={0.2}>
                    <span>
                      SaaS is great. The <em className="not-italic text-primary">connective tissue</em>{" "}
                      between your SaaS is not.
                    </span>
                  </MaskReveal>
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-3 sm:mt-5">
                <motion.span
                  className="block"
                  style={{ y: line2 }}
                >
                  <MaskReveal amount={0.2} delay={0.05}>
                    <span>
                      Five tools, ten logins, six Zapier zaps held together
                      with sticky tape and a prayer.
                    </span>
                  </MaskReveal>
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-3 sm:mt-5">
                <motion.span
                  className="block"
                  style={{ y: line3 }}
                >
                  <MaskReveal amount={0.2} delay={0.1}>
                    <span>
                      We make that tissue <span className="text-primary">observable, reliable,</span>{" "}
                      and one keystroke away from editing.
                    </span>
                  </MaskReveal>
                </motion.span>
              </span>
            </h2>

            <Reveal delay={0.4} y={16} amount={0.3}>
              <div className="mt-12 max-w-xl">
                <p className="body-lg text-muted">
                  That&rsquo;s it. No &ldquo;revolutionary protocol.&rdquo; No
                  &ldquo;AI-powered synergies.&rdquo; Just a tool for the boring
                  middle that eats most engineering hours.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
