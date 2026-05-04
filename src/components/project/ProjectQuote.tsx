import type { Project } from "@/data/projects";

export const ProjectQuote = ({ p }: { p: Project }) => {
  if (!p.quote) return null;
  return (
    <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto text-center">
        <div aria-hidden className="font-display leading-none opacity-40"
             style={{ fontSize: "clamp(120px, 18vw, 240px)" }}>“</div>
        <p className="-mt-6 leading-[1.4]" style={{ fontSize: "clamp(26px, 3vw, 32px)" }}>
          {p.quote.text}
        </p>
        <p className="mt-10 text-sm uppercase tracking-[0.2em] opacity-80">
          {p.quote.author} — {p.quote.role}
        </p>
      </div>
    </section>
  );
};
