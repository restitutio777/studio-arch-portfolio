"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SplitText from "@/components/ui/SplitText";

const projects = [
  {
    title: "Casa Serena",
    category: "Residential",
    year: "2024",
    slug: "casa-serena",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop",
  },
  {
    title: "The Horizon Pavilion",
    category: "Cultural",
    year: "2023",
    slug: "horizon-pavilion",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
  },
  {
    title: "Oasis Tower",
    category: "Commercial",
    year: "2024",
    slug: "oasis-tower",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1000&fit=crop",
  },
  {
    title: "Villa Mirador",
    category: "Residential",
    year: "2023",
    slug: "villa-mirador",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
  },
];

export default function FeaturedProjects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-4">
                Selected Projects
              </span>
              <SplitText
                tag="h2"
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight"
              >
                Featured Work
              </SplitText>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors group"
            >
              View all projects
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>

        {/* Asymmetric grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`project-card group block ${
                i % 3 === 0 ? "md:row-span-2" : ""
              }`}
              style={{ opacity: 0 }}
            >
              <div
                className={`relative overflow-hidden bg-text/5 ${
                  i % 3 === 0 ? "h-[500px] md:h-[700px]" : "h-[350px] md:h-[450px]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-text/0 group-hover:bg-text/10 transition-colors duration-500" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-sm text-text-muted">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
