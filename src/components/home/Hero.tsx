import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const WORDS = [
  { text: "SPORT.", black: false },
  { text: "BUSINESS.", black: false },
  { text: "IMPACT.", black: true },
];

const WHITE_GLOW =
  "0 0 40px rgba(252, 247, 245, 0.25), 0 0 80px rgba(252, 247, 245, 0.15)";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    // @ts-expect-error - non-standard API
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slow = conn && (conn.effectiveType === "2g" || conn.effectiveType === "slow-2g" || conn.saveData);
    if (slow) return;
    setLoadVideo(true);
  }, []);

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
        tl.fromTo(
          main,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 0.9, ease: "power4.out" },
          i * 0.15
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
      {loadVideo ? (
        <video
          key="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/caracter-hero-poster.jpg"
        >
          <source src="/videos/caracter-hero.webm" type="video/webm" media="(min-width: 768px)" />
          <source src="/videos/caracter-hero.mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/videos/caracter-hero-mobile.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/videos/caracter-hero-poster.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-brand-red/40" aria-hidden />

      <div className="relative z-10 h-full flex flex-col justify-center" style={{ paddingLeft: "6vw", paddingRight: "6vw" }}>
        <h1
          className="font-display uppercase text-hero leading-[0.9] text-left max-w-[80%]"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}
        >
          {WORDS.map((w, i) => (
            <span
              key={w.text}
              className={`block relative overflow-hidden ${w.black ? "text-brand-black" : ""}`}
              aria-label={w.text}
            >
              <span
                className={`hero-word hero-word-main-${i} block`}
                style={{
                  clipPath: "inset(100% 0 0 0)",
                  textShadow: w.black ? "none" : WHITE_GLOW,
                }}
              >
                {w.text}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-fade absolute bottom-[40px] left-0 right-0 z-10 px-[6vw]">
        <span className="text-[11px] uppercase tracking-[0.3em] opacity-80">
          Agencia de producción de eventos — Buenos Aires, AR
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
