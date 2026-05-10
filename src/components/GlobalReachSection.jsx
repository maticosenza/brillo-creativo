import GlobeWhite from "./GlobeWhite";

export default function GlobalReachSection() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        color: "#ffffff",
        padding: "0 24px 80px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto 80px",
          height: "1px",
          background: "rgba(255,255,255,0.8)",
        }}
      />
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(300px, 1fr) minmax(280px, 1fr)",
          alignItems: "center",
          gap: "60px",
        }}
        className="globe-grid"
      >
        {/* Globe — left side */}
        <div
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
          <GlobeWhite />
        </div>

        {/* Text — right side */}
        <div style={{ maxWidth: "520px" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              textTransform: "uppercase",
              margin: "0 0 24px 0",
            }}
          >
            Alcance global con
            <br />toque local
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              lineHeight: 1.6,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Headquartered en Puerto Madero, Buenos Aires, Argentina con
            presencia en todo el mundo.
          </p>
        </div>
      </div>

      {/* Mobile stacking */}
      <style>{`
        @media (max-width: 768px) {
          .globe-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center;
          }
          .globe-grid > div:last-child {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
