import { useEffect, useRef, useCallback, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getService } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { RevealHeading } from "@/components/home/RevealHeading";
import { BulletList } from "@/components/shared/BulletList";

gsap.registerPlugin(ScrollTrigger);

const NavBtn = ({ onClick, dir, label }: { onClick: () => void; dir: "left"|"right"; label: string }) => (
  <button onClick={onClick} aria-label={label}
    className="group relative w-14 h-14 rounded-full border border-brand-white overflow-hidden flex items-center justify-center">
    <span aria-hidden className="absolute inset-0 bg-brand-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
    {dir === "left"
      ? <ArrowLeft className="relative z-10 w-5 h-5 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />
      : <ArrowRight className="relative z-10 w-5 h-5 text-brand-white transition-colors duration-300 group-hover:text-brand-red" />}
  </button>
);

const HighlightBox = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el.querySelectorAll(".hl-edge"), { scaleX: 1, scaleY: 1 });
      return;
    }
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 70%", once: true } });
    tl.fromTo(".hl-top",    { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power2.inOut" })
      .fromTo(".hl-right",  { scaleY: 0 }, { scaleY: 1, duration: 0.4, ease: "power2.inOut" })
      .fromTo(".hl-bottom", { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power2.inOut" })
      .fromTo(".hl-left",   { scaleY: 0 }, { scaleY: 1, duration: 0.4, ease: "power2.inOut" });
    return () => { tl.scrollTrigger?.kill(); tl.kill(); };
  }, []);
  return (
    <div ref={ref} className="relative aspect-[4/3] p-12 md:p-20 flex flex-col justify-end max-w-2xl mx-auto">
      <span aria-hidden className="hl-top hl-edge    absolute top-0    left-0  h-px w-full bg-brand-white origin-left" style={{ transform: "scaleX(0)" }} />
      <span aria-hidden className="hl-right hl-edge  absolute top-0    right-0 w-px h-full bg-brand-white origin-top" style={{ transform: "scaleY(0)" }} />
      <span aria-hidden className="hl-bottom hl-edge absolute bottom-0 right-0 h-px w-full bg-brand-white origin-right" style={{ transform: "scaleX(0)" }} />
      <span aria-hidden className="hl-left hl-edge   absolute bottom-0 left-0  w-px h-full bg-brand-white origin-bottom" style={{ transform: "scaleY(0)" }} />
      <span className="font-display uppercase leading-[0.9] text-numeral">{value}</span>
      <span className="mt-4 text-[13px] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
};

const ServiceDetail = () => {
  const { slug = "" } = useParams();
  const s = getService(slug);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, align: "start", containScroll: "trimSnaps" });
  const [sel, setSel] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSel(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect); onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!s) return <Navigate to="/servicios" replace />;

  const related = s.relatedProjects.map((sl) => PROJECTS.find((p) => p.slug === sl)).filter(Boolean) as typeof PROJECTS;
  const total = String(s.gallery.length).padStart(2, "0");
  const current = String(sel + 1).padStart(2, "0");

  return (
    <>
      <IntroBanner
        lines={s.title.toUpperCase().split(" ").map((w) => [w])}
        subtitle={s.description}
        height="70vh"
      />

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          <div className="md:col-span-5">
            <span className="eyebrow opacity-80">Qué incluye</span>
            <RevealHeading text="Un servicio end-to-end" className="mt-6 font-display uppercase text-h2" />
            <div className="mt-10"><BulletList items={s.bullets} /></div>
          </div>
          <div className="md:col-start-7 md:col-span-6">
            <p className="text-lg leading-[1.7] text-brand-white/90">{s.longDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-red text-brand-white section-y overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 pl-12">
            {s.gallery.map((src, i) => (
              <div key={i} className="shrink-0 basis-[80vw] aspect-[16/10] overflow-hidden">
                <img src={src} alt={`${s.title} — imagen ${i + 1}`} className="w-full h-full object-cover" loading={i < 2 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 px-12 flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.2em]">{current} / {total}</span>
          <div className="flex gap-3"><NavBtn onClick={prev} dir="left" label="Anterior" /><NavBtn onClick={next} dir="right" label="Siguiente" /></div>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <HighlightBox value={s.highlight.value} label={s.highlight.label} />
      </section>

      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <div className="max-w-3xl">
          <span className="eyebrow opacity-90">Proyectos relacionados</span>
          <RevealHeading text="Ejemplos en este servicio" className="mt-6 font-display uppercase text-h2" />
        </div>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {related.map((p) => (
            <motion.div key={p.slug} variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } },
            }}>
              <Link to={`/proyectos/${p.slug}`} className="group relative block aspect-[4/5] overflow-hidden">
                <img src={p.gallery[0]} alt={p.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08]" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                <span aria-hidden className="absolute top-5 right-5 w-12 h-12 rounded-full border border-brand-white flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
                <div className="absolute left-6 bottom-6 right-6 z-10">
                  <span className="text-xs uppercase tracking-[0.2em] opacity-90">{p.category}</span>
                  <h3 className="mt-2 font-display uppercase text-h3">{p.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </>
  );
};
export default ServiceDetail;
