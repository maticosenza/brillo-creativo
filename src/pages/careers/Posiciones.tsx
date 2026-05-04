import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { RevealHeading } from "@/components/home/RevealHeading";
import { CtaSection } from "@/components/home/CtaSection";

const AREAS = ["Todas", "Producción", "Creativo", "Audiovisual", "Operaciones", "Cuentas"] as const;

const ROLES = [
  { title: "Productor/a senior de eventos", mode: "Híbrido — Buenos Aires", area: "Producción" },
  { title: "Director/a creativo/a", mode: "Presencial — Buenos Aires", area: "Creativo" },
  { title: "Productor/a audiovisual", mode: "Híbrido — Buenos Aires", area: "Audiovisual" },
  { title: "Coordinador/a de logística", mode: "Presencial — Buenos Aires", area: "Operaciones" },
  { title: "Account manager", mode: "Híbrido — Buenos Aires", area: "Cuentas" },
  { title: "Director/a de arte", mode: "Híbrido — Buenos Aires", area: "Creativo" },
  { title: "Productor/a junior", mode: "Presencial — Buenos Aires", area: "Producción" },
];

const Posiciones = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [area, setArea] = useState<typeof AREAS[number]>("Todas");
  const filtered = useMemo(() => area === "Todas" ? ROLES : ROLES.filter(r => r.area === area), [area]);

  return (
    <>
      <IntroBanner lines={[["POSICIONES"], ["ABIERTAS"]]} subtitle="Buscamos personas para sumarse al equipo en estas búsquedas activas." />
      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <RevealHeading text="Sumate al equipo" className="font-display uppercase text-h2 max-w-[14ch]" />
          <ul className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <li key={a}>
                <button
                  onClick={() => setArea(a)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                    area === a ? "bg-brand-white text-brand-black border-brand-white" : "border-white/30 text-brand-white hover:border-white"
                  }`}
                >{a}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-14">
          {filtered.map((r, i) => (
            <motion.li key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-t border-white/10 last:border-b">
              <a href={`mailto:hola@productora.com?subject=${encodeURIComponent("Postulación — " + r.title)}`}
                 className="group relative flex items-center justify-between gap-6 py-8 px-2 md:px-4 overflow-hidden">
                <span aria-hidden className="absolute inset-0 bg-brand-red origin-left scale-x-0 transition-transform duration-[400ms] ease-out group-hover:scale-x-100" />
                <h3 className="relative z-10 font-display uppercase text-2xl md:text-[32px] leading-none">{r.title}</h3>
                <span className="relative z-10 flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] opacity-80 shrink-0">
                  <span className="hidden sm:inline">{r.mode}</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
      <CtaSection lines={[["¿NO", "VES"], ["TU", "POSICIÓN?"]]} description="Mandanos tu CV. Si encaja con un proyecto, te escribimos." />
    </>
  );
};
export default Posiciones;
