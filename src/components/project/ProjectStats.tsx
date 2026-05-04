import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const fmt = (n: number) =>
  new Intl.NumberFormat("es-AR").format(Math.round(n));

const StatBox = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const numEl = numRef.current;
    if (!el || !numEl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el.querySelectorAll(".sb-edge"), { scaleX: 1, scaleY: 1 });
      numEl.textContent = fmt(value);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
        delay,
      });
      tl.fromTo(".sb-top",    { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power2.inOut" })
        .fromTo(".sb-right",  { scaleY: 0 }, { scaleY: 1, duration: 0.4, ease: "power2.inOut" })
        .fromTo(".sb-bottom", { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power2.inOut" })
        .fromTo(".sb-left",   { scaleY: 0 }, { scaleY: 1, duration: 0.4, ease: "power2.inOut" })
        .to({ n: 0 }, {
          n: value,
          duration: 2,
          ease: "power2.out",
          onUpdate() { numEl.textContent = fmt(this.targets()[0].n); },
        });
    }, el);

    return () => ctx.revert();
  }, [value, delay]);

  return (
    <div ref={ref} className="relative aspect-[4/3] p-12 md:p-20 flex flex-col justify-end">
      <span aria-hidden className="sb-top    absolute top-0    left-0  h-px w-full bg-brand-white origin-left" style={{ transform: "scaleX(0)" }} />
      <span aria-hidden className="sb-right  absolute top-0    right-0 w-px h-full bg-brand-white origin-top" style={{ transform: "scaleY(0)" }} />
      <span aria-hidden className="sb-bottom absolute bottom-0 right-0 h-px w-full bg-brand-white origin-right" style={{ transform: "scaleX(0)" }} />
      <span aria-hidden className="sb-left   absolute bottom-0 left-0  w-px h-full bg-brand-white origin-bottom" style={{ transform: "scaleY(0)" }} />

      <span ref={numRef} className="font-display uppercase leading-[0.9] text-numeral block">0</span>
      <span className="mt-4 text-[13px] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
};

export const ProjectStats = ({ p }: { p: Project }) => {
  return (
    <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatBox value={p.attendees} label="Asistentes" />
        <StatBox value={p.durationDays} label={p.durationDays === 1 ? "Jornada" : "Jornadas"} />
      </div>
    </section>
  );
};
