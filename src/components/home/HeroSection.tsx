"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageLeftRef = useRef<HTMLDivElement>(null);
  const imageRightRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Title line reveal
      const lines = titleRef.current!.querySelectorAll(".hero-line");
      gsap.fromTo(
        lines,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.3,
        }
      );

      // Image reveals
      if (imageLeftRef.current) {
        gsap.fromTo(
          imageLeftRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            delay: 0.6,
          }
        );
      }

      if (imageRightRef.current) {
        gsap.fromTo(
          imageRightRef.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            delay: 0.8,
          }
        );
      }

      // Parallax on scroll
      gsap.to(titleRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Overlay fade
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.6,
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Watercolor accent */}
      <div className="absolute top-[20%] right-0 w-[60%] h-[300px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 200" className="w-full h-full">
          <path
            d="M0,100 Q200,20 400,80 T800,60"
            stroke="#8fb8b0"
            strokeWidth="80"
            fill="none"
            opacity="0.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Floating images */}
      <div
        ref={imageLeftRef}
        className="absolute left-[5%] top-[15%] w-[220px] h-[300px] md:w-[260px] md:h-[360px] hidden md:block"
        style={{ clipPath: "inset(100% 0% 0% 0%)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=520&h=720&fit=crop"
          alt="Architecture"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        ref={imageRightRef}
        className="absolute right-[5%] top-[10%] w-[240px] h-[320px] md:w-[280px] md:h-[380px] hidden md:block"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=560&h=760&fit=crop"
          alt="Architecture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto w-full">
        <h1
          ref={titleRef}
          className="text-center"
        >
          <span className="hero-line block text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase leading-[1.05] tracking-tight">
            ART DIRECTION
          </span>
          <span className="hero-line block text-[clamp(2.5rem,7vw,6.5rem)] font-serif font-light italic leading-[1.05] tracking-tight">
            &amp; Visual Strategy
          </span>
        </h1>

        <div className="overflow-hidden mt-8">
          <p className="hero-line text-center text-text-muted text-sm md:text-base max-w-md mx-auto leading-relaxed uppercase tracking-[0.2em]">
            I create visual narratives that reveal
            <br />
            architecture with clarity, emotion and strategy.
          </p>
        </div>
      </div>

      {/* Bottom image */}
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[200px] md:w-[400px] md:h-[280px] hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=560&fit=crop"
          alt="Architecture"
          className="w-full h-full object-cover"
        />
      </div>

      <div ref={overlayRef} className="absolute inset-0 bg-bg opacity-0 pointer-events-none" />

      <ScrollIndicator />
    </section>
  );
}
