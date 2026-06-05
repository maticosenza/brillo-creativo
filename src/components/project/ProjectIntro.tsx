import type { Project } from "@/data/projects";

export const ProjectIntro = ({ p }: { p: Project }) => {
  const rawScope = p.scopeOfWork?.length ? p.scopeOfWork : [p.longDescription];
  const scope = rawScope
    .flatMap((block) => (block ?? "").split(/\n+/))
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="bg-brand-white text-brand-black py-[40px] md:py-[60px] px-6 md:px-[60px]">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
        {/* COLUMNA IZQUIERDA: Datos */}
        <div className="md:col-span-4">
          <dl className="space-y-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] opacity-50">Ciudades</dt>
              <dd className="mt-2 font-display uppercase text-lg leading-tight">{p.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] opacity-50">Duración</dt>
              <dd className="mt-2 font-display uppercase text-lg">{p.duration}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] opacity-50">Año</dt>
              <dd className="mt-2 font-display uppercase text-lg">{p.year}</dd>
            </div>
          </dl>
        </div>

        {/* COLUMNA DERECHA: Scope of work */}
        <div className="md:col-start-6 md:col-span-7">
          <h3 className="font-display uppercase text-h3 text-brand-red">Scope of work</h3>
          <div className="mt-6 space-y-4">
            {scope.map((paragraph, idx) => (
              <p key={idx} className="text-lg leading-[1.5] opacity-80 text-left">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
