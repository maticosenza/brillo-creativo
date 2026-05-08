import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
  trigger?: "immediate" | "scroll" | "static";
  outline?: boolean;
  outlineColor?: string;
  /** When true with outline, the fill color reveals as the section is scrolled. */
  scrubFill?: boolean;
}

const SIZE_STYLES: Record<DisplaySize, React.CSSProperties> = {
  hero:    { fontSize: "clamp(60px, 11vw, 180px)", letterSpacing: "-0.02em", lineHeight: 0.95 },
  section: { fontSize: "clamp(40px, 7vw, 110px)",  letterSpacing: "-0.01em", lineHeight: 1 },
  cta:     { fontSize: "clamp(50px, 9vw, 140px)",  letterSpacing: "-0.01em", lineHeight: 1 },
};

const GLOW_SHADOW =
  "0 0 30px rgba(252, 247, 245, 0.35), 0 0 60px rgba(252, 247, 245, 0.20)";

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
  scrubFill = false,
}: DisplayHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as as any;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (trigger === "static") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {
      const baseLines = Array.from(el.querySelectorAll<HTMLElement>(".dh-base .dh-line"));
      if (!baseLines.length) return;

      const charsPerLine: HTMLElement[][] = [];
      baseLines.forEach((line) => {
        const split = new SplitText(line, { type: "chars,words", charsClass: "dh-char" });
        splits.push(split);
        const chars = split.chars as HTMLElement[];
        chars.forEach((c) => {
          c.style.display = "inline-block";
          c.style.willChange = "transform, opacity";
        });
        charsPerLine.push(chars);
      });

      if (reduced) {
        const all = charsPerLine.flat();
        gsap.fromTo(all, { opacity: 0 }, { opacity: 1, duration: 0.2, stagger: 0.005 });
      } else {
        charsPerLine.forEach((chars, lineIdx) => {
          gsap.fromTo(
            chars,
            { opacity: 0, yPercent: 100, rotateX: -40 },
            {
              opacity: 1,
              yPercent: 0,
              rotateX: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.028,
              transformOrigin: "50% 100%",
              ...(trigger === "immediate"
                ? { delay: 0.3 + lineIdx * 0.1 }
                : {
                    delay: lineIdx * 0.1,
                    scrollTrigger: { trigger: el, start: "top 80%", once: true },
                  }),
            }
          );
        });
      }

      if (outline && scrubFill && !reduced) {
        const fillLines = Array.from(el.querySelectorAll<HTMLElement>(".dh-fill .dh-line"));
        const fillChars: HTMLElement[] = [];
        fillLines.forEach((line) => {
          const s = new SplitText(line, { type: "chars,words", charsClass: "dh-fill-char" });
          splits.push(s);
          (s.chars as HTMLElement[]).forEach((c) => {
            c.style.display = "inline-block";
            c.style.clipPath = "inset(100% 0 0 0)";
            (c.style as any).webkitClipPath = "inset(100% 0 0 0)";
            c.style.willChange = "clip-path";
            fillChars.push(c);
          });
        });
        if (fillChars.length) {
          const section = el.closest("section") || el.parentElement || el;
          gsap.to(fillChars, {
            clipPath: "inset(0% 0 0 0)",
            webkitClipPath: "inset(0% 0 0 0)",
            ease: "none",
            stagger: { each: 0.02, from: "start" },
            scrollTrigger: {
              trigger: section as Element,
              start: "top 80%",
              end: "center 50%",
              scrub: true,
            },
          });
        }
      }
    }, el);

    return () => {
      splits.forEach((s) => { try { s.revert(); } catch {} });
      ctx.revert();
    };
  }, [lines.join("|"), trigger, outline, scrubFill]);

  const outlineStrokePx = outline ? 2 : 0;
  const baseOutlineStyle: React.CSSProperties = outline
    ? {
        color: "transparent",
        WebkitTextStroke: `${outlineStrokePx}px ${outlineColor}`,
        paintOrder: "stroke fill",
      }
    : {};

  const fullText = lines.join(" ");

  return (
    <Tag
      ref={ref}
      aria-label={fullText}
      className={`font-display uppercase ${align === "center" ? "text-center" : "text-left"} ${className}`}
      style={{ ...SIZE_STYLES[size], position: "relative" }}
    >
      <span className="dh-base block" aria-hidden="true">
        {lines.map((line, i) => {
          const isHi = highlightedLine === i;
          const color = isHi ? highlightColor : textColor;
          const useGlow = glow && !isHi && !outline;
          return (
            <span key={i} className="block">
              <span
                className="dh-line block"
                style={{
                  color: outline ? undefined : color,
                  textShadow: useGlow ? GLOW_SHADOW : undefined,
                  ...baseOutlineStyle,
                }}
              >
                {line}
              </span>
            </span>
          );
        })}
      </span>

      {outline && scrubFill && (
        <span
          className="dh-fill pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {lines.map((line, i) => (
            <span key={`f-${i}`} className="block">
              <span
                className="dh-line block"
                style={{ color: outlineColor }}
              >
                {line}
              </span>
            </span>
          ))}
        </span>
      )}
    </Tag>
  );
};
