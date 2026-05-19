import { useEffect } from "react";
import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { ServiceGrid } from "@/components/servicios/ServiceGrid";

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
          src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=2000&q=80"
          alt="Equipo Caracter"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20"
          style={{ paddingLeft: "6vw", paddingRight: "6vw" }}
        >
          <DisplayHeading
            as="h1"
            lines={["SERVICIOS"]}
            size="hero"
            align="left"
            trigger="static"
            textColor="#fcf7f5"
            glow={false}
          />
        </div>
      </section>

      {/* Intro */}
      <section
        className="bg-brand-red text-brand-white px-6 md:px-12"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="max-w-[1100px] mx-auto text-center">
          <h2
            className="font-display uppercase"
            style={{ fontSize: "clamp(24px, 3.2vw, 48px)", lineHeight: 1.2 }}
          >
            Caracter Producciones ofrece soluciones integrales para eventos,
            desde la estrategia a la ejecución, cubrimos todo lo que tu evento necesita.
          </h2>
        </div>
      </section>

      {/* Services grid: 5 rows x 2 cards */}
      <ServiceGrid />
    </>
  );
};
export default Servicios;
