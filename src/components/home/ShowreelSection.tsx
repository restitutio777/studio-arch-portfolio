"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="showreel-img relative overflow-hidden cursor-pointer group aspect-[16/9]">
          <div ref={imageRef} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop"
              alt="Architecture showreel"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-text/25 group-hover:bg-text/35 transition-colors duration-500" />

          {!isPlaying && (
            <div
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="play-btn">
                <svg viewBox="0 0 24 24">
                  <polygon points="8,5 19,12 8,19" />
                </svg>
              </div>
              <span className="absolute bottom-8 left-8 text-text-light text-[11px] uppercase tracking-[0.3em]">
                Watch Showreel
              </span>
            </div>
          )}

          {isPlaying && (
            <div className="absolute inset-0 bg-text">
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 text-text-light text-2xl z-10 w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
