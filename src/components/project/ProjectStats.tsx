import type { Project } from "@/data/projects";

const fmt = (n: number) => new Intl.NumberFormat("es-AR").format(Math.round(n));

const StatBox = ({ value, label }: { value: number; label: string }) => (
  <div className="relative border border-brand-white/80 px-6 py-6 md:px-8 md:py-8 flex flex-col justify-end">
    <span
      className="font-display uppercase leading-[0.9] block"
      style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
    >
      {fmt(value)}
    </span>
    <span className="mt-2 text-[11px] uppercase tracking-[0.2em]">{label}</span>
  </div>
);

export const ProjectStats = ({ p }: { p: Project }) => {
  return (
    <section className="bg-brand-black text-brand-white py-10 md:py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[1100px] mx-auto">
        <StatBox value={p.attendees} label="Asistentes" />
        <StatBox value={p.durationDays} label={p.durationDays === 1 ? "Jornada" : "Jornadas"} />
      </div>
    </section>
  );
};
