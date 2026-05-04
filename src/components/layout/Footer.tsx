import { Link } from "react-router-dom";
import { NAV, SOCIALS, CONTACT_EMAIL } from "@/lib/nav-config";

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white px-6 md:px-12 pt-20 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div>
          <Link to="/" className="font-display text-3xl tracking-tight block mb-4">
            PRODUCTORA
          </Link>
          <p className="text-sm text-white/70 leading-relaxed max-w-[220px]">
            Eventos que dejan huella.
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-white/50 mb-5">Navegación</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="underline-link">Home</Link></li>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="underline-link">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-white/50 mb-5">Contacto</h4>
          <address className="not-italic text-sm leading-relaxed text-white/80 space-y-2">
            <p>Buenos Aires, Argentina</p>
            <p><a href={`mailto:${CONTACT_EMAIL}`} className="underline-link">{CONTACT_EMAIL}</a></p>
            <p><a href="tel:+541100000000" className="underline-link">+54 11 0000 0000</a></p>
          </address>
        </div>

        <div>
          <h4 className="eyebrow text-white/50 mb-5">Redes</h4>
          <ul className="space-y-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="underline-link">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50 uppercase tracking-[0.15em]">
        <span>© 2026 PRODUCTORA</span>
        <span>Diseñado y producido en Buenos Aires</span>
      </div>
    </footer>
  );
};
