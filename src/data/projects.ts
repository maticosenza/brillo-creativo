export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: number;
  location: string;
  duration: string;
  durationDays: number;
  attendees: number;
  shortDescription: string;
  longDescription: string;
  services: string[];
  gallery: string[];
  heroImage?: string;
  quote?: { text: string; author: string; role: string };
  related: string[];
};

import datawiseHpeBanner from "@/assets/datawise-hpe-banner.jpg";
import adidasBanner from "@/assets/adidas-banner.jpg";
import hclsoftwareBanner from "@/assets/hclsoftware-banner.jpg";

const SERVICES = [
  "DIRECCIÓN CREATIVA",
  "PRODUCCIÓN INTEGRAL",
  "DISEÑO DE ESCENARIO",
  "AUDIOVISUAL",
  "GESTIÓN DE TALENTO",
  "LOGÍSTICA Y RIDERS",
  "CATERING & HOSPITALITY",
  "CONTENIDO POST-EVENTO",
];

const galleries = {
  corporate: [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
  ],
  launch: [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
  ],
  festival: [
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
    "https://images.unsplash.com/photo-1508252592163-5d3c3c559f9a",
    "https://images.unsplash.com/photo-1526285759904-71d1170b5e09",
    "https://images.unsplash.com/photo-1485095329183-d0797cdc5676",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
  ],
  activation: [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  ],
  conference: [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
  ],
  premiere: [
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c",
  ],
};

const withParams = (urls: string[]) =>
  urls.map((u) => `${u}?auto=format&fit=crop&w=1600&q=80`);

