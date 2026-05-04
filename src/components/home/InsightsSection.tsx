import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { RevealHeading } from "./RevealHeading";

const POSTS = [
  { date: "15.03.2026", title: "Cómo diseñar un evento que se convierte en contenido", img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1000&q=80", slug: "evento-contenido" },
  { date: "02.03.2026", title: "5 tendencias de producción para 2026", img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1000&q=80", slug: "tendencias-2026" },
  { date: "18.02.2026", title: "El ROI de las activaciones de marca", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80", slug: "roi-activaciones" },
  { date: "30.01.2026", title: "Producción híbrida: presencial + streaming", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80", slug: "produccion-hibrida" },
];

export const InsightsSection = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, align: "start", containScroll: "trimSnaps" });

  return (
    <section className="bg-brand-black text-brand-white section-y overflow-hidden">
      <div className="px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <span className="eyebrow opacity-80">Insights</span>
          <RevealHeading text="Notas y novedades" className="mt-6 font-display uppercase text-h2" />
        </div>
        <Link to="/insights" className="underline-link text-sm uppercase tracking-[0.2em] font-medium self-start md:self-end">
          Ver todas →
        </Link>
      </div>

      <div className="mt-14 px-6 md:px-12">
        <div className="overflow-hidden -mx-6 md:-mx-12" ref={emblaRef}>
          <div className="flex gap-6 px-6 md:px-12">
            {POSTS.map((p) => (
              <article key={p.slug} className="group shrink-0 basis-[85vw] md:basis-[380px]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="pt-6">
                  <span className="text-[12px] uppercase tracking-[0.2em] opacity-60">{p.date}</span>
                  <h3 className="mt-3 font-display uppercase text-brand-white line-clamp-2"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1 }}>
                    {p.title}
                  </h3>
                  <Link to={`/insights/${p.slug}`} className="inline-block mt-5 underline-link text-sm uppercase tracking-[0.2em] font-medium">
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
