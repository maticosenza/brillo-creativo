import { SERVICES } from "@/data/services";
import { ServiceDivider } from "@/components/shared/ServiceDivider";

const Card = ({ s }: { s: typeof SERVICES[number] }) => (
  <div className="flex flex-col">
    <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
      <img
        src={s.image}
        alt={s.title}
        loading="lazy"
        className="w-full h-full object-cover block"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 50px rgba(0,0,0,0.35), inset 0 0 100px rgba(0,0,0,0.15)",
        }}
      />
    </div>
    <h3
      className="uppercase"
      style={{
        fontFamily: "Arial, sans-serif",
        fontWeight: 700,
        fontSize: "clamp(20px, 2.5vw, 28px)",
        lineHeight: 1.2,
        color: "#fcf7f5",
        marginTop: 24,
      }}
    >
      {s.title.toUpperCase()}
    </h3>
    <p
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "clamp(14px, 1.8vw, 16px)",
        lineHeight: 1.5,
        color: "#fcf7f5",
        opacity: 0.85,
        marginTop: 12,
      }}
    >
      {s.description}
    </p>
  </div>
);

export const ServiceGrid = () => {
  const rows: typeof SERVICES[number][][] = [];
  for (let i = 0; i < SERVICES.length; i += 2) {
    rows.push(SERVICES.slice(i, i + 2));
  }
  return (
    <section
      style={{
        background: "#c0181b",
        paddingTop: 100,
        paddingBottom: 80,
        paddingLeft: "6vw",
        paddingRight: "6vw",
      }}
    >
      {rows.map((row, idx) => (
        <div key={idx}>
          <div className="service-grid-row">
            {row.map((s) => (
              <Card key={s.slug} s={s} />
            ))}
          </div>
          {idx < rows.length - 1 && <ServiceDivider />}
        </div>
      ))}
      <style>{`
        .service-grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          min-height: 500px;
        }
        @media (max-width: 768px) {
          .service-grid-row {
            grid-template-columns: 1fr;
            gap: 40px;
            min-height: 0;
          }
        }
      `}</style>
    </section>
  );
};