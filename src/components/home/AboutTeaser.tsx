"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";

export default function AboutTeaser() {
  return (
    <section className="py-32 md:py-44 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Image */}
        <RevealOnScroll className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop"
              alt="Architecture detail"
              className="w-full h-full object-cover"
            />
          </div>
        </RevealOnScroll>

        {/* Text */}
        <div className="md:col-span-6 md:col-start-7">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.3em] text-text-muted block mb-6">
              About the Studio
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-[clamp(1.5rem,2.8vw,2.4rem)] font-bold uppercase leading-[1.2] tracking-[-0.01em] mb-6">
              We believe architecture deserves to be seen through intentional vision.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-text-muted text-[14px] leading-[1.85] mb-10 max-w-md">
              With over a decade of international experience, we&apos;ve collaborated
              on world-class residential and conceptual projects, helping
              architecture studios express their vision with clarity and depth.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <MagneticButton>
              <Link
                href="/about"
                className="inline-flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.15em] group"
              >
                Learn More
                <span className="w-10 h-[1px] bg-text group-hover:w-16 transition-all duration-300" />
              </Link>
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
