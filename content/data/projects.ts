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
    caseStudy: {
      metrics: [
        {
          value: "8",
          label: { es: "Módulos de dominio completos", en: "Complete domain modules" },
        },
        {
          value: "16",
          label: { es: "Tablas con RLS en Postgres", en: "Postgres tables with RLS" },
        },
        {
          value: "100%",
          label: {
            es: "Verificado: lint + tipos + tests + build",
            en: "Verified: lint + types + tests + build",
          },
        },
      ],
      context: {
        es: "Una joyería de lujo se vende por la experiencia: el catálogo tiene que sentirse premium y el checkout tiene que convertir sin fricción. El reto era construir un e-commerce completo — catálogo, carrito, checkout, wishlist, cuentas y administración — con arquitectura de nivel producción, no una demo de escaparate.",
        en: "Luxury jewelry sells on experience: the catalog has to feel premium and the checkout has to convert without friction. The challenge was building a complete e-commerce — catalog, cart, checkout, wishlist, accounts, and admin — with production-grade architecture, not a storefront demo.",
      },
      approach: {
        es: "Next.js 16 y React 19 con Clean Architecture por feature (domain / application / infrastructure / ui) sobre Supabase con Row Level Security real. El grafo de dependencias entre módulos lo hace cumplir ESLint: cada cruce entre features pasa por su barrel público, nunca por sus carpetas internas.",
        en: "Next.js 16 and React 19 with feature-based Clean Architecture (domain / application / infrastructure / ui) over Supabase with real Row Level Security. The dependency graph between modules is enforced by ESLint: every cross-feature import goes through the public barrel, never internal folders.",
      },
      features: {
        es: [
          "Catálogo real (listado y detalle de producto) renderizado como Server Components",
          "Carrito unificado para invitado y usuario autenticado",
          "Checkout con dirección y pedido real, más páginas de seguimiento de pedido",
          "Wishlist, cuentas (registro / login) y buscador con autocompletado",
          "Panel de administración para la gestión de productos",
        ],
        en: [
          "Real catalog (product listing and detail) rendered as Server Components",
          "Unified cart for both guest and authenticated users",
          "Checkout with address and a real order, plus order-tracking pages",
          "Wishlist, accounts (sign up / log in), and search with autocomplete",
          "Admin panel for product management",
        ],
      },
      architecture: {
        es: [
          "Row Level Security real en Postgres (16 tablas), verificada bajo el rol anónimo con PGlite y contra un Supabase real en la nube.",
          "Gobierno de dependencias entre features aplicado por un linter de arquitectura, no por convención.",
          "shared-kernel con Result<T,E>, DomainError y Money compartido por todos los módulos.",
          "npm run verify (lint + typecheck + tests + build) como puerta obligatoria antes de cualquier PR.",
        ],
        en: [
          "Real Row Level Security in Postgres (16 tables), verified under the anon role with PGlite and against a real cloud Supabase.",
          "Cross-feature dependency governance enforced by an architecture linter, not by convention.",
          "A shared-kernel with Result<T,E>, DomainError, and Money used across every module.",
          "npm run verify (lint + typecheck + tests + build) as a mandatory gate before any PR.",
        ],
      },
      outcome: {
        es: "Documenté cada decisión de arquitectura antes de escribir código, incluidas las desviaciones honestas. Aprendí que un e-commerce «sencillo» esconde una enorme complejidad de estado — invitado frente a autenticado, stock, RLS — y que la disciplina arquitectónica es justo lo que la mantiene manejable.",
        en: "I documented every architecture decision before writing code, including the honest deviations. I learned that a 'simple' e-commerce hides enormous state complexity — guest vs. authenticated, stock, RLS — and that architectural discipline is exactly what keeps it manageable.",
      },
    },
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
    caseStudy: {
      metrics: [
        {
          value: "13",
          label: { es: "Módulos de negocio interconectados", en: "Interconnected business modules" },
        },
        {
          value: "121",
          label: { es: "Tests automatizados en verde", en: "Automated tests, all green" },
        },
        {
          value: "SaaS",
          label: { es: "Multiempresa con aislamiento total", en: "Multi-tenant, fully isolated" },
        },
      ],
      context: {
        es: "Los ERP comerciales son cajas negras caras y rígidas. Quería demostrar que se puede construir uno desde cero, con reglas de negocio reales — contabilidad de partida doble, stock compartido entre módulos, ciclo de vida de facturas y pagos — sin sacrificar la integridad de los datos y con aislamiento total entre empresas.",
        en: "Commercial ERPs are expensive, rigid black boxes. I wanted to prove you can build one from scratch, with real business rules — double-entry accounting, stock shared across modules, invoice and payment lifecycles — without sacrificing data integrity and with full isolation between companies.",
      },
      approach: {
        es: "Clean Architecture por capas (Domain / Application / Infrastructure / API) con CQRS vía MediatR sobre ASP.NET Core 9 y PostgreSQL, y un frontend Next.js 16 + React 19. Las invariantes críticas viven en el dominio, no en los controladores, así que es imposible saltárselas desde otra parte del sistema.",
        en: "Layered Clean Architecture (Domain / Application / Infrastructure / API) with CQRS via MediatR over ASP.NET Core 9 and PostgreSQL, plus a Next.js 16 + React 19 frontend. Critical invariants live in the domain, not the controllers, so they're impossible to bypass from anywhere else in the system.",
      },
      features: {
        es: [
          "Autenticación y RBAC con JWT + refresh en cookie httpOnly y permisos granulares por tenant",
          "Inventario con control de stock y punto de reorden, compartido entre Ventas y Compras",
          "Ventas y Compras como espejos que descuentan y suman el mismo stock",
          "Facturación con pagos parciales y saldo pendiente, y Caja que unifica los cobros",
          "Contabilidad de partida doble real: plan de cuentas, asientos balanceados y balance de comprobación",
          "CRM con pipeline kanban, Reportes con aging de cuentas por cobrar y Dashboard con KPIs reales",
        ],
        en: [
          "Auth and RBAC with JWT + refresh in an httpOnly cookie and granular per-tenant permissions",
          "Inventory with stock control and reorder points, shared between Sales and Purchases",
          "Sales and Purchases as mirrors that subtract and add the same stock",
          "Invoicing with partial payments and outstanding balance, and a Cash module that unifies collections",
          "Real double-entry accounting: chart of accounts, balanced journal entries, trial balance",
          "CRM with a kanban pipeline, Reports with A/R aging, and a Dashboard with real KPIs",
        ],
      },
      architecture: {
        es: [
          "Multi-tenancy con Global Query Filters de EF Core: ningún módulo filtra por tenant a mano, así que es imposible olvidarlo.",
          "La invariante contable la protege el dominio: JournalEntry.EnsureBalanced() rechaza cualquier asiento descuadrado antes de tocar la base de datos.",
          "Compras y Ventas comparten stock: cancelar una compra ya vendida se rechaza solo si dejaría el inventario en negativo — regla emergente de Product.AdjustStock, sin código de integración especial.",
          "121 tests (115 unitarios + 6 de integración contra el pipeline HTTP real) cubren las reglas de negocio más delicadas.",
        ],
        en: [
          "Multi-tenancy with EF Core Global Query Filters: no module filters by tenant manually, so it's impossible to forget.",
          "The accounting invariant is protected by the domain: JournalEntry.EnsureBalanced() rejects any unbalanced entry before it touches the database.",
          "Purchases and Sales share stock: cancelling an already-sold purchase is rejected only if it would leave inventory negative — an emergent rule from Product.AdjustStock, with no special integration code.",
          "121 tests (115 unit + 6 integration against the real HTTP pipeline) cover the most delicate business rules.",
        ],
      },
      outcome: {
        es: "El proyecto demuestra que las reglas de negocio complejas se mantienen simples cuando viven en el dominio: módulos que «colaboran» sin conocerse gracias a invariantes compartidas. Aprendí a diseñar para que los estados inválidos sean imposibles por construcción, no algo que haya que recordar validar.",
        en: "The project shows that complex business rules stay simple when they live in the domain: modules that 'collaborate' without knowing each other thanks to shared invariants. I learned to design so invalid states are impossible by construction, not something you have to remember to validate.",
      },
    },
  },
  {
    slug: "medicore-hms",
    title: "MediCore HMS",
    description: {
      es: "Sistema de gestión hospitalaria con arquitectura limpia por capas — pacientes, agenda médica, historia clínica electrónica, laboratorio, farmacia y facturación —, RBAC de 9 roles y auditoría inmutable.",
      en: "Hospital management system with a clean layered architecture — patients, scheduling, electronic medical records, lab, pharmacy, and billing —, 9-role RBAC, and immutable audit trails.",
    },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    year: 2026,
    tags: ["Next.js", "TypeScript", "Supabase", "Prisma"],
    coverImage: "/projects/medicore-hms.jpg",
    gallery: ["/projects/medicore-hms.jpg"],
    liveUrl: "https://medicore-hms-sage.vercel.app/",
    repoUrl: "https://github.com/AdrianTX23/medicore-hms",
    featured: true,
    caseStudy: {
      metrics: [
        {
          value: "9",
          label: { es: "Roles con permisos granulares", en: "Roles with granular permissions" },
        },
        {
          value: "30+",
          label: { es: "Tablas en el modelo de datos", en: "Tables in the data model" },
        },
        {
          value: "0",
          label: {
            es: "Doble-booking posible (a nivel de base de datos)",
            en: "Double-booking possible (at the database level)",
          },
        },
      ],
      context: {
        es: "El software clínico no puede permitirse estados inválidos: dos pacientes en la misma cama, una historia clínica alterada, un pago que sobrepasa la factura. Quería construir un HMS con estándares de un sistema real — auditoría inmutable, historia append-only y prevención de errores a nivel de base de datos, no solo de interfaz.",
        en: "Clinical software can't afford invalid states: two patients in the same bed, an altered medical record, a payment that exceeds the invoice. I wanted to build an HMS to real-system standards — immutable audit, append-only records, and error prevention at the database level, not just the UI.",
      },
      approach: {
        es: "Next.js 15 (App Router + Server Actions) con arquitectura feature-based y una regla de dependencia estricta (app → features → core). Cada mutación pasa por el mismo pipeline: Server Action que valida sesión → permiso → esquema Zod → servicio → Prisma → log de auditoría. La seguridad es defensa en profundidad: middleware, capa de acciones y restricciones de base de datos.",
        en: "Next.js 15 (App Router + Server Actions) with feature-based architecture and a strict dependency rule (app → features → core). Every mutation goes through the same pipeline: a Server Action validating session → permission → Zod schema → service → Prisma → audit log. Security is defense in depth: middleware, action layer, and database constraints.",
      },
      features: {
        es: [
          "Pacientes con búsqueda difusa sin acentos (pg_trgm + unaccent) y perfil 360° con seguros",
          "Agenda con slots calculados y máquina de estados (check-in → en curso → completada); doble-booking imposible a nivel de base de datos",
          "Historia clínica electrónica con diagnósticos CIE-10, recetas, cierre inmutable y addendums firmados",
          "Laboratorio con validación por un segundo rol y detección automática de anormalidad",
          "Farmacia con dispensación FEFO y ledger de stock inmutable",
          "Facturación con cobertura de seguro, pagos parciales y anulación protegida",
        ],
        en: [
          "Patients with accent-insensitive fuzzy search (pg_trgm + unaccent) and a 360° profile with insurance",
          "Scheduling with computed slots and a state machine (check-in → in progress → completed); double-booking impossible at the database level",
          "Electronic medical records with ICD-10 diagnoses, prescriptions, immutable closing, and signed addenda",
          "Lab with second-role validation and automatic abnormality detection",
          "Pharmacy with FEFO dispensing and an immutable stock ledger",
          "Billing with insurance coverage, partial payments, and protected voiding",
        ],
      },
      architecture: {
        es: [
          "Estados inválidos imposibles por diseño: índices y restricciones de base de datos previenen doble-booking, duplicados y sobrepagos.",
          "RBAC de 9 roles con una matriz canónica de permisos (modulo:accion) persistida y validada en cada Server Action.",
          "Auditoría inmutable e historia clínica append-only: nada se borra, todo queda registrado y firmado.",
          "Lógica pura separada de las queries de Prisma para hacerla testeable sin base de datos; los tests de integración prueban los guards de concurrencia bajo carga real.",
        ],
        en: [
          "Invalid states impossible by design: database indexes and constraints prevent double-booking, duplicates, and overpayments.",
          "9-role RBAC with a canonical permission matrix (module:action) persisted and validated on every Server Action.",
          "Immutable audit and append-only medical records: nothing is deleted, everything is logged and signed.",
          "Pure logic separated from Prisma queries to make it testable without a database; integration tests exercise the concurrency guards under real load.",
        ],
      },
      outcome: {
        es: "Construir con estándares clínicos me obligó a pensar en concurrencia y trazabilidad desde el primer día. La lección clave: la base de datos es la última línea de defensa — si un estado no debe existir, hazlo imposible ahí, no solo en el formulario.",
        en: "Building to clinical standards forced me to think about concurrency and traceability from day one. The key lesson: the database is the last line of defense — if a state shouldn't exist, make it impossible there, not just in the form.",
      },
    },
  },
  {
    slug: "lumen-ai",
    title: "LUMEN AI",
    description: {
      es: "App de finanzas personales nativa en IA — billetera con copiloto conversacional que solo cita transacciones reales, nunca cifras inventadas. Clean Architecture en monorepo modular, capa de datos local-first reactiva y gráficos propios, para móvil (iOS/Android) y web desde un mismo código.",
      en: "AI-native personal finance app — a wallet with a conversational copilot that only cites real transactions, never a hallucinated figure. Clean Architecture over a modular monorepo, a reactive local-first data layer, and custom charts, shared across mobile (iOS/Android) and web from one codebase.",
    },
    role: { es: "Desarrollador Mobile & Full Stack", en: "Mobile & Full Stack Developer" },
    year: 2026,
    tags: ["Flutter", "Dart", "Riverpod", "TypeScript"],
    coverImage: "/projects/lumen-ai.jpg",
    gallery: ["/projects/lumen-ai.jpg"],
    liveUrl: "https://adriantx23.github.io/lumenai/",
    repoUrl: "https://github.com/AdrianTX23/lumenai",
    featured: true,
    caseStudy: {
      metrics: [
        {
          value: "3",
          label: {
            es: "Plataformas desde un solo código (iOS · Android · Web)",
            en: "Platforms from one codebase (iOS · Android · Web)",
          },
        },
        {
          value: "0",
          label: {
            es: "Cifras inventadas por el copiloto",
            en: "Figures hallucinated by the copilot",
          },
        },
        {
          value: "Local-first",
          label: { es: "Tus datos, en tu dispositivo", en: "Your data, on your device" },
        },
      ],
      context: {
        es: "Las apps de finanzas o son tableros bonitos sin inteligencia, o «copilotos» de IA que inventan cifras. Quería un asistente financiero conversacional en el que se pueda confiar: que responda sobre tu dinero citando siempre transacciones reales, nunca un número alucinado — y que funcione en móvil y web desde un mismo código.",
        en: "Finance apps are either pretty dashboards with no intelligence, or AI 'copilots' that make up numbers. I wanted a conversational financial assistant you can actually trust: one that answers about your money always citing real transactions, never a hallucinated figure — and that runs on mobile and web from one codebase.",
      },
      approach: {
        es: "Flutter y Dart con Clean Architecture sobre un monorepo modular (Ports & Adapters), con flujo de datos reactivo y unidireccional. El dominio no depende de nada; cada capa apunta hacia adentro, y los límites entre paquetes se verifican en CI — un import ilegal es un error de compilación, no un comentario de revisión.",
        en: "Flutter and Dart with Clean Architecture over a modular monorepo (Ports & Adapters), with a reactive, unidirectional data flow. The domain depends on nothing; every layer points inward, and package boundaries are checked in CI — an illegal import is a build failure, not a review comment.",
      },
      features: {
        es: [
          "Billetera que unifica cuentas y tarjetas con patrimonio neto en tiempo real",
          "Copiloto conversacional que responde citando las transacciones exactas, con un chip de evidencia navegable",
          "Insights y presupuestos con algoritmos deterministas locales",
          "Gráficos propios con custom painters, tema claro/oscuro y soporte EN/ES",
          "Entrada manual de cuentas y transacciones; en la web, todo queda en el almacenamiento local del navegador",
        ],
        en: [
          "A wallet that unifies accounts and cards with real-time net worth",
          "A conversational copilot that answers by citing the exact transactions, with a navigable evidence chip",
          "Insights and budgets powered by deterministic local algorithms",
          "Custom-painter charts, light/dark theme, and EN/ES support",
          "Manual account and transaction entry; on the web, everything stays in the browser's local storage",
        ],
      },
      architecture: {
        es: [
          "Respuestas «con evidencia»: cada cifra se consulta del mismo pipeline SQL determinista que usa el resto de la app; el modelo (real o mockeado) nunca inventa un número.",
          "Contexto minimizado hacia el modelo: se envía un context pack agregado, nunca el libro mayor completo.",
          "core_domain no depende de nada; core_ui solo de Flutter — límites verificados en compilación y CI.",
          "Capa de datos local-first con Drift (SQLite nativo, WasmDatabase en web) y un motor de seed determinista.",
          "Sistema de diseño probado con golden tests (capturas), con un catálogo vivo en Widgetbook.",
        ],
        en: [
          "Grounded answers: every figure is queried from the same deterministic SQL pipeline the rest of the app uses; the model (real or mocked) never invents a number.",
          "Minimized context to the model: an aggregated context pack is sent, never the full ledger.",
          "core_domain depends on nothing; core_ui only on Flutter — boundaries verified at compile time and in CI.",
          "A local-first data layer with Drift (native SQLite, WasmDatabase on web) and a deterministic seed engine.",
          "A design system tested with golden (screenshot) tests, with a living catalog in Widgetbook.",
        ],
      },
      outcome: {
        es: "El reto real no era la IA, sino hacerla confiable: fundamentar cada respuesta en datos verificables. Construir para móvil y web con un solo código me enseñó cuánta disciplina de arquitectura hace falta para que «compartir código» no se convierta en «acoplarlo todo».",
        en: "The real challenge wasn't the AI, but making it trustworthy: grounding every answer in verifiable data. Building for mobile and web from one codebase taught me how much architectural discipline it takes so that 'sharing code' doesn't become 'coupling everything'.",
      },
    },
  },
];
