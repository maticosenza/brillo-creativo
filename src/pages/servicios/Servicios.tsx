import { useEffect } from "react";
import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { ServiceRows } from "@/components/servicios/ServiceRows";

const Servicios = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative w-full overflow-hidden bg-brand-black text-brand-white"
        style={{ height: "70vh", minHeight: 520 }}
      >
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80"
          alt="Evento producido por Caracter"
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
          <p
            className="mt-6 uppercase"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 14,
              letterSpacing: "0.2em",
              color: "#fcf7f5",
              opacity: 0.85,
            }}
          >
            Diez formas de ejecutar. Una sola obsesión: que todo salga perfecto.
          </p>
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

      {/* Zigzag rows */}
      <ServiceRows />
    </>
  );
};
export default Servicios;
