export type ProjectCategory = 'software' | 'marketing' | 'design';

export interface ProjectContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'quote';
  content: { en: string; es: string } | string[];
}

export interface PortfolioProject {
  id: string;
  title:       { en: string; es: string };
  description: { en: string; es: string };
  tags: string[];
  category: ProjectCategory;
  hue: number;
  image?: string;
  client?: string;
  year?: number;
  role?: { en: string; es: string };
  liveUrl?: string;
  repoUrl?: string;
  gallery?: string[];
  content?: { en: ProjectContentBlock[]; es: ProjectContentBlock[] };
  results?: Array<{ label: { en: string; es: string }; value: string }>;
  stack?: string[];
}

export const projects: PortfolioProject[] = [
  {
    id: 'saas-landing',
    category: 'software',
    title: {
      en: 'Landing Page — SaaS Product',
      es: 'Landing Page — Producto SaaS',
    },
    description: {
      en: 'Full design-to-code landing page for a SaaS client. Focused on conversion optimization, achieving a 4.2% CTR on paid campaigns.',
      es: 'Landing page completa de diseño a código para un cliente SaaS. Enfocada en optimización de conversión, logrando un CTR del 4.2% en campañas de pago.',
    },
    tags: ['Next.js', 'SEO', 'Figma'],
    hue: 40,
    client: 'Confidential SaaS',
    year: 2024,
    role: {
      en: 'Full-stack developer & designer',
      es: 'Desarrollador full-stack y diseñador',
    },
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Figma', 'Vercel'],
    results: [
      { label: { en: 'Paid CTR', es: 'CTR Pagado' }, value: '4.2%' },
      { label: { en: 'Page load time', es: 'Tiempo de carga' }, value: '<1.2s' },
      { label: { en: 'Lighthouse score', es: 'Puntaje Lighthouse' }, value: '98 / 100' },
      { label: { en: 'Conversion uplift', es: 'Mejora de conversión' }, value: '+34%' },
    ],
    content: {
      en: [
        { type: 'heading', content: { en: 'The Challenge', es: '' } },
        { type: 'paragraph', content: { en: 'The client needed a high-performance landing page that could support aggressive paid campaigns. The original site was slow, generic, and converting below industry benchmarks.', es: '' } },
        { type: 'heading', content: { en: 'Approach', es: '' } },
        { type: 'paragraph', content: { en: 'I started with a full audit of the existing funnel, identifying friction points through heatmap data and session recordings. From there I designed and built a new page in Next.js with a focus on Core Web Vitals, clear value propositions, and trust signals above the fold.', es: '' } },
        { type: 'list', content: ['Full Figma → code design system', 'Server-side rendering for instant LCP', 'A/B tested 3 hero variants', 'Integrated with HubSpot CRM'] },
      ],
      es: [
        { type: 'heading', content: { en: '', es: 'El Reto' } },
        { type: 'paragraph', content: { en: '', es: 'El cliente necesitaba una landing page de alto rendimiento que pudiera soportar campañas de pago agresivas. El sitio original era lento, genérico y convertía por debajo de los benchmarks de la industria.' } },
        { type: 'heading', content: { en: '', es: 'Enfoque' } },
        { type: 'paragraph', content: { en: '', es: 'Comencé con una auditoría completa del embudo existente, identificando puntos de fricción a través de datos de mapas de calor y grabaciones de sesión. A partir de ahí diseñé y construí una nueva página en Next.js con foco en Core Web Vitals, propuestas de valor claras y señales de confianza sobre el pliegue.' } },
        { type: 'list', content: ['Sistema de diseño completo Figma → código', 'Renderizado del lado del servidor para LCP instantáneo', 'Pruebas A/B con 3 variantes del hero', 'Integración con HubSpot CRM'] },
      ],
    },
  },
  {
    id: 'paid-media',
    category: 'marketing',
    title: {
      en: 'Paid Media Campaign — E-commerce',
      es: 'Campaña de Medios Pagados — E-commerce',
    },
    description: {
      en: 'Managed full-funnel paid strategy for a local e-commerce brand. Reduced CPA by 30% and scaled ROAS from 1.8× to 3.4× in 60 days.',
      es: 'Gestioné una estrategia de pago de embudo completo para una marca de e-commerce local. Reduje el CPA en un 30% y escalé el ROAS de 1.8× a 3.4× en 60 días.',
    },
    tags: ['Google Ads', 'Meta Ads', 'Analytics'],
    hue: 200,
    client: 'Local E-commerce Brand',
    year: 2024,
    role: {
      en: 'Paid Media Strategist',
      es: 'Estratega de Medios Pagados',
    },
    stack: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Looker Studio', 'Klaviyo'],
    results: [
      { label: { en: 'ROAS', es: 'ROAS' }, value: '3.4×' },
      { label: { en: 'CPA reduction', es: 'Reducción de CPA' }, value: '−30%' },
      { label: { en: 'Revenue growth', es: 'Crecimiento de ingresos' }, value: '+112%' },
      { label: { en: 'Timeline', es: 'Plazo' }, value: '60 days' },
    ],
    content: {
      en: [
        { type: 'heading', content: { en: 'Background', es: '' } },
        { type: 'paragraph', content: { en: 'The brand had been running paid campaigns internally with inconsistent results. Budget was wasted on broad audiences with no clear attribution model and no systematic creative testing.', es: '' } },
        { type: 'heading', content: { en: 'Strategy', es: '' } },
        { type: 'paragraph', content: { en: 'I restructured the account from the ground up: tightened audience segmentation, built a full-funnel creative library, and set up proper GA4 + Looker Studio dashboards for real-time decision making.', es: '' } },
        { type: 'list', content: ['Rebuilt campaign architecture (TOFU / MOFU / BOFU)', 'Introduced UGC-style video creatives', 'Implemented server-side conversion tracking', 'Weekly creative rotation cadence'] },
      ],
      es: [
        { type: 'heading', content: { en: '', es: 'Contexto' } },
        { type: 'paragraph', content: { en: '', es: 'La marca llevaba campañas de pago de forma interna con resultados inconsistentes. El presupuesto se desperdiciaba en audiencias amplias sin modelo de atribución claro ni pruebas sistemáticas de creativos.' } },
        { type: 'heading', content: { en: '', es: 'Estrategia' } },
        { type: 'paragraph', content: { en: '', es: 'Reestructuré la cuenta desde cero: ajusté la segmentación de audiencias, construí una biblioteca de creativos de embudo completo y configuré dashboards de GA4 + Looker Studio para toma de decisiones en tiempo real.' } },
        { type: 'list', content: ['Reconstrucción de arquitectura de campañas (TOFU / MOFU / BOFU)', 'Introducción de creativos en formato de video UGC', 'Seguimiento de conversiones del lado del servidor', 'Rotación semanal de creativos'] },
      ],
    },
  },
  {
    id: 'seo-festival',
    category: 'marketing',
    title: {
      en: 'SEO Strategy — Film Festival',
      es: 'Estrategia SEO — Festival de Cine',
    },
    description: {
      en: 'Organic content and SEO strategy for an independent film festival, growing organic reach by 210% in one quarter.',
      es: 'Contenido orgánico y estrategia SEO para un festival de cine independiente, aumentando el alcance orgánico en un 210% en un trimestre.',
    },
    tags: ['SEO', 'Content', 'Ahrefs'],
    hue: 160,
    client: 'Independent Film Festival',
    year: 2023,
    role: {
      en: 'SEO Strategist & Content Lead',
      es: 'Estratega SEO y Líder de Contenido',
    },
    stack: ['Ahrefs', 'Google Search Console', 'Notion', 'WordPress', 'Screaming Frog'],
    results: [
      { label: { en: 'Organic reach growth', es: 'Crecimiento de alcance orgánico' }, value: '+210%' },
      { label: { en: 'Keyword rankings', es: 'Posicionamiento de palabras clave' }, value: 'Top 3 for 14 terms' },
      { label: { en: 'Organic sessions', es: 'Sesiones orgánicas' }, value: '+3,200 / quarter' },
      { label: { en: 'Backlinks earned', es: 'Backlinks obtenidos' }, value: '47 new domains' },
    ],
    content: {
      en: [
        { type: 'heading', content: { en: 'Context', es: '' } },
        { type: 'paragraph', content: { en: 'The festival had a website with good content but almost zero organic visibility. No technical SEO foundations, no link building strategy, and content published without keyword research.', es: '' } },
        { type: 'heading', content: { en: 'Execution', es: '' } },
        { type: 'paragraph', content: { en: 'I conducted a full technical audit, fixed core site health issues, built a content calendar around high-intent keywords, and launched an outreach campaign targeting film publications and local media.', es: '' } },
        { type: 'list', content: ['Technical audit: fixed 200+ on-page issues', 'Keyword research: 80-term cluster mapped to content', 'Content calendar: 12 articles in 90 days', 'Digital PR: pitched to 60+ film publications'] },
      ],
      es: [
        { type: 'heading', content: { en: '', es: 'Contexto' } },
        { type: 'paragraph', content: { en: '', es: 'El festival tenía un sitio web con buen contenido pero casi cero visibilidad orgánica. Sin fundamentos de SEO técnico, sin estrategia de link building y contenido publicado sin investigación de palabras clave.' } },
        { type: 'heading', content: { en: '', es: 'Ejecución' } },
        { type: 'paragraph', content: { en: '', es: 'Realicé una auditoría técnica completa, corregí problemas fundamentales de salud del sitio, construí un calendario de contenido en torno a palabras clave de alta intención y lancé una campaña de outreach dirigida a publicaciones de cine y medios locales.' } },
        { type: 'list', content: ['Auditoría técnica: corrección de 200+ problemas on-page', 'Investigación de palabras clave: clúster de 80 términos mapeados a contenido', 'Calendario de contenido: 12 artículos en 90 días', 'Digital PR: pitches a 60+ publicaciones de cine'] },
      ],
    },
  },
];
