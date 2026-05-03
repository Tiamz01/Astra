"use client";

import { useEffect, useRef } from "react";

export default function Pricing() {
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
    <section id="pricing" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <span className="inline-block bg-pink-pill/30 text-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Pricing & Registration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Invest in Your <span className="gradient-coral-text">Future</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
        </div>

        <div className="max-w-lg mx-auto scroll-animate">
          <div className="bg-white rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 relative">
            {/* Top gradient bar */}
            <div className="h-2 gradient-coral" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: "shimmer 3s infinite" }} />
            </div>

            <div className="p-8 sm:p-10 text-center relative z-10">
              {/* Badge */}
              <span className="inline-block bg-blush text-coral text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                Full Program Access
              </span>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold gradient-coral-text">$100</span>
              </div>
              <p className="text-gray-body text-lg mb-6">
                or <span className="font-bold text-charcoal">₦130,000</span>
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-blush mb-6" />

              {/* Features list */}
              <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                {[
                  "6 comprehensive modules",
                  "3 months of live mentorship",
                  "Private Telegram community",
                  "Strategy review sessions",
                  "Certificate of completion",
                  "Lifetime access to materials",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blush text-coral flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-body">{item}</span>
                  </div>
                ))}
              </div>

              {/* Registration window */}
              <div className="bg-blush rounded-2xl p-4 mb-6">
                <p className="text-sm text-gray-body mb-1">Registration Window</p>
                <p className="text-lg font-bold text-charcoal">
                  April 20<sup>th</sup> — May 10<sup>th</sup>
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://t.me/astra_waitlist"
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-cta"
                className="w-full inline-flex items-center justify-center gap-2 gradient-coral text-white font-bold px-8 py-4 rounded-full btn-glow text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Join Telegram Waitlist</span>
              </a>

              <p className="text-xs text-gray-body mt-4">
                Secure your spot before it fills up
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
