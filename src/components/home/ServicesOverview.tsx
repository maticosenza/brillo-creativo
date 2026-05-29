import { Link } from "react-router-dom";
import { RedFrame } from "@/components/shared/RedFrame";
import { RevealHeading } from "./RevealHeading";
import servicesOverview from "@/assets/services-overview.jpg";

export const ServicesOverview = () => {
  return (
    <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 items-center">
        <div className="order-1 md:order-2 md:col-start-8 md:col-span-4">
          <span className="eyebrow text-brand-white">Nuestros servicios</span>
          <div style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
            <h2 className="mt-6 font-display uppercase leading-[0.95] whitespace-nowrap">
              Gestión completa,<br />resultados concretos
            </h2>
          </div>
          <div className="mt-8 space-y-6 text-lg leading-[1.6] text-brand-white/90">
            <p>De la idea a la ejecución, nos ocupamos de cada detalle para que el resultado sea impecable.</p>
            <p>Planificamos, coordinamos y ejecutamos eventos con un enfoque estratégico, operativo y orientado a resultados. Trabajamos junto al cliente en cada etapa del proyecto, asegurando una gestión eficiente, comunicación clara y resolución rápida en tiempo real.</p>
            <p>Desde la logística y coordinación on-site hasta la atención a invitados, proveedores y producción general, nuestro objetivo es simple: que cada evento funcione a la perfección.</p>
          </div>

          <Link
            to="/servicios"
            className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-white px-8 py-4 text-[13px] font-medium uppercase tracking-wider"
          >
            <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-black">
              Nuestros servicios
            </span>
          </Link>
        </div>

        <div className="order-2 md:order-1 md:col-start-2 md:col-span-5 relative">
          <RedFrame side="right" className="w-full max-w-[520px] ml-auto">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img
                src={servicesOverview}
                alt="Simulador de Fórmula 1 en activación de marca"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </RedFrame>
        </div>
      </div>
    </section>
  );
};
