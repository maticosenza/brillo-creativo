import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { Project } from "@/data/projects";
export const ProjectBanner = ({ p }: { p: Project }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".pb-img", { clipPath: "inset(0 0 0 0)" });
      gsap.set(".pb-letter", { y: 0, opacity: 1 });
      gsap.set(".pb-meta", { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".pb-img",
        { clipPath: "inset(50% 50% 50% 50%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.out" }
      );
      tl.fromTo(".pb-letter",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.025 },
        "-=0.6"
      );
      tl.fromTo(".pb-meta",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.8
      );
    }, el);

    return () => ctx.revert();
  }, [p.slug]);

  const letters = p.title.split("");

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-brand-black text-brand-white">
      <div className="absolute inset-0 pb-img" style={{ clipPath: "inset(50% 50% 50% 50%)" }}>
        <img src={p.gallery[0]} alt={p.title} className="w-full h-full object-cover" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85" />

      <div className="absolute left-0 bottom-0 z-10 p-8 md:p-16 max-w-[1200px]">
        <span className="pb-meta block eyebrow opacity-90" style={{ opacity: 0 }}>{p.category}</span>
        <p className="pb-meta mt-4 text-sm opacity-70 uppercase tracking-[0.15em]" style={{ opacity: 0 }}>
          {p.year} — {p.location}
        </p>
        <h1 className="mt-6 font-display uppercase leading-[0.9]"
          style={{ fontSize: "clamp(48px, 9vw, 140px)" }}
          aria-label={p.title}
        >
          {letters.map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span className="pb-letter inline-block" style={{ opacity: 0 }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};
