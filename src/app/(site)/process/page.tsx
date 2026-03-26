"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SplitText from "@/components/ui/SplitText";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin with deep conversation — understanding your project, audience, goals, and the story your architecture tells. This phase shapes the entire creative direction.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
  },
  {
    number: "02",
    title: "Art Direction",
    description:
      "With strategy defined, we develop the visual language — mood boards, compositions, lighting studies, and camera angles that will bring your vision to life.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Here we execute — crafting each image with meticulous attention to light, material, atmosphere, and composition. Every pixel serves the narrative.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    number: "04",
    title: "Post-Production & Delivery",
    description:
      "The final stage refines every detail — color grading, atmospheric effects, and presentation-ready assets optimized for your marketing channels.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-40">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24 md:mb-40">
        <div className="max-w-5xl">
          <SplitText
            tag="h1"
            className="text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight"
          >
            Our Process
          </SplitText>
          <RevealOnScroll delay={0.4}>
            <p className="mt-8 text-lg text-text-muted max-w-2xl leading-relaxed">
              Every project follows a structured yet flexible creative process,
              designed to reveal the unique character of your architecture
              through strategic visual storytelling.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-16 md:py-24 ${
                  i < steps.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span className="step-number">{step.number}</span>
                  <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-6">
                    {step.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`overflow-hidden h-[300px] md:h-[400px] ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
