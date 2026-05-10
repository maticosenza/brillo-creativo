import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Flame, Users, Eye } from "lucide-react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { RevealHeading } from "@/components/home/RevealHeading";
import { BulletList } from "@/components/shared/BulletList";

const VALUES = [
  { icon: Hammer, title: "Craft", desc: "Cada decisión está cuidada. Lo que entregamos tiene oficio detrás." },
  { icon: Flame,  title: "Intensidad", desc: "Trabajamos rápido y con foco. Vivimos los proyectos." },
  { icon: Users,  title: "Equipo", desc: "Decisiones compartidas. Crédito compartido. Sin egos." },
  { icon: Eye,    title: "Detalle", desc: "El detalle no es un extra: es lo que hace memorable un evento." },
];

const BENEFITS = [
  "Proyectos con marcas líderes de LATAM",
  "Modalidad híbrida y horarios flexibles",
  "Vacaciones extendidas y semana off invierno",
  "Presupuesto anual de formación",
  "Cobertura médica premium",
  "Acceso a producciones internas y festivales",
  "Equipamiento a medida del rol",
  "Bonus anual por proyecto",
];

const ROLES = [
  { title: "Productor/a senior de eventos", mode: "Híbrido — Buenos Aires" },
  { title: "Director/a creativo/a", mode: "Presencial — Buenos Aires" },
  { title: "Productor/a audiovisual", mode: "Híbrido — Buenos Aires" },
  { title: "Coordinador/a de logística", mode: "Presencial — Buenos Aires" },
  { title: "Account manager", mode: "Híbrido — Buenos Aires" },
];

const Careers = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <IntroBanner
        lines={[["TRABAJÁ"], ["CON", "NOSOTROS"]]}
        subtitle="Buscamos personas que disfruten producir experiencias memorables."
        height="70vh"
      />

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="max-w-3xl">
          <span className="eyebrow opacity-80">Nuestra cultura</span>
          <RevealHeading text="Cuatro valores no negociables" className="mt-6 font-display uppercase text-h2" />
        </div>
        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {VALUES.map((v) => (
            <li key={v.title} className="flex flex-col gap-5 max-w-md">
              <v.icon className="w-10 h-10 stroke-[1.25]" />
              <h3 className="font-display uppercase text-h3">{v.title}</h3>
              <p className="text-base leading-[1.6] text-brand-white/90">{v.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="md:col-span-5">
            <span className="eyebrow opacity-90">Beneficios</span>
            <RevealHeading text="Lo que ofrecemos" className="mt-6 font-display uppercase text-h2" />
          </div>
          <div className="md:col-start-7 md:col-span-6">
            <BulletList items={BENEFITS} dashColor="bg-brand-white" />
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="max-w-3xl">
          <span className="eyebrow opacity-80">Posiciones abiertas</span>
          <RevealHeading text="Sumate al equipo" className="mt-6 font-display uppercase text-h2" />
        </div>

        <ul className="mt-14">
          {ROLES.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="border-t border-white/10 last:border-b"
            >
              <a
                href={`mailto:hola@productora.com?subject=${encodeURIComponent("Postulación — " + r.title)}`}
                className="group relative flex items-center justify-between gap-6 py-8 px-2 md:px-4 overflow-hidden"
              >
                <span aria-hidden className="absolute inset-0 bg-brand-red origin-left scale-x-0 transition-transform duration-[400ms] ease-out group-hover:scale-x-100" />
                <h3 className="relative z-10 font-display uppercase text-2xl md:text-[32px] leading-none">{r.title}</h3>
                <span className="relative z-10 flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 shrink-0">
                  <span className="hidden sm:inline">{r.mode}</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Careers;
