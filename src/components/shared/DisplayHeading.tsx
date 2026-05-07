import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type DisplaySize = "hero" | "section" | "cta";

interface DisplayHeadingProps {
  lines: string[];
  highlightedLine?: number;
  highlightColor?: string;
  textColor?: string;
  glow?: boolean;
  align?: "left" | "center";
  size?: DisplaySize;
  as?: "h1" | "h2";
  className?: string;
  trigger?: "immediate" | "scroll";
  /** Outline / stroke variant (used for CTA). Color used as stroke color. */
  outline?: boolean;
  outlineColor?: string;
}

const SIZE_STYLES: Record<DisplaySize, React.CSSProperties> = {
  hero:    { fontSize: "clamp(60px, 11vw, 180px)", letterSpacing: "-0.02em", lineHeight: 0.95 },
  section: { fontSize: "clamp(40px, 7vw, 110px)",  letterSpacing: "-0.01em", lineHeight: 1 },
  cta:     { fontSize: "clamp(50px, 9vw, 140px)",  letterSpacing: "-0.01em", lineHeight: 1 },
};

const GLOW_SHADOW =
  "0 0 40px rgba(252, 247, 245, 0.25), 0 0 80px rgba(252, 247, 245, 0.15)";

export const DisplayHeading = ({
  lines,
  highlightedLine,
  highlightColor = "#0a0a0a",
  textColor = "#fcf7f5",
  glow = true,
  align = "left",
  size = "hero",
  as = "h2",
  className = "",
  trigger = "scroll",
  outline = false,
  outlineColor = "#c0181b",
}: DisplayHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as as any;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".dh-line");
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(targets,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.15,
          ...(trigger === "immediate"
            ? { delay: 0.2 }
            : { scrollTrigger: { trigger: el, start: "top 80%", once: true } }),
        });
    }, el);
    return () => ctx.revert();
  }, [lines.join("|"), trigger]);

  const outlineStyle: React.CSSProperties = outline
    ? {
        color: "transparent",
        WebkitTextStroke: `2px ${outlineColor}`,
        // @ts-expect-error non-standard
        textStroke: `2px ${outlineColor}`,
        paintOrder: "stroke fill",
      }
    : {};

  return (
    <Tag
      ref={ref}
      className={`font-display uppercase ${align === "center" ? "text-center" : "text-left"} ${className}`}
      style={{ ...SIZE_STYLES[size] }}
    >
      {lines.map((line, i) => {
        const isHi = highlightedLine === i;
        const color = isHi ? highlightColor : textColor;
        const useGlow = glow && !isHi && !outline;
        return (
          <span key={i} className="block overflow-hidden">
            <span
              className="dh-line block"
              style={{
                clipPath: "inset(100% 0 0 0)",
                color: outline ? undefined : color,
                textShadow: useGlow ? GLOW_SHADOW : undefined,
                ...outlineStyle,
              }}
            >
              {line}
            </span>
          </span>
        );
      })}
    </Tag>
  );
};
