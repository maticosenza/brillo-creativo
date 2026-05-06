import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealHeading } from "./RevealHeading";
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
        <div className="md:col-span-5">
          <span className="eyebrow opacity-80">Quiénes somos</span>
          <RevealHeading
            text="Somos una productora de eventos con ADN operativo."
            className="mt-6 font-display uppercase text-h2"
          />
        </div>

        <div className="md:col-start-7 md:col-span-6">
          <p className="text-lg leading-[1.6] text-brand-white/90">
            Somos una productora de eventos con ADN operativo. Con más de seis
            años trabajando para empresas multinacionales y agencias
            internacionales de marketing y motorsport, sabemos lo que significa
            ejecutar en entornos de alta exigencia.
          </p>

          <RedFrame className="mt-12">
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
