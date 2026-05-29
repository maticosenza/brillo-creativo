import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SEO } from "@/components/shared/SEO";
import { PROJECTS } from "@/data/projects";
import proyectosHero from "@/assets/proyectos-hero.jpg";

const Proyectos = () => {
  const filtered = PROJECTS;

  // Desktop layout pattern: rows of 3 squares, then 2 horizontal (full width)
  const rows: typeof filtered[] = [];
  const pattern = [3, 3, 2];
  let idx = 0;
  let pi = 0;
  while (idx < filtered.length) {
    const count = pattern[pi % pattern.length];
    rows.push(filtered.slice(idx, idx + count));
    idx += count;
    pi++;
  }

  return (
    <>
      <SEO
        title="Proyectos | Productora"
        description="Una selección de los eventos que marcaron a marcas y audiencias en los últimos años."
        canonical="https://productora.com/proyectos"
      />
      <PageHero
        title={<>Proyectos</>}
        image={proyectosHero}
        alt="Proyectos"
      />

      <section className="bg-brand-red text-brand-white px-4 md:px-6 py-20 md:py-24">
        <div className="flex flex-col gap-4 md:gap-5">
          {rows.map((row, ri) => {
            const isSquareRow = row.length === 3;
            const colsClass = row.length === 3
              ? "md:grid-cols-3"
              : row.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-1";
            return (
              <div key={ri} className={`grid grid-cols-1 gap-4 md:gap-5 ${colsClass}`}>
                {row.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                  >
                    <Link
                      to={`/proyectos/${p.slug}`}
                      className={`group relative block overflow-hidden aspect-[4/5] ${isSquareRow ? "md:aspect-square" : "md:aspect-[2/1]"}`}
                    >
                      <img
                        src={p.gridImage ?? p.heroImage ?? p.gallery[0]}
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
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center opacity-70 py-20">No hay proyectos en esta categoría todavía.</p>
        )}
      </section>

    </>
  );
};

export default Proyectos;