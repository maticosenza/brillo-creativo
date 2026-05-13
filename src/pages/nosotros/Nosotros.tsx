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
      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          <div>
            <span className="font-display uppercase text-brand-white text-sm md:text-base tracking-[0.18em]">Nuestra empresa</span>
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

      {/* Misión, Visión y Valores */}
      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {[
              {
                title: "Misión",
                body: "Diseñar y ejecutar eventos de alto impacto, combinando estrategia, creatividad y excelencia operativa para generar experiencias memorables y resultados concretos para cada cliente.",
              },
              {
                title: "Visión",
                body: "Ser una productora referente en el sector deportivo y corporativo a nivel internacional, creando experiencias que eleven el estándar de ejecución, hospitality y producción en cada evento.",
              },
              {
                title: "Valores",
                body: "Carácter: Tomamos decisiones, resolvemos bajo presión y enfrentamos cada proyecto con personalidad, criterio y determinación.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="h-full min-h-[320px] rounded-3xl bg-white text-black p-8 md:p-10 flex flex-col"
              >
                <h3 className="font-display uppercase text-[clamp(28px,3vw,40px)] leading-[1]">
                  {card.title}
                </h3>
                <p className="mt-6 text-base md:text-[15px] leading-[1.6] text-black/85">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <div key={i} className="border-t border-brand-white/20 pt-6">
                <h4 className="font-display uppercase text-brand-white text-[clamp(18px,1.6vw,22px)] leading-[1.2]">
                  {v.title}
                </h4>
                <p className="mt-3 text-sm md:text-base leading-[1.6] text-brand-white/85">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach with animated globe */}
      <GlobalReachSection
        background="#c0181b"
        title="Desde Argentina al mundo"
        subtitle="Radicados en Argentina pero con alcance y experiencia global."
      />

    </>
  );
};
export default Nosotros;
