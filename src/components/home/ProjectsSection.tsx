import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealHeading } from "./RevealHeading";

const slugify = (s: string) =>
  s.toLowerCase()
   .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
   .replace(/[^a-z0-9]+/g, "-")
   .replace(/(^-|-$)/g, "");

const PROJECTS = [
  { title: "Gala anual Fortune 500", category: "Evento corporativo", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80" },
  { title: "Lanzamiento línea 2026", category: "Lanzamiento de producto", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80" },
  { title: "Festival Vértice", category: "Festival de música", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1400&q=80" },
  { title: "Activación mundial", category: "Activación de marca", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80" },
  { title: "Cumbre LATAM", category: "Convención", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80" },
  { title: "Premiere Atlas", category: "Premiere / Red carpet", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80" },
];

const NavBtn = ({ onClick, dir, label }: { onClick: () => void; dir: "left"|"right"; label: string }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="group relative w-14 h-14 rounded-full border border-brand-white overflow-hidden flex items-center justify-center"
  >
    <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
    {dir === "left" ? (
      <ArrowLeft className="relative z-10 w-5 h-5 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />
    ) : (
      <ArrowRight className="relative z-10 w-5 h-5 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />
    )}
  </button>
);

export const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [, force] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => force((n) => n + 1);
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-brand-red text-brand-white section-y overflow-hidden">
      <div className="px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-3xl">
          <span className="eyebrow opacity-90">Proyectos destacados</span>
          <RevealHeading
            text="Trabajos recientes"
            className="mt-6 font-display uppercase text-h2"
          />
        </div>
        <div className="flex gap-3">
          <NavBtn onClick={prev} dir="left" label="Anterior" />
          <NavBtn onClick={next} dir="right" label="Siguiente" />
        </div>
      </div>

      <div className="mt-16 px-6 md:px-12">
        <div className="overflow-hidden -mx-6 md:-mx-12" ref={emblaRef}>
          <div className="flex gap-6 px-6 md:px-12">
            {PROJECTS.map((p) => {
              const slug = slugify(p.title);
              return (
                <Link
                  key={slug}
                  to={`/proyectos/${slug}`}
                  className="group relative shrink-0 basis-[90vw] md:basis-[75vw] aspect-[4/5] max-h-[70vh] overflow-hidden block"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

                  <span
                    aria-hidden
                    className="absolute top-6 right-6 w-12 h-12 rounded-full border border-brand-white flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    <ArrowUpRight className="w-5 h-5 text-brand-white" />
                  </span>

                  <div className="absolute left-8 bottom-8 right-8 z-10">
                    <span className="text-xs uppercase tracking-[0.2em] opacity-90">{p.category}</span>
                    <h3 className="mt-3 font-display uppercase text-h3 text-brand-white">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/proyectos"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-white px-8 py-4 text-[13px] font-medium uppercase tracking-wider text-brand-red border border-brand-white"
          >
            <span aria-hidden className="absolute inset-0 bg-brand-red origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-white">
              Ver todos
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
