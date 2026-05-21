import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DisplayHeading } from "@/components/shared/DisplayHeading";

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
        gsap.set(".hero-fade", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.9 }
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
          <source src="/videos/caracter-hero.mp4" type="video/mp4" />
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
        <div className="max-w-[80%]" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}>
          <DisplayHeading
            lines={["SPORT.", "BUSINESS.", "IMPACT."]}
            highlightedLine={2}
            highlightColor="#c0181b"
            textColor="#fcf7f5"
            glow
            align="left"
            size="hero"
            as="h1"
            trigger="typewriter"
          />
        </div>
      </div>

      <div className="hero-fade absolute bottom-[40px] left-0 right-0 z-10 px-[6vw]">
        <p
          className="uppercase opacity-90"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: 'clamp(13px, 3vw, 16px)',
            letterSpacing: '0.2em',
            wordSpacing: '0.2em',
            margin: 0,
          }}
        >
          Productora de eventos — Buenos Aires, AR
        </p>
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
