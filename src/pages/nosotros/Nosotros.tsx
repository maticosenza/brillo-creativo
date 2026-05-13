import { PageHero } from "@/components/shared/PageHero";
import GlobalReachSection from "@/components/GlobalReachSection";
import { useEffect } from "react";

const VALUES = [
  {
    title: "Colaboración: subimos y bajamos juntos",
    body: "Somos un equipo que comparte un espíritu colectivo. Celebramos cuando las cosas salen bien y nos sostenemos cuando no. La inspiración y las ideas se comparten abiertamente con colegas y clientes.",
  },
  {
    title: "Curiosidad: nunca dejamos de preguntar",
    body: "Investigamos cada brief como si fuera el primero. La curiosidad es lo que nos permite encontrar ángulos nuevos en categorías saturadas y proponer ideas que realmente importan.",
  },
  {
    title: "Oficio: el detalle hace la diferencia",
    body: "Diseñamos cada touchpoint con criterio editorial. Preferimos quitar antes que sumar. Lo que entra al evento está ahí porque tiene una razón.",
  },
];

const Nosotros = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title={<>Sobre<br/>Nosotros</>}
        image="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=2000&q=80"
        alt="Equipo Caracter"
      />

      {/* Our Company */}
      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          <div>
            <span className="font-display uppercase text-brand-red text-sm md:text-base tracking-[0.18em]">Nuestra empresa</span>
            <h2 className="mt-6 font-display uppercase text-[clamp(30px,4.5vw,56px)] leading-[1.05]">
              Somos una empresa con caracter que genera impacto
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg leading-[1.7] text-brand-white/90">
              <p>Nos especializamos en eventos deportivos y corporativos, con foco en experiencias de alto impacto y ejecución impecable.</p>
              <p>Tenemos más de seis años trabajando para empresas multinacionales, agencias internacionales y proyectos vinculados al marketing, hospitality y motorsport.</p>
              <p>Participamos en la producción y operación de Grand Prix de Fórmula 1, activaciones de marca, eventos deportivos, conferencias, hospitality, ferias y experiencias corporativas en más de diez países.</p>
              <p>Trabajamos en entornos donde la velocidad, la precisión y la capacidad de resolución hacen la diferencia. Por eso nuestro enfoque es claro: comunicación directa, proactividad y atención absoluta a cada detalle.</p>
              <p>Gestionamos cada proyecto de punta a punta, logística, coordinación on-site, proveedores, invitados y operación general, para que el cliente pueda delegar con tranquilidad sabiendo que todo está bajo control.</p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
              alt="Equipo Caracter en acción"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=80" alt="Equipo en evento" className="w-full h-full object-cover" />
            <div aria-hidden className="absolute -right-2 top-0 bottom-0 w-3" style={{ background: "repeating-linear-gradient(45deg, #c0181b 0 6px, transparent 6px 12px)" }} />
            <div aria-hidden className="absolute left-0 right-0 -bottom-2 h-3" style={{ background: "repeating-linear-gradient(45deg, #c0181b 0 6px, transparent 6px 12px)" }} />
          </div>
          <div className="mt-14">
            <span className="font-display uppercase text-brand-red text-sm md:text-base tracking-[0.18em]">Visión y misión</span>
            <h2 className="mt-6 font-display uppercase text-[clamp(32px,5vw,60px)] leading-[1.05]">
              Empujar los límites de la producción de eventos
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-[1.7] text-brand-white/90 max-w-3xl">
              <p>Nunca estuvo en nuestra naturaleza conformarnos. Siempre fuimos curiosos, incluso inquietos, para saber más e ir más lejos. No buscamos producir por producir, sino crear experiencias significativas que dejen una huella positiva en nuestros clientes, en su audiencia y en la industria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-white text-brand-black section-y px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <span className="font-display uppercase text-brand-red text-sm md:text-base tracking-[0.18em]">Nuestros valores</span>
          <h2 className="mt-6 font-display uppercase text-[clamp(32px,5vw,60px)] leading-[1.05]">
            Nuestros valores guían cada interacción
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-brand-black/80">
            Con el equipo, con los clientes y con el resto del mundo. Mientras la visión y la misión marcan el rumbo, son los valores los que dirigen nuestras acciones, decisiones e interacciones.
          </p>

          <div className="mt-14 relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=80" alt="Equipo trabajando" className="w-full h-full object-cover" />
          </div>

          <div className="mt-16 space-y-12">
            {VALUES.map((v, i) => (
              <div key={i} className="border-t border-brand-black/15 pt-8">
                <h3 className="font-display uppercase text-brand-red text-[clamp(22px,3vw,34px)] leading-[1.1]">
                  {v.title}
                </h3>
                <p className="mt-5 text-base md:text-lg leading-[1.7] text-brand-black/80 max-w-3xl">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach with animated globe */}
      <GlobalReachSection />

    </>
  );
};
export default Nosotros;
