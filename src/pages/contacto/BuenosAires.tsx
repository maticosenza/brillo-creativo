import { useEffect } from "react";
import { IntroBanner } from "@/components/shared/IntroBanner";
import { CONTACT_EMAIL } from "@/lib/nav-config";

const PHOTOS = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
];

const TEAM = [
  { name: "Lucía Romero", role: "Directora general" },
  { name: "Diego Méndez", role: "Director creativo" },
  { name: "Sofía Castro", role: "Head of Production" },
];

const BuenosAires = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = "Buenos Aires — Productora"; }, []);
  return (
    <>
      <IntroBanner lines={[["BUENOS"], ["AIRES"]]} subtitle="Nuestra base de operaciones para Argentina y LATAM." height="60vh" />

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          <div className="md:col-span-7 aspect-[16/10] overflow-hidden bg-white/5">
            <iframe
              title="Mapa Buenos Aires"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.4500%2C-34.5800%2C-58.4100%2C-34.5500&layer=mapnik"
              className="w-full h-full grayscale contrast-125 brightness-90"
              loading="lazy"
            />
          </div>
          <div className="md:col-start-9 md:col-span-4">
            <span className="eyebrow opacity-80">Visitanos</span>
            <h2 className="mt-6 font-display uppercase text-h3">Av. del Libertador 5500</h2>
            <address className="not-italic mt-6 text-base leading-relaxed text-brand-white/90 space-y-2">
              <p>C1428 Ciudad Autónoma de Buenos Aires</p>
              <p>Lunes a viernes, 10 a 19 hs</p>
              <p><a href={`mailto:${CONTACT_EMAIL}`} className="underline-link">{CONTACT_EMAIL}</a></p>
              <p><a href="tel:+541100000000" className="underline-link">+54 11 0000 0000</a></p>
            </address>
          </div>
        </div>
      </section>

      <section className="bg-brand-red text-brand-white section-y px-6 md:px-12">
        <span className="eyebrow opacity-90">El espacio</span>
        <h2 className="mt-6 font-display uppercase text-h2">Estudio y oficina</h2>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHOTOS.map((src, i) => (
            <li key={src} className="aspect-[4/5] overflow-hidden">
              <img src={src} alt={`Vista ${i + 1} del estudio en Buenos Aires`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-brand-black text-brand-white section-y px-6 md:px-12">
        <span className="eyebrow opacity-80">Equipo del lugar</span>
        <h2 className="mt-6 font-display uppercase text-h2">Quién te recibe</h2>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((m) => (
            <li key={m.name}>
              <h3 className="font-display uppercase text-h3">{m.name}</h3>
              <p className="mt-2 text-sm opacity-80">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>

    </>
  );
};
export default BuenosAires;
