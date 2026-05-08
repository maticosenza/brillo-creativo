export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "Nosotros",
    href: "/nosotros",
    children: [
      { label: "Equipo", href: "/nosotros/equipo" },
      { label: "Manifiesto", href: "/nosotros/manifiesto" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Producción integral", href: "/servicios/produccion-integral" },
      { label: "Activaciones de marca", href: "/servicios/activaciones-de-marca" },
      { label: "Eventos corporativos", href: "/servicios/eventos-corporativos" },
      { label: "Lanzamientos", href: "/servicios/lanzamientos" },
    ],
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    label: "Nosotros",
    href: "/careers",
    children: [
      { label: "Cultura", href: "/careers/cultura" },
      { label: "Posiciones abiertas", href: "/careers/posiciones-abiertas" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
    children: [
      { label: "Buenos Aires", href: "/contacto/buenos-aires" },
      { label: "Brief", href: "/contacto/brief" },
    ],
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export const CONTACT_EMAIL = "hola@productora.com";
