import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import datawiseHpeBanner from "@/assets/datawise-hpe-banner.jpg";
import adidasBanner from "@/assets/adidas-banner.jpg";
import hclsoftwareBanner from "@/assets/hclsoftware-banner.jpg";
import atlassianBanner from "@/assets/atlassian-banner.jpg";

const slugify = (s: string) =>
  s.toLowerCase()
   .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
   .replace(/[^a-z0-9]+/g, "-")
   .replace(/(^-|-$)/g, "");

const PROJECTS = [
  { title: "Datawise x HPE", category: "Evento corporativo", img: datawiseHpeBanner },
  { title: "ADIDAS", category: "Evento deportivo", img: adidasBanner },
  { title: "HCLSoftware", category: "formula 1 ", img: hclsoftwareBanner },
  { title: "Atlassian", category: "evento corporativo", img: atlassianBanner },
  { title: "Cumbre LATAM", category: "Convención", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80" },
  { title: "Premiere Atlas", category: "Premiere / Red carpet", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80" },
];

const NavBtn = ({ onClick, dir, label }: { onClick: () => void; dir: "left"|"right"; label: string }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="group relative w-12 h-12 rounded-full border border-brand-white overflow-hidden flex items-center justify-center"
  >
    <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
    {dir === "left" ? (
      <ArrowLeft className="relative z-10 w-4 h-4 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />
    ) : (
      <ArrowRight className="relative z-10 w-4 h-4 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />
    )}
  </button>
);

export const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const [dragging, setDragging] = useState(false);

  // Mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [mobileIndex, setMobileIndex] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setMobileIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const go = useCallback((next: number) => {
    setIndex(((next % PROJECTS.length) + PROJECTS.length) % PROJECTS.length);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (dragging) return;
    timerRef.current = window.setTimeout(() => go(index + 1), 4200);
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [index, go, dragging]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };
  const onPointerUp = () => {
    if (dragStartX.current === null) return;
    const threshold = 50;
    if (dragDelta.current > threshold) go(index - 1);
    else if (dragDelta.current < -threshold) go(index + 1);
    dragStartX.current = null;
    dragDelta.current = 0;
    setDragging(false);
  };

  const current = PROJECTS[index];
  const slug = slugify(current.title);

  return (
    <section className="relative bg-brand-red text-brand-white overflow-hidden w-full px-6 md:px-12 pt-10 md:pt-16 pb-10 md:pb-14">
      {/* PROYECTOS title — half above, half overlapping image */}
      <h2
        aria-label="Proyectos"
        className="hidden md:block relative z-20 font-display uppercase leading-[0.85] tracking-[-0.02em] select-none pointer-events-none"
        style={{
          fontSize: "clamp(80px, 18vw, 260px)",
          color: "transparent",
          WebkitTextStroke: "2px #fcf7f5",
          marginBottom: "-0.5em",
        }}
      >
        PROYECTOS
      </h2>

      {/* MOBILE: carousel with overlapping title */}
      <div className="md:hidden relative flex flex-col">
        <h2
          aria-label="Proyectos"
          className="font-display uppercase tracking-[-0.03em] select-none pointer-events-none absolute z-20 m-0 text-left w-full"
          style={{
            fontSize: "clamp(56px, 13vw, 100px)",
            lineHeight: 0.85,
            color: "transparent",
            WebkitTextStroke: "0.8px #fcf7f5",
            top: "-20px",
            left: "-20px",
          }}
        >
          PROYECTOS
        </h2>
        <div className="overflow-hidden mt-[80px]" ref={emblaRef}>
          <div className="flex">
            {PROJECTS.map((p) => {
              const s = slugify(p.title);
              return (
                <div key={p.title} className="flex-[0_0_100%] min-w-0">
                  <Link to={`/proyectos/${s}`} className="relative block w-full aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover active:scale-105 transition-transform duration-300" draggable={false} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Footer: Button (left) + Name+Dots (right) */}
        <div className="flex justify-between items-start gap-5 mt-6">
          <div className="flex-shrink-0">
            <Link
              to="/proyectos"
              className="inline-flex items-center justify-center rounded-full border border-brand-white px-9 py-3.5 text-[12px] font-medium uppercase tracking-[0.15em] text-brand-white transition-all duration-300 active:bg-brand-white/10"
            >
              Ver más
            </Link>
          </div>
          <div className="flex-1 text-right">
            <h3 className="font-display uppercase text-brand-white m-0 mb-3" style={{ fontSize: "clamp(16px, 3vw, 20px)", letterSpacing: "-0.01em" }}>
              {String(mobileIndex + 1).padStart(2, "0")}. {PROJECTS[mobileIndex].title}
            </h3>
            <div className="flex justify-end gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir al proyecto ${i + 1}`}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{ background: i === mobileIndex ? "#fcf7f5" : "rgba(252,247,245,0.4)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: Image slideshow */}
      <div
        className="hidden md:block relative z-10 w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {PROJECTS.map((p, i) => (
          <img
            key={p.title}
            src={p.img}
            alt=""
            aria-hidden
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        {/* Side arrows over image */}
        <div
          className="absolute inset-y-0 left-3 md:left-6 z-20 flex items-center"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <NavBtn onClick={() => go(index - 1)} dir="left" label="Anterior" />
        </div>
        <div
          className="absolute inset-y-0 right-3 md:right-6 z-20 flex items-center"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <NavBtn onClick={() => go(index + 1)} dir="right" label="Siguiente" />
        </div>
      </div>

      {/* Bottom info + actions */}
      <div className="hidden md:block relative z-20 mt-8 md:mt-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Link to={`/proyectos/${slug}`} className="block group max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] opacity-80">{current.category}</span>
            <h3
              key={current.title}
              className="mt-3 font-display uppercase text-brand-white animate-fade-in"
              style={{ fontSize: "clamp(24px, 3.5vw, 48px)", lineHeight: 1 }}
            >
              {current.title}
            </h3>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/proyectos"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-brand-white"
            >
              <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-red">
                Ver más
              </span>
            </Link>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-8 flex gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ir al proyecto ${i + 1}`}
              className="h-[2px] flex-1 max-w-[60px] bg-brand-white/30 overflow-hidden"
            >
              <span
                className="block h-full bg-brand-white transition-transform duration-300 origin-left"
                style={{ transform: `scaleX(${i === index ? 1 : 0})` }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
