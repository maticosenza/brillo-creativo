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
  gridImage?: string;
  quote?: { text: string; author: string; role: string };
  related: string[];
};

import datawiseHpeBanner from "@/assets/datawise-hpe-banner.jpg";
import adidasBanner from "@/assets/adidas-banner.jpg";
import adidasHero from "@/assets/adidas-hero.jpg";
import adidasGrid from "@/assets/adidas-grid.jpg";
import hclsoftwareBanner from "@/assets/hclsoftware-banner.jpg";
import hclsoftwareHero from "@/assets/hclsoftware-hero.jpg";
import hclsoftwareGrid from "@/assets/hclsoftware-grid.jpg";
import hclGallery1 from "@/assets/hclsoftware-gallery-1.jpg";
import hclGallery2 from "@/assets/hclsoftware-gallery-2.jpg";
import hclGallery3 from "@/assets/hclsoftware-gallery-3.jpg";
import hclGallery4 from "@/assets/hclsoftware-gallery-4.jpg";
import hclGallery5 from "@/assets/hclsoftware-gallery-5.jpg";
import hclGallery6 from "@/assets/hclsoftware-gallery-6.jpg";
import hclGallery7 from "@/assets/hclsoftware-gallery-7.jpg";
import atlassianBanner from "@/assets/atlassian-banner.jpg";
import atlassianGallery1 from "@/assets/atlassian-gallery-1.png.asset.json";
import atlassianGallery2 from "@/assets/atlassian-gallery-2.png.asset.json";
import atlassianGallery3 from "@/assets/atlassian-gallery-3.png.asset.json";
import atlassianGallery4 from "@/assets/atlassian-gallery-4.png.asset.json";
import atlassianGallery5 from "@/assets/atlassian-gallery-5.png.asset.json";
import atlassianGallery6 from "@/assets/atlassian-gallery-6.png.asset.json";
import atlassianGallery7 from "@/assets/atlassian-gallery-7.png.asset.json";
import atlassianGallery8 from "@/assets/atlassian-gallery-8.png.asset.json";
import atlassianGallery9 from "@/assets/atlassian-gallery-9.png.asset.json";
import atlassianGallery10 from "@/assets/atlassian-gallery-10.png.asset.json";
import atlassianGallery11 from "@/assets/atlassian-gallery-11.png.asset.json";
import atlassianGallery12 from "@/assets/atlassian-gallery-12.png.asset.json";
import atlassianGallery13 from "@/assets/atlassian-gallery-13.png.asset.json";
import atlassianGallery14 from "@/assets/atlassian-gallery-14.png.asset.json";
import atlassianGallery15 from "@/assets/atlassian-gallery-15.png.asset.json";
import atlassianGallery16 from "@/assets/atlassian-gallery-16.png.asset.json";
import atlassianGallery17 from "@/assets/atlassian-gallery-17.png.asset.json";
import datawiseHpeGallery1 from "@/assets/datawise-hpe-gallery-1.jpg.asset.json";
import datawiseHpeGallery2 from "@/assets/datawise-hpe-gallery-2.jpg.asset.json";
import datawiseHpeGallery3 from "@/assets/datawise-hpe-gallery-3.jpg.asset.json";
import datawiseHpeGallery4 from "@/assets/datawise-hpe-gallery-4.jpg.asset.json";
import datawiseHpeGallery5 from "@/assets/datawise-hpe-gallery-5.jpg.asset.json";
import datawiseHpeGallery6 from "@/assets/datawise-hpe-gallery-6.jpg.asset.json";
import datawiseHpeGallery7 from "@/assets/datawise-hpe-gallery-7.jpg.asset.json";
import datawiseHpeGallery8 from "@/assets/datawise-hpe-gallery-8.jpg.asset.json";
import datawiseHpeGallery9 from "@/assets/datawise-hpe-gallery-9.jpg.asset.json";
import datawiseHpeGallery10 from "@/assets/datawise-hpe-gallery-10.jpg.asset.json";
import adidasGallery1 from "@/assets/adidas-gallery-1.jpg.asset.json";
import adidasGallery2 from "@/assets/adidas-gallery-2.jpg.asset.json";
import adidasGallery3 from "@/assets/adidas-gallery-3.jpg.asset.json";
import adidasGallery4 from "@/assets/adidas-gallery-4.jpg.asset.json";
import mangaBanner from "@/assets/manga-banner.jpg";
import mangaGallery1 from "@/assets/manga-gallery-1.jpg.asset.json";
import mangaGallery2 from "@/assets/manga-gallery-2.jpg.asset.json";
import mangaGallery3 from "@/assets/manga-gallery-3.jpg.asset.json";
import mangaGallery4 from "@/assets/manga-gallery-4.jpg.asset.json";
import mangaGallery5 from "@/assets/manga-gallery-5.jpg.asset.json";
import mangaGallery6 from "@/assets/manga-gallery-6.jpg.asset.json";
import mangaGallery7 from "@/assets/manga-gallery-7.jpg.asset.json";
import mangaGallery8 from "@/assets/manga-gallery-8.jpg.asset.json";
import mangaGallery9 from "@/assets/manga-gallery-9.jpg.asset.json";
import mangaGallery10 from "@/assets/manga-gallery-10.jpg.asset.json";
import mangaGallery11 from "@/assets/manga-gallery-11.jpg.asset.json";
import mangaGallery12 from "@/assets/manga-gallery-12.jpg.asset.json";
import mangaGallery13 from "@/assets/manga-gallery-13.jpg.asset.json";
import mangaGallery14 from "@/assets/manga-gallery-14.jpg.asset.json";
import mangaGallery15 from "@/assets/manga-gallery-15.jpg.asset.json";
import mangaGallery16 from "@/assets/manga-gallery-16.jpg.asset.json";
import firaBarcelonaBanner from "@/assets/fira-barcelona-banner.jpg";
import nickSpaBanner from "@/assets/nick-spa-banner.jpg";
import nickSpaGallery1 from "@/assets/nick-spa-gallery-1.jpg.asset.json";
import nickSpaGallery2 from "@/assets/nick-spa-gallery-2.jpg.asset.json";
import nickSpaGallery3 from "@/assets/nick-spa-gallery-3.jpg.asset.json";
import nickSpaGallery4 from "@/assets/nick-spa-gallery-4.jpg.asset.json";
import nickSpaGallery5 from "@/assets/nick-spa-gallery-5.jpg.asset.json";
import nickSpaGallery6 from "@/assets/nick-spa-gallery-6.jpg.asset.json";
import nickSpaGallery7 from "@/assets/nick-spa-gallery-7.jpg.asset.json";
import unicaBanner from "@/assets/unica-banner.jpg";
import unicaGallery1 from "@/assets/unica-gallery-1.jpg.asset.json";
import unicaGallery2 from "@/assets/unica-gallery-2.jpg.asset.json";
import unicaGallery3 from "@/assets/unica-gallery-3.jpg.asset.json";
import unicaGallery4 from "@/assets/unica-gallery-4.jpg.asset.json";
import unicaGallery5 from "@/assets/unica-gallery-5.jpg.asset.json";
import unicaGallery6 from "@/assets/unica-gallery-6.jpg.asset.json";
import unicaGallery7 from "@/assets/unica-gallery-7.jpg.asset.json";
import unicaGallery8 from "@/assets/unica-gallery-8.jpg.asset.json";
import unicaGallery9 from "@/assets/unica-gallery-9.jpg.asset.json";

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

