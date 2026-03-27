"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imgLeftRef = useRef<HTMLDivElement>(null);
  const imgRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title lines
      const lines = document.querySelectorAll(".hero-line-inner");
      gsap.fromTo(
        lines,
        { y: "110%" },
        {
          y: "0%",
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // Subtitle
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
        );
      }

      // Images — clip reveal
      [imgLeftRef, imgRightRef].forEach((ref, i) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.4,
            ease: "power4.inOut",
            delay: 0.4 + i * 0.2,
          }
        );
      });

      // Parallax on scroll
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background watercolor accent */}
      <div className="absolute top-1/3 right-0 w-1/3 h-48 pointer-events-none opacity-[0.08]">
        <svg viewBox="0 0 800 200" className="w-full h-full">
          <path
            d="M0,100 Q200,20 400,80 T800,60"
            stroke="#d4cc9a"
            strokeWidth="60"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Main grid: images flanking title */}
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left image */}
          <div className="hidden lg:block col-span-2">
            <div
              ref={imgLeftRef}
              className="hero-img aspect-[3/4] overflow-hidden"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=540&fit=crop"
                alt="Modern architecture exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center: Title */}
          <div
            ref={titleRef}
            className="col-span-12 lg:col-span-8 text-center"
          >
            <h1>
              <span className="block overflow-hidden">
                <span className="hero-line-inner block text-[clamp(2.8rem,6.5vw,7rem)] font-bold uppercase leading-[1] tracking-[-0.03em]">
                  Art Direction
                </span>
              </span>
              <span className="block overflow-hidden mt-1">
                <span className="hero-line-inner block text-[clamp(2.8rem,6.5vw,7rem)] font-serif font-light italic leading-[1] tracking-[-0.01em]" style={{ color: "#b8a0c4" }}>
                  &amp; Visual Strategy
                </span>
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="mt-12 text-text-muted text-[12px] uppercase tracking-[0.3em] leading-[2] max-w-md mx-auto opacity-0"
            >
              Visual narratives that reveal architecture
              <br className="hidden sm:block" />
              with clarity, emotion and strategy
            </p>
          </div>

          {/* Right image */}
          <div className="hidden lg:block col-span-2">
            <div
              ref={imgRightRef}
              className="hero-img aspect-[3/4] overflow-hidden mt-12"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=540&fit=crop"
                alt="Modern interior design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
