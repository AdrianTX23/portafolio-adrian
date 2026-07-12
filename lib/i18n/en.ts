import type { es } from "./es";

export const en: typeof es = {
  nav: {
    about: "About",
    experience: "Experience",
    cv: "Resume",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
  },
  mobileNav: {
    openLabel: "Open menu",
    closeLabel: "Close menu",
    dialogLabel: "Navigation menu",
  },
  resumeTab: {
    label: "CV",
    ariaLabel: "Go to my résumé",
  },
  languageToggle: {
    ariaLabel: "Switch language",
  },
  hero: {
    location: "Barranquilla, Colombia",
    role: "Frontend Software Engineer",
    headline: "I turn complex problems into simple products.",
    taglines: [
      "building fast interfaces.",
      "optimizing every page load.",
      "sweating the details on every pixel.",
      "learning something new every week.",
    ],
    description:
      "Systems Engineer specialized in Next.js, React, TypeScript, and PostgreSQL — with real experience in enterprise solutions, Power BI, and frontend development.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    stats: {
      experience: "Years of experience",
      projects: "Projects delivered",
      english: "English level",
    },
  },
  about: {
    eyebrow: "About me",
    title: "The person behind the code",
    bio: [
      "Systems Engineer graduated from Universidad Simón Bolívar with experience building web applications using React, JavaScript, TypeScript, HTML5, CSS3, and .NET. I've worked on enterprise projects for SIGPE Consultores and BIG SAS, developing software solutions, administering MySQL databases, and building analytical reports with Power BI.",
      "I'm passionate about building modern, intuitive, and scalable applications focused on delivering a great user experience. I pick up new technologies quickly, enjoy working in multidisciplinary teams, and look for solutions that generate real value for the business.",
    ],
    facts: {
      location: { label: "Location", value: "Barranquilla, Colombia" },
      education: {
        label: "Education",
        value: "Systems Engineering · Universidad Simón Bolívar (2023)",
      },
      english: {
        label: "English",
        value: "B2 level — international teams and documentation",
      },
    },
    certifications: ["Advanced Power BI · Udemy", "Advanced Excel · Grupo Ninja"],
  },
  experience: {
    eyebrow: "Track record",
    title: "Experience",
    description: "From internal development to enterprise solutions — that's how my work has evolved.",
  },
  resume: {
    eyebrow: "Résumé",
    title: "My CV",
    description: "Full preview — download it if you'd rather keep it on your device.",
    previewAlt: "Preview of Adrián Pico Martínez's résumé",
    openAriaLabel: "Open résumé in a new tab",
    download: "Download CV",
    note: "The CV is currently available in Spanish.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Where I add the most value",
    description:
      "Organized by area — the level reflects real professional experience, not a generic self-assessment.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      tools: "Tools",
      data: "Data & BI",
    },
    levels: {
      advanced: "Advanced",
      proficient: "Proficient",
      learning: "Learning",
    },
  },
  technologies: {
    eyebrow: "Stack",
    title: "Technologies I work with",
  },
  statement: {
    before: "I have a genuine obsession with the ",
    highlight: "details",
    after: " no one else notices.",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Featured projects",
    description:
      "A sample of products I've built end to end — from the interface down to the database.",
    viewProject: "View project",
    viewAllProjects: "View all projects",
    swipeHint: "Swipe to explore each project in detail.",
    stackLabel: "Tech stack",
    viewLive: "View live",
    repository: "Repository",
    backToProjects: "All projects",
    allEyebrow: "Full portfolio",
    allTitle: "All projects",
    allDescription: "Each card opens a detailed view with screenshots, tech stack, and links.",
  },
  timeline: {
    eyebrow: "Journey",
    title: "Professional timeline",
    typeLabels: {
      work: "Work experience",
      education: "Education",
      milestone: "Milestone",
    },
  },
  blog: {
    teaserEyebrow: "Technical blog",
    teaserTitle: "Latest writing",
    viewAllArticles: "View all articles",
    listEyebrow: "Technical blog",
    listTitle: "Writing and notes",
    backToArticles: "All articles",
    notAvailableNote: "This article is currently available in Spanish.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your next project",
    description: "I personally reply to every message — tell me what you need and I'll get back to you shortly.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Tell me how I can help...",
    send: "Send message",
    sendNote: "Your email client will open with the message ready to send.",
    subjectPrefix: "Portfolio contact",
    location: "Barranquilla, Colombia",
  },
  footer: {
    heading: "Shall we build something together?",
    description: "Always open to talk about new projects, roles, or ideas.",
    writeToMe: "Write to me",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};
