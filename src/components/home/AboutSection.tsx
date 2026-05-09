import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RedFrame } from "@/components/shared/RedFrame";

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 items-center">
        <div className="md:col-span-6 space-y-12">
          <div>
            <h2
              className="font-display uppercase text-brand-red"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1 }}
            >
              Quiénes somos
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-brand-white/90 max-w-[55ch]">
              Somos una productora de eventos con ADN operativo. Con más de seis
              años trabajando para empresas multinacionales y agencias
              internacionales de marketing y motorsport, sabemos lo que significa
              ejecutar en entornos de alta exigencia.
            </p>
          </div>

          <div>
            <h2
              className="font-display uppercase text-brand-red"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1 }}
            >
              Qué hacemos
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-brand-white/90 max-w-[55ch]">
              Operamos en más de diez países. Gestionamos Grand Prix de Fórmula 1,
              ferias internacionales, eventos corporativos y experiencias MICE
              para clientes globales.
            </p>
            <p className="mt-4 text-lg leading-[1.6] text-brand-white/90 max-w-[55ch]">
              Nuestro trabajo es sencillo: que el evento salga perfecto y que el
              cliente no tenga que preocuparse por nada.
            </p>
          </div>
        </div>

        <div className="md:col-span-6">
          <RedFrame side="left">
            <div ref={ref} className="overflow-hidden aspect-[4/5] w-full">
              <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80"
                alt="Producción detrás de escena de un evento en vivo"
                className="w-full h-[120%] object-cover -mt-[10%]"
                loading="lazy"
              />
            </div>
          </RedFrame>
        </div>
      </div>
    </section>
  );
};
