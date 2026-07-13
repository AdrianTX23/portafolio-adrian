export interface NavLink {
  key: "about" | "experience" | "cv" | "projects" | "blog" | "contact";
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "about", href: "/#sobre-mi" },
  { key: "experience", href: "/#experiencia" },
  { key: "cv", href: "/#cv" },
  { key: "projects", href: "/proyectos" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contacto" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/AdrianTX23",
  linkedin: "https://www.linkedin.com/in/adrian-gabriel-pico-martinez-68a25b210/",
  email: "adrian-pico-28@hotmail.com",
} as const;
