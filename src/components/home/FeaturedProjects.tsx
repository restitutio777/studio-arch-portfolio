"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

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
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 md:py-44 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16 md:mb-20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-text-muted block mb-5">
                Selected Projects
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold uppercase leading-[1.1] tracking-[-0.02em]">
                Featured Work
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-3 text-[13px] text-text-muted hover:text-text transition-colors group"
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

        {/* Grid — 2-column with alternating heights */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`project-card group block ${
                i % 2 === 1 ? "md:mt-20" : ""
              }`}
              style={{ opacity: 0 }}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <h3 className="text-[17px] font-medium tracking-[-0.01em]">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-text-muted mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-[13px] text-text-muted">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
