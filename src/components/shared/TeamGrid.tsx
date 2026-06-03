import { motion } from "framer-motion";
import { TEAM } from "@/data/team";
import OptimizedImage from "@/components/shared/OptimizedImage";

export const TeamGrid = ({ items = TEAM }: { items?: typeof TEAM }) => (
  <motion.ul
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-10%" }}
    variants={{ show: { transition: { staggerChildren: 0.06 } } }}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
  >
    {items.map((m) => (
      <motion.li
        key={m.name}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        }}
        className="group"
      >
        <div className="aspect-square overflow-hidden">
          <OptimizedImage
            src={m.img}
            alt={m.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.05]"
          />
        </div>
        <h3 className="mt-5 font-display uppercase text-2xl md:text-3xl">{m.name}</h3>
        <p className="mt-1 text-sm opacity-80">{m.role}</p>
      </motion.li>
    ))}
  </motion.ul>
);
