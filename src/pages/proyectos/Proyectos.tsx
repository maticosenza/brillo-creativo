import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { CtaSection } from "@/components/home/CtaSection";
import { SEO } from "@/components/shared/SEO";
import { PROJECTS } from "@/data/projects";

const CATEGORIES = [
  "Todos",
  "Evento corporativo",
  "Lanzamiento de producto",
  "Festival de música",
  "Activación de marca",
  "Convención",
  "Premiere / Red carpet",
];

const Proyectos = () => {
  const [active, setActive] = useState("Todos");

  const filtered = useMemo(
    () => (active === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <SEO
        title="Proyectos | Productora"
        description="Una selección de los eventos que marcaron a marcas y audiencias en los últimos años."
        canonical="https://productora.com/proyectos"
      />
      <IntroBanner
        lines={[["NUESTROS"], ["PROYECTOS"]]}
        subtitle="Una selección de los eventos que marcaron a marcas y audiencias en los últimos años."
        height="50vh"
      />

      <div className="sticky top-[72px] z-30 bg-brand-black/95 backdrop-blur border-b border-white/10">
        <div className="px-6 md:px-12 py-6 overflow-x-auto">
          <ul className="flex gap-3 min-w-max">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <li key={c}>
                  <button
                    onClick={() => setActive(c)}
                    className={`rounded-full border border-brand-white uppercase text-[13px] tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "bg-brand-white text-brand-red"
                        : "bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-red"
                    }`}
                    style={{ padding: "12px 24px" }}
                  >
                    {c}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <section className="bg-brand-black text-brand-white px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
              >
                <Link
                  to={`/proyectos/${p.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={p.gallery[0]}
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
                    <h3 className="mt-3 font-display uppercase text-h3 text-brand-white">{p.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center opacity-70 py-20">No hay proyectos en esta categoría todavía.</p>
        )}
      </section>

      <CtaSection lines={[["¿TENÉS", "UN"], ["PROYECTO?"]]} />
    </>
  );
};

export default Proyectos;