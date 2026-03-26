"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SplitTextProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  trigger?: boolean;
}

export default function SplitText({
  children,
  className = "",
  tag: Tag = "div",
  delay = 0,
  stagger = 0.08,
  trigger = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const text = el.textContent || "";

    // Split into words, wrap each word in overflow-hidden span
    const words = text.split(" ");
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="line-wrapper inline-block"><span class="line-inner inline-block">${word}</span></span>`
      )
      .join(
        '<span class="line-wrapper inline-block"><span class="line-inner inline-block">&nbsp;</span></span>'
      );

    const innerSpans = el.querySelectorAll(".line-inner");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: trigger
          ? {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          : undefined,
        delay: trigger ? 0 : delay,
      });

      tl.to(innerSpans, {
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power3.out",
        delay,
      });
    });

    return () => ctx.revert();
  }, [children, delay, stagger, trigger]);

  return (
    <Tag ref={containerRef as any} className={className}>
      {children}
    </Tag>
  );
}
