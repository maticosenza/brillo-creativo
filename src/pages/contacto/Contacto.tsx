import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import GlobalReachSection from "@/components/GlobalReachSection";

const Contacto = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = "Contacto — Productora"; }, []);
  return (
    <>
      <section
        className="relative w-full bg-brand-red text-brand-white px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-16 pt-32 md:pt-40"
        style={{ minHeight: "60vh" }}
      >
        <h1 className="hablemos-title">HABLEMOS</h1>
        <div
          aria-hidden
          className="mt-10 md:mt-14 w-full h-px bg-brand-white/80"
        />
      </section>

      <section className="contact-form-section">
        <ContactForm />
      </section>

      <section className="brief-cta-section">
        <div className="brief-content">
          <div className="brief-text">
            <h3>¿Tenés un brief?</h3>
            <p>
              Descargá nuestra plantilla de brief y completála con la información de tu proyecto.
              Nos ayudará a entender mejor tus necesidades.
            </p>
          </div>
          <Link to="/contacto/brief" className="brief-button">
            Descargar brief <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      <GlobalReachSection
        background="#c0181b"
        title="Desde Argentina al mundo"
        subtitle="Radicados en Argentina pero con alcance y experiencia global."
      />
    </>
  );
};
export default Contacto;
