import { RevealHeading } from "./RevealHeading";

const BRANDS = [
  "NORTHWAVE","ATLAS","VÉRTICE","KINGSTON","HELIOS","ORION",
  "FORTUNE","KAIROS","NOVA","ÉTER","MERIDIAN","PHOENIX",
  "ZENITH","ALBA","CIRCA","BOREAL","LUMEN","FARO",
  "AXIS","HALO","MAGNA","VOLTA","PRISMA","ÓRBITA",
];

export const BrandsSection = () => {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const Logo = ({ name }: { name: string }) => (
    <svg
      viewBox="0 0 240 60"
      role="img"
      aria-label={name}
      className="shrink-0 h-[50px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
      style={{ minWidth: 200 }}
    >
      <text
        x="50%" y="50%"
        dominantBaseline="middle" textAnchor="middle"
        fill="#fcf7f5"
        fontFamily="Anton, Impact, sans-serif"
        fontSize="34" letterSpacing="2"
      >{name}</text>
    </svg>
  );

  return (
    <section className="bg-brand-red text-brand-white py-[60px] md:py-[100px]">
      <div className="text-center max-w-5xl mx-auto px-6 md:px-12">
        <RevealHeading
          text="Track Record"
          className="font-display uppercase text-h2"
        />
      </div>

      {reduced ? (
        <ul className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 px-6 md:px-12">
          {BRANDS.map((name) => (
            <li key={name} className="flex items-center justify-center">
              <Logo name={name} />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="mt-20 marquee-mask group"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex gap-20 marquee-track"
            style={{ width: "max-content" }}
          >
            {[...BRANDS, ...BRANDS].map((name, i) => (
              <Logo key={`${name}-${i}`} name={name} />
            ))}
          </div>
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              animation: marqueeScroll 40s linear infinite;
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
