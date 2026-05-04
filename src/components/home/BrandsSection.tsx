import { motion } from "framer-motion";
import { RevealHeading } from "./RevealHeading";

const BRANDS = [
  "NORTHWAVE","ATLAS","VÉRTICE","KINGSTON","HELIOS","ORION",
  "FORTUNE","KAIROS","NOVA","ÉTER","MERIDIAN","PHOENIX",
  "ZENITH","ALBA","CIRCA","BOREAL","LUMEN","FARO",
  "AXIS","HALO","MAGNA","VOLTA","PRISMA","ÓRBITA",
];

export const BrandsSection = () => {
  return (
    <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
      <div className="text-center max-w-5xl mx-auto">
        <RevealHeading
          text="Las marcas que nos eligen"
          className="font-display uppercase text-h2"
        />
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10"
      >
        {BRANDS.map((name) => (
          <motion.li
            key={name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } },
            }}
            className="flex items-center justify-center"
          >
            <svg
              viewBox="0 0 240 60"
              role="img"
              aria-label={name}
              className="w-full max-w-[160px] h-[60px] opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#ffffff"
                fontFamily="Anton, Impact, sans-serif"
                fontSize="34"
                letterSpacing="2"
              >
                {name}
              </text>
            </svg>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
