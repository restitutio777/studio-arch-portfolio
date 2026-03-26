"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "PROCESS", href: "/process" },
  { label: "CONTACT", href: "/contact" },
];

const menuImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=500&fit=crop",
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!linksRef.current || !imagesRef.current) return;

    const linkItems = linksRef.current.querySelectorAll(".menu-link");
    const imageItems = imagesRef.current.querySelectorAll(".menu-img");

    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.to(linkItems, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(imageItems, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.4,
      });
    } else {
      document.body.style.overflow = "";

      gsap.to(linkItems, {
        y: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.04,
        ease: "power3.in",
      });

      gsap.to(imageItems, {
        y: 20,
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power3.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className={`menu-overlay fixed inset-0 z-[55] bg-bg flex ${
        isOpen ? "is-open pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="flex w-full h-full">
        {/* Left: Links */}
        <div
          ref={linksRef}
          className="flex-1 flex flex-col justify-center gap-2 px-8 md:px-20"
        >
          {menuLinks.map((link) => (
            <div key={link.href} className="overflow-hidden">
              <Link
                href={link.href}
                onClick={onClose}
                className="menu-link block text-[clamp(3rem,8vw,7rem)] font-serif font-light leading-[1.1] tracking-tight text-text hover:text-text-muted transition-colors duration-300"
                style={{ opacity: 0, transform: "translateY(40px)" }}
              >
                {link.label}
              </Link>
            </div>
          ))}

          {/* Social links */}
          <div className="mt-12 flex gap-6">
            <span className="text-sm text-text-muted uppercase tracking-widest">
              Connect with me
            </span>
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-text/20 flex items-center justify-center hover:bg-text hover:text-text-light transition-all"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-text/20 flex items-center justify-center hover:bg-text hover:text-text-light transition-all"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Floating images (desktop only) */}
        <div
          ref={imagesRef}
          className="hidden lg:flex flex-1 items-center justify-center gap-8 p-12"
        >
          {menuImages.map((src, i) => (
            <div
              key={i}
              className="menu-img relative w-48 overflow-hidden rounded-sm"
              style={{
                height: `${280 + i * 40}px`,
                opacity: 0,
                transform: `translateY(20px) scale(0.95)`,
                marginTop: i === 1 ? "-60px" : i === 2 ? "40px" : "0",
              }}
            >
              <img
                src={src}
                alt="Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
