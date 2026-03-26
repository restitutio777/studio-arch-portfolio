"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import FullscreenMenu from "./FullscreenMenu";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "bg-bg/80 backdrop-blur-md" : ""
        }`}
        style={{ paddingTop: scrolled ? 16 : 28, paddingBottom: scrolled ? 16 : 28 }}
      >
        {/* Logo */}
        <Link href="/" className="relative z-[60]">
          <span className="text-2xl md:text-3xl font-light tracking-tight">
            <span className="font-semibold">studio</span>arch.
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* CTA */}
          <MagneticButton>
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 bg-accent text-text px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent/80 transition-colors"
            >
              GET IN TOUCH
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M1 13L13 1M13 1H3M13 1V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </MagneticButton>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
