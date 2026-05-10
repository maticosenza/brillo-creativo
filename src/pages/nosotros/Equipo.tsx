import { useEffect } from "react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { TeamGrid } from "@/components/shared/TeamGrid";
import { TEAM } from "@/data/team";

const expanded = [...TEAM, ...TEAM];

const Equipo = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <IntroBanner lines={[["NUESTRO"], ["EQUIPO"]]} subtitle="Las personas que hacen posible cada proyecto." />
      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <TeamGrid items={expanded} />
      </section>
    </>
  );
};
export default Equipo;