const hclsoftwareGallery = [
  hclGallery1,
  hclGallery2,
  hclGallery3,
  hclGallery4,
  hclGallery5,
  hclGallery6,
  hclGallery7,
];

const atlassianProjectGallery = [
  atlassianGallery1.url,
  atlassianGallery2.url,
  atlassianGallery3.url,
  atlassianGallery4.url,
  atlassianGallery5.url,
  atlassianGallery6.url,
  atlassianGallery7.url,
  atlassianGallery8.url,
  atlassianGallery9.url,
  atlassianGallery10.url,
  atlassianGallery11.url,
  atlassianGallery12.url,
  atlassianGallery13.url,
  atlassianGallery14.url,
  atlassianGallery15.url,
  atlassianGallery16.url,
  atlassianGallery17.url,
];

const datawiseHpeProjectGallery = [
  datawiseHpeGallery1.url,
  datawiseHpeGallery2.url,
  datawiseHpeGallery3.url,
  datawiseHpeGallery4.url,
  datawiseHpeGallery5.url,
  datawiseHpeGallery6.url,
  datawiseHpeGallery7.url,
  datawiseHpeGallery8.url,
  datawiseHpeGallery9.url,
  datawiseHpeGallery10.url,
];

const adidasProjectGallery = [
  adidasGallery1.url,
  adidasGallery2.url,
  adidasGallery3.url,
  adidasGallery4.url,
];

