export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "CV", href: "/#cv" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "adrian-pico-28@hotmail.com",
} as const;
