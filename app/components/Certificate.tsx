"use client";

import { useState, useEffect, useRef } from "react";

export default function Certificate() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg("Please enter your email address");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulated check — replace with actual API call
    setTimeout(() => {
      setStatus("error");
      setErrorMsg("Certificate portal opens after program completion. Stay tuned!");
    }, 1500);
  };

  return (
    <section id="certificate" ref={sectionRef} className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blush rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 scroll-animate">
          <span className="inline-block bg-pink-pill/30 text-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Certificate Portal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Get Your <span className="gradient-coral-text">Certificate</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-body text-lg max-w-xl mx-auto">
            Completed the program? Enter your registered email below to access and download your certificate.
          </p>
        </div>

        <div className="max-w-md mx-auto scroll-animate">
          <div className="bg-white rounded-3xl p-8 card-shadow relative overflow-hidden">
            {/* Decorative border */}
            <div className="absolute inset-2 rounded-2xl border-2 border-dashed border-blush pointer-events-none" />

            <div className="relative z-10">
              {/* Certificate icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blush flex items-center justify-center">
                <svg className="w-10 h-10 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="cert-email" className="block text-sm font-medium text-charcoal mb-2">
                    Registered Email
                  </label>
                  <input
                    id="cert-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus("idle");
                    }}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-blush bg-blush-light/30 text-charcoal placeholder-gray-body/50 focus:outline-none focus:border-coral transition-colors duration-300 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  id="cert-submit"
                  disabled={status === "loading"}
                  className="w-full gradient-coral text-white font-semibold py-3 rounded-xl btn-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Checking...</span>
                    </>
                  ) : (
                    <span>Access Certificate</span>
                  )}
                </button>
              </form>

              {/* Status messages */}
              {status === "error" && (
                <div className="mt-4 p-3 rounded-xl bg-blush text-sm text-coral text-center">
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="mt-4 p-3 rounded-xl bg-green-50 text-sm text-green-600 text-center">
                  Certificate found! Downloading...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
