export interface PortfolioProject {
  id: string;
  title:       { en: string; es: string };
  description: { en: string; es: string };
  tags: string[];
  url: string;
  image?: string;
  hue: number;
}

export const projects: PortfolioProject[] = [
  {
    id: 'saas-landing',
    title: {
      en: 'Landing Page — SaaS Product',
      es: 'Landing Page — Producto SaaS',
    },
    description: {
      en: 'Full design-to-code landing page for a SaaS client. Focused on conversion optimization, achieving a 4.2% CTR on paid campaigns.',
      es: 'Landing page completa de diseño a código para un cliente SaaS. Enfocada en optimización de conversión, logrando un CTR del 4.2% en campañas de pago.',
    },
    tags: ['Next.js', 'SEO', 'Figma'],
    url: '#',
    hue: 40,
  },
  {
    id: 'paid-media',
    title: {
      en: 'Paid Media Campaign — E-commerce',
      es: 'Campaña de Medios Pagados — E-commerce',
    },
    description: {
      en: 'Managed full-funnel paid strategy for a local e-commerce brand. Reduced CPA by 30% and scaled ROAS from 1.8× to 3.4× in 60 days.',
      es: 'Gestioné una estrategia de pago de embudo completo para una marca de e-commerce local. Reduje el CPA en un 30% y escalé el ROAS de 1.8× a 3.4× en 60 días.',
    },
    tags: ['Google Ads', 'Meta Ads', 'Analytics'],
    url: '#',
    hue: 200,
  },
  {
    id: 'seo-festival',
    title: {
      en: 'SEO Strategy — Film Festival',
      es: 'Estrategia SEO — Festival de Cine',
    },
    description: {
      en: 'Organic content and SEO strategy for an independent film festival, growing organic reach by 210% in one quarter.',
      es: 'Contenido orgánico y estrategia SEO para un festival de cine independiente, aumentando el alcance orgánico en un 210% en un trimestre.',
    },
    tags: ['SEO', 'Content', 'Ahrefs'],
    url: '#',
    hue: 160,
  },
];
