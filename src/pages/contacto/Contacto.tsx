import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DisplayHeading } from "@/components/shared/DisplayHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import GlobalReachSection from "@/components/GlobalReachSection";
import { CONTACT_EMAIL } from "@/lib/nav-config";

const Contacto = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = "Contacto — Productora"; }, []);
  return (
    <>
      <section
        className="relative w-full bg-brand-red text-brand-white px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-16 pt-32 md:pt-40"
        style={{ minHeight: "60vh" }}
      >
        <DisplayHeading
          lines={["HABLEMOS"]}
          as="h1"
          size="hero"
          align="left"
          glow={false}
          trigger="static"
          outline
          outlineColor="#fcf7f5"
          style={{ fontSize: "clamp(80px, 14vw, 240px)" }}
        />
        <div
          aria-hidden
          className="mt-10 md:mt-14 w-full h-px bg-brand-white/80"
        />
      </section>
      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <ContactForm />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display uppercase text-3xl">Brief directo</h2>
            <Link to="/contacto/brief" className="mt-5 inline-flex items-center gap-3 underline-link text-base">
              Descargar plantilla de brief <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <h2 className="font-display uppercase text-3xl">Buenos Aires</h2>
            <address className="not-italic mt-5 space-y-2 text-base text-brand-white/90">
              <p>Av. del Libertador 5500</p>
              <p>C1428 Ciudad Autónoma de Buenos Aires</p>
              <p><a href={`mailto:${CONTACT_EMAIL}`} className="underline-link">{CONTACT_EMAIL}</a></p>
              <p><a href="tel:+541100000000" className="underline-link">+54 11 0000 0000</a></p>
            </address>
          </div>
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
