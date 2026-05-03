"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🎓",
    title: "Structured Learning",
    desc: "6 progressive modules from fundamentals to advanced strategies.",
  },
  {
    icon: "👥",
    title: "Community & Support",
    desc: "Join a private Telegram community of like-minded traders.",
  },
  {
    icon: "📊",
    title: "Practical Approach",
    desc: "Build and test your own trading systems with live analysis.",
  },
  {
    icon: "🏅",
    title: "Certified Completion",
    desc: "Earn a verified certificate to showcase your trading education.",
  },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <span className="inline-block bg-pink-pill/30 text-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About the Program
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            What is <span className="gradient-coral-text">Astra</span>?
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-body text-lg max-w-2xl mx-auto leading-relaxed">
            Astra is a premium 3-month intensive mentorship program designed to
            transform beginners into confident, strategic traders in the Forex and
            Synthetic Indices markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="scroll-animate">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Who is Astra for?</h3>
            <div className="space-y-4">
              {[
                "Complete beginners who want a clear, structured path into trading",
                "Aspiring traders who've tried learning alone but lack direction",
                "Anyone looking to build a sustainable income stream through the markets",
                "Students and professionals ready to invest in their financial education",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full gradient-coral flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-animate">
            <div className="bg-white rounded-3xl p-8 card-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-pill/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <h3 className="text-xl font-bold text-charcoal mb-4 relative z-10">What makes Astra different?</h3>
              <p className="text-gray-body leading-relaxed relative z-10 mb-6">
                Unlike generic courses, Astra is a <span className="font-semibold text-coral">mentorship</span> — not just
                curriculum. You get personal guidance, live sessions, strategy reviews,
                and a community that grows with you.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Live Sessions", "1-on-1 Guidance", "Strategy Reviews", "Community Access"].map((tag) => (
                  <span key={tag} className="bg-blush text-coral text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="scroll-animate bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-blush flex items-center justify-center mb-4 text-2xl">
                {f.icon}
              </div>
              <h4 className="text-lg font-bold text-charcoal mb-2">{f.title}</h4>
              <p className="text-sm text-gray-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
