import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  lines?: string[][];
  description?: string;
};

const DEFAULT_LINES = [["¿LISTOS", "PARA"], ["EMPEZAR?"]];
const DEFAULT_DESC =
  "Contanos qué tenés en mente. Te respondemos en menos de 24 horas con una primera propuesta de enfoque.";

export const CtaSection = ({ lines = DEFAULT_LINES, description = DEFAULT_DESC }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const flat = lines.flat();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".cta-word", { clipPath: "inset(0 0 0 0)", opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
      flat.forEach((_, i) => {
        tl.fromTo(`.cta-word-main-${i}`,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 0.9, ease: "power4.out" },
          i * 0.12
        );
      });
    }, el);

    return () => ctx.revert();
  }, [flat.join("|")]);

  let idx = -1;
  return (
    <section
      ref={ref}
      className="bg-brand-black text-brand-white px-6 md:px-12 text-center"
      style={{ paddingTop: "clamp(100px, 14vw, 160px)", paddingBottom: "clamp(100px, 14vw, 160px)" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200, height: 1, background: "#c0181b", opacity: 0.5, marginBottom: 60 }} aria-hidden />
      <h2
        className="cta-outline-text font-display uppercase mx-auto"
        style={{
          fontSize: "clamp(60px, 11vw, 180px)",
          lineHeight: 0.95,
          letterSpacing: "-0.01em",
        }}
      >
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.map((w) => {
              idx += 1;
              const i = idx;
              return (
                <span key={`${w}-${i}`} className="relative inline-block overflow-hidden mr-[0.25em] last:mr-0 align-bottom">
                  <span className={`cta-word cta-word-main-${i} inline-block`} style={{ clipPath: "inset(100% 0 0 0)" }}>
                    {w}
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </h2>

      <p className="mx-auto mt-10 max-w-[600px] text-lg leading-[1.6]" style={{ color: "#fcf7f5", opacity: 0.9 }}>{description}</p>

      <Link
        to="/contacto"
        className="group relative mt-12 inline-flex items-center justify-center overflow-hidden rounded-full"
        style={{ padding: "18px 44px", border: "1px solid #c0181b", background: "transparent" }}
      >
        <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" style={{ background: "#c0181b" }} />
        <span className="relative z-10 font-display uppercase transition-colors duration-300 group-hover:text-[#fcf7f5]" style={{ color: "#c0181b", fontSize: 14, letterSpacing: "0.2em" }}>
          Hablemos
        </span>
      </Link>

      <style>{`
        .cta-outline-text {
          color: transparent;
          -webkit-text-stroke: 2px #c0181b;
          text-stroke: 2px #c0181b;
          paint-order: stroke fill;
        }
        @media (min-width: 1024px) {
          .cta-outline-text { -webkit-text-stroke-width: 2.5px; }
        }
        @media (max-width: 640px) {
          .cta-outline-text { -webkit-text-stroke-width: 1.5px; }
        }
      `}</style>
    </section>
  );
};
