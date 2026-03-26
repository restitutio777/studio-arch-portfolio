"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const projectData: Record<string, any> = {
  "casa-serena": {
    title: "Casa Serena",
    tagline: "A meditation on light, stone and the Mediterranean horizon",
    category: "Residential",
    year: "2024",
    location: "Marbella, Spain",
    client: "Private Client",
    services: ["Art Direction", "3D Visualization", "Photography"],
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1100&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=1100&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
    ],
    description:
      "This project explores the dialogue between modern architecture and the Mediterranean landscape. Every frame was crafted to capture the interplay of natural light and sculptural form, revealing how spaces breathe and evolve throughout the day.",
    nextProject: {
      title: "The Horizon Pavilion",
      slug: "horizon-pavilion",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=500&fit=crop",
    },
  },
};

// Fallback for any slug
const defaultProject = projectData["casa-serena"];

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const project = defaultProject;

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.3 }
      );

      gsap.fromTo(
        heroRef.current!.querySelector("img"),
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <article>
      {/* Hero */}
      <div
        ref={heroRef}
        className="relative h-[70vh] md:h-[85vh] overflow-hidden"
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <h1
            ref={titleRef}
            className="text-text-light text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[1.05]"
            style={{ opacity: 0 }}
          >
            {project.title}
          </h1>
          <p className="text-text-light/70 text-lg mt-4 max-w-xl">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Metadata */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border pb-12 mb-12">
              {[
                { label: "Category", value: project.category },
                { label: "Year", value: project.year },
                { label: "Location", value: project.location },
                { label: "Client", value: project.client },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-2">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Description + Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <RevealOnScroll>
              <p className="text-lg leading-relaxed text-text-muted">
                {project.description}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-4">
                  Services
                </span>
                <ul className="space-y-2">
                  {project.services.map((s: string) => (
                    <li key={s} className="text-sm font-medium">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          {/* Gallery */}
          <div className="space-y-8">
            {project.images.map((img: string, i: number) => (
              <RevealOnScroll key={i}>
                <div
                  className={`overflow-hidden ${
                    i % 3 === 1
                      ? "md:w-2/3 md:ml-auto"
                      : i % 3 === 2
                      ? "md:w-2/3"
                      : "w-full"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Next Project */}
      {project.nextProject && (
        <Link
          href={`/work/${project.nextProject.slug}`}
          className="block group"
        >
          <div className="relative h-[50vh] overflow-hidden">
            <img
              src={project.nextProject.image}
              alt={project.nextProject.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-text/40 group-hover:bg-text/50 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-text-light">
              <span className="text-xs uppercase tracking-[0.3em] mb-4">
                Next Project
              </span>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase">
                {project.nextProject.title}
              </h2>
            </div>
          </div>
        </Link>
      )}
    </article>
  );
}
