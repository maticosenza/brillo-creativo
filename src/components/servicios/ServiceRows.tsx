import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "@/data/services";
import { RedFrame } from "@/components/shared/RedFrame";

const Row = ({ s, index }: { s: typeof SERVICES[number]; index: number }) => {
  const isOdd = index % 2 === 0; // 0-based: 0,2,4 = rows 1,3,5 → image LEFT
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const imgInitial = isOdd
    ? { clipPath: "inset(0 100% 0 0)" }
    : { clipPath: "inset(0 0 0 100%)" };
  const imgAnimate = { clipPath: "inset(0 0 0 0)" };

  const ImageBlock = (
    <motion.div
      ref={ref}
      initial={imgInitial}
      whileInView={imgAnimate}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden group"
    >
      <motion.img
        src={s.image}
        alt={s.title}
        loading="lazy"
        style={{ y }}
        className="w-full aspect-[16/10] object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
      />
    </motion.div>
  );

  // Odd (image left) gets RedFrame on the LEFT side (away from text on right).
  // Even (image right) gets RedFrame on the RIGHT side (away from text on left).
  const Framed = isOdd ? (
    <RedFrame side="left">{ImageBlock}</RedFrame>
  ) : (
    <RedFrame side="right">{ImageBlock}</RedFrame>
  );
  const decorate = index % 2 === 0; // rows 1,3,5,7,9 → decorated

  const TextBlock = (
    <div className="flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="font-display leading-none"
        style={{
          fontSize: "clamp(48px, 8vw, 120px)",
          color: "#fcf7f5",
          opacity: 0.5,
        }}
      >
        {s.number}
      </motion.div>
      <span
        aria-hidden
        className="block mt-2 mb-6"
        style={{ width: 40, height: 2, background: "#fcf7f5" }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="font-display uppercase text-left !leading-[1.1]"
        style={{
          fontSize: "clamp(28px, 4vw, 52px)",
          color: "#fcf7f5",
          letterSpacing: "-0.01em",
        }}
      >
        {s.title.toUpperCase()}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="mt-6 max-w-[480px]"
        style={{ fontSize: 17, lineHeight: 1.6, color: "#fcf7f5" }}
      >
        {s.description}
      </motion.p>
      {s.bullets?.length ? (
        <ul className="mt-8 space-y-3">
          {s.bullets.slice(0, 3).map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 uppercase"
              style={{
                color: "#fcf7f5",
                fontSize: 12,
                letterSpacing: "0.15em",
              }}
            >
              <span aria-hidden style={{ color: "#fcf7f5" }}>—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );

  return (
    <div className="px-6 md:px-12 py-[50px] md:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:min-h-[600px]">
        {isOdd ? (
          <>
            <div className="md:col-span-7">{decorate ? Framed : ImageBlock}</div>
            <div className="md:col-start-9 md:col-span-4">{TextBlock}</div>
          </>
        ) : (
          <>
            <div className="md:col-span-4 order-2 md:order-1">{TextBlock}</div>
            <div className="md:col-start-6 md:col-span-7 order-1 md:order-2">
              {decorate ? Framed : ImageBlock}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const ServiceRows = () => (
  <div className="bg-brand-red text-brand-white">
    {SERVICES.map((s, i) => (
      <Row key={s.slug} s={s} index={i} />
    ))}
  </div>
);
