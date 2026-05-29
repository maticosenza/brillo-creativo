import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RevealHeading } from "./RevealHeading";
import { RedFrame } from "@/components/shared/RedFrame";
import servicesHome from "@/assets/services-home.jpg";

export const ServicesSection = () => {
  return (
    <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 items-start">
        <div className="md:col-span-6">
          <span className="eyebrow opacity-90">Qué hacemos</span>
          <RevealHeading
            text="Producción integral end-to-end."
            className="mt-6 font-display uppercase text-h2"
          />
          <p className="mt-8 text-lg leading-[1.6] max-w-[55ch] opacity-95">
            Gestionamos eventos corporativos, activaciones de marca y experiencias
            globales con un enfoque estratégico y operativo. Nuestro
            trabajo es sencillo: que el evento salga perfecto y que el cliente
            no tenga que preocuparse por nada.
          </p>

          <Link
            to="/servicios"
            className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-white px-8 py-4 text-[13px] font-medium uppercase tracking-wider"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
            />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-red">
              Conocé más
            </span>
          </Link>
        </div>

        <div className="md:col-start-9 md:col-span-4 md:max-w-[360px] md:ml-auto">
          <RedFrame side="left">
          <motion.div
            initial={{ rotate: -3, scale: 0.95, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] w-full overflow-hidden"
          >
            <img
              src={servicesHome}
              alt="Producción integral de eventos corporativos"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          </RedFrame>
        </div>
      </div>
    </section>
  );
};
