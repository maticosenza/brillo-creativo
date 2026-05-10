import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { DisplayHeading } from "@/components/shared/DisplayHeading";

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
    <footer className="bg-brand-black text-brand-white px-6 md:px-12 pt-20 md:pt-28 pb-10">
      {/* Top divider — bright white, contained within page padding */}
      <div className="h-px w-full bg-white/80" />

      {/* CTA outline heading — sized to span the divider width */}
      <div className="mt-10 md:mt-14">
        <DisplayHeading
          lines={["LET'S MAKE IMPACT!"]}
          size="cta"
          as="h2"
          align="center"
          outline
          outlineColor="#c0181b"
          glow={false}
          trigger="static"
          className="leading-[0.95] w-full"
          style={{ fontSize: "clamp(60px, 13.2vw, 220px)", letterSpacing: "-0.02em", lineHeight: 0.95 }}
        />
      </div>

      <div className="mt-10 md:mt-12 flex justify-center">
        <Link
          to="/contacto"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full"
          style={{ padding: "18px 44px", border: "1px solid #c0181b", background: "transparent" }}
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
            style={{ background: "#c0181b" }}
          />
          <span
            className="relative z-10 font-display uppercase transition-colors duration-300 text-[#c0181b] group-hover:text-[#fcf7f5]"
            style={{ fontSize: 14, letterSpacing: "0.2em" }}
          >
            Hablemos
          </span>
        </Link>
      </div>

      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        {/* Paragraph */}
        <div className="md:col-span-4">
          <p className="text-sm leading-[1.7] text-brand-white/80 max-w-[360px]">
            Contactanos y descubrí cómo la experiencia y el carácter de CARACTER Producciones pueden transformar tu próximo evento en algo que genere impacto real.
          </p>
        </div>

        {/* Nav buttons */}
        <div className="md:col-span-3 md:col-start-6">
          <ul className="space-y-3 text-[15px]">
            {FOOTER_NAV.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="underline-link">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4 md:col-start-9">
          <h4 className="eyebrow text-white/50 mb-4">Contacto</h4>
          <address className="not-italic text-sm leading-[1.7] text-brand-white/85 space-y-2">
            <p>HQ en Puerto Madero, Buenos Aires, Argentina con presencia en todo el mundo</p>
            <p><a href="mailto:hello@caracterprod.com" className="underline-link">hello@caracterprod.com</a></p>
            <p><a href="tel:+16452397512" className="underline-link">+1 645 239 7512</a></p>
          </address>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-14">
        <h4 className="eyebrow text-white/50 mb-4">Redes</h4>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red transition-colors hover:bg-brand-red hover:text-brand-white">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red transition-colors hover:bg-brand-red hover:text-brand-white">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok"
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red transition-colors hover:bg-brand-red hover:text-brand-white">
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50 uppercase tracking-[0.15em]">
        <Link to="/" className="font-display text-2xl tracking-tight text-brand-white normal-case">
          CARACTER
        </Link>
        <span>
          © 2026 CARACTER · Diseñado por CARACTER y{" "}
          <a
            href="https://www.velocentum.com"
            target="_blank"
            rel="noreferrer"
            className="underline-link"
          >
            Velocentum
          </a>
        </span>
      </div>
    </footer>
  );
};