const nickSpaProjectGallery = [
  nickSpaGallery1.url,
  nickSpaGallery2.url,
  nickSpaGallery3.url,
  nickSpaGallery4.url,
  nickSpaGallery5.url,
  nickSpaGallery6.url,
  nickSpaGallery7.url,
];

const mangaProjectGallery = [
  mangaGallery1.url,
  mangaGallery2.url,
  mangaGallery3.url,
  mangaGallery4.url,
  mangaGallery5.url,
  mangaGallery6.url,
  mangaGallery7.url,
  mangaGallery8.url,
  mangaGallery9.url,
  mangaGallery10.url,
  mangaGallery11.url,
  mangaGallery12.url,
  mangaGallery13.url,
  mangaGallery14.url,
  mangaGallery15.url,
  mangaGallery16.url,
];

export const PROJECTS: Project[] = [
  {
    slug: "datawise-x-hpe",
    title: "Datawise x HPE",
    client: "Datawise / HPE",
    category: "Evento corporativo",
    year: 2026,
    location: "Buenos Aires, AR",
    duration: "3 jornadas por ciudad",
    durationDays: 2,
    attendees: 25,
    shortDescription: "Desarrollo y producción integral de dos experiencias corporativas diseñadas para fortalecer el relacionamiento con clientes, generar networking y potenciar nuevas oportunidades comerciales.",
    longDescription: "Desarrollo y producción integral de dos experiencias corporativas diseñadas para fortalecer el relacionamiento con clientes, generar networking y potenciar nuevas oportunidades comerciales.\n",
    scopeOfWork: [
      "Desarrollo y producción integral de dos experiencias corporativas diseñadas para fortalecer el relacionamiento con clientes, generar networking y potenciar nuevas oportunidades comerciales.\n",
      "Ambos eventos fueron conceptualizados y ejecutados end-to-end, desde la creación de la idea y diseño de la experiencia hasta la coordinación operativa, logística y gestión integral de proveedores.\n",
      "Las experiencias combinaron instancias corporativas y actividades inmersivas de alto valor agregado: una jornada vinculada al universo Fórmula 1 a través de simuladores profesionales, y una experiencia enológica enfocada en la creación de blends personalizados en equipo.\n\nCada evento incluyó espacios de networking, presentaciones corporativas, hospitality y experiencias gastronómicas diseñadas para generar interacción, engagement y una conexión más cercana entre la marca y sus invitados.\n\nNuestro rol abarcó la planificación estratégica, producción general, coordinación on-site y supervisión completa de cada detalle operativo para garantizar una experiencia alineada con los estándares premium de ambas marcas.\n\n",
    ],
    services: SERVICES,
    gallery: datawiseHpeProjectGallery,
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
    year: 2023,
    location: "BARCELONA, ESP",
    duration: "4 jornadas",
    durationDays: 4,
    attendees: 1200,
    shortDescription: "Producción integral de un torneo de pádel de cuatro jornadas junto a Adidas.",
    longDescription: "Producción integral de un torneo de pádel de cuatro jornadas junto a Adidas, combinando competencia deportiva, activaciones de marca y experiencias orientadas a la comunidad y el engagement.\n\nEl evento reunió a más de 1.200 participantes distribuidos en distintas categorías y niveles, generando una experiencia dinámica y de alta convocatoria durante todo el fin de semana.\n\nNuestro rol abarcó la planificación y coordinación operativa completa del torneo: gestión de proveedores, logística general, atención a jugadores, activaciones, montaje, coordinación on-site y supervisión integral de la experiencia en cada jornada.\n\nAdemás de la competencia deportiva, el evento incluyó espacios interactivos, juegos, premios y merchandising diseñados para potenciar la presencia de marca y generar una experiencia cercana, entretenida y memorable para todos los asistentes.\n\nEl resultado fue un evento que combinó deporte, comunidad y branding en un entorno alineado con la identidad y energía de Adidas.\n",
    services: SERVICES,
    gallery: adidasProjectGallery,
    heroImage: adidasHero,
    gridImage: adidasGrid,
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
    gallery: hclsoftwareGallery,
    heroImage: hclsoftwareHero,
    gridImage: hclsoftwareGrid,
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
    duration: "3 jornadas",
    durationDays: 3,
    attendees: 2000,
    shortDescription: "Producción y coordinación operativa integral de un evento corporativo internacional para más de 2.000 asistentes por jornada.",
    longDescription: "Producción y coordinación operativa integral de un evento corporativo internacional para más de 2.000 asistentes por jornada.\n\nEl proyecto incluyó la gestión completa de la infraestructura y experiencia del evento: distribución y operación de salas, mobiliario, escenografía, señalización, ambientación, coordinación técnica y soporte logístico general en un entorno de alta complejidad operativa.\nAdemás, se coordinó la operación de áreas VIP, espacios de prensa, atención al cliente y la gestión integral del personal involucrado, incluyendo equipos de seguridad, limpieza, promotoras y staff operativo.\n\nNuestro rol estuvo enfocado en garantizar una ejecución precisa, organizada y alineada con los estándares internacionales de un evento corporativo de gran escala, gestionando múltiples equipos y proveedores en simultáneo durante todas las jornadas.\n",
    services: SERVICES,
    gallery: atlassianProjectGallery,
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
    year: 2024,
    location: "barcelona, esp",
    duration: "4 jornadas",
    durationDays: 4,
    attendees: 160000,
    shortDescription: "Producción y coordinación operativa de una exhibición de cultura pop y entretenimiento.",
    longDescription: "Producción y coordinación operativa de una exhibición de cultura pop y entretenimiento desarrollada en cuatro pabellones, reuniendo miles de asistentes, exhibiciones temáticas, espacios comerciales y experiencias inmersivas durante múltiples jornadas.\n\nEl proyecto implicó la gestión integral de una operación de gran escala, coordinando logística, circulación de público, montaje, señalización, proveedores, áreas gastronómicas y supervisión general de cada espacio del evento.\n\nLa experiencia incluyó exhibiciones interactivas, zonas comerciales especializadas, propuestas gastronómicas orientales y activaciones vinculadas al universo del comic, anime y entretenimiento, generando un entorno dinámico y de alta convocatoria.\n\nDebido al volumen de asistentes y la magnitud del evento, se implementó una coordinación intensiva de seguridad, control de accesos y operación on-site para garantizar una experiencia organizada, segura y fluida en todo momento.\n\nNuestro foco estuvo puesto en asegurar una ejecución eficiente y una experiencia envolvente capaz de conectar comunidad, entretenimiento y marca a gran escala.\n",
    services: SERVICES,
    gallery: mangaProjectGallery,
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
    year: 2024,
    location: "Barcelona, ESP",
    duration: "1 jornada",
    durationDays: 1,
    attendees: 50,
    shortDescription: "Producción y coordinación integral de una rueda de prensa institucional.",
    longDescription: "Producción y coordinación integral de una rueda de prensa institucional, gestionando una experiencia organizada, profesional y alineada con los estándares de comunicación de un evento de alto perfil.\n\nEl proyecto incluyó la planificación operativa completa de la jornada: coordinación de espacios, montaje técnico, gestión de prensa, acreditaciones, logística general y supervisión on-site para garantizar el correcto funcionamiento de cada instancia del evento.\n\nLa convocatoria reunió a periodistas, medios y representantes institucionales en un entorno diseñado para facilitar la comunicación, la cobertura mediática y el relacionamiento estratégico entre las distintas partes involucradas.\n\nNuestro foco estuvo puesto en asegurar una ejecución precisa, fluida y profesional, cuidando cada detalle operativo para que el mensaje y la experiencia del evento tuvieran el máximo impacto.\n",
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
    year: 2023,
    location: "Barcelona, ESP",
    duration: "1 jornada",
    durationDays: 1,
    attendees: 1200,
    shortDescription: "Producción integral de una carrera urbana 5K en Barcelona.",
    longDescription: "Producción integral de una carrera urbana 5K en Barcelona, diseñada para transformar una competencia deportiva en una experiencia de marca de alto impacto.\n\nDesde la conceptualización hasta la ejecución final, desarrollamos un evento pensado para generar comunidad, visibilidad y una experiencia memorable tanto para corredores como para asistentes.\n\nLa producción incluyó la coordinación operativa completa de la jornada, gestión de proveedores, branding, activaciones, logística, montaje y supervisión on-site, asegurando una experiencia dinámica, fluida y alineada con la identidad del evento.\n\nCon cientos de participantes, activaciones en vivo y una fuerte presencia de marca en todo el recorrido, el proyecto combinó deporte, entretenimiento y engagement en un entorno urbano de gran convocatoria.\n",
    services: SERVICES,
    gallery: nickSpaProjectGallery,
    heroImage: nickSpaBanner,
    related: ["adidas", "hclsoftware", "atlassian"],
  },
  {
    slug: "unica-plus",
    title: "Unica+",
    client: "Unica+",
    category: "Evento corporativo",
    year: 2025,
    location: "Johannesburg, Cape Town, Sydney, Madrid, París, Austin",
    duration: "6 jornadas",
    durationDays: 6,
    attendees: 120,
    shortDescription: "Desarrollo y producción de una serie de eventos corporativos realizados en seis ciudades.",
    longDescription: "Desarrollo y producción de una serie de eventos corporativos realizados en seis ciudades, diseñados para generar networking, fortalecer el relacionamiento con prospectos y presentar nuevas soluciones vinculadas a inteligencia artificial aplicada al marketing.\n\nCada encuentro combinó contenido estratégico, presentaciones corporativas y espacios de interacción en un formato pensado para impulsar conversaciones de valor y conexiones comerciales en un entorno cercano y dinámico.\n\nNuestro rol incluyó la planificación y coordinación integral de cada jornada: logística, proveedores, producción general, atención a invitados, montaje, operación on-site y supervisión completa de la experiencia en todas las ciudades.\n\nEl proyecto fue diseñado para garantizar una ejecución consistente y alineada con la identidad de la marca, creando experiencias profesionales, modernas y orientadas a generar engagement y oportunidades comerciales reales.\n",
    services: SERVICES,
    gallery: withParams(galleries.corporate),
    heroImage: unicaBanner,
    related: ["datawise-x-hpe", "atlassian", "manga"],
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