export const PROJECTS: Project[] = [
  {
    slug: "datawise-x-hpe",
    title: "Datawise x HPE",
    client: "Datawise / HPE",
    category: "Evento corporativo",
    year: 2025,
    location: "Buenos Aires, AR",
    duration: "1 jornada",
    durationDays: 1,
    attendees: 850,
    shortDescription: "Una velada de gala internacional con dirección artística íntegra, escenografía a medida y cobertura audiovisual en vivo.",
    longDescription: "El desafío fue elevar la gala anual del cliente a un estándar internacional sin perder la cercanía con la audiencia local. Diseñamos una dirección artística unificada para el espacio, el guión, la escenografía y los contenidos audiovisuales. Coordinamos un equipo técnico de 80 personas durante 72 horas de montaje, gestionamos un elenco de talento musical en vivo y entregamos un registro audiovisual editado en 48 horas para uso interno y prensa. La noche cerró con un programa que mezcló reconocimientos, performances y un keynote del CEO global.",
    services: SERVICES,
    gallery: withParams(galleries.corporate),
    heroImage: datawiseHpeBanner,
    quote: {
      text: "Convirtieron nuestra gala anual en la noche más comentada del año. La dirección artística y la coordinación operativa fueron impecables.",
      author: "María Acosta",
      role: "Head of Brand, Hilton",
    },
    related: ["adidas", "cumbre-latam", "premiere-atlas"],
  },
  {
    slug: "adidas",
    title: "ADIDAS",
    client: "Genesis",
    category: "Evento deportivo",
    year: 2025,
    location: "BARCELONA, ESP",
    duration: "2 jornadas",
    durationDays: 2,
    attendees: 1200,
    shortDescription: "Presentación global de la nueva línea con escenografía cinematográfica y transmisión en vivo a cinco mercados.",
    longDescription: "Diseñamos la presentación global del nuevo modelo del cliente integrando un escenario cinematográfico de 32 metros, transmisión en vivo a cinco mercados y una experiencia presencial para prensa y dealers. La narrativa cruzó video, talento en vivo y demos de producto sincronizados al milisegundo. Coordinamos producción técnica internacional, dirección de cámaras multi-IP y un equipo de hospitality bilingüe para más de 1.200 invitados.",
    services: SERVICES,
    gallery: withParams(galleries.launch),
    heroImage: adidasBanner,
    quote: {
      text: "Salió mejor de lo esperado. Producción, escenografía y guión se sintieron como una sola pieza coherente.",
      author: "Diego Méndez",
      role: "Marketing Director, Genesis",
    },
    related: ["datawise-hpe", "activacion-mundial", "hclsoftware"],
  },
  {
    slug: "hclsoftware",
    title: "HCLSoftware",
    client: "Vértice",
    category: "formula 1 ",
    year: 2025,
    location: "2025 — mice, las vegas",
    duration: "3 jornadas",
    durationDays: 3,
    attendees: 42000,
    shortDescription: "Festival multiescenario de tres jornadas con producción técnica internacional y cobertura full audiovisual.",
    longDescription: "Producción integral de un festival multiescenario con cuatro stages simultáneos durante tres jornadas. Coordinamos riders de más de 40 artistas, 600 técnicos y un dispositivo de seguridad y hospitality para 42.000 personas por día. Diseñamos la identidad visual del festival, las activaciones de marca dentro del predio y la cobertura audiovisual en vivo distribuida a streamings y broadcasters.",
    services: SERVICES,
    gallery: withParams(galleries.festival),
    heroImage: hclsoftwareBanner,
    quote: {
      text: "Llevaron Vértice al nivel de los grandes festivales internacionales. Operación enorme, ejecución obsesiva.",
      author: "Lucía Romero",
      role: "Festival Director",
    },
    related: ["activacion-mundial", "adidas", "premiere-atlas"],
  },
  {
    slug: "atlassian",
    title: "Atlassian",
    client: "Atlassian",
    category: "evento corporativo",
    year: 2025,
    location: "barcelona, esp",
    duration: "30 jornadas",
    durationDays: 30,
    attendees: 18000,
    shortDescription: "Activación itinerante en cinco ciudades de LATAM con dispositivo modular y experiencia interactiva.",
    longDescription: "Diseñamos un dispositivo modular itinerante que recorrió cinco ciudades de LATAM en 30 días. Cada activación combinó una instalación interactiva, presencia de talento local y un programa de contenidos para redes generado en tiempo real. Coordinamos logística internacional, equipos locales en cada plaza y un dashboard de medición de KPIs en vivo para el cliente.",
    services: SERVICES,
    gallery: withParams(galleries.activation),
    quote: {
      text: "Una operación enorme que se sintió simple desde nuestro lado. Eso solo se logra con un equipo realmente pro.",
      author: "Florencia Caro",
      role: "Brand Experience Lead, Atlassian",
    },
    related: ["hclsoftware", "adidas", "cumbre-latam"],
  },
  {
    slug: "cumbre-latam",
    title: "Cumbre LATAM",
    client: "IFS",
    category: "Convención",
    year: 2025,
    location: "Buenos Aires, AR",
    duration: "3 jornadas",
    durationDays: 3,
    attendees: 12000,
    shortDescription: "Convención regional de tres jornadas con plenarias, breakout rooms y gala de cierre.",
    longDescription: "Producción integral de la convención regional anual del cliente: tres jornadas con plenarias, más de 60 breakout rooms, expo de partners y una gala de cierre. Diseñamos la dirección artística unificada, gestionamos el run-of-show de más de 90 oradores y coordinamos hospitality, traducción simultánea y producción audiovisual en vivo para 12.000 asistentes presenciales y 18.000 remotos.",
    services: SERVICES,
    gallery: withParams(galleries.conference),
    quote: {
      text: "Pasó de ser un compromiso anual a convertirse en el evento más esperado por el equipo. Resultados claros.",
      author: "Sebastián Lara",
      role: "VP Operations, IFS",
    },
    related: ["datawise-hpe", "adidas", "activacion-mundial"],
  },
  {
    slug: "premiere-atlas",
    title: "Premiere Atlas",
    client: "Atlas Studios",
    category: "Premiere / Red carpet",
    year: 2025,
    location: "Buenos Aires, AR",
    duration: "1 jornada",
    durationDays: 1,
    attendees: 600,
    shortDescription: "Estreno con red carpet, screening y after dinner de tono cinematográfico.",
    longDescription: "Estreno mundial con red carpet, screening y after dinner para el cliente. Diseñamos una dirección artística cinematográfica que recorrió desde la llegada de talento hasta la cena post función. Coordinamos prensa internacional, fotografía, producción audiovisual en vivo y un protocolo de hospitality de talento a la altura del evento.",
    services: SERVICES,
    gallery: withParams(galleries.premiere),
    quote: {
      text: "El nivel de detalle en cada touchpoint del evento fue exactamente lo que la película merecía.",
      author: "Camila Suárez",
      role: "Head of PR, Atlas Studios",
    },
    related: ["datawise-hpe", "adidas", "hclsoftware"],
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
