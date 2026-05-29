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
    className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-red overflow-hidden flex items-center justify-center"
  >
    <span aria-hidden className="absolute inset-0 bg-brand-red origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
    {dir === "left"
      ? <ArrowLeft className="relative z-10 w-5 h-5 text-brand-red transition-colors duration-300 group-hover:text-brand-white" />
      : <ArrowRight className="relative z-10 w-5 h-5 text-brand-red transition-colors duration-300 group-hover:text-brand-white" />}
  </button>
);

export const ProjectGallery = ({ p }: { p: Project }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true, skipSnaps: false, containScroll: "trimSnaps" });
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
        stagger: 0.12,
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
    <section ref={sectionRef} className="bg-brand-white text-brand-black py-[20px] pb-[40px] md:py-[20px] md:pb-[40px] overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 md:gap-4 px-6 md:px-[60px]">
            {p.gallery.map((src, i) => (
              <div
                key={i}
                className="group pg-img-anim shrink-0 basis-[90%] md:basis-[80%] aspect-[4/5] md:aspect-[16/9] max-h-none md:max-h-[600px] 2xl:max-h-[650px] overflow-hidden rounded-none md:rounded"
                style={{ clipPath: "inset(0 50% 0 50%)" }}
              >
                <img
                  src={src}
                  alt={`${p.title} — imagen ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 px-6 md:px-[60px] max-w-[1200px] mx-auto flex items-center justify-between">
        <span className="font-display text-sm uppercase tracking-[0.15em] text-brand-red">{current} / {total}</span>
        <div className="flex gap-3">
          <NavBtn onClick={prev} dir="left" label="Anterior" />
          <NavBtn onClick={next} dir="right" label="Siguiente" />
        </div>
      </div>
    </section>
  );
};
