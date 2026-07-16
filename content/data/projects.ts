import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "luxury-jewelry",
    title: "Luxury Jewelry",
    description: {
      es: "Tienda en línea premium para joyería de lujo, con catálogo visual de alto impacto y checkout optimizado para conversión.",
      en: "Premium online store for luxury jewelry, with a high-impact visual catalog and a checkout optimized for conversion.",
    },
    role: { es: "Desarrollador Frontend", en: "Frontend Developer" },
    year: 2025,
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    coverImage: "/projects/luxury-jewelry.jpg",
    gallery: ["/projects/luxury-jewelry.jpg"],
    liveUrl: "https://goldenshop-one.vercel.app/",
    featured: true,
  },
  {
    slug: "nova-erp",
    title: "NovaERP",
    description: {
      es: "ERP SaaS multiempresa con 13 módulos de negocio interconectados — inventario, ventas, facturación, contabilidad de partida doble y CRM —, arquitectura limpia por capas y RBAC granular por tenant.",
      en: "Multi-tenant ERP SaaS with 13 interconnected business modules — inventory, sales, invoicing, double-entry accounting, and CRM —, clean layered architecture, and granular per-tenant RBAC.",
    },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    year: 2026,
    tags: ["Next.js", "ASP.NET Core", "PostgreSQL", "TypeScript"],
    coverImage: "/projects/nova-erp.jpg",
    gallery: ["/projects/nova-erp.jpg"],
    liveUrl: "https://novaerp-web-alpha.vercel.app/",
    repoUrl: "https://github.com/AdrianTX23/novaerp",
    featured: true,
  },
];
