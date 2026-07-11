import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "barberflow",
    title: "BarberFlow",
    description:
      "Plataforma de reservas y gestión para barberías: agenda en tiempo real, control de clientes y recordatorios automáticos.",
    role: "Full Stack Developer",
    year: 2025,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    coverImage: "/style-guide/demo-cover.svg",
    gallery: ["/style-guide/demo-cover.svg"],
    featured: true,
  },
  {
    slug: "luxury-jewelry",
    title: "Luxury Jewelry",
    description:
      "Tienda en línea premium para joyería de lujo, con catálogo visual de alto impacto y checkout optimizado para conversión.",
    role: "Frontend Developer",
    year: 2025,
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    coverImage: "/style-guide/demo-cover.svg",
    gallery: ["/style-guide/demo-cover.svg"],
    featured: true,
  },
  {
    slug: "ai-fitness",
    title: "AI Fitness",
    description:
      "Aplicación de entrenamiento personalizado que genera rutinas y planes nutricionales asistidos por IA.",
    role: "Full Stack Developer",
    year: 2024,
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    coverImage: "/style-guide/demo-cover.svg",
    gallery: ["/style-guide/demo-cover.svg"],
    featured: true,
  },
  {
    slug: "dashboard-empresarial",
    title: "Dashboard Empresarial",
    description:
      "Panel de control analítico para toma de decisiones, con visualización de KPIs e integración de fuentes de datos empresariales.",
    role: "Software Developer",
    year: 2024,
    tags: ["React", "Power BI", "MySQL", ".NET"],
    coverImage: "/style-guide/demo-cover.svg",
    gallery: ["/style-guide/demo-cover.svg"],
    featured: false,
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "Gestor de tareas y proyectos colaborativo con tableros Kanban, seguimiento de progreso y notificaciones en tiempo real.",
    role: "Full Stack Developer",
    year: 2024,
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    coverImage: "/style-guide/demo-cover.svg",
    gallery: ["/style-guide/demo-cover.svg"],
    featured: false,
  },
  {
    slug: "ecommerce-premium",
    title: "Ecommerce Premium",
    description:
      "Plataforma de comercio electrónico de alto rendimiento con carrito persistente, pagos y panel de administración.",
    role: "Full Stack Developer",
    year: 2023,
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    coverImage: "/style-guide/demo-cover.svg",
    gallery: ["/style-guide/demo-cover.svg"],
    featured: false,
  },
];
