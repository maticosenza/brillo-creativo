import { PageHero } from "@/components/shared/PageHero";
import GlobalReachSection from "@/components/GlobalReachSection";
import { useEffect } from "react";
import nosotrosHeroMobile from "@/assets/nosotros-hero-mobile.jpg";
import nosotrosEmpresa from "@/assets/services-overview.jpg";

const VALUES = [
  {
    title: "Carácter",
    body: "Tomamos decisiones, resolvemos bajo presión y enfrentamos cada proyecto con personalidad, criterio y determinación.",
  },
  {
    title: "Eficiencia",
    body: "Priorizamos la organización, la rapidez de respuesta y la ejecución impecable en cada etapa del proyecto.",
  },
  {
    title: "Confianza",
    body: "Trabajamos para que cada cliente pueda delegar con tranquilidad, sabiendo que cada detalle está bajo control.",
  },
];

const Nosotros = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title={<>Sobre<br/>Nosotros</>}
        image={nosotrosHeroMobile}
        alt="Equipo Caracter"
        objectPosition="center bottom"
      />

      {/* Our Company */}
      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start max-w-7xl mx-auto">
          <div>
            <span className="font-display uppercase text-brand-white text-sm md:text-base tracking-[0.18em]">Nuestra empresa</span>
            <h2 className="mt-6 font-display uppercase text-[clamp(30px,4.5vw,56px)] leading-[1.05]">
              Somos una empresa con caracter que genera impacto
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg leading-[1.7] text-brand-white/90 text-justify">
              <p>Nos especializamos en eventos deportivos y corporativos, con foco en experiencias de alto impacto y ejecución impecable.</p>
              <p>Tenemos más de seis años trabajando para empresas multinacionales, agencias internacionales y proyectos vinculados al marketing, hospitality y motorsport.</p>
              <p>Participamos en la producción y operación de Grand Prix de Fórmula 1, activaciones de marca, eventos deportivos, conferencias, hospitality, ferias y experiencias corporativas en más de diez países.</p>
              <p>Trabajamos en entornos donde la velocidad, la precisión y la capacidad de resolución hacen la diferencia. Por eso nuestro enfoque es claro: comunicación directa, proactividad y atención absoluta a cada detalle.</p>
              <p>Gestionamos cada proyecto de punta a punta, logística, coordinación on-site, proveedores, invitados y operación general, para que el cliente pueda delegar con tranquilidad sabiendo que todo está bajo control.</p>
            </div>
          </div>
          <div className="relative overflow-hidden mt-[3.25rem] md:mt-[4.5rem] aspect-square md:aspect-auto md:h-[clamp(420px,52vw,640px)]">
            <img
              src={nosotrosEmpresa}
              alt="Equipo Caracter en acción"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center bottom" }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="mission-vision-values red-background">
        <div className="mission-vision-row">
          <div className="mvv-box">
            <h3>Misión</h3>
            <p className="text-justify">Diseñar y ejecutar eventos de alto impacto, combinando estrategia, creatividad y excelencia operativa para generar experiencias memorables y resultados concretos para cada cliente.</p>
          </div>
          <div className="mvv-box">
            <h3>Visión</h3>
            <p className="text-justify">Ser una productora referente en el sector deportivo y corporativo a nivel internacional, creando experiencias que eleven el estándar de ejecución, hospitality y producción en cada evento.</p>
          </div>
        </div>

        <div className="values-box">
          <h3>Valores</h3>
          <div className="values-content">
            {VALUES.map((v) => (
              <div key={v.title} className="value-item">
                <h4>{v.title}</h4>
                <p className="text-justify">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach with animated globe */}
      <GlobalReachSection
        background="#c0181b"
        title={<>Desde Argentina<br/>al mundo</>}
        subtitle="Radicados en Argentina pero con alcance y experiencia global. Somos tu partner estrategico en todo el mundo ya que hemos producido eventos en Estados Unidos, Latino America, Europa, África, Oceanía y Asia."
      />

    </>
  );
};
export default Nosotros;
