"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SplitTextProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
}

export default function SplitText({
  children,
  className = "",
  tag: Tag = "div",
  delay = 0,
  stagger = 0.04,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const el = containerRef.current;
    const text = el.textContent || "";

    // Split into words, keep them inline with overflow hidden wrappers
    const words = text.split(/\s+/).filter(Boolean);
    el.innerHTML = words
      .map(
        (word) =>
          `<span style="overflow:hidden;display:inline-block;vertical-align:top"><span class="split-word" style="display:inline-block;transform:translateY(100%);opacity:0">${word}</span></span>`
      )
      .join(" ");

    const wordSpans = el.querySelectorAll(".split-word");

    const ctx = gsap.context(() => {
      gsap.to(wordSpans, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [children, delay, stagger]);

  return (
    <Tag ref={containerRef as any} className={className}>
      {children}
    </Tag>
  );
}
