export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/car%C3%A1cter-producciones/?viewAsMember=true" },
  { label: "TikTok", href: "https://www.tiktok.com/@caracter.prod?lang=es-419" },
  { label: "Instagram", href: "https://www.instagram.com/caracter.prod/" },
];

export const CONTACT_EMAIL = "hello@caracterprod.com";
