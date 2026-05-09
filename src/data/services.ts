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
    title: "Producción Integral de Eventos",
    description: "Gestión end-to-end de tu evento, desde la concepción hasta la ejecución. Coordinamos cada parte del proceso para que el resultado sea impecable y el cliente pueda delegar con tranquilidad.",
    bullets: ["Dirección de producción", "Coordinación técnica", "Logística y permisos", "Hospitality y catering", "Run-of-show", "Cierre y reportes"],
    longDescription: "Diseñamos y operamos eventos de cualquier escala con un equipo único que cubre dirección creativa, producción técnica, logística, talento y hospitality. Trabajamos en briefs ambiguos y entregamos eventos con foco obsesivo en el detalle.",
    highlight: { value: "+150", label: "Eventos producidos" },
    gallery: ["https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1540575467063-178a50c2df87","https://images.unsplash.com/photo-1511795409834-ef04bbd61622","https://images.unsplash.com/photo-1559223607-a43c990c692c","https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1517457373958-b7bdd4587205"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["gala-anual-fortune-500", "cumbre-latam", "premiere-atlas"],
  },
  {
    slug: "coordinacion-on-site",
    number: "02",
    title: "Coordinación On-Site",
    description: "Presencia y control total el día del evento. Gestionamos tiempos, equipos y situaciones en tiempo real para que nada quede librado al azar.",
    bullets: ["Run-of-show", "Coordinación de equipos", "Gestión de tiempos", "Resolución en vivo", "Briefings", "Cierre operativo"],
    longDescription: "Estamos en el lugar para que el evento fluya. Coordinamos cada equipo, cada timing y cada situación inesperada con el objetivo de que el cliente disfrute la experiencia.",
    highlight: { value: "100%", label: "On-site coverage" },
    gallery: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1559223607-a43c990c692c","https://images.unsplash.com/photo-1505373877841-8d25f7d46678","https://images.unsplash.com/photo-1517457373958-b7bdd4587205","https://images.unsplash.com/photo-1540039155733-5bb30b53aa14"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["activacion-mundial", "festival-vertice", "lanzamiento-linea-2026"],
  },
  {
    slug: "gestion-de-proveedores",
    number: "03",
    title: "Gestión de Proveedores",
    description: "Selección, coordinación y seguimiento de todos los proveedores involucrados. Negociamos, controlamos y nos aseguramos de que cada parte cumpla con lo acordado.",
    bullets: ["Selección de proveedores", "Negociación", "Contratos y SLAs", "Seguimiento", "Control de calidad", "Cierres y pagos"],
    longDescription: "Construimos una red de proveedores confiables y la gestionamos con foco en calidad, tiempos y presupuesto.",
    highlight: { value: "+300", label: "Proveedores en red" },
    gallery: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87","https://images.unsplash.com/photo-1559223607-a43c990c692c","https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1511795409834-ef04bbd61622","https://images.unsplash.com/photo-1519671482749-fd09be7ccebf","https://images.unsplash.com/photo-1492684223066-81342ee5ff30"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["cumbre-latam", "gala-anual-fortune-500", "premiere-atlas"],
  },
  {
    slug: "influencers-y-prensa",
    number: "04",
    title: "Gestión de Influencers & Prensa",
    description: "Coordinación integral de medios, prensa e influencers para maximizar el alcance y el impacto comunicacional de tu evento.",
    bullets: ["Curaduría de talento", "Acreditaciones", "Brief y guideline", "Cobertura en vivo", "Gifting y hospitality", "Reporte de impacto"],
    longDescription: "Conectamos tu evento con voces relevantes y aseguramos que la cobertura amplifique el mensaje correcto en las plataformas correctas.",
    highlight: { value: "+500M", label: "Impresiones generadas" },
    gallery: ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678","https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1511578314322-379afb476865","https://images.unsplash.com/photo-1540039155733-5bb30b53aa14","https://images.unsplash.com/photo-1559223607-a43c990c692c"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["lanzamiento-linea-2026", "premiere-atlas", "activacion-mundial"],
  },
  {
    slug: "activaciones-de-marca",
    number: "05",
    title: "Activaciones de Marca",
    description: "Diseño y ejecución de activaciones que conectan tu marca con la audiencia de forma memorable, tanto en eventos deportivos como corporativos.",
    bullets: ["Concepto creativo", "Producción itinerante", "Tecnología interactiva", "Talento y staff", "Operación logística", "Medición de impacto"],
    longDescription: "Creamos experiencias de marca que generan recordación y conversación, integradas al contexto del evento.",
    highlight: { value: "+80", label: "Activaciones LATAM" },
    gallery: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1505236858219-8359eb29e329","https://images.unsplash.com/photo-1559223607-a43c990c692c"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["activacion-mundial", "festival-vertice", "lanzamiento-linea-2026"],
  },
  {
    slug: "comunicacion-y-creatividades",
    number: "06",
    title: "Comunicación y Creatividades",
    description: "Desarrollo de los materiales y mensajes que le dan identidad y coherencia a tu evento, desde la previa hasta el día después.",
    bullets: ["Concepto creativo", "Identidad de evento", "Piezas gráficas", "Guion y mensajes clave", "Contenido en vivo", "Post-evento"],
    longDescription: "Pensamos el evento como una historia: definimos el concepto, los mensajes y las piezas que lo cuentan en todas las plataformas.",
    highlight: { value: "360°", label: "Comunicación integral" },
    gallery: ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678","https://images.unsplash.com/photo-1492684223066-81342ee5ff30","https://images.unsplash.com/photo-1505236858219-8359eb29e329"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["lanzamiento-linea-2026", "premiere-atlas", "activacion-mundial"],
  },
  {
    slug: "event-marketing",
    number: "07",
    title: "Event Marketing",
    description: "Estrategia y ejecución para que tu evento llegue a las personas correctas y genere el impacto que tu marca necesita.",
    bullets: ["Estrategia de audiencia", "Plan de medios", "Pauta digital", "Email y CRM", "Partnerships", "Medición y optimización"],
    longDescription: "Diseñamos el plan de marketing del evento para maximizar asistentes calificados y generar valor de marca durante y después.",
    highlight: { value: "x3", label: "Aumento de leads" },
    gallery: ["https://images.unsplash.com/photo-1559223607-a43c990c692c","https://images.unsplash.com/photo-1540039155733-5bb30b53aa14","https://images.unsplash.com/photo-1492684223066-81342ee5ff30"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["cumbre-latam", "gala-anual-fortune-500", "premiere-atlas"],
  },
  {
    slug: "presupuesto",
    number: "08",
    title: "Armado y Control de Presupuesto",
    description: "Elaboración, seguimiento y optimización del presupuesto en cada etapa, con foco en la eficiencia y la transparencia.",
    bullets: ["Cotización inicial", "Tracking en vivo", "Control de cambios", "Optimización", "Cierre financiero", "Reporte ejecutivo"],
    longDescription: "El presupuesto es una herramienta de gestión: lo construimos con detalle y lo controlamos en cada etapa para evitar sorpresas.",
    highlight: { value: "100%", label: "Transparencia" },
    gallery: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["cumbre-latam", "gala-anual-fortune-500", "premiere-atlas"],
  },
  {
    slug: "reporte-post-evento",
    number: "09",
    title: "Reporte Post-Evento",
    description: "Análisis y documentación de resultados: asistentes, proveedores, KPIs e incidencias. Todo lo que necesitás para medir el éxito y mejorar la próxima edición.",
    bullets: ["Asistentes y aforo", "KPIs de marca", "Cobertura de medios", "Incidencias", "Aprendizajes", "Recomendaciones"],
    longDescription: "Cerramos cada evento con un reporte ejecutivo que documenta resultados, aprendizajes y oportunidades para el próximo ciclo.",
    highlight: { value: "+50", label: "KPIs medidos" },
    gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71","https://images.unsplash.com/photo-1460925895917-afdab827c52f","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["cumbre-latam", "gala-anual-fortune-500", "premiere-atlas"],
  },
  {
    slug: "consultoria",
    number: "10",
    title: "Consultoría y Asesoramiento",
    description: "Para equipos que necesitan orientación estratégica u operativa. Te acompañamos en la toma de decisiones sin necesariamente ejecutar el evento completo.",
    bullets: ["Diagnóstico", "Estrategia", "Acompañamiento operativo", "Workshops", "Auditoría de procesos", "Mentoring de equipos"],
    longDescription: "Sumamos experiencia a tu equipo con consultoría puntual o proyectos de acompañamiento estratégico y operativo.",
    highlight: { value: "+15", label: "Años de experiencia" },
    gallery: ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d","https://images.unsplash.com/photo-1517245386807-bb43f82c33c4","https://images.unsplash.com/photo-1551836022-deb4988cc6c0"].map(u=>u+"?auto=format&fit=crop&w=1600&q=80"),
    relatedProjects: ["cumbre-latam", "gala-anual-fortune-500", "premiere-atlas"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
