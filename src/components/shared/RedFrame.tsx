import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Red diagonal "racing stripe" frame with animated 8px border that draws on
 * scroll. Wrap videos or images for the signature CARACTER look.
 */
export const RedFrame = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = el.querySelectorAll<HTMLElement>(".rf-line");
    if (reduced) {
      lines.forEach((l) => (l.style.transform = "scale(1)"));
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });
    tl.fromTo(".rf-top", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.inOut" })
      .fromTo(".rf-right", { scaleY: 0 }, { scaleY: 1, duration: 0.3, ease: "power2.inOut" })
      .fromTo(".rf-bottom", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.inOut" })
      .fromTo(".rf-left", { scaleY: 0 }, { scaleY: 1, duration: 0.3, ease: "power2.inOut" })
      .fromTo(".rf-corner", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: "back.out(2)" }, "-=0.2");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const cornerSvg = (
    <svg viewBox="0 0 40 40" className="w-full h-full" aria-hidden>
      <polygon points="0,0 40,0 0,40" fill="#c0181b" />
    </svg>
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      {/* 4 sides */}
      <span aria-hidden className="rf-line rf-top absolute -top-2 left-0 h-2 w-full bg-brand-red origin-left" style={{ transform: "scaleX(0)" }} />
      <span aria-hidden className="rf-line rf-right absolute top-0 -right-2 w-2 h-full bg-brand-red origin-top" style={{ transform: "scaleY(0)" }} />
      <span aria-hidden className="rf-line rf-bottom absolute -bottom-2 left-0 h-2 w-full bg-brand-red origin-right" style={{ transform: "scaleX(0)" }} />
      <span aria-hidden className="rf-line rf-left absolute top-0 -left-2 w-2 h-full bg-brand-red origin-bottom" style={{ transform: "scaleY(0)" }} />
      {/* diagonal corners */}
      <span className="rf-corner absolute -top-6 -left-6 w-10 h-10 rotate-0">{cornerSvg}</span>
      <span className="rf-corner absolute -top-6 -right-6 w-10 h-10 rotate-90">{cornerSvg}</span>
      <span className="rf-corner absolute -bottom-6 -right-6 w-10 h-10 rotate-180">{cornerSvg}</span>
      <span className="rf-corner absolute -bottom-6 -left-6 w-10 h-10 -rotate-90">{cornerSvg}</span>
    </div>
  );
};