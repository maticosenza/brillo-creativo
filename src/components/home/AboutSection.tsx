import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealHeading } from "./RevealHeading";

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
        <div className="md:col-span-5">
          <span className="eyebrow opacity-80">Quiénes somos</span>
          <RevealHeading
            text="Una productora que no sigue fórmulas"
            className="mt-6 font-display uppercase text-h2"
          />
        </div>

        <div className="md:col-start-7 md:col-span-6">
          <p className="text-lg leading-[1.6] text-brand-white/90">
            Producimos experiencias memorables para marcas que buscan dejar huella.
            Desde activaciones masivas hasta galas corporativas, combinamos
            creatividad, logística y producción técnica para entregar eventos
            que generan impacto real en audiencias y resultados de negocio.
          </p>

          <div ref={ref} className="mt-12 overflow-hidden aspect-[4/5] w-full">
            <motion.img
              style={{ y }}
              src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80"
              alt="Producción detrás de escena de un evento en vivo"
              className="w-full h-[120%] object-cover -mt-[10%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
