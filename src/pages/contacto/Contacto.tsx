import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import GlobeWhiteTranslucent from "@/components/GlobeWhiteTranslucent";

const Contacto = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = "Contacto — Productora"; }, []);
  return (
    <>
      <section className="contact-banner-white">
        <h1 className="hablemos-title-red">HABLEMOS</h1>
      </section>

      <section className="contact-form-section">
        <ContactForm />
      </section>

      <section className="brief-cta-section">
        <div className="brief-card">
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
        </div>
      </section>

      <section className="world-section-red">
        <div className="world-container">
          <div className="world-globe">
            <GlobeWhiteTranslucent />
          </div>
          <div className="world-text">
            <h2>Desde Argentina al mundo</h2>
            <p>Radicados en Argentina pero con alcance y experiencia global.</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contacto;
