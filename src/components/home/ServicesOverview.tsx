import { Link } from "react-router-dom";

export const ServicesOverview = () => {
  return (
    <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 md:gap-12 text-center">
        <div className="w-full max-w-[700px]">
          <span className="eyebrow text-brand-white">Nuestros servicios</span>
          <div style={{ fontSize: "clamp(32px, 3.6vw, 56px)" }}>
            <h2 className="mt-6 font-display uppercase leading-[0.95]">
              Gestión completa,<br />resultados concretos
            </h2>
          </div>
          <p className="mt-8 text-lg leading-[1.6] text-brand-white/90 mx-auto max-w-[55ch]">
            De la idea a la ejecución, nos ocupamos de cada detalle para que el
            resultado sea impecable.
          </p>

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

        <div className="w-full max-w-[500px] overflow-hidden rounded-lg" style={{ aspectRatio: "16 / 10" }}>
          <video
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline
            poster="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-stage-with-spotlights-and-fog-at-a-concert-32809-large.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
