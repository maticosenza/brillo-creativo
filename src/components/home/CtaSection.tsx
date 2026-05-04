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
          i * 0.15
        );
        tl.fromTo(`.cta-word-echo-${i}`,
          { clipPath: "inset(100% 0 0 0)", x: 0, opacity: 0 },
          { clipPath: "inset(0% 0 0 0)", x: 8, opacity: 0.6, duration: 0.9, ease: "power4.out" },
          i * 0.15 + 0.12
        );
      });
    }, el);

    return () => ctx.revert();
  }, [flat.join("|")]);

  let idx = -1;
  return (
    <section
      ref={ref}
      className="bg-brand-red text-brand-white px-6 md:px-12 text-center"
      style={{ paddingTop: "clamp(100px, 14vw, 160px)", paddingBottom: "clamp(100px, 14vw, 160px)" }}
    >
      <h2 className="font-display uppercase text-hero leading-[0.9] mx-auto">
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.map((w) => {
              idx += 1;
              const i = idx;
              return (
                <span key={`${w}-${i}`} className="relative inline-block overflow-visible mr-[0.25em] last:mr-0 align-bottom">
                  <span className={`cta-word cta-word-main-${i} inline-block`} style={{ clipPath: "inset(100% 0 0 0)" }}>
                    {w}
                  </span>
                  <span aria-hidden className={`cta-word cta-word-echo-${i} absolute inset-0`} style={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}>
                    {w}
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </h2>

      <p className="mx-auto mt-10 max-w-[600px] text-lg leading-[1.6]">{description}</p>

      <Link
        to="/contacto"
        className="group relative mt-12 inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-white text-brand-red border border-brand-white"
        style={{ padding: "24px 56px" }}
      >
        <span aria-hidden className="absolute inset-0 bg-brand-black origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
        <span className="relative z-10 text-base font-medium uppercase tracking-wider transition-colors duration-300 group-hover:text-brand-white">
          Hablemos
        </span>
      </Link>
    </section>
  );
};
