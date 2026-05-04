export type Service = {
  slug: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  longDescription: string;
  highlight: { value: string; label: string };
  gallery: string[];
  relatedProjects: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "produccion-integral",
    number: "01",
    title: "Producción integral",
    description: "Tomamos el proyecto desde la idea inicial hasta el desmontaje del último escenario.",
    bullets: ["Dirección de producción", "Coordinación técnica", "Logística y permisos", "Hospitality y catering", "Run-of-show", "Cierre y reportes"],
    longDescription: "Diseñamos y operamos eventos de cualquier escala con un equipo único que cubre dirección creativa, producción técnica, logística, talento y hospitality. Trabajamos en briefs ambiguos y entregamos eventos con foco obsesivo en el detalle.",
    highlight: { value: "+150", label: "Eventos producidos" },
    gallery: ["https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1540575467063-178a50c2df87","https://images.unsplash.com/photo-1511795409834-ef04bbd61622","https://images.unsplash.com/photo-1559223607-a43c990c692c","https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1517457373958-b7bdd4587205"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["gala-anual-fortune-500", "cumbre-latam", "premiere-atlas"],
  },
  {
    slug: "activaciones-de-marca",
    number: "02",
    title: "Activaciones de marca",
    description: "Experiencias que conectan personas con marcas en espacios inesperados.",
    bullets: ["Estrategia de activación", "Diseño de experiencia", "Producción itinerante", "Gestión de talento", "Medición de impacto", "Contenido en vivo"],
    longDescription: "Diseñamos activaciones que combinan diseño, tecnología y producción para crear momentos compartibles y medibles. Operamos en formatos itinerantes, en festivales y en espacios públicos en toda LATAM.",
    highlight: { value: "+80", label: "Activaciones LATAM" },
    gallery: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1559223607-a43c990c692c","https://images.unsplash.com/photo-1505373877841-8d25f7d46678","https://images.unsplash.com/photo-1517457373958-b7bdd4587205","https://images.unsplash.com/photo-1540039155733-5bb30b53aa14"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["activacion-mundial", "festival-vertice", "lanzamiento-linea-2026"],
  },
  {
    slug: "eventos-corporativos",
    number: "03",
    title: "Eventos corporativos",
    description: "Convenciones, galas y kick-offs con estándar internacional.",
    bullets: ["Convenciones regionales", "Galas y reconocimientos", "Kick-offs y town halls", "Producción híbrida", "Speakers y traducción", "Streaming multi-mercado"],
    longDescription: "Producimos los eventos internos y externos más importantes del año para empresas globales y regionales. Coordinamos plenarias, breakouts, galas y formatos híbridos con estándares internacionales.",
    highlight: { value: "+200", label: "Eventos corporativos" },
    gallery: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87","https://images.unsplash.com/photo-1559223607-a43c990c692c","https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1511795409834-ef04bbd61622","https://images.unsplash.com/photo-1519671482749-fd09be7ccebf","https://images.unsplash.com/photo-1492684223066-81342ee5ff30"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["cumbre-latam", "gala-anual-fortune-500", "premiere-atlas"],
  },
  {
    slug: "lanzamientos",
    number: "04",
    title: "Lanzamientos",
    description: "Presentaciones de producto y marca con narrativa cinematográfica.",
    bullets: ["Concepto y guión", "Escenografía a medida", "Demos sincronizados", "Cobertura audiovisual", "Press kit y prensa", "Distribución digital"],
    longDescription: "Lanzamos productos y marcas combinando narrativa, tecnología y producción técnica. Diseñamos cada presentación como una pieza única que vive en el evento y se extiende en contenido.",
    highlight: { value: "+60", label: "Lanzamientos producidos" },
    gallery: ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678","https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1511578314322-379afb476865","https://images.unsplash.com/photo-1540039155733-5bb30b53aa14","https://images.unsplash.com/photo-1559223607-a43c990c692c"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["lanzamiento-linea-2026", "premiere-atlas", "activacion-mundial"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
