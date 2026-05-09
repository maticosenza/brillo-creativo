import { IntroBanner } from "@/components/shared/IntroBanner";
import { RevealHeading } from "@/components/home/RevealHeading";
import { TeamGrid } from "@/components/shared/TeamGrid";
import { CtaSection } from "@/components/home/CtaSection";
import { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <IntroBanner
        lines={[["SOMOS"], ["CARACTER"]]}
        subtitle="Diseñamos y producimos eventos para marcas que buscan dejar huella en su audiencia."
      />

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <span className="eyebrow opacity-80">Manifiesto</span>
        <RevealHeading text="No producimos eventos. Producimos huella." className="mt-6 font-display uppercase text-h2 max-w-[20ch]" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg leading-[1.7] text-brand-white/90">
          <p>Creemos que un evento bien producido cambia la forma en que una marca es percibida. No nos interesa repetir fórmulas: cada proyecto se diseña desde cero, con un equipo único que toma decisiones rápido y se hace cargo de cada detalle.</p>
          <p>Trabajamos con clientes que valoran el oficio. Nuestra obsesión es que cada touchpoint del evento — desde la invitación hasta el último frame de contenido post — esté pensado, dirigido y ejecutado por personas que disfrutan lo que hacen.</p>
        </div>
      </section>

      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <div className="max-w-3xl">
          <span className="eyebrow opacity-90">Equipo</span>
          <RevealHeading text="Las personas detrás" className="mt-6 font-display uppercase text-h2" />
        </div>
        <div className="mt-14"><TeamGrid /></div>
      </section>

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 items-center">
          <div className="md:col-span-7 aspect-[16/10] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80" alt="Buenos Aires" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-start-9 md:col-span-4">
            <span className="eyebrow opacity-80">Oficinas</span>
            <h2 className="mt-6 font-display uppercase text-h3">Buenos Aires</h2>
            <address className="not-italic mt-6 text-base leading-relaxed text-brand-white/90 space-y-2">
              <p>Av. del Libertador 5500</p>
              <p>C1428 Ciudad Autónoma de Buenos Aires</p>
              <p><a href="mailto:hola@productora.com" className="underline-link">hola@productora.com</a></p>
              <p><a href="tel:+541100000000" className="underline-link">+54 11 0000 0000</a></p>
            </address>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};
export default Nosotros;
