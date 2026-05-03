"use client";

import { useEffect, useRef } from "react";

const modules = [
  {
    num: "01",
    title: "Forex Trading",
    subtitle: "Starter Course",
    desc: "Master the fundamentals of currency markets, pairs, pips, lot sizing, and your first live trades.",
    color: "from-coral to-rose-red",
  },
  {
    num: "02",
    title: "Synthetic Indices",
    subtitle: "Starter Course",
    desc: "Understand volatility indices, crash/boom markets, and how to trade synthetics profitably.",
    color: "from-rose-red to-coral",
  },
  {
    num: "03",
    title: "Technical Analysis",
    subtitle: "Core Skills",
    desc: "Chart patterns, support/resistance, candlestick formations, and indicator mastery.",
    color: "from-coral to-rose-red",
  },
  {
    num: "04",
    title: "Strategy & Execution",
    subtitle: "Advanced",
    desc: "Build winning strategies, manage risk, and develop the discipline to execute consistently.",
    color: "from-rose-red to-coral",
  },
  {
    num: "05",
    title: "Trading System Dev",
    subtitle: "Systems",
    desc: "Create, backtest, and optimize your own trading systems for consistent results.",
    color: "from-coral to-rose-red",
  },
  {
    num: "06",
    title: "Advanced Guidance",
    subtitle: "Mastery",
    desc: "Portfolio management, psychology, scaling, and preparing for full-time trading.",
    color: "from-rose-red to-coral",
  },
];

export default function Curriculum() {
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
    <section id="curriculum" ref={sectionRef} className="py-24 sm:py-32 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blush-light/30 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <span className="inline-block bg-pink-pill/30 text-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            6 Modules to <span className="gradient-coral-text">Mastery</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-body text-lg max-w-2xl mx-auto">
            A carefully structured journey from foundational concepts to advanced trading mastery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="scroll-animate group bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border border-blush/50"
            >
              {/* Module number watermark */}
              <span className="absolute top-4 right-4 text-6xl font-extrabold text-blush/60 select-none group-hover:text-pink-pill/40 transition-colors duration-500">
                {mod.num}
              </span>

              {/* Hover gradient accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mod.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <div className="relative z-10">
                <span className="inline-block bg-blush text-coral text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {mod.subtitle}
                </span>
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-coral transition-colors duration-300">
                  {mod.title}
                </h3>
                <p className="text-sm text-gray-body leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
