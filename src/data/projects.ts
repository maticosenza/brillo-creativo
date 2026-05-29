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
  scopeOfWork?: string[];
  services: string[];
  gallery: string[];
  heroImage?: string;
  quote?: { text: string; author: string; role: string };
  related: string[];
};

import datawiseHpeBanner from "@/assets/datawise-hpe-banner.jpg";
import adidasBanner from "@/assets/adidas-banner.jpg";
import hclsoftwareBanner from "@/assets/hclsoftware-banner.jpg";
import atlassianBanner from "@/assets/atlassian-banner.jpg";
import mangaBanner from "@/assets/manga-banner.jpg";
import firaBarcelonaBanner from "@/assets/fira-barcelona-banner.jpg";
import nickSpaBanner from "@/assets/nick-spa-banner.jpg";
import unicaBanner from "@/assets/unica-banner.jpg";

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
    related: ["adidas", "manga", "fira-barcelona"],
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
    related: ["datawise-hpe", "atlassian", "hclsoftware"],
  },
  {
    slug: "hclsoftware",
    title: "HCLSoftware",
    client: "Vértice",
    category: "MICE - Fórmula 1",
    year: 2025,
    location: "Monza, Bakú, Singapore, São Paulo, Las Vegas, Abu Dhabi",
    duration: "3 jornadas por ciudad",
    durationDays: 3,
    attendees: 5000,
    shortDescription: "Activación tecnológica y hospitality de alto impacto durante el GP de Las Vegas.",
    longDescription: "Producción integral para HCLSoftware en el marco de la Formula 1 en Las Vegas. Coordinamos la presencia de marca, hospitality de alto nivel y activaciones tecnológicas inmersivas para miles de asistentes. Diseñamos la identidad visual de la activación, gestionamos la logística en un entorno de alta complejidad y aseguramos una cobertura audiovisual premium para canales globales.",
    scopeOfWork: [
      "Gestión y coordinación de experiencias hospitality en cada Grand Prix de Fórmula 1 para clientes y prospectos.",
      "El proyecto incluyó la planificación y operación integral de la experiencia: alojamiento, traslados, logística, atención a invitados, merchandising, coordinación de actividades y soporte general durante todo el fin de semana del evento.",
      "Además de la experiencia deportiva, se desarrollaron instancias corporativas y presentaciones estratégicas orientadas a fortalecer el relacionamiento con clientes y generar nuevas oportunidades comerciales en un entorno premium y de alto impacto.",
    ],
    services: SERVICES,
    gallery: withParams(galleries.festival),
    heroImage: hclsoftwareBanner,
    quote: {
      text: "Llevaron Vértice al nivel de los grandes festivales internacionales. Operación enorme, ejecución obsesiva.",
      author: "Lucía Romero",
      role: "Festival Director",
    },
    related: ["atlassian", "adidas", "fira-barcelona"],
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
    heroImage: atlassianBanner,
    quote: {
      text: "Una operación enorme que se sintió simple desde nuestro lado. Eso solo se logra con un equipo realmente pro.",
      author: "Florencia Caro",
      role: "Brand Experience Lead, Atlassian",
    },
    related: ["hclsoftware", "adidas", "manga"],
  },
  {
    slug: "manga",
    title: "MANGA",
    client: "MANGA",
    category: "Exhibición",
    year: 2025,
    location: "Buenos Aires, AR",
    duration: "3 jornadas",
    durationDays: 3,
    attendees: 12000,
    shortDescription: "Convención regional de tres jornadas con plenarias, breakout rooms y gala de cierre.",
    longDescription: "Producción integral de la convención regional anual del cliente: tres jornadas con plenarias, más de 60 breakout rooms, expo de partners y una gala de cierre. Diseñamos la dirección artística unificada, gestionamos el run-of-show de más de 90 oradores y coordinamos hospitality, traducción simultánea y producción audiovisual en vivo para 12.000 asistentes presenciales y 18.000 remotos.",
    services: SERVICES,
    gallery: withParams(galleries.conference),
    heroImage: mangaBanner,
    quote: {
      text: "Pasó de ser un compromiso anual a convertirse en el evento más esperado por el equipo. Resultados claros.",
      author: "Sebastián Lara",
      role: "VP Operations, IFS",
    },
    related: ["datawise-hpe", "adidas", "atlassian"],
  },
  {
    slug: "fira-barcelona",
    title: "Fira Barcelona",
    client: "Fira Barcelona",
    category: "Rueda de prensa",
    year: 2025,
    location: "Buenos Aires, AR",
    duration: "1 jornada",
    durationDays: 1,
    attendees: 600,
    shortDescription: "Estreno con red carpet, screening y after dinner de tono cinematográfico.",
    longDescription: "Estreno mundial con red carpet, screening y after dinner para el cliente. Diseñamos una dirección artística cinematográfica que recorrió desde la llegada de talento hasta la cena post función. Coordinamos prensa internacional, fotografía, producción audiovisual en vivo y un protocolo de hospitality de talento a la altura del evento.",
    services: SERVICES,
    gallery: withParams(galleries.premiere),
    heroImage: firaBarcelonaBanner,
    quote: {
      text: "El nivel de detalle en cada touchpoint del evento fue exactamente lo que la película merecía.",
      author: "Camila Suárez",
      role: "Head of PR, Atlas Studios",
    },
    related: ["datawise-hpe", "adidas", "hclsoftware"],
  },
  {
    slug: "nick-spa-sport-club",
    title: "Nick Spa & Sport Club",
    client: "Nick Spa & Sport Club",
    category: "Evento deportivo",
    year: 2025,
    location: "Barcelona, ESP",
    duration: "1 jornada",
    durationDays: 1,
    attendees: 5000,
    shortDescription: "Carrera urbana con activación de marca a gran escala en el corazón de Barcelona.",
    longDescription: "Producción integral de la carrera urbana de Nick Spa & Sport Club en Barcelona. Coordinamos la activación de marca en la línea de largada, branding del recorrido, hospitality para corredores VIP y cobertura audiovisual en vivo del evento deportivo.",
    services: SERVICES,
    gallery: withParams(galleries.activation),
    heroImage: nickSpaBanner,
    related: ["adidas", "hclsoftware", "atlassian"],
  },
  {
    slug: "unica-plus",
    title: "Unica+",
    client: "Unica+",
    category: "Evento corporativo",
    year: 2025,
    location: "Buenos Aires, AR",
    duration: "1 jornada",
    durationDays: 1,
    attendees: 40,
    shortDescription: "Encuentro corporativo íntimo con dirección artística cuidada y hospitality premium.",
    longDescription: "Diseñamos y produjimos un encuentro corporativo íntimo para Unica+ en un salón histórico. Dirección artística, montaje de mesa, contenido audiovisual sincronizado y un programa de hospitality premium para una experiencia de marca a la altura del cliente.",
    services: SERVICES,
    gallery: withParams(galleries.corporate),
    heroImage: unicaBanner,
    related: ["datawise-x-hpe", "atlassian", "manga"],
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
