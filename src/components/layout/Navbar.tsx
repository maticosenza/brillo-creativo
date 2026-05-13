import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOverlay } from "./MenuOverlay";

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
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-20">
          <Link
            to="/"
            className={`font-display text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-brand-red" : "text-brand-white"
            }`}
          >
            CARACTER
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
            >
              <span className={`block w-6 h-[2px] transition-all duration-300 ${scrolled ? "bg-brand-red" : "bg-brand-white"}`} />
              <span className={`block w-6 h-[2px] transition-all duration-300 ${scrolled ? "bg-brand-red" : "bg-brand-white"}`} />
              <span className={`block w-6 h-[2px] transition-all duration-300 ${scrolled ? "bg-brand-red" : "bg-brand-white"}`} />
            </button>

            <Link
              to="/contacto"
              className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-[13px] font-medium uppercase tracking-wider group transition-colors duration-300 ${
                scrolled
                  ? "bg-brand-red text-brand-white border border-brand-red"
                  : "bg-brand-white text-brand-black"
              }`}
            >
              <span
                aria-hidden
                className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 ${
                  scrolled ? "bg-brand-white" : "bg-brand-red"
                }`}
              />
              <span className={`relative z-10 transition-colors duration-300 ${
                scrolled ? "group-hover:text-brand-red" : "group-hover:text-brand-white"
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
