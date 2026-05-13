import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SERVICES } from "@/data/services";

const Servicios = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title={<>Servicios</>}
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80"
        alt="Evento producido por Caracter"
      />

      {/* Intro */}
      <section className="bg-brand-red text-brand-white pt-[80px] md:pt-[120px] pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2
            className="font-display uppercase"
            style={{ fontSize: "clamp(24px, 3.2vw, 48px)", lineHeight: 1.2 }}
          >
            Caracter Producciones ofrece soluciones integrales para eventos,
            desde la estrategia a la ejecución, cubrimos todo lo que tu evento necesita.
          </h2>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-brand-red text-brand-white px-6 md:px-12 pt-4 md:pt-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
              <Link
                to={`/servicios/${s.slug}`}
                className="group relative block aspect-[3/2] overflow-hidden"
              >
                <img
                  src={s.gallery[0]}
                  alt={s.title}
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
                  <h3 className="font-display uppercase text-h3 text-brand-white">{s.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </>
  );
};
export default Servicios;
