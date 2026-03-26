"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SplitText from "@/components/ui/SplitText";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const lines = heroRef.current!.querySelectorAll(".about-line");
      gsap.fromTo(
        lines,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero Statement */}
      <section className="px-8 md:px-12 lg:px-16 pb-24 md:pb-40">
        <div ref={heroRef} className="max-w-5xl">
          <div className="overflow-hidden">
            <h1 className="about-line text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-tight">
              I DON&apos;T MAKE RENDERS.
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="about-line text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-tight">
              I CRAFT{" "}
              <span className="font-serif font-light italic">
                VISUAL NARRATIVES
              </span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="about-line text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-tight">
              FOR ARCHITECTURE.
            </h1>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-8 md:px-12 lg:px-16 pb-24 md:pb-40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <RevealOnScroll>
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Portrait"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </RevealOnScroll>

          {/* Bio text */}
          <div className="md:pt-24">
            <RevealOnScroll>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                I&apos;m an architect by background, creative director by practice, and
                strategist by nature. With over a decade of international
                experience, I&apos;ve collaborated on world-class residential and
                conceptual projects.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-text-muted leading-relaxed mb-8">
                My approach merges architectural understanding with visual
                storytelling. Every project begins with strategy — understanding
                the audience, the context, and the story the architecture wants
                to tell.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-text-muted leading-relaxed">
                From there, I craft images that don&apos;t just show spaces — they
                reveal them. Through careful composition, lighting, and
                post-production, each visual becomes a narrative that connects
                with its audience on an emotional level.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-24 md:py-40">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1600566753086-00f18f6b0049?w=1600&h=900&fit=crop"
          alt="Philosophy"
          className="absolute inset-0 h-full"
          speed={0.15}
        />
        <div className="absolute inset-0 bg-text/60" />
        <div className="relative z-10 px-8 md:px-12 lg:px-16 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-[0.3em] text-text-light/50 block mb-8">
              Philosophy
            </span>
          </RevealOnScroll>
          <SplitText
            tag="h2"
            className="text-text-light text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-relaxed font-serif italic"
          >
            Architecture is more than structure. It is an experience, a feeling, a story waiting to be told through the right lens.
          </SplitText>
        </div>
      </section>

      {/* Values */}
      <section className="px-8 md:px-12 lg:px-16 py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-12">
              Core Values
            </span>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Intentional Vision",
                desc: "Every frame serves a purpose. We don't create images — we craft visual arguments that communicate the essence of architecture.",
              },
              {
                num: "02",
                title: "Strategic Thinking",
                desc: "Before the first render, we understand the audience, the market, and the story. Strategy drives every creative decision.",
              },
              {
                num: "03",
                title: "Emotional Depth",
                desc: "Architecture is felt, not just seen. Our work captures the atmosphere, the light, and the life within every space.",
              },
            ].map((value, i) => (
              <RevealOnScroll key={value.num} delay={i * 0.15}>
                <div>
                  <span className="step-number">{value.num}</span>
                  <h3 className="text-xl font-semibold mt-4 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
