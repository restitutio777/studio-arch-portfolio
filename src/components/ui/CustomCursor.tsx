"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const cursor = cursorRef.current;
    cursor.style.display = "block";

    const xTo = gsap.quickTo(cursor, "left", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "top", {
      duration: 0.4,
      ease: "power3.out",
    });

    const handleMove = (e: MouseEvent) => {
      xTo(e.clientX - 6);
      yTo(e.clientY - 6);
    };

    const handleEnterLink = () => cursor.classList.add("is-active");
    const handleLeaveLink = () => cursor.classList.remove("is-active");

    window.addEventListener("mousemove", handleMove);

    const observe = () => {
      document
        .querySelectorAll("a, button, [data-cursor]")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleEnterLink);
          el.addEventListener("mouseleave", handleLeaveLink);
        });
    };

    observe();

    // Re-observe after route changes
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot" style={{ display: "none" }} />;
}
