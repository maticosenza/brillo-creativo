import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { RevealHeading } from "@/components/home/RevealHeading";
import { PROJECTS, type Project } from "@/data/projects";
import OptimizedImage from "@/components/shared/OptimizedImage";
import { renderProjectTitle } from "@/lib/project-title";

export const RelatedProjects = ({ p }: { p: Project }) => {
  const fromRelated = p.related
    .map((s) => PROJECTS.find((x) => x.slug === s))
    .filter(Boolean) as Project[];

  const items = [...fromRelated];
  if (items.length < 3) {
    for (const candidate of PROJECTS) {
      if (items.length >= 3) break;
      if (candidate.slug === p.slug) continue;
      if (items.some((it) => it.slug === candidate.slug)) continue;
      items.push(candidate);
    }
  }
  const recommended = items.slice(0, 3);

  return (
    <section className="bg-brand-white text-brand-black py-[30px] pb-[60px] md:py-[40px] md:pb-[100px] px-6 md:px-12">
      <div className="max-w-3xl">
        <span className="eyebrow text-brand-red">También podría interesarte</span>
        <RevealHeading text="Otros proyectos" className="mt-6 font-display uppercase text-h2" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {recommended.map((it) => (
          <motion.div
            key={it.slug}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } },
            }}
          >
            <Link to={`/proyectos/${it.slug}`} className="group relative block aspect-[4/5] overflow-hidden">
              <OptimizedImage
                src={it.heroImage ?? it.gallery[0]}
                alt={it.title}
                priority
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
              <span aria-hidden className="absolute top-5 right-5 w-12 h-12 rounded-full border border-brand-white flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-brand-white" />
              </span>
              <div className="absolute left-6 bottom-6 right-6 z-10 text-brand-white">
                <span className="text-xs uppercase tracking-[0.2em] opacity-90">{it.category}</span>
                <h3 className="mt-2 font-display uppercase text-h3">{renderProjectTitle(it.title)}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/proyectos"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-red px-8 py-4 text-[13px] font-medium uppercase tracking-wider text-brand-red"
        >
          <span aria-hidden className="absolute inset-0 bg-brand-red origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-white">
            Ver todos los proyectos
          </span>
        </Link>
      </div>
    </section>
  );
};
