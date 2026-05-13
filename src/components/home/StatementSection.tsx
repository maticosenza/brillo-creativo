import { Link } from "react-router-dom";

const TEXT = "AYUDAMOS A MARCAS Y EMPRESAS A {EMPUJAR LOS LÍMITES} DEL DEPORTE Y LOS NEGOCIOS CON LA EXPERIENCIA, LA OPERATIVA Y EL {CARÁCTER} QUE CADA EVENTO NECESITA.";

export const StatementSection = () => {
  // Parse text: words inside {} render in black
  const words: { text: string; black: boolean }[] = [];
  const re = /\{([^}]+)\}|(\S+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(TEXT)) !== null) {
    if (m[1]) m[1].split(/\s+/).forEach((w) => words.push({ text: w, black: true }));
    else words.push({ text: m[2], black: false });
  }

  return (
    <section className="bg-white text-black py-[80px] md:py-[120px] px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2
          className="font-display uppercase"
          style={{ fontSize: "clamp(24px, 3.2vw, 48px)", lineHeight: 1.2 }}
        >
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
              <span className={`inline-block ${w.black ? "text-brand-red" : ""}`}>
                {w.text}
              </span>
            </span>
          ))}
        </h2>

        <div className="mt-[60px]">
          <Link
            to="/servicios"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-brand-red px-9 py-4 text-[13px] font-medium uppercase tracking-wider text-brand-red"
          >
            <span aria-hidden className="absolute inset-0 bg-brand-red origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-white">
              Conocé más
            </span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-white">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};