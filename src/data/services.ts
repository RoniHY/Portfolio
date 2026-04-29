export type ServiceId = 'software' | 'marketing' | 'design';

export interface ServiceProcess {
  step: number;
  title: { en: string; es: string };
  desc:  { en: string; es: string };
}

export interface Service {
  id: ServiceId;
  title:       { en: string; es: string };
  tagline:     { en: string; es: string };
  description: { en: string; es: string };
  deliverables: { en: string[]; es: string[] };
  process: ServiceProcess[];
  ctaLabel: { en: string; es: string };
  hue: number;
}

export const services: Service[] = [
  {
    id: 'software',
    hue: 40,
    title: {
      en: 'Software Development',
      es: 'Desarrollo de Software',
    },
    tagline: {
      en: 'Fast, scalable web products',
      es: 'Productos web rápidos y escalables',
    },
    description: {
      en: "From landing pages that convert to full-stack web applications, I build performant products with modern stacks. Every project ships with clean code, great UX, and production-ready infrastructure.",
      es: 'Desde landing pages que convierten hasta aplicaciones web full-stack, construyo productos de alto rendimiento con stacks modernos. Cada proyecto se entrega con código limpio, gran UX e infraestructura lista para producción.',
    },
    deliverables: {
      en: [
        'Landing pages & marketing sites',
        'Full-stack web applications (Next.js)',
        'API design & integrations',
        'Performance audits & Core Web Vitals',
        'CMS setup (Sanity, Contentful)',
      ],
      es: [
        'Landing pages y sitios de marketing',
        'Aplicaciones web full-stack (Next.js)',
        'Diseño de APIs e integraciones',
        'Auditorías de rendimiento y Core Web Vitals',
        'Configuración de CMS (Sanity, Contentful)',
      ],
    },
    process: [
      { step: 1, title: { en: 'Discovery', es: 'Descubrimiento' }, desc: { en: 'Understand your goals, constraints, and users. Define scope and stack.', es: 'Entender tus objetivos, restricciones y usuarios. Definir alcance y tecnología.' } },
      { step: 2, title: { en: 'Design', es: 'Diseño' }, desc: { en: 'Wireframes and a design system in Figma. Full sign-off before a line of code.', es: 'Wireframes y un sistema de diseño en Figma. Aprobación completa antes de escribir código.' } },
      { step: 3, title: { en: 'Build', es: 'Construcción' }, desc: { en: 'Iterative development with staging previews. You see progress every week.', es: 'Desarrollo iterativo con previews de staging. Ves el progreso cada semana.' } },
      { step: 4, title: { en: 'Launch', es: 'Lanzamiento' }, desc: { en: 'Production deploy, monitoring setup, and a 2-week support window.', es: 'Deploy en producción, configuración de monitoreo y ventana de soporte de 2 semanas.' } },
    ],
    ctaLabel: { en: "Let's build together", es: 'Construyamos juntos' },
  },
  {
    id: 'marketing',
    hue: 200,
    title: {
      en: 'Digital Marketing',
      es: 'Marketing Digital',
    },
    tagline: {
      en: 'Paid media & growth strategy',
      es: 'Medios pagados y estrategia de crecimiento',
    },
    description: {
      en: 'Data-driven paid campaigns and growth strategies that move the needle. I manage Google Ads, Meta Ads, and full-funnel attribution — turning ad spend into measurable revenue.',
      es: 'Campañas de pago basadas en datos y estrategias de crecimiento que generan resultados. Administro Google Ads, Meta Ads y atribución de embudo completo, convirtiendo el gasto en publicidad en ingresos medibles.',
    },
    deliverables: {
      en: [
        'Google Ads & Meta Ads management',
        'Full-funnel strategy (TOFU / MOFU / BOFU)',
        'Creative strategy & testing frameworks',
        'GA4 & Looker Studio dashboards',
        'SEO audits & content strategy',
      ],
      es: [
        'Gestión de Google Ads y Meta Ads',
        'Estrategia de embudo completo (TOFU / MOFU / BOFU)',
        'Estrategia creativa y frameworks de testing',
        'Dashboards de GA4 y Looker Studio',
        'Auditorías SEO y estrategia de contenido',
      ],
    },
    process: [
      { step: 1, title: { en: 'Audit', es: 'Auditoría' }, desc: { en: 'Audit existing accounts, analytics setup, and attribution to find leaks.', es: 'Auditoría de cuentas existentes, configuración de analytics y atribución para encontrar fugas.' } },
      { step: 2, title: { en: 'Strategy', es: 'Estrategia' }, desc: { en: 'Build a phased 90-day plan with clear KPIs, audiences, and creative briefs.', es: 'Construir un plan de 90 días por fases con KPIs claros, audiencias y briefs de creativos.' } },
      { step: 3, title: { en: 'Execute', es: 'Ejecución' }, desc: { en: 'Launch, monitor daily, and run systematic creative and audience tests.', es: 'Lanzar, monitorear diariamente y ejecutar pruebas sistemáticas de creativos y audiencias.' } },
      { step: 4, title: { en: 'Report', es: 'Reportar' }, desc: { en: 'Bi-weekly performance reports with clear insights and next actions.', es: 'Reportes de rendimiento quincenales con insights claros y próximas acciones.' } },
    ],
    ctaLabel: { en: 'Grow my revenue', es: 'Crecer mis ingresos' },
  },
  {
    id: 'design',
    hue: 160,
    title: {
      en: 'UX / Design',
      es: 'UX / Diseño',
    },
    tagline: {
      en: 'Interfaces people actually use',
      es: 'Interfaces que la gente realmente usa',
    },
    description: {
      en: 'Design is not decoration — it is the product. I create interfaces grounded in user research, brand coherence, and conversion principles. Every pixel serves a purpose.',
      es: 'El diseño no es decoración: es el producto. Creo interfaces basadas en investigación de usuarios, coherencia de marca y principios de conversión. Cada píxel tiene un propósito.',
    },
    deliverables: {
      en: [
        'UI / UX design in Figma',
        'Design systems & component libraries',
        'Brand identity & visual language',
        'Responsive web design',
        'Usability testing & iteration',
      ],
      es: [
        'Diseño UI / UX en Figma',
        'Sistemas de diseño y bibliotecas de componentes',
        'Identidad de marca y lenguaje visual',
        'Diseño web responsivo',
        'Pruebas de usabilidad e iteración',
      ],
    },
    process: [
      { step: 1, title: { en: 'Research', es: 'Investigación' }, desc: { en: 'User interviews, competitor analysis, and brand alignment workshops.', es: 'Entrevistas con usuarios, análisis de competencia y talleres de alineación de marca.' } },
      { step: 2, title: { en: 'Wireframe', es: 'Wireframe' }, desc: { en: 'Low-fidelity flows mapped to user journeys. Structure before aesthetics.', es: 'Flujos de baja fidelidad mapeados a los recorridos del usuario. Estructura antes que estética.' } },
      { step: 3, title: { en: 'High-fidelity', es: 'Alta fidelidad' }, desc: { en: 'Polished Figma designs with interactions, annotations, and a handoff spec.', es: 'Diseños pulidos en Figma con interacciones, anotaciones y especificaciones para handoff.' } },
      { step: 4, title: { en: 'Iterate', es: 'Iterar' }, desc: { en: 'Two rounds of revisions included. Usability testing available on request.', es: 'Dos rondas de revisiones incluidas. Pruebas de usabilidad disponibles bajo solicitud.' } },
    ],
    ctaLabel: { en: 'Redesign my product', es: 'Rediseñar mi producto' },
  },
];
