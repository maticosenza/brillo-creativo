import { useEffect } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import GlobeWhiteTranslucent from "@/components/GlobeWhiteTranslucent";

const Contacto = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = "Contacto — Productora"; }, []);
  return (
    <>
      <section className="contact-banner-white">
        <h1 className="hablemos-title-red">HABLEMOS</h1>
        <div className="hablemos-chevron" aria-hidden>
          <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4 L24 24 L44 4" stroke="#c0181b" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
          </svg>
        </div>
      </section>

      <section className="contact-form-section">
        <ContactForm />
      </section>

      <section className="brief-cta-section">
        <div className="brief-card">
          <div className="brief-content">
            {/* IZQUIERDA: Título + párrafo */}
            <div className="brief-text">
              <h3>¿TENÉS UN BRIEF?</h3>
              <p>Envianos tu brief directamente o completa nuestra planilla con la información de tu proyecto.</p>
            </div>
            {/* DERECHA: 2 botones */}
            <div className="brief-buttons">
              <button className="brief-btn-primary">IMPORTAR BRIEF →</button>
              <span className="brief-separator">o</span>
              <button className="brief-btn-secondary">COMPLETAR PLANILLA →</button>
            </div>
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
            <p>Radicados en Argentina pero con alcance y experiencia global. Somos tu partner estrategico en todo el mundo ya que hemos producido eventos en Estados Unidos, Latino America, Europa, África, Oceanía y Asia.</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contacto;
