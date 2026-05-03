"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Amara O.",
    role: "Forex Trader",
    text: "Astra completely changed my perspective on trading. The structured modules made complex concepts feel approachable. Divya's guidance was personal and transformative.",
    rating: 5,
  },
  {
    name: "Tunde K.",
    role: "Synthetic Indices Trader",
    text: "Before Astra, I was gambling in the markets. Now I have a system, a strategy, and the confidence to execute. The community alone was worth the investment.",
    rating: 5,
  },
  {
    name: "Chioma E.",
    role: "Part-time Trader",
    text: "The best decision I made this year. The technical analysis module opened my eyes, and the trading system development gave me my edge. Highly recommend!",
    rating: 5,
  },
  {
    name: "David A.",
    role: "Full-time Trader",
    text: "Divya's teaching style is unmatched. She breaks down everything step by step. I went from zero knowledge to placing confident trades within weeks.",
    rating: 5,
  },
  {
    name: "Fatima M.",
    role: "University Student",
    text: "As a student, the price was very accessible. The value I got from Astra far exceeds what I've seen in courses 3x the price. The certificate is a bonus!",
    rating: 5,
  },
  {
    name: "Emmanuel J.",
    role: "Side Hustle Trader",
    text: "The strategy & execution module was a game-changer. I finally understand risk management and position sizing. My win rate has improved significantly.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".scroll-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-pink-pill/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <span className="inline-block bg-pink-pill/30 text-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            What Students <span className="gradient-coral-text">Say</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="scroll-animate bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-4xl text-blush font-serif select-none">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-coral" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-gray-body leading-relaxed mb-6">{t.text}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-blush">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full gradient-coral flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="text-xs text-gray-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
