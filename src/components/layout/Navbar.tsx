import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOverlay } from "./MenuOverlay";
import logoCaracter from "@/assets/logo-caracter.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-brand-red" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-20">
          <Link to="/" aria-label="Caracter Producciones" className="flex items-center">
            <img src={logoCaracter} alt="Caracter Producciones" className="h-12 md:h-14 w-auto" />
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
            >
              <span className="block w-6 h-[2px] bg-brand-white transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-brand-white transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-brand-white transition-all duration-300" />
            </button>

            <Link
              to="/contacto"
              className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-[13px] font-medium uppercase tracking-wider group transition-colors duration-300 ${
                scrolled
                  ? "bg-brand-white text-brand-red border border-brand-white"
                  : "bg-brand-white text-brand-black"
              }`}
            >
              <span
                aria-hidden
                className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 ${
                  scrolled ? "bg-brand-red" : "bg-brand-red"
                }`}
              />
              <span className={`relative z-10 transition-colors duration-300 ${
                scrolled ? "group-hover:text-brand-white" : "group-hover:text-brand-white"
              }`}>
                Contacto
              </span>
            </Link>
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};
