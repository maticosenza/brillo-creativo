import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { RevealHeading } from "@/components/home/RevealHeading";
import { CtaSection } from "@/components/home/CtaSection";
import { SERVICES } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

const ServiceBlock = ({ s, idx }: { s: typeof SERVICES[number]; idx: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isRed = idx % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el.querySelectorAll(".sn-digit"), { y: 0, clipPath: "inset(0 0 0 0)" });
      return;
    }
    const tween = gsap.fromTo(
      el.querySelectorAll(".sn-digit"),
      { yPercent: 100, clipPath: "inset(100% 0 0 0)" },
      {
        yPercent: 0, clipPath: "inset(0% 0 0 0)",
        duration: 0.9, ease: "power4.out", stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      }
    );
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center px-6 md:px-12 py-20 ${isRed ? "bg-brand-red" : "bg-brand-black"} text-brand-white`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 items-center w-full">
        <div className="md:col-span-5">
          <span aria-hidden className="font-display uppercase leading-[0.9] text-numeral block">
            {s.number.split("").map((d, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="sn-digit inline-block" style={{ clipPath: "inset(100% 0 0 0)" }}>{d}</span>
              </span>
            ))}
          </span>
        </div>
        <div className="md:col-start-7 md:col-span-6">
          <RevealHeading text={s.title} className="font-display uppercase text-h2" />
          <p className="mt-6 text-lg leading-[1.6] opacity-95">{s.description}</p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm uppercase tracking-[0.05em]">
            {s.bullets.slice(0, 6).map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span aria-hidden className={`block h-[2px] w-5 ${isRed ? "bg-brand-white" : "bg-brand-red"} shrink-0`} />
                {b}
              </li>
            ))}
          </ul>
          <Link
            to={`/servicios/${s.slug}`}
            className={`group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-white px-8 py-4 text-[13px] font-medium uppercase tracking-wider`}
          >
            <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className={`relative z-10 transition-colors duration-300 ${isRed ? "group-hover:text-brand-red" : "group-hover:text-brand-black"}`}>Conocé más</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Servicios = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <IntroBanner
        lines={[["UN", "ENFOQUE"], ["360°"]]}
        subtitle="Cuatro líneas de servicio integradas en un solo equipo."
      />
      {SERVICES.map((s, i) => <ServiceBlock key={s.slug} s={s} idx={i} />)}
      <CtaSection />
    </>
  );
};
export default Servicios;
