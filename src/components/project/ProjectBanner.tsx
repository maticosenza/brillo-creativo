import type { Project } from "@/data/projects";

export const ProjectBanner = ({ p }: { p: Project }) => {
  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden bg-brand-black text-brand-white">
      <div className="absolute inset-0">
        <img src={p.gallery[0]} alt={p.title} className="w-full h-full object-cover" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85" />

      <div className="absolute left-0 bottom-0 z-10 p-8 md:p-16 max-w-[1200px]">
        <span className="block eyebrow opacity-90">{p.category}</span>
        <p className="mt-4 text-sm opacity-70 uppercase tracking-[0.15em]">
          {p.year} — {p.location}
        </p>
        <h1
          className="mt-6 font-display uppercase leading-[0.9]"
          style={{ fontSize: "clamp(56px, 11vw, 180px)" }}
        >
          {p.title.toUpperCase()}
        </h1>
      </div>
    </section>
  );
};
