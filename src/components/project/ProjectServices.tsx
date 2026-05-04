import { motion } from "framer-motion";
import { RevealHeading } from "@/components/home/RevealHeading";
import type { Project } from "@/data/projects";

export const ProjectServices = ({ p }: { p: Project }) => {
  return (
    <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
      <div className="max-w-3xl">
        <span className="eyebrow opacity-80">Qué hicimos</span>
        <RevealHeading
          text="Estrategia, creatividad y producción"
          className="mt-6 font-display uppercase text-h2"
        />
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="md:col-span-5 space-y-5"
        >
          {p.services.map((s) => (
            <motion.li
              key={s}
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } },
              }}
              className="flex items-center gap-4"
            >
              <span aria-hidden className="block h-[2px] w-6 bg-brand-red shrink-0" />
              <span className="text-lg uppercase tracking-[0.05em]">{s}</span>
            </motion.li>
          ))}
        </motion.ul>

        <div className="md:col-start-7 md:col-span-6">
          <p className="text-lg leading-[1.7] text-brand-white/90 whitespace-pre-line">
            {p.longDescription}
          </p>
        </div>
      </div>
    </section>
  );
};
