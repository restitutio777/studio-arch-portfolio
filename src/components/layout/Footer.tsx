"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-light px-6 md:px-12 py-16 md:py-24">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {/* Brand */}
            <div>
              <span className="text-2xl font-light tracking-tight">
                <span className="font-semibold">studio</span>arch.
              </span>
              <p className="mt-4 text-sm text-text-light/50 max-w-xs leading-relaxed">
                We craft visual narratives for architecture with clarity,
                emotion and strategy.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-text-light/40 mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {["Work", "About", "Process", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-sm text-text-light/70 hover:text-text-light transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-text-light/40 mb-6">
                Get in Touch
              </h4>
              <a
                href="mailto:hello@studioarch.com"
                className="text-sm text-text-light/70 hover:text-text-light transition-colors block mb-2"
              >
                hello@studioarch.com
              </a>
              <p className="text-sm text-text-light/50">
                Barcelona, Spain
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-text-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-light/30">
              &copy; {new Date().getFullYear()} Studio Arch. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-text-light/30 hover:text-text-light/70 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-xs text-text-light/30 hover:text-text-light/70 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-xs text-text-light/30 hover:text-text-light/70 transition-colors">
                Behance
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
