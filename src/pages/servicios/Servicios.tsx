import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CtaSection } from "@/components/home/CtaSection";
import { PageHero } from "@/components/shared/PageHero";
import { SERVICES } from "@/data/services";

const ServiceRow = ({ s }: { s: typeof SERVICES[number] }) => {
  return (
    <Link
      to={`/servicios/${s.slug}`}
      className="group block border-t border-brand-black/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-10 items-center px-6 md:px-12 py-10 md:py-14 transition-colors duration-300 group-hover:bg-brand-black/[0.03]">
        <div className="order-1 md:order-none md:col-span-1 flex md:block items-start">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-red text-brand-red font-display text-sm">
            {s.number}
          </span>
        </div>

        <div className="order-2 md:order-none md:col-span-6">
          <h2 className="font-display uppercase text-brand-red leading-[0.95] text-[clamp(28px,3.4vw,44px)]">
            {s.title}
          </h2>
          <p className="mt-4 text-base md:text-[17px] leading-[1.6] text-brand-black/80 max-w-[55ch]">
            {s.description}
          </p>
        </div>

        <div className="order-3 md:order-none md:col-start-8 md:col-span-5">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={s.gallery[0]}
              alt={s.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Servicios = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title={<>Nuestros<br/>Servicios</>}
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80"
        alt="Evento producido por Caracter"
      />

      {/* Intro */}
      <section className="bg-brand-white text-brand-black px-6 md:px-12 py-16 md:py-20 border-b border-brand-black/10">
        <p className="max-w-3xl text-lg md:text-xl leading-[1.5] uppercase font-medium">
          Caracter Producciones ofrece soluciones integrales para eventos,
          desde la estrategia a la ejecución, cubrimos todo lo que tu evento necesita.
        </p>
      </section>

      {/* Services list */}
      <section className="bg-brand-white text-brand-black">
        {SERVICES.map((s) => <ServiceRow key={s.slug} s={s} />)}
        <div className="border-t border-brand-black/10" />
      </section>

      <CtaSection />
    </>
  );
};
export default Servicios;
