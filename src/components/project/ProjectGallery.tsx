import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const NavBtn = ({ onClick, dir, label }: { onClick: () => void; dir: "left"|"right"; label: string }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="group relative w-14 h-14 rounded-full border border-brand-white overflow-hidden flex items-center justify-center"
  >
    <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
    {dir === "left"
      ? <ArrowLeft className="relative z-10 w-5 h-5 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />
      : <ArrowRight className="relative z-10 w-5 h-5 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />}
  </button>
);

export const ProjectGallery = ({ p }: { p: Project }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, align: "start", containScroll: "trimSnaps" });
  const [selected, setSelected] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".pg-img-anim", { clipPath: "inset(0 0 0 0)" });
      return;
    }
    const tween = gsap.fromTo(
      ".pg-img-anim",
      { clipPath: "inset(0 50% 0 50%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const total = String(p.gallery.length).padStart(2, "0");
  const current = String(selected + 1).padStart(2, "0");

  return (
    <section ref={sectionRef} className="bg-brand-red text-brand-white section-y overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 pl-12">
          {p.gallery.map((src, i) => (
            <div
              key={i}
              className={`shrink-0 basis-[80vw] aspect-[16/10] overflow-hidden ${i < 2 ? "pg-img-anim" : ""}`}
              style={i < 2 ? { clipPath: "inset(0 50% 0 50%)" } : undefined}
            >
              <img src={src} alt={`${p.title} — imagen ${i + 1}`} className="w-full h-full object-cover" loading={i < 2 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 px-12 flex items-center justify-between">
        <span className="text-sm uppercase tracking-[0.2em]">{current} / {total}</span>
        <div className="flex gap-3">
          <NavBtn onClick={prev} dir="left" label="Anterior" />
          <NavBtn onClick={next} dir="right" label="Siguiente" />
        </div>
      </div>
    </section>
  );
};
