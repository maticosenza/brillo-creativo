import { useEffect } from "react";
import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { ServiceGrid } from "@/components/servicios/ServiceGrid";
import serviciosHero from "@/assets/servicios-hero.jpg";

const Servicios = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative w-full overflow-hidden bg-brand-black text-brand-white"
        style={{ height: "100vh", minHeight: 520 }}
      >
        <img
          src={serviciosHero}
          alt="Servicios Caracter"
          className="servicios-hero-img absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20"
          style={{ paddingLeft: "6vw", paddingRight: "6vw" }}
        >
          <DisplayHeading
            as="h1"
            lines={["NUESTROS", "SERVICIOS"]}
            size="hero"
            align="left"
            trigger="static"
            textColor="#fcf7f5"
            glow={false}
          />
          <div aria-hidden style={{ marginTop: 24 }}>
            <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4 L24 24 L44 4" stroke="#c0181b" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section
        className="bg-brand-red text-brand-white px-6 md:px-12 flex items-center justify-center"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="max-w-[1100px] mx-auto text-center">
          <h2
            className="font-display uppercase"
            style={{ fontSize: "clamp(24px, 3.2vw, 48px)", lineHeight: 1.2 }}
          >
            Ofrecemos soluciones integrales para eventos, desde la estrategia a la ejecución, cubrimos todo lo que tu evento necesita.
          </h2>
        </div>
      </section>

      {/* Services grid: 5 rows x 2 cards */}
      <ServiceGrid />
    </>
  );
};
export default Servicios;
