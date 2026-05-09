import { useEffect, useRef } from "react";

/**
 * Animated red wireframe globe rendered with HTML canvas.
 * Lightweight, dependency-free, respects prefers-reduced-motion.
 */
export const AnimatedGlobe = ({ size = 520 }: { size?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssSize = size;
    canvas.width = cssSize * dpr;
    canvas.height = cssSize * dpr;
    canvas.style.width = `${cssSize}px`;
    canvas.style.height = `${cssSize}px`;
    ctx.scale(dpr, dpr);

    const cx = cssSize / 2;
    const cy = cssSize / 2;
    const R = cssSize * 0.42;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Generate a sphere of dots (lat/long grid) once.
    const dots: { lat: number; lon: number }[] = [];
    const latSteps = 60;
    const lonStepBase = 120;
    for (let i = 1; i < latSteps; i++) {
      const lat = -Math.PI / 2 + (i / latSteps) * Math.PI;
      const circ = Math.cos(lat);
      const count = Math.max(8, Math.floor(lonStepBase * circ));
      for (let j = 0; j < count; j++) {
        const lon = (j / count) * Math.PI * 2;
        dots.push({ lat, lon });
      }
    }

    // Continent outlines as polylines (lat, lon in radians). Stylized — not geographically exact.
    const D = (deg: number) => (deg * Math.PI) / 180;
    const continents: [number, number][][] = [
      // North America
      [[60,-160],[70,-140],[68,-110],[60,-95],[50,-80],[42,-70],[30,-82],[25,-97],[30,-115],[40,-124],[50,-130],[60,-160]],
      // South America
      [[10,-75],[5,-60],[-5,-50],[-15,-40],[-25,-45],[-35,-58],[-45,-72],[-35,-72],[-20,-78],[-5,-80],[10,-75]],
      // Europe
      [[60,-8],[65,15],[60,30],[50,30],[45,15],[42,0],[50,-5],[60,-8]],
      // Africa
      [[35,-5],[35,30],[15,40],[0,42],[-15,38],[-30,30],[-35,18],[-25,12],[-5,8],[15,-15],[30,-10],[35,-5]],
      // Asia
      [[70,40],[72,90],[70,140],[55,140],[40,135],[25,120],[20,100],[10,80],[20,65],[35,50],[50,45],[70,40]],
      // Australia
      [[-12,130],[-15,145],[-25,153],[-37,148],[-35,135],[-32,118],[-22,115],[-12,130]],
    ];

    let rotation = 0;
    let raf = 0;
    let last = performance.now();

    const project = (lat: number, lon: number) => {
      const x = Math.cos(lat) * Math.sin(lon);
      const y = Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lon);
      return { x: cx + x * R, y: cy - y * R, z };
    };

    const draw = () => {
      ctx.clearRect(0, 0, cssSize, cssSize);

      // Soft red glow halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.4);
      halo.addColorStop(0, "rgba(192, 24, 27, 0.25)");
      halo.addColorStop(1, "rgba(192, 24, 27, 0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Dot grid
      for (const d of dots) {
        const p = project(d.lat, d.lon + rotation);
        if (p.z <= 0) continue;
        const alpha = 0.15 + p.z * 0.45;
        ctx.fillStyle = `rgba(192, 24, 27, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      // Continent outlines
      ctx.lineWidth = 1.4;
      for (const poly of continents) {
        ctx.beginPath();
        let started = false;
        for (const [latDeg, lonDeg] of poly) {
          const p = project(D(latDeg), D(lonDeg) + rotation);
          if (p.z <= 0.05) { started = false; continue; }
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = "rgba(220, 38, 41, 0.95)";
        ctx.shadowColor = "rgba(192, 24, 27, 0.8)";
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Outer rim
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(192, 24, 27, 0.55)";
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      rotation += dt * 0.25;
      draw();
      raf = requestAnimationFrame(tick);
    };

    draw();
    if (!reduced) raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <div className="relative mx-auto" style={{ width: size, height: size, maxWidth: "100%" }}>
      <canvas ref={canvasRef} aria-hidden className="block" />
    </div>
  );
};

type GlobeSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const GlobeSection = ({
  title = "Alcance global con presencia local",
  description = "Headquarters en Buenos Aires, con producciones en toda LATAM, Estados Unidos y Europa. Operamos campañas globales con lectura regional.",
  ctaLabel,
  ctaHref = "/contacto",
}: GlobeSectionProps) => {
  return (
    <section className="bg-brand-black text-brand-white px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <AnimatedGlobe size={520} />
        <h2 className="mt-12 font-display uppercase text-[clamp(36px,6vw,72px)] leading-[1] text-brand-red max-w-[18ch]">
          {title}
        </h2>
        <p className="mt-8 max-w-[600px] text-base md:text-lg leading-[1.6] text-brand-white/85">
          {description}
        </p>
        {ctaLabel && (
          <a
            href={ctaHref}
            className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full"
            style={{ padding: "16px 40px", border: "1px solid #c0181b" }}
          >
            <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" style={{ background: "#c0181b" }} />
            <span className="relative z-10 font-display uppercase text-[#c0181b] group-hover:text-[#fcf7f5] transition-colors duration-300" style={{ fontSize: 14, letterSpacing: "0.2em" }}>
              {ctaLabel}
            </span>
          </a>
        )}
      </div>
    </section>
  );
};