import { useEffect } from "react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { RevealHeading } from "@/components/home/RevealHeading";
import { CtaSection } from "@/components/home/CtaSection";

const PARAS = [
  "Creemos que un evento bien producido cambia la forma en que una marca es percibida. No nos interesa repetir fórmulas: cada proyecto se diseña desde cero, con un equipo único que toma decisiones rápido y se hace cargo de cada detalle.",
  "Trabajamos con clientes que valoran el oficio. Nuestra obsesión es que cada touchpoint del evento — desde la invitación hasta el último frame de contenido post — esté pensado, dirigido y ejecutado por personas que disfrutan lo que hacen.",
  "Producimos en formatos físicos, híbridos y digitales. Operamos en Argentina y en toda LATAM. No hay proyecto demasiado complejo si el equipo está bien armado y el brief está bien leído.",
  "El criterio editorial guía nuestras decisiones de diseño y producción. Preferimos quitar antes que sumar. Lo que entra al evento tiene que estar ahí por una razón.",
];

const Manifiesto = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <IntroBanner lines={[["NUESTRO"], ["MANIFIESTO"]]} subtitle="Cuatro ideas que guían cada proyecto que tomamos." />
      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <RevealHeading text="No producimos eventos. Producimos huella." className="font-display uppercase text-h2" />
          <div className="mt-12 space-y-8 text-lg md:text-xl leading-[1.7] text-brand-white/90">
            {PARAS.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};
export default Manifiesto;
