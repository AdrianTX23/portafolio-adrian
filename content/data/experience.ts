import type { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    company: "SIGPE Consultores",
    role: { es: "Analista de Desarrollo", en: "Development Analyst" },
    startDate: "2023-11",
    endDate: "2024-01",
    location: { es: "Barranquilla, Colombia", en: "Barranquilla, Colombia" },
    description: {
      es: "Desarrollo de soluciones de software para clientes empresariales, incluyendo proyectos para Sura.",
      en: "Built software solutions for enterprise clients, including projects for Sura.",
    },
    highlights: {
      es: [
        "Participé en el desarrollo de soluciones de software para clientes empresariales.",
        "Colaboré en un proyecto de realidad virtual orientado a procesos corporativos.",
        "Administré bases de datos MySQL garantizando la disponibilidad de la información.",
        "Desarrollé dashboards e informes con Power BI para apoyar la toma de decisiones.",
      ],
      en: [
        "Contributed to building software solutions for enterprise clients.",
        "Collaborated on a virtual reality project aimed at corporate processes.",
        "Administered MySQL databases, ensuring data availability.",
        "Built Power BI dashboards and reports to support decision-making.",
      ],
    },
    stack: ["MySQL", "Power BI", "SQL"],
  },
  {
    company: "Freelance",
    role: { es: "Desarrollador Frontend", en: "Frontend Developer" },
    startDate: "2022-02",
    endDate: "2023-11",
    location: { es: "Remoto", en: "Remote" },
    description: {
      es: "Desarrollo de sitios web personalizados para clientes, incluyendo iniciativas digitales para Wendy's.",
      en: "Built custom websites for clients, including digital initiatives for Wendy's.",
    },
    highlights: {
      es: [
        "Desarrollé sitios web personalizados para clientes.",
        "Colaboré remotamente en iniciativas digitales relacionadas con Wendy's.",
        "Diseñé interfaces responsivas enfocadas en mejorar la presencia digital.",
        "Implementé mejoras visuales y funcionales para aumentar la experiencia de usuario.",
      ],
      en: [
        "Built custom websites for clients.",
        "Collaborated remotely on digital initiatives related to Wendy's.",
        "Designed responsive interfaces focused on improving digital presence.",
        "Implemented visual and functional improvements to enhance user experience.",
      ],
    },
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    company: "BIG SAS",
    role: { es: "Desarrollador Junior", en: "Junior Developer" },
    startDate: "2020-07",
    endDate: "2020-12",
    location: { es: "Barranquilla, Colombia", en: "Barranquilla, Colombia" },
    description: {
      es: "Desarrollo de aplicaciones internas con .NET e interfaces web, incluyendo apps móviles con Xamarin.",
      en: "Built internal applications with .NET and web interfaces, including mobile apps with Xamarin.",
    },
    highlights: {
      es: [
        "Desarrollé aplicaciones internas utilizando .NET.",
        "Implementé interfaces web con HTML, CSS y JavaScript.",
        "Participé en el desarrollo de aplicaciones móviles con Xamarin.",
        "Brindé mantenimiento y mejoras a aplicaciones existentes.",
      ],
      en: [
        "Built internal applications using .NET.",
        "Implemented web interfaces with HTML, CSS, and JavaScript.",
        "Contributed to mobile app development with Xamarin.",
        "Provided maintenance and improvements to existing applications.",
      ],
    },
    stack: [".NET", "HTML", "CSS", "JavaScript", "Xamarin"],
  },
];
