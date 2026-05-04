import { motion } from "framer-motion";

export const BulletList = ({ items, dashColor = "bg-brand-red" }: { items: string[]; dashColor?: string }) => (
  <motion.ul
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-15%" }}
    variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    className="space-y-5"
  >
    {items.map((s) => (
      <motion.li
        key={s}
        variants={{
          hidden: { opacity: 0, x: -30 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
        }}
        className="flex items-center gap-4"
      >
        <span aria-hidden className={`block h-[2px] w-6 ${dashColor} shrink-0`} />
        <span className="text-lg uppercase tracking-[0.05em]">{s}</span>
      </motion.li>
    ))}
  </motion.ul>
);
