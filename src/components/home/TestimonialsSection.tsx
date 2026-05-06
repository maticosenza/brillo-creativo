import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RevealHeading } from "./RevealHeading";

const TESTIMONIALS = [
  {
    client: "HILTON",
    quote: "El equipo nos sorprendió con una gala internacional impecable. La atención al detalle, la dirección creativa y la coordinación operativa estuvieron a un nivel difícil de igualar.",
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
  },
  {
    client: "GENESIS",
    quote: "Lanzamos nuestro modelo más importante del año y todo salió mejor de lo esperado. Producción, escenografía y guión se sintieron como una sola pieza coherente.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  },
  {
    client: "VODAFONE",
    quote: "Una activación masiva en cinco ciudades en simultáneo. Logística, talento y mensaje se mantuvieron alineados de principio a fin. Volveríamos a trabajar con ellos sin dudarlo.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
  {
    client: "IFS",
    quote: "Nuestra convención corporativa pasó de ser un compromiso anual a convertirse en el evento más esperado por el equipo. Resultados claros y una experiencia memorable.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
];

const AUTOPLAY_MS = 7000;

const ClientLogo = ({ name }: { name: string }) => (
  <svg viewBox="0 0 240 50" role="img" aria-label={name} className="h-10 w-auto">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
      fill="#fcf7f5" fontFamily="Anton, Impact, sans-serif" fontSize="36" letterSpacing="3">
      {name}
    </text>
  </svg>
);

export const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const tickRef = useRef<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    tickRef.current = id;
    return () => window.clearInterval(id);
  }, [emblaApi, paused]);

  const goTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section
      className="bg-brand-red text-brand-white section-y px-6 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="text-center max-w-3xl mx-auto">
        <span className="eyebrow opacity-90">Lo que dicen</span>
        <RevealHeading text="Testimonios" className="mt-6 font-display uppercase text-h2" />
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.client} className="relative shrink-0 grow-0 basis-full px-2">
                <div
                  className={`text-center transition-opacity duration-700 ${
                    selected === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    aria-hidden
                    className="font-display leading-none opacity-40"
                    style={{ fontSize: "clamp(120px, 18vw, 280px)" }}
                  >
                    “
                  </div>
                  <p
                    className="mx-auto -mt-8 max-w-[800px] font-body leading-[1.5]"
                    style={{ fontSize: "clamp(22px, 2.4vw, 26px)" }}
                  >
                    {t.quote}
                  </p>
                  <div className="mt-10 flex flex-col items-center gap-8">
                    <ClientLogo name={t.client} />
                    <img
                      src={t.img}
                      alt={`Evento producido para ${t.client}`}
                      className="w-[200px] h-[140px] object-cover md:hidden"
                      loading="lazy"
                    />
                  </div>
                </div>
                <img
                  src={t.img}
                  alt=""
                  aria-hidden
                  className={`hidden md:block absolute right-0 bottom-0 w-[200px] h-[140px] object-cover transition-opacity duration-700 ${
                    selected === i ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonio ${i + 1}`}
              className={`relative h-[2px] w-10 overflow-hidden ${
                selected === i ? "bg-brand-white" : "bg-white/20 border border-white/30"
              }`}
            >
              {selected === i && !paused && (
                <span
                  key={`fill-${i}-${selected}`}
                  className="absolute inset-0 bg-brand-white origin-left"
                  style={{ animation: `tFill ${AUTOPLAY_MS}ms linear forwards` }}
                />
              )}
              {selected === i && paused && (
                <span className="absolute inset-0 bg-brand-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </section>
  );
};
