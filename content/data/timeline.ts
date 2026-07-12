import type { TimelineEvent } from "@/types/experience";

export const timeline: TimelineEvent[] = [
  {
    date: "2020-07",
    title: { es: "Primer paso profesional", en: "First professional step" },
    description: {
      es: "Desarrollador Junior en BIG SAS, Barranquilla — .NET, HTML/CSS/JS y Xamarin.",
      en: "Junior Developer at BIG SAS, Barranquilla — .NET, HTML/CSS/JS, and Xamarin.",
    },
    type: "work",
  },
  {
    date: "2022-02",
    title: { es: "Freelance a tiempo parcial", en: "Part-time freelance" },
    description: {
      es: "Desarrollo frontend remoto para clientes internacionales mientras terminaba la carrera.",
      en: "Remote frontend development for international clients while finishing my degree.",
    },
    type: "work",
  },
  {
    date: "2023",
    title: { es: "Graduación", en: "Graduation" },
    description: {
      es: "Ingeniería de Sistemas, Universidad Simón Bolívar (minor en Ingeniería de Software).",
      en: "Systems Engineering, Universidad Simón Bolívar (minor in Software Engineering).",
    },
    type: "education",
  },
  {
    date: "2023-11",
    title: { es: "SIGPE Consultores", en: "SIGPE Consultores" },
    description: {
      es: "Analista de Desarrollo — soluciones empresariales, MySQL y Power BI.",
      en: "Development Analyst — enterprise solutions, MySQL, and Power BI.",
    },
    type: "work",
  },
];
