import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  lines: string[][];
  className?: string;
  as?: "h1" | "h2";
  trigger?: "load" | "scroll";
};

/** Reusable signature "double word" animation (matches Hero / CTA). */
export const SignatureHeading = ({
  lines,
  className = "font-display uppercase text-hero leading-[0.9]",
  as = "h1",
  trigger = "load",
}: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as as any;
  const flat = lines.flat();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el.querySelectorAll(".sg-word"), { clipPath: "inset(0 0 0 0)", opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline(
        trigger === "scroll"
          ? { scrollTrigger: { trigger: el, start: "top 80%", once: true } }
          : { delay: 0.2 }
      );
      flat.forEach((_, i) => {
        tl.fromTo(`.sg-main-${i}`,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 0.9, ease: "power4.out" }, i * 0.15);
        tl.fromTo(`.sg-echo-${i}`,
          { clipPath: "inset(100% 0 0 0)", x: 0, opacity: 0 },
          { clipPath: "inset(0% 0 0 0)", x: 8, opacity: 0.6, duration: 0.9, ease: "power4.out" }, i * 0.15 + 0.12);
      });
    }, el);
    return () => ctx.revert();
  }, [flat.join("|"), trigger]);

  let idx = -1;
  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map((w) => {
            idx += 1;
            const i = idx;
            return (
              <span key={`${w}-${i}`} className="sg-word relative inline-block overflow-visible mr-[0.25em] last:mr-0 align-bottom">
                <span className={`sg-main-${i} inline-block`} style={{ clipPath: "inset(100% 0 0 0)" }}>{w}</span>
                <span aria-hidden className={`sg-echo-${i} absolute inset-0`} style={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}>{w}</span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
};
