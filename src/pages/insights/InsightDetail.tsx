import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getInsight, INSIGHTS } from "@/data/insights";
import { SEO } from "@/components/shared/SEO";

const InsightDetail = () => {
  const { slug = "" } = useParams();
  const post = getInsight(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/insights" replace />;

  const related = INSIGHTS.filter((i) => i.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | Insights`}
        description={post.excerpt}
        canonical={`https://productora.com/insights/${post.slug}`}
      />

      <section className="relative w-full bg-brand-red text-brand-white px-6 md:px-12 pt-32 pb-16 md:pb-24">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Volver a notas
        </Link>
        <div className="mt-10 max-w-[900px]">
          <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.2em] opacity-90">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1
            className="mt-6 font-display uppercase leading-[0.95]"
            style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
          >
            {post.title}
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-[1.5] max-w-[720px]">{post.excerpt}</p>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white px-6 md:px-12 py-20 md:py-28">
        <div className="aspect-[16/9] w-full max-w-[1200px] mx-auto overflow-hidden mb-16">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[720px] mx-auto space-y-8 text-lg leading-[1.7] opacity-90">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-black text-brand-white px-6 md:px-12 pb-24 border-t border-white/10 pt-20">
          <h2 className="font-display uppercase text-h3 mb-12">Seguí leyendo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {related.map((r) => (
              <Link key={r.slug} to={`/insights/${r.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]" />
                </div>
                <span className="block mt-4 text-[12px] uppercase tracking-[0.2em] opacity-60">{r.date}</span>
                <h3 className="mt-3 font-display uppercase" style={{ fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1 }}>{r.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

    </>
  );
};

export default InsightDetail;