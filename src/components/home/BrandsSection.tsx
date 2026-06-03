import { RevealHeading } from "./RevealHeading";
import mercadolibre from "@/assets/brands/mercadolibre.png";
import fira from "@/assets/brands/fira.png";
import monster from "@/assets/brands/monster.png";
import sophos from "@/assets/brands/sophos.png";
import heineken from "@/assets/brands/heineken.png";
import geopost from "@/assets/brands/geopost.png";
import datawise from "@/assets/brands/datawise.png";
import atlassian from "@/assets/brands/atlassian.png";
import cocacola from "@/assets/brands/cocacola.png";
import manga from "@/assets/brands/manga.png";
import intelcia from "@/assets/brands/intelcia.png";
import clap from "@/assets/brands/clap.png";
import adidas from "@/assets/brands/adidas.png";

const BRANDS: { name: string; src: string; className?: string }[] = [
  { name: "Mercado Libre", src: mercadolibre, className: "h-[38px] max-w-[150px]" },
  { name: "Fira Barcelona", src: fira },
  { name: "Monster Energy", src: monster },
  { name: "Sophos", src: sophos, className: "h-[72px] max-w-[180px]" },
  { name: "Heineken", src: heineken, className: "h-[40px] max-w-[150px]" },
  { name: "Geopost", src: geopost },
  { name: "Datawise", src: datawise },
  { name: "Atlassian", src: atlassian, className: "h-[60px] max-w-[200px]" },
  { name: "Coca-Cola", src: cocacola },
  { name: "Manga Barcelona", src: manga, className: "h-[38px] max-w-[150px]" },
  { name: "Intelcia", src: intelcia, className: "h-[40px] max-w-[150px]" },
  { name: "Clap Music", src: clap },
  { name: "Adidas", src: adidas },
  
];

export const BrandsSection = () => {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const Logo = ({ name, src, className }: { name: string; src: string; className?: string }) => (
    <img
      src={src}
      alt={name}
      loading="lazy"
      className={`shrink-0 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${className ?? "h-[50px]"}`}
    />
  );

  return (
    <section className="bg-brand-red text-brand-white pt-[6px] pb-[10px] md:pt-[25px] md:pb-[50px]">
      <div className="text-center max-w-5xl mx-auto px-6 md:px-12">
        <RevealHeading
          text="Track Record"
          className="font-display uppercase text-h2"
        />
      </div>

      {reduced ? (
        <ul className="mt-4 md:mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 px-6 md:px-12">
          {BRANDS.map((b) => (
            <li key={b.name} className="flex items-center justify-center">
              <Logo name={b.name} src={b.src} className={b.className} />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="mt-4 md:mt-10 marquee-mask group"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex gap-14 marquee-track"
            style={{ width: "max-content" }}
          >
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <Logo key={`${b.name}-${i}`} name={b.name} src={b.src} className={b.className} />
            ))}
          </div>
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              animation: marqueeScroll 32s linear infinite;
            }
            .marquee-mask:hover .marquee-track {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      )}
    </section>
  );
};
