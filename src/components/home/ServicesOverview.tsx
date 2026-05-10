import { Link } from "react-router-dom";
import { RedFrame } from "@/components/shared/RedFrame";
import { RevealHeading } from "./RevealHeading";

export const ServicesOverview = () => {
  return (
    <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 items-center">
        <div className="md:col-start-2 md:col-span-5 relative">
          <RedFrame side="right">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline
                poster="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-stage-with-spotlights-and-fog-at-a-concert-32809-large.mp4" type="video/mp4" />
              </video>
            </div>
          </RedFrame>
        </div>

        <div className="md:col-start-8 md:col-span-4">
          <span className="eyebrow text-brand-red">Nuestros servicios</span>
          <div style={{ fontSize: "clamp(36px, 4.6vw, 72px)" }}>
            <RevealHeading
              text="Gestión completa, resultados concretos"
              className="mt-6 font-display uppercase leading-[0.95]"
            />
          </div>
          <p className="mt-8 text-lg leading-[1.6] text-brand-white/90">
            De la idea a la ejecución, nos ocupamos de cada detalle para que el
            resultado sea impecable.
          </p>

          <Link
            to="/servicios"
            className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-white px-8 py-4 text-[13px] font-medium uppercase tracking-wider"
          >
            <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-black">
              Ver servicios
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
