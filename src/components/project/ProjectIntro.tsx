import { RevealHeading } from "@/components/home/RevealHeading";
import type { Project } from "@/data/projects";

export const ProjectIntro = ({ p }: { p: Project }) => {
  return (
    <section className="bg-brand-white text-brand-black section-y px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
        <div className="md:col-span-5">
          <span className="eyebrow opacity-70">Cliente</span>
          <p className="mt-6 font-display uppercase leading-[0.9]"
             style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
            {p.client}
          </p>
          <dl className="mt-10 space-y-3 text-sm">
            <div className="flex gap-3"><dt className="opacity-50 uppercase tracking-[0.15em]">Año —</dt><dd>{p.year}</dd></div>
            <div className="flex gap-3"><dt className="opacity-50 uppercase tracking-[0.15em]">Ubicación —</dt><dd className="uppercase">{p.location}</dd></div>
            <div className="flex gap-3"><dt className="opacity-50 uppercase tracking-[0.15em]">Duración —</dt><dd className="uppercase">{p.duration}</dd></div>
          </dl>
        </div>

        <div className="md:col-start-7 md:col-span-6">
          <RevealHeading
            text={p.title}
            className="font-display uppercase"
            as="h2"
          />
          <p className="mt-8 text-xl leading-[1.5] opacity-80">{p.shortDescription}</p>
        </div>
      </div>
    </section>
  );
};
