"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";

const categories = ["All", "Residential", "Commercial", "Cultural", "Hospitality"];

const projects = [
  {
    title: "Casa Serena",
    category: "Residential",
    year: "2024",
    slug: "casa-serena",
    location: "Marbella, Spain",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop",
  },
  {
    title: "The Horizon Pavilion",
    category: "Cultural",
    year: "2023",
    slug: "horizon-pavilion",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
  },
  {
    title: "Oasis Tower",
    category: "Commercial",
    year: "2024",
    slug: "oasis-tower",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1000&fit=crop",
  },
  {
    title: "Villa Mirador",
    category: "Residential",
    year: "2023",
    slug: "villa-mirador",
    location: "Ibiza, Spain",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
  },
  {
    title: "Lumina Hotel",
    category: "Hospitality",
    year: "2024",
    slug: "lumina-hotel",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=1000&fit=crop",
  },
  {
    title: "Urban Canvas",
    category: "Commercial",
    year: "2023",
    slug: "urban-canvas",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".work-card");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <SplitText
            tag="h1"
            className="text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight"
          >
            Selected Work
          </SplitText>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                activeCategory === cat
                  ? "text-text font-medium"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filtered.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`work-card group block ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
              style={{ opacity: 0 }}
            >
              <div
                className={`relative overflow-hidden ${
                  i % 3 === 0
                    ? "h-[400px] md:h-[600px]"
                    : "h-[350px] md:h-[450px]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-text/0 group-hover:bg-text/10 transition-colors duration-500" />

                {/* Hover overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-text-light text-xs uppercase tracking-widest">
                    {project.location}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-medium group-hover:text-text-muted transition-colors">
                    {project.title}
                  </h2>
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
