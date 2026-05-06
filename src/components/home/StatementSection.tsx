import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT = "AYUDAMOS A MARCAS Y EMPRESAS A {EMPUJAR LOS LÍMITES} DEL DEPORTE Y LOS NEGOCIOS CON LA EXPERIENCIA, LA OPERATIVA Y EL {CARÁCTER} QUE CADA EVENTO NECESITA.";

export const StatementSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Parse text: words inside {} render in black
  const words: { text: string; black: boolean }[] = [];
  const re = /\{([^}]+)\}|(\S+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(TEXT)) !== null) {
    if (m[1]) m[1].split(/\s+/).forEach((w) => words.push({ text: w, black: true }));
    else words.push({ text: m[2], black: false });
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".st-word", { clipPath: "inset(0 0 0 0)", y: 0 });
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });
    tl.fromTo(
      ".st-word",
      { clipPath: "inset(100% 0 0 0)", y: 30 },
      { clipPath: "inset(0% 0 0 0)", y: 0, duration: 0.7, ease: "power3.out", stagger: 0.04 }
    ).fromTo(".st-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={ref} className="bg-brand-red text-brand-white py-[80px] md:py-[120px] px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2
          className="font-display uppercase"
          style={{ fontSize: "clamp(32px, 4.5vw, 68px)", lineHeight: 1.1 }}
        >
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
              <span
                className={`st-word inline-block ${w.black ? "text-brand-black" : ""}`}
                style={{ clipPath: "inset(100% 0 0 0)" }}
              >
                {w.text}
              </span>
            </span>
          ))}
        </h2>

        <div className="mt-[60px]">
          <Link
            to="/servicios"
            className="st-cta group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-brand-black px-9 py-4 text-[13px] font-medium uppercase tracking-wider text-brand-black"
          >
            <span aria-hidden className="absolute inset-0 bg-brand-black origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-white">
              Conocé más
            </span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-white">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};