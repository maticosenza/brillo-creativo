import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export const RevealHeading = ({ text, className = "", as = "h2" }: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as as any;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".rh-word");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(words, { clipPath: "inset(0 0 0 0)", y: 0 });
      return;
    }

    const tween = gsap.fromTo(
      words,
      { clipPath: "inset(100% 0 0 0)", yPercent: 100 },
      {
        clipPath: "inset(0% 0 0 0)",
        yPercent: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0">
          <span
            className="rh-word inline-block"
            style={{ clipPath: "inset(100% 0 0 0)" }}
          >
            {w}
          </span>
        </span>
      ))}
    </Tag>
  );
};
