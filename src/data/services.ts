export type Service = {
  slug: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  longDescription: string;
  highlight: { value: string; label: string };
  image: string;
  gallery: string[];
  relatedProjects: string[];
};

const u = (q: string, seed: number) =>
  `https://images.unsplash.com/photo-${q}?auto=format&fit=crop&w=1600&q=80`;

export const SERVICES: Service[] = [
  {
    slug: "produccion-integral",
    number: "01",
    title: "Producción Integral de Eventos",
    description: "Asumimos cada evento desde la idea inicial hasta el desarme del último panel. Estrategia, creatividad, producción técnica y operativa en un solo equipo coordinado.",
    bullets: ["DIRECCIÓN CREATIVA", "OPERATIVA EN SITIO", "COORDINACIÓN GLOBAL"],
    longDescription: "Diseñamos y operamos eventos de cualquier escala con un equipo único que cubre dirección creativa, producción técnica, logística, talento y hospitality.",
    highlight: { value: "+150", label: "Eventos producidos" },
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1505236858219-8359eb29e329","1540575467063-178a50c2df87","1511795409834-ef04bbd61622","1559223607-a43c990c692c","1492684223066-81342ee5ff30","1517457373958-b7bdd4587205"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["datawise-hpe", "cumbre-latam", "premiere-atlas"],
  },
  {
    slug: "motorsport",
    number: "02",
    title: "Gestión de Eventos Motorsport",
    description: "Operamos en Grand Prix de Fórmula 1, MotoGP y rally para clientes que exigen ejecución de primer nivel en entornos de alta presión y plazos no negociables.",
    bullets: ["PADDOCK HOSPITALITY", "ACTIVACIONES EN PISTA", "GESTIÓN DE TALENTO"],
    longDescription: "Operamos en circuitos de máxima exigencia con equipos curtidos en hospitality, activación y logística de talento.",
    highlight: { value: "+40", label: "Carreras operadas" },
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1568605117036-5fe5e7bab0b7","1541447270731-9c0f476a91d3","1503376780353-7e6692767b70"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["activacion-mundial", "festival-vertice", "lanzamiento-linea-2026"],
  },
  {
    slug: "corporativos-convenciones",
    number: "03",
    title: "Eventos Corporativos y Convenciones",
    description: "Convenciones anuales, kickoffs, galas y ceremonias para empresas que necesitan reunir a sus equipos, partners o clientes con un nivel de ejecución impecable.",
    bullets: ["PRODUCCIÓN AUDIOVISUAL", "ESCENARIO Y SET DESIGN", "HOSPITALITY"],
    longDescription: "Diseñamos convenciones que combinan contenido potente, escenografía cinematográfica y hospitality de primer nivel.",
    highlight: { value: "+80", label: "Convenciones" },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1540575467063-178a50c2df87","1559223607-a43c990c692c","1505236858219-8359eb29e329"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["cumbre-latam", "datawise-hpe", "premiere-atlas"],
  },
  {
    slug: "experiencias-mice",
    number: "04",
    title: "Experiencias MICE",
    description: "Meetings, incentivos, conferencias y exhibiciones para audiencias corporativas internacionales. Coordinamos viaje, agenda, espacios y cada detalle del programa.",
    bullets: ["INCENTIVE TRAVEL", "AGENDAS HÍBRIDAS", "EXPERIENCIAS A MEDIDA"],
    longDescription: "Construimos programas MICE end-to-end con agenda, hospitality y experiencias diseñadas para audiencias exigentes.",
    highlight: { value: "+25", label: "Países operados" },
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1515187029135-18ee286d815b","1540039155733-5bb30b53aa14","1492684223066-81342ee5ff30"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["cumbre-latam", "datawise-hpe", "premiere-atlas"],
  },
  {
    slug: "activaciones-de-marca",
    number: "05",
    title: "Activaciones de Marca",
    description: "Llevamos marcas a sus consumidores con experiencias presenciales que generan contenido, datos y memoria. Pensamos formato, ejecución y amplificación digital.",
    bullets: ["EXPERIENCIA DE MARCA", "CONTENIDO PARA REDES", "MÉTRICAS Y ROI"],
    longDescription: "Creamos experiencias de marca que generan recordación, datos y conversación.",
    highlight: { value: "+80", label: "Activaciones LATAM" },
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1533174072545-7a4b6ad7a6c3","1492684223066-81342ee5ff30","1505236858219-8359eb29e329"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["activacion-mundial", "festival-vertice", "lanzamiento-linea-2026"],
  },
  {
    slug: "lanzamientos-de-producto",
    number: "06",
    title: "Lanzamientos de Producto",
    description: "Diseñamos lanzamientos que combinan prensa, comunidad e influencers, con escenografía, producción audiovisual y experiencia inmersiva para el público objetivo.",
    bullets: ["ESCENOGRAFÍA INMERSIVA", "PRESS DAY Y DEMO", "CONTENIDO POST-EVENTO"],
    longDescription: "Producimos lanzamientos integrales: escenografía, prensa, demos y contenido para el rollout digital.",
    highlight: { value: "x3", label: "Aumento de leads" },
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1492684223066-81342ee5ff30","1505373877841-8d25f7d46678","1540039155733-5bb30b53aa14"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["lanzamiento-linea-2026", "premiere-atlas", "activacion-mundial"],
  },
  {
    slug: "presupuesto",
    number: "07",
    title: "Armado y Control de Presupuesto",
    description: "Diseñamos presupuestos realistas y los defendemos hasta el cierre. Visibilidad total, sin sorpresas, con seguimiento financiero línea por línea durante toda la producción.",
    bullets: ["ESTIMACIÓN INICIAL", "TRACKING FINANCIERO", "CIERRE Y RECONCILIACIÓN"],
    longDescription: "El presupuesto es una herramienta de gestión: lo construimos con detalle y lo controlamos en cada etapa.",
    highlight: { value: "100%", label: "Transparencia" },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1554224155-6726b3ff858f","1454165804606-c3d57bc86b40","1517245386807-bb43f82c33c4"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["cumbre-latam", "datawise-hpe", "premiere-atlas"],
  },
  {
    slug: "logistica-internacional",
    number: "08",
    title: "Logística Internacional",
    description: "Operamos en más de diez países. Gestionamos vuelos, traslados, aduanas, permisos y todo lo necesario para que la producción funcione donde sea.",
    bullets: ["MULTI-PAÍS", "ADUANAS Y PERMISOS", "TRASLADOS Y ALOJAMIENTO"],
    longDescription: "Coordinamos operaciones internacionales con foco en aduanas, permisos, vuelos y traslados de equipos y talento.",
    highlight: { value: "+10", label: "Países operados" },
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1436491865332-7a61a109cc05","1519671482749-fd09be7ccebf","1540575467063-178a50c2df87"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["cumbre-latam", "datawise-hpe", "premiere-atlas"],
  },
  {
    slug: "proveedores-y-riders",
    number: "09",
    title: "Gestión de Proveedores y Riders",
    description: "Auditamos, negociamos y coordinamos proveedores técnicos, catering, seguridad y talento. Riders cumplidos al pie de la letra, sin renegociar en sitio.",
    bullets: ["AUDIOVISUAL Y SONIDO", "CATERING Y HOSPITALITY", "TALENT MANAGEMENT"],
    longDescription: "Gestionamos toda la red de proveedores con foco en calidad, tiempos y cumplimiento de riders.",
    highlight: { value: "+300", label: "Proveedores en red" },
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1511795409834-ef04bbd61622","1559223607-a43c990c692c","1505236858219-8359eb29e329"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["cumbre-latam", "datawise-hpe", "premiere-atlas"],
  },
  {
    slug: "post-evento-reporting",
    number: "10",
    title: "Post-Evento y Reporting",
    description: "Cerramos cada proyecto con un reporte ejecutivo: métricas, contenido generado, aprendizajes y recomendaciones. El evento termina cuando el cliente tiene todo en la mano.",
    bullets: ["REPORTE EJECUTIVO", "ASSETS AUDIOVISUALES", "DEBRIEF Y APRENDIZAJES"],
    longDescription: "Cerramos cada evento con un reporte ejecutivo que documenta resultados, aprendizajes y oportunidades.",
    highlight: { value: "+50", label: "KPIs medidos" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    gallery: ["1551288049-bebda4e38f71","1460925895917-afdab827c52f","1454165804606-c3d57bc86b40"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["cumbre-latam", "datawise-hpe", "premiere-atlas"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
