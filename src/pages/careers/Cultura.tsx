import { useEffect } from "react";
import { Hammer, Flame, Users, Eye, Sparkles, Target } from "lucide-react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { RevealHeading } from "@/components/home/RevealHeading";

const VALUES = [
  { icon: Hammer, title: "Craft", desc: "Cuidamos el oficio en cada decisión. Diseñar y producir bien es nuestra forma de respeto." },
  { icon: Flame,  title: "Intensidad", desc: "Vivimos los proyectos. Cuando entramos, entramos en serio." },
  { icon: Users,  title: "Equipo", desc: "Crédito compartido. Errores compartidos. Decisiones rápidas y honestas." },
  { icon: Eye,    title: "Detalle", desc: "El detalle no es decoración: es lo que hace memorable un evento." },
  { icon: Sparkles, title: "Curiosidad", desc: "Buscamos referencias afuera del rubro. Lo bueno aparece donde nadie lo busca." },
  { icon: Target, title: "Foco", desc: "Decimos que no más veces que sí. Lo que entra al evento entra por una razón." },
];

const Cultura = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <IntroBanner lines={[["NUESTRA"], ["CULTURA"]]} subtitle="Cómo trabajamos, qué priorizamos y qué nunca negociamos." />
      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <RevealHeading text="Seis valores que nos guían" className="font-display uppercase text-h2 max-w-[18ch]" />
        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {VALUES.map((v) => (
            <li key={v.title} className="flex flex-col gap-5">
              <v.icon className="w-10 h-10 stroke-[1.25]" />
              <h3 className="font-display uppercase text-h3">{v.title}</h3>
              <p className="text-base leading-[1.6] text-brand-white/90">{v.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Cultura;
