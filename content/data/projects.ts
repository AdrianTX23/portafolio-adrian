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
];
