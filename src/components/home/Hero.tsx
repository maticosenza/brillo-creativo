import { useEffect, useRef } from "react";
import gsap from "gsap";

const WORDS = ["EVENTOS", "QUE", "DEJAN", "HUELLA"];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".hero-word", { clipPath: "inset(0 0 0 0)", opacity: 1 });
        gsap.set(".hero-fade", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ delay: 0.3 });

      WORDS.forEach((_, i) => {
        const main = `.hero-word-main-${i}`;
        const echo = `.hero-word-echo-${i}`;
        tl.fromTo(
          main,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 0.9, ease: "power4.out" },
          i * 0.15
        );
        tl.fromTo(
          echo,
          { clipPath: "inset(100% 0 0 0)", x: 0, opacity: 0 },
          {
            clipPath: "inset(0% 0 0 0)",
            x: 8,
            opacity: 0.6,
            duration: 0.9,
            ease: "power4.out",
          },
          i * 0.15 + 0.12
        );
      });

      tl.fromTo(
        ".hero-fade",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
        0.6
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-brand-red text-brand-white"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-celebrating-at-a-concert-4640-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-brand-red/55" aria-hidden />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display uppercase text-hero leading-[0.9]">
          {WORDS.map((w, i) => (
            <span
              key={w}
              className="block relative overflow-visible"
              aria-label={w}
            >
              <span
                className={`hero-word hero-word-main-${i} block`}
                style={{ clipPath: "inset(100% 0 0 0)" }}
              >
                {w}
              </span>
              <span
                aria-hidden
                className={`hero-word hero-word-echo-${i} block absolute inset-0`}
                style={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-fade mt-10 max-w-[600px] text-lg leading-relaxed opacity-95">
          Somos una productora que diseña y ejecuta experiencias de marca,
          eventos corporativos, lanzamientos y activaciones en toda Latinoamérica.
        </p>
      </div>

      <div className="hero-fade absolute bottom-[60px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <span className="relative block w-px h-[60px] bg-white/30 overflow-hidden">
          <span className="scroll-bar absolute top-0 left-0 w-full h-1/2 bg-brand-white" />
        </span>
        <span className="text-[11px] uppercase tracking-[0.3em] opacity-70">
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes scrollSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .scroll-bar { animation: scrollSweep 1.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .scroll-bar { animation: none; }
        }
      `}</style>
    </section>
  );
};
