import { SERVICES } from "@/data/services";
import { ServiceDivider } from "@/components/shared/ServiceDivider";

const Card = ({ s }: { s: typeof SERVICES[number] }) => {
  const title = s.title.toUpperCase();
  const breakToken = "PRODUCCIÓN INTEGRAL DE EVENTOS";
  const renderTitle =
    title.startsWith(breakToken) ? (
      <>
        PRODUCCIÓN INTEGRAL DE
        <br /> EVENTOS END-TO-END
      </>
    ) : (
      title
    );
  return (
  <div className="service-card">
    <div className="service-image-wrap">
      <img
        src={s.image}
        alt={s.title}
        loading="lazy"
        className="service-image"
      />
      <div aria-hidden className="service-image-vignette" />
      <div className="service-image-overlay">
        <span className="service-number">{s.number}</span>
        <div className="service-divider-line" aria-hidden />
      </div>
    </div>
    <div className="service-text">
    <h3 className="service-title">{renderTitle}</h3>
      <p className="service-description">{s.description}</p>
    </div>
  </div>
  );
};

export const ServiceGrid = () => {
  const rows: typeof SERVICES[number][][] = [];
  for (let i = 0; i < SERVICES.length; i += 2) {
    rows.push(SERVICES.slice(i, i + 2));
  }
  return (
    <section
      style={{
        background: "#c0181b",
        paddingTop: 0,
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
        }
        .service-card { display: flex; flex-direction: column; }
        .service-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          box-shadow:
            inset 0 0 60px rgba(0, 0, 0, 0.45),
            inset 0 0 120px rgba(0, 0, 0, 0.25);
        }
        .service-image-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            ellipse 100% 100% at 50% 50%,
            transparent 20%,
            rgba(192, 24, 27, 0.35) 70%,
            rgba(192, 24, 27, 0.75) 100%
          );
        }
        .service-image-overlay {
          position: absolute;
          left: 20px;
          bottom: 20px;
          z-index: 2;
          display: flex;
          flex-direction: column;
        }
        .service-text {
          padding: 0;
          margin-top: 24px;
          display: flex;
          flex-direction: column;
        }
        .service-number {
          color: #fcf7f5;
          font-family: 'Anton', sans-serif;
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
        }
        .service-divider-line {
          width: 60px;
          height: 1px;
          background-color: #fcf7f5;
          opacity: 0.35;
          margin-bottom: 20px;
        }
        .service-title {
          color: #fcf7f5;
          font-family: 'Anton', sans-serif;
          font-size: clamp(20px, 3vw, 40px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin: 0 0 16px 0;
        }
        .service-description {
          color: #fcf7f5;
          opacity: 0.85;
          font-family: Arial, sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 400;
          line-height: 1.5;
          margin: 0;
          padding-left: 0;
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