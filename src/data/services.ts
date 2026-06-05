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

import s1 from "@/assets/servicios/servicio-1.jpg";
import s2 from "@/assets/servicios/servicio-2.png";
import s3 from "@/assets/servicios/servicio-3.jpg";
import s4 from "@/assets/servicios/servicio-4.png";
import s5 from "@/assets/servicios/servicio-5.png";
import s6 from "@/assets/servicios/servicio-6.jpg";
import s7 from "@/assets/servicios/servicio-7.png";
import s8 from "@/assets/servicios/servicio-8.png";
import s9 from "@/assets/servicios/servicio-9.png";
import s10 from "@/assets/servicios/servicio-10.png";

export const SERVICES: Service[] = [
  {
    slug: "produccion-integral",
    number: "01",
    title: "Producción Integral de Eventos end-to-end",
    description: "Gestionamos cada etapa del evento, desde la planificación inicial hasta la ejecución final, asegurando una experiencia fluida y alineada con los objetivos del cliente.",
    bullets: ["DIRECCIÓN CREATIVA", "OPERATIVA EN SITIO", "COORDINACIÓN GLOBAL"],
    longDescription: "Nos encargamos de la producción integral de tu evento, desde la concepción hasta el cierre, garantizando excelencia operativa y estratégica.",
    highlight: { value: "+150", label: "Eventos producidos" },
    image: s1,
    gallery: ["1505236858219-8359eb29e329","1540575467063-178a50c2df87","1511795409834-ef04bbd61622","1559223607-a43c990c692c","1492684223066-81342ee5ff30","1517457373958-b7bdd4587205"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["datawise-x-hpe", "manga", "fira-barcelona"],
  },
  {
    slug: "motorsport",
    number: "02",
    title: "Coordinación on-site",
    description: "Supervisamos la operación en tiempo real, coordinando equipos, proveedores y timing para garantizar que todo funcione de manera impecable durante el evento.",
    bullets: ["OPERACIÓN EN TIEMPO REAL", "COORDINACIÓN DE EQUIPOS", "CONTROL DE TIMING"],
    longDescription: "Supervisamos cada detalle técnico y operativo en el lugar del evento para asegurar una ejecución impecable.",
    highlight: { value: "+40", label: "Carreras operadas" },
    image: s2,
    gallery: ["1568605117036-5fe5e7bab0b7","1541447270731-9c0f476a91d3","1503376780353-7e6692767b70"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["activacion-mundial", "festival-vertice", "adidas"],
  },
  {
    slug: "corporativos-convenciones",
    number: "03",
    title: "Gestión de proveedores",
    description: "Seleccionamos, coordinamos y negociamos con proveedores estratégicos para asegurar calidad, eficiencia y cumplimiento en cada proyecto.",
    bullets: ["NEGOCIACIÓN ESTRATÉGICA", "CONTROL DE CALIDAD", "CUMPLIMIENTO"],
    longDescription: "Gestionamos la relación con proveedores clave, asegurando los mejores estándares de calidad y cumplimiento.",
    highlight: { value: "+80", label: "Convenciones" },
    image: s6,
    gallery: ["1540575467063-178a50c2df87","1559223607-a43c990c692c","1505236858219-8359eb29e329"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["manga", "datawise-x-hpe", "fira-barcelona"],
  },
  {
    slug: "experiencias-mice",
    number: "04",
    title: "Gestión de influencers & prensa",
    description: "Coordinamos la relación con influencers, medios y creadores de contenido para maximizar la visibilidad y el alcance de cada evento.",
    bullets: ["RELACIONES CON PRENSA", "COORDINACIÓN DE INFLUENCERS", "AMPLIFICACIÓN"],
    longDescription: "Potenciamos la visibilidad de tu marca a través de la gestión estratégica de prensa e influencers.",
    highlight: { value: "+75", label: "Países operados" },
    image: s4,
    gallery: ["1515187029135-18ee286d815b","1540039155733-5bb30b53aa14","1492684223066-81342ee5ff30"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["manga", "datawise-x-hpe", "fira-barcelona"],
  },
  {
    slug: "activaciones-de-marca",
    number: "05",
    title: "Activaciones de Marca",
    description: "Desarrollamos experiencias de marca dinámicas e interactivas que generan conexión, engagement y recordación en el público.",
    bullets: ["EXPERIENCIA DE MARCA", "CONTENIDO PARA REDES", "MÉTRICAS Y ROI"],
    longDescription: "Diseñamos experiencias interactivas que conectan a la marca con su público de manera memorable.",
    highlight: { value: "+80", label: "Activaciones LATAM" },
    image: s5,
    gallery: ["1533174072545-7a4b6ad7a6c3","1492684223066-81342ee5ff30","1505236858219-8359eb29e329"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["activacion-mundial", "festival-vertice", "adidas"],
  },
  {
    slug: "lanzamientos-de-producto",
    number: "06",
    title: "Comunicación y creatividades",
    description: "Creamos propuestas visuales y piezas de comunicación alineadas con la identidad y objetivos de cada marca o evento.",
    bullets: ["DISEÑO VISUAL", "PIEZAS CREATIVAS", "IDENTIDAD DE EVENTO"],
    longDescription: "Desarrollamos la identidad visual y las piezas creativas necesarias para comunicar el mensaje de tu evento.",
    highlight: { value: "x3", label: "Aumento de leads" },
    image: s3,
    gallery: ["1492684223066-81342ee5ff30","1505373877841-8d25f7d46678","1540039155733-5bb30b53aa14"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["adidas", "fira-barcelona", "activacion-mundial"],
  },
  {
    slug: "presupuesto",
    number: "07",
    title: "Event Marketing",
    description: "Diseñamos estrategias de difusión y posicionamiento para potenciar el impacto y la convocatoria de cada experiencia.",
    bullets: ["ESTRATEGIA DE DIFUSIÓN", "POSICIONAMIENTO", "CONVOCATORIA"],
    longDescription: "Aplicamos estrategias de marketing enfocadas en maximizar el impacto y la convocatoria de cada proyecto.",
    highlight: { value: "100%", label: "Transparencia" },
    image: s7,
    gallery: ["1554224155-6726b3ff858f","1454165804606-c3d57bc86b40","1517245386807-bb43f82c33c4"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["manga", "datawise-x-hpe", "fira-barcelona"],
  },
  {
    slug: "logistica-internacional",
    number: "08",
    title: "Armado y control de presupuesto",
    description: "Planificamos y administramos presupuestos de manera estratégica, optimizando recursos sin comprometer la calidad del evento.",
    bullets: ["PLANIFICACIÓN FINANCIERA", "OPTIMIZACIÓN", "CONTROL DE COSTOS"],
    longDescription: "Gestionamos los recursos financieros de manera eficiente para optimizar la inversión en cada etapa.",
    highlight: { value: "+10", label: "Países operados" },
    image: s8,
    gallery: ["1436491865332-7a61a109cc05","1519671482749-fd09be7ccebf","1540575467063-178a50c2df87"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["manga", "datawise-x-hpe", "fira-barcelona"],
  },
  {
    slug: "proveedores-y-riders",
    number: "09",
    title: "Report post-evento",
    description: "Elaboramos informes finales con resultados, métricas y análisis del evento para evaluar performance y oportunidades de mejora.",
    bullets: ["ANÁLISIS DE RESULTADOS", "MÉTRICAS DE IMPACTO", "DEBRIEF FINAL"],
    longDescription: "Analizamos el desempeño del evento mediante informes detallados con métricas y aprendizajes clave.",
    highlight: { value: "+300", label: "Proveedores en red" },
    image: s9,
    gallery: ["1511795409834-ef04bbd61622","1559223607-a43c990c692c","1505236858219-8359eb29e329"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["manga", "datawise-x-hpe", "fira-barcelona"],
  },
  {
    slug: "post-evento-reporting",
    number: "10",
    title: "Consultoría y asesoramiento",
    description: "Brindamos soporte estratégico y operativo para ayudar a marcas y empresas a desarrollar eventos más eficientes, atractivos y alineados a sus objetivos.",
    bullets: ["SOPORTE ESTRATÉGICO", "ASESORAMIENTO", "EFICIENCIA OPERATIVA"],
    longDescription: "Acompañamos a nuestros clientes con asesoría estratégica para elevar el estándar de sus eventos y comunicaciones.",
    highlight: { value: "+50", label: "KPIs medidos" },
    image: s10,
    gallery: ["1551288049-bebda4e38f71","1460925895917-afdab827c52f","1454165804606-c3d57bc86b40"].map((p)=>`https://images.unsplash.com/photo-${p}?auto=format&fit=crop&w=1600&q=80`),
    relatedProjects: ["manga", "datawise-x-hpe", "fira-barcelona"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
