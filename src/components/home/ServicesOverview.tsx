import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealHeading } from "./RevealHeading";

gsap.registerPlugin(ScrollTrigger);

export const ServicesOverview = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([".bd-top", ".bd-right", ".bd-bottom", ".bd-left"], { scaleX: 1, scaleY: 1 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 75%", once: true },
    });
    tl.fromTo(".bd-top",    { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.inOut" })
      .fromTo(".bd-right",  { scaleY: 0 }, { scaleY: 1, duration: 0.3, ease: "power2.inOut" })
      .fromTo(".bd-bottom", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.inOut" })
      .fromTo(".bd-left",   { scaleY: 0 }, { scaleY: 1, duration: 0.3, ease: "power2.inOut" });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 items-center">
        <div ref={wrapRef} className="md:col-span-7 relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay muted loop playsInline
              poster="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-stage-with-spotlights-and-fog-at-a-concert-32809-large.mp4" type="video/mp4" />
            </video>

            <span aria-hidden className="bd-top absolute top-0 left-0 h-px w-full bg-brand-white origin-left" style={{ transform: "scaleX(0)" }} />
            <span aria-hidden className="bd-right absolute top-0 right-0 w-px h-full bg-brand-white origin-top" style={{ transform: "scaleY(0)" }} />
            <span aria-hidden className="bd-bottom absolute bottom-0 right-0 h-px w-full bg-brand-white origin-right" style={{ transform: "scaleX(0)" }} />
            <span aria-hidden className="bd-left absolute bottom-0 left-0 w-px h-full bg-brand-white origin-bottom" style={{ transform: "scaleY(0)" }} />
          </div>
        </div>

        <div className="md:col-start-9 md:col-span-4">
          <span className="eyebrow opacity-80">Nuestros servicios</span>
          <RevealHeading
            text="Un enfoque 360°"
            className="mt-6 font-display uppercase text-h2"
          />
          <p className="mt-8 text-lg leading-[1.6] text-brand-white/90">
            Tomamos cada proyecto desde la idea inicial hasta la última pieza
            de comunicación post-evento. Producción integral, dirección
            creativa, gestión de talento, logística, audiovisual y activaciones
            de marca, todo bajo un solo equipo coordinado.
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
