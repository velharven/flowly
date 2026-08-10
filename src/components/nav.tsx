"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Manifesto", href: "#manifesto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 transition-all duration-300 backdrop-blur-md ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "oklch(from var(--bg) l c h / 0.82)",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
        }}
      />
      <div className="container-page">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            aria-label="Flowly home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG vector asset, no optimization needed */}
            <img
              src="/flowlyipsum.svg"
              alt=""
              width={22}
              height={16}
              className="h-4 w-auto"
            />
            <span
              className={`wordmark text-[16px] leading-none transition-colors duration-300 ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              Flowly
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-2 text-sm transition-colors duration-300 rounded-full ${
                    scrolled
                      ? "text-white hover:text-white hover:bg-white/10"
                      : "text-black hover:text-black hover:bg-black/10"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className={`btn btn-primary h-9 px-4 text-sm ${
                scrolled ? "btn-primary--white" : ""
              }`}
            >
              Lihat source
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
