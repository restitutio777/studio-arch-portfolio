"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-40">
      <section className="px-8 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-20">
            <SplitText
              tag="h1"
              className="text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight"
            >
              Get in Touch
            </SplitText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Contact info */}
            <div>
              <RevealOnScroll>
                <p className="text-lg text-text-muted leading-relaxed mb-12 max-w-md">
                  Have a project in mind? Let&apos;s discuss how we can bring your
                  architectural vision to life through strategic visual
                  storytelling.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <div className="mb-10">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-3">
                    Email
                  </span>
                  <MagneticButton>
                    <a
                      href="mailto:hello@studioarch.com"
                      className="text-2xl md:text-3xl font-light hover:text-text-muted transition-colors"
                    >
                      hello@studioarch.com
                    </a>
                  </MagneticButton>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="mb-10">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-3">
                    Location
                  </span>
                  <p className="text-sm">
                    Barcelona, Spain
                    <br />
                    Available worldwide
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-3">
                    Social
                  </span>
                  <div className="flex gap-6">
                    {["Instagram", "LinkedIn", "Behance"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: Form */}
            <RevealOnScroll delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-text transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-text transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-3">
                    Project Type
                  </label>
                  <input
                    type="text"
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-text transition-colors"
                    placeholder="Residential, Commercial, Cultural..."
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-text-muted block mb-3">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-text transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    className="bg-text text-text-light px-8 py-4 text-sm uppercase tracking-wider hover:bg-text/80 transition-colors"
                  >
                    Send Message
                  </button>
                </MagneticButton>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
