"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const drawCandle = (
      x: number,
      open: number,
      close: number,
      high: number,
      low: number,
      width: number,
      bullish: boolean
    ) => {
      const color = bullish
        ? "rgba(232, 82, 74, 0.15)"
        : "rgba(244, 167, 167, 0.2)";
      const wickColor = bullish
        ? "rgba(232, 82, 74, 0.1)"
        : "rgba(244, 167, 167, 0.15)";

      // Wick
      ctx.strokeStyle = wickColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x + width / 2, high);
      ctx.lineTo(x + width / 2, low);
      ctx.stroke();

      // Body
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(x, Math.min(open, close), width, Math.abs(close - open) || 2, 2);
      ctx.fill();
    };

    const animate = () => {
      time += 0.005;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const candleWidth = 12;
      const gap = 6;
      const numCandles = Math.floor(w / (candleWidth + gap)) + 2;
      const baseY = h * 0.55;

      for (let i = 0; i < numCandles; i++) {
        const x = i * (candleWidth + gap);
        const phase = time + i * 0.3;
        const trend = Math.sin(phase * 0.5) * 40;
        const volatility = Math.sin(phase * 1.5) * 20 + 25;

        const mid = baseY + trend;
        const open = mid - volatility * 0.3;
        const close = mid + volatility * 0.3;
        const high = Math.min(open, close) - Math.random() * 15 - 5;
        const low = Math.max(open, close) + Math.random() * 15 + 5;
        const bullish = Math.sin(phase) > 0;

        drawCandle(x, open, close, high, low, candleWidth, bullish);
      }

      // Moving average line
      ctx.strokeStyle = "rgba(232, 82, 74, 0.12)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < w; x += 3) {
        const y =
          baseY +
          Math.sin(time * 0.5 + x * 0.005) * 35 +
          Math.sin(time * 0.8 + x * 0.01) * 15;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Second MA line
      ctx.strokeStyle = "rgba(244, 167, 167, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < w; x += 3) {
        const y =
          baseY +
          Math.sin(time * 0.4 + x * 0.006 + 1) * 30 +
          Math.sin(time * 0.7 + x * 0.012) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated chart background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-pink-pill/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl animate-float delay-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 card-shadow mb-6">
              <span className="w-2 h-2 rounded-full gradient-coral animate-pulse" />
              <span className="text-sm font-medium text-gray-body">
                Divya Special Presents
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none mb-4">
              <span className="gradient-coral-text">Astra</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-charcoal mb-2">
              A 3-Month Intensive Mentorship
            </p>
            <p className="text-lg text-gray-body mb-8 max-w-lg">
              Master <span className="font-semibold text-coral">Forex</span> &{" "}
              <span className="font-semibold text-coral">
                Synthetic Indices Trading
              </span>{" "}
              with expert guidance, proven strategies, and a supportive
              community.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/astra_waitlist"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta"
                className="gradient-coral text-white font-semibold px-8 py-4 rounded-full btn-glow text-base inline-flex items-center gap-2"
              >
                <span>Join the Waitlist</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#about"
                className="bg-white/80 backdrop-blur text-charcoal font-semibold px-8 py-4 rounded-full card-shadow hover:card-shadow-hover transition-all duration-300 text-base"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {[
                { value: "6", label: "Modules" },
                { value: "3", label: "Months" },
                { value: "$100", label: "Investment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-coral-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-body mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Mascot Placeholder */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in-right">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-pill/40 animate-spin" style={{ animationDuration: "20s" }} />

              {/* Mascot placeholder */}
              <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-white/60 backdrop-blur card-shadow flex items-center justify-center overflow-hidden">
                {/* Replace this div with your mascot image */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-coral flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-body font-medium">
                    Divya Special
                  </p>
                  <p className="text-xs text-pink-pill mt-1">Your Trading Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-body font-medium">Scroll</span>
        <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
