import { useLocation } from "react-router-dom";

const titleFromPath = (path: string) => {
  const seg = path.replace(/^\//, "").split("/").pop() || "Inicio";
  return seg.replace(/-/g, " ");
};

const Placeholder = () => {
  const { pathname } = useLocation();
  const title = titleFromPath(pathname);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-brand-red text-brand-white px-6 text-center">
      <span className="eyebrow mb-6 opacity-80">{pathname}</span>
      <h1 className="font-display text-hero uppercase mb-4">{title}</h1>
      <p className="font-body text-lg md:text-xl opacity-80">Próximamente</p>
    </section>
  );
};

export default Placeholder;
