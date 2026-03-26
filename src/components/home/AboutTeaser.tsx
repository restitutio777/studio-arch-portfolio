"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function AboutTeaser() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <RevealOnScroll className="relative">
          <div className="relative h-[400px] md:h-[550px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18f6b0049?w=800&h=1100&fit=crop"
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20" />
        </RevealOnScroll>

        {/* Text */}
        <div>
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-6">
              About the Studio
            </span>
          </RevealOnScroll>

          <SplitText
            tag="h2"
            className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold uppercase leading-tight mb-8"
          >
            We believe architecture deserves to be seen through intentional vision.
          </SplitText>

          <RevealOnScroll delay={0.2}>
            <p className="text-text-muted leading-relaxed mb-8 max-w-md">
              With over a decade of international experience, we&apos;ve collaborated
              on world-class residential and conceptual projects, helping
              architecture studios express their vision with clarity and depth.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <MagneticButton>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider group"
              >
                Learn More
                <span className="w-8 h-[1px] bg-text group-hover:w-12 transition-all" />
              </Link>
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
