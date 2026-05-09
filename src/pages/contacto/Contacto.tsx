import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlobeSection } from "@/components/shared/AnimatedGlobe";
import { SOCIALS, CONTACT_EMAIL } from "@/lib/nav-config";

const Contacto = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = "Contacto — Productora"; }, []);
  return (
    <>
      <IntroBanner
        lines={[["HABLEMOS"]]}
        subtitle="Contanos qué evento tenés en mente. Te respondemos en menos de 24 horas."
        height="50vh"
      />
      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
          <div className="lg:col-start-8 lg:col-span-5 flex flex-col justify-center gap-12">
            <div>
              <h2 className="font-display uppercase text-3xl">Buenos Aires</h2>
              <address className="not-italic mt-5 space-y-2 text-base text-brand-white/90">
                <p>Av. del Libertador 5500</p>
                <p>C1428 Ciudad Autónoma de Buenos Aires</p>
                <p><a href={`mailto:${CONTACT_EMAIL}`} className="underline-link">{CONTACT_EMAIL}</a></p>
                <p><a href="tel:+541100000000" className="underline-link">+54 11 0000 0000</a></p>
              </address>
            </div>
            <div>
              <h2 className="font-display uppercase text-3xl">Redes</h2>
              <ul className="mt-5 space-y-2 text-base">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 underline-link">
                      {s.label} <ArrowRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display uppercase text-3xl">Brief directo</h2>
              <Link to="/contacto/brief" className="mt-5 inline-flex items-center gap-3 underline-link text-base">
                Descargar plantilla de brief <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <GlobeSection
        title="Alcance global con toque local"
        description="Headquarters en Puerto Madero, Buenos Aires, con presencia en toda LATAM, Estados Unidos y Europa. Producimos campañas globales con lectura regional."
      />
    </>
  );
};
export default Contacto;
