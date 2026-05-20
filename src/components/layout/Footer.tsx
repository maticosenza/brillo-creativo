import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { DisplayHeading } from "@/components/shared/DisplayHeading";
import logoCaracter from "@/assets/logo-caracter.png";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Sobre nosotros", href: "/nosotros" },
  { label: "Política de privacidad", href: "/privacidad" },
];

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.83 4.83 0 0 1-1.84-.04Z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="text-brand-white red-background">
      {/* Red cap with white divider near the bottom of the red section */}
      <div className="bg-brand-red px-6 md:px-12 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="h-px w-full bg-brand-white" />
      </div>

      <div className="bg-brand-red px-6 md:px-12 pt-16 md:pt-20 pb-10">
      {/* CTA outline heading */}
      <div className="cta-footer">
        <DisplayHeading
          lines={["LET'S MAKE"]}
          size="cta"
          as="h2"
          align="center"
          outline
          outlineColor="#fcf7f5"
          glow={false}
          trigger="static"
          className="leading-[0.95] w-full"
          style={{ fontSize: "clamp(48px, 10.5vw, 176px)", letterSpacing: "-0.02em", lineHeight: 0.95 }}
        />
        <DisplayHeading
          lines={["IMPACT!"]}
          size="cta"
          as="h2"
          align="center"
          textColor="#fcf7f5"
          glow={false}
          trigger="static"
          className="leading-[0.95] w-full"
          style={{ fontSize: "clamp(48px, 10.5vw, 176px)", letterSpacing: "-0.02em", lineHeight: 0.95 }}
        />
      </div>

      <div className="mt-10 md:mt-12 flex justify-center">
        <Link
          to="/contacto"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full"
          style={{ padding: "18px 44px", border: "1px solid #fcf7f5", background: "#c0181b" }}
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
            style={{ background: "#fcf7f5" }}
          />
          <span
            className="relative z-10 font-display uppercase transition-colors duration-300 text-[#fcf7f5] group-hover:text-[#c0181b]"
            style={{ fontSize: 14, letterSpacing: "0.2em" }}
          >
            Hablemos
          </span>
        </Link>
      </div>

      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        {/* Paragraph */}
        <div className="md:col-span-4">
          <p className="text-sm leading-[1.7] text-brand-white max-w-[360px]">
            Contactanos y descubrí cómo la experiencia y el carácter de CARACTER Producciones pueden transformar tu próximo evento en algo que genere impacto real.
          </p>
        </div>

        {/* Nav buttons */}
        <div className="md:col-span-3 md:col-start-6">
          <ul className="space-y-3 text-[15px] text-brand-white">
            {FOOTER_NAV.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="underline-link">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4 md:col-start-9">
          <h4 className="eyebrow text-brand-white/80 mb-4">Contacto</h4>
          <address className="not-italic text-sm leading-[1.7] text-brand-white space-y-2">
            <p>HQ en Puerto Madero, Argentina<br />con presencia en todo el mundo</p>
            <p><a href="mailto:hello@caracterprod.com" className="underline-link">hello@caracterprod.com</a></p>
            <p><a href="tel:+16452397512" className="underline-link">+1 645 239 7512</a></p>
          </address>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-14">
        <h4 className="eyebrow text-brand-white/80 mb-4">Redes</h4>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/car%C3%A1cter-producciones/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-white text-brand-white transition-colors hover:bg-brand-white hover:text-brand-red">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/caracter.prod/" target="_blank" rel="noreferrer" aria-label="Instagram"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-white text-brand-white transition-colors hover:bg-brand-white hover:text-brand-red">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.tiktok.com/@caracter.prod?lang=es-419" target="_blank" rel="noreferrer" aria-label="TikTok"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-white text-brand-white transition-colors hover:bg-brand-white hover:text-brand-red">
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-brand-white/20 flex flex-col md:flex-row justify-between gap-3 text-xs text-brand-white/80 uppercase tracking-[0.15em]">
        <Link to="/" aria-label="Caracter Producciones" className="flex items-center">
          <img src={logoCaracter} alt="Caracter Producciones" className="h-12 w-auto" />
        </Link>
        <span className="flex items-baseline gap-1">
          © 2026 MARCA REGISTRADA · DISEÑADO POR{" "}
          <a
            href="https://www.velocentum.com"
            target="_blank"
            rel="noreferrer"
            className="underline-link"
          >
            VELOCENTUM
          </a>
        </span>
      </div>
      </div>
    </footer>
  );
};
