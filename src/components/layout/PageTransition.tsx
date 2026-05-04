import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export const PageTransition = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline();
    tl.set(el, { clipPath: "inset(100% 0 0 0)" })
      .to(el, { clipPath: "inset(0 0 0 0)", duration: 0.6, ease: "power3.inOut" })
      .to(el, { clipPath: "inset(0 0 100% 0)", duration: 0.6, ease: "power3.inOut" });
  }, [location.pathname]);

  return <div ref={ref} className="page-overlay" aria-hidden />;
};
