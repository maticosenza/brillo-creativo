import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { SEO } from "@/components/shared/SEO";
import { INSIGHTS } from "@/data/insights";

const Insights = () => (
  <>
    <SEO
      title="Insights | Productora"
      description="Notas, ideas y novedades sobre producción de eventos, dirección creativa y experiencias de marca."
      canonical="https://productora.com/insights"
    />
    <IntroBanner
      lines={[["NOTAS", "Y"], ["NOVEDADES"]]}
      subtitle="Lo que estamos pensando, viendo y aprendiendo en el cruce entre producción, creatividad y marcas."
      height="50vh"
    />

    <section className="bg-brand-black text-brand-white px-6 md:px-12 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {INSIGHTS.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/insights/${post.slug}`} className="group block">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="pt-6 flex items-center justify-between text-[12px] uppercase tracking-[0.2em] opacity-70">
                <span>{post.date}</span>
                <span>{post.category} · {post.readTime}</span>
              </div>
              <h2
                className="mt-4 font-display uppercase text-brand-white"
                style={{ fontSize: "clamp(22px, 2.2vw, 32px)", lineHeight: 1 }}
              >
                {post.title}
              </h2>
              <p className="mt-4 text-base opacity-80 leading-[1.5]">{post.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium">
                Leer nota
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>

  </>
);

export default Insights;