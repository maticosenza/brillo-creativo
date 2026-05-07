import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Side = "right" | "left" | "top" | "bottom";

type Props = {
  children: ReactNode;
  className?: string;
  side?: Side;
  double?: boolean;
};

const STRIPE_W = 32;

function stripeStyle(side: Side): React.CSSProperties {
  const angle = side === "left" || side === "bottom" ? -45 : 45;
  const base: React.CSSProperties = {
    backgroundImage: `repeating-linear-gradient(${angle}deg, #fcf7f5 0px, #fcf7f5 8px, transparent 8px, transparent 16px)`,
    position: "absolute",
    pointerEvents: "none",
  };
  if (side === "right") {
    return { ...base, top: 0, bottom: 0, right: 0, width: STRIPE_W };
  }
  if (side === "left") {
    return { ...base, top: 0, bottom: 0, left: 0, width: STRIPE_W };
  }
  if (side === "top") {
    return { ...base, left: 0, right: 0, top: 0, height: STRIPE_W };
  }
  return { ...base, left: 0, right: 0, bottom: 0, height: STRIPE_W };
}

function initialTransform(side: Side): string {
  if (side === "right") return "translateX(100%)";
  if (side === "left") return "translateX(-100%)";
  if (side === "top") return "translateY(-100%)";
  return "translateY(100%)";
}

export const RedFrame = ({ children, className = "", side = "right", double = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stripes = el.querySelectorAll<HTMLElement>(".rf-stripe");
    if (reduced) {
      stripes.forEach((s) => (s.style.transform = "none"));
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });
    tl.to(stripes, { x: 0, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const opposite: Record<Side, Side> = { right: "left", left: "right", top: "bottom", bottom: "top" };
  const sides: Side[] = double ? [side, opposite[side]] : [side];

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      {sides.map((s) => (
        <span
          key={s}
          aria-hidden
          className="rf-stripe"
          style={{ ...stripeStyle(s), transform: initialTransform(s) }}
        />
      ))}
    </div>
  );
};