import { Link } from "react-router-dom";
import { DisplayHeading } from "@/components/shared/DisplayHeading";

type Props = {
  lines?: string[][] | string[];
  description?: string;
};

const DEFAULT_LINES: string[][] = [["¿LISTOS", "PARA"], ["EMPEZAR?"]];
const DEFAULT_DESC =
  "Contanos qué tenés en mente. Te respondemos en menos de 24 horas con una primera propuesta de enfoque.";

export const CtaSection = ({ lines = DEFAULT_LINES, description = DEFAULT_DESC }: Props) => {
  const flatLines: string[] = Array.isArray(lines[0])
    ? (lines as string[][]).map((l) => l.join(" "))
    : (lines as string[]);
  return (
    <section
      className="px-6 md:px-12 text-center"
      style={{
        background: "#0a0a0a",
        color: "#fcf7f5",
        paddingTop: "clamp(100px, 14vw, 160px)",
        paddingBottom: "clamp(100px, 14vw, 160px)",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, height: 1, background: "#fcf7f5", opacity: 0.5, marginBottom: 60 }}
        aria-hidden
      />

      <DisplayHeading
        lines={flatLines}
        size="cta"
        as="h2"
        align="center"
        outline
        outlineColor="#c0181b"
        glow={false}
        trigger="static"
        className="mx-auto"
      />

      <p
        className="mx-auto mt-10 max-w-[600px] text-lg leading-[1.6]"
        style={{ color: "#fcf7f5", opacity: 0.9 }}
      >
        {description}
      </p>

      <Link
        to="/contacto"
        className="group relative mt-12 inline-flex items-center justify-center overflow-hidden rounded-full"
        style={{ padding: "18px 44px", border: "1px solid #c0181b", background: "transparent" }}
      >
        <span
          aria-hidden
          className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
          style={{ background: "#c0181b" }}
        />
        <span
          className="relative z-10 font-display uppercase transition-colors duration-300 text-[#c0181b] group-hover:text-[#fcf7f5]"
          style={{ fontSize: 14, letterSpacing: "0.2em" }}
        >
          Hablemos
        </span>
      </Link>
    </section>
  );
};
