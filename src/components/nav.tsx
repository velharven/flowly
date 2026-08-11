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
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActive(visible[0] ? visible[0].target.id : "");
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
            <svg
              aria-hidden
              width="22"
              height="16"
              viewBox="0 0 55 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-auto transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-black"
              }`}
            >
              <path
                fill="currentColor"
                d="M23.6322 0.597911C19.9395 1.76672 16.9327 5.48248 10.9192 12.914C3.501 22.0814 -0.208097 26.665 0.00900851 30.5474C0.155095 33.1598 1.30933 35.6108 3.22485 37.3763C6.07159 40 11.9392 40 23.6745 40H24.3275C27.1975 40 29.9133 38.6992 31.7186 36.4682C37.6627 29.1224 40.6348 25.4496 44.4744 24.8957C45.4078 24.7611 46.3555 24.7611 47.2889 24.8957C49.8634 25.2671 52.048 27.0408 55 30.3839C50.2776 21.5248 41.6084 3.83856 31.37 0.597911C28.8514 -0.199304 26.1508 -0.199304 23.6322 0.597911Z"
              />
            </svg>
            <span
              className={`wordmark text-[16px] leading-none transition-colors duration-300 ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              Flowly
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`px-3 py-2 text-sm transition-colors duration-300 rounded-full ${
                      isActive
                        ? scrolled
                          ? "bg-white/15 text-white"
                          : "bg-black/15 text-black"
                        : scrolled
                          ? "text-white hover:text-white hover:bg-white/10"
                          : "text-black hover:text-black hover:bg-black/10"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
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
