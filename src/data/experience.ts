export interface Metric {
  value: string;
  label: { en: string; es: string };
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: { en: string; es: string };
  period: string;
  url: string;
  description: { en: string; es: string };
  metrics?: Metric[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'remotto',
    company: 'Remotto',
    role: {
      en: 'Sales & Growth Specialist',
      es: 'Especialista en Ventas y Crecimiento',
    },
    period: 'September 2025 — Currently',
    url: 'https://www.remotto.cloud/',
    description: {
      en: "At Remotto, I drive the company's expansion across LATAM, the U.S., and Europe. My role sits at the intersection of sales and technology, where I help companies discover how AI-powered recruiting can transform their hiring efficiency. I manage the full outbound cycle—from identifying prospect pain points to crafting persuasive, value-focused messaging. By leveraging social selling and strategic communication, I build a predictable pipeline of qualified leads.",
      es: 'En Remotto, impulso la expansión de la empresa en LATAM, EE.UU. y Europa. Mi rol se sitúa en la intersección entre ventas y tecnología, ayudando a empresas a descubrir cómo el reclutamiento potenciado por IA puede transformar su eficiencia de contratación. Gestiono el ciclo completo de outbound—desde identificar los puntos de dolor de los prospectos hasta crear mensajes persuasivos y orientados al valor. A través del social selling y la comunicación estratégica, construyo un pipeline predecible de leads calificados.',
    },
  },
  {
    id: 'ozados',
    company: 'Ozados Films',
    role: {
      en: 'Marketing & Distribution Coordinator',
      es: 'Coordinador de Marketing y Distribución',
    },
    period: 'March 2025 — September 2025',
    url: 'https://www.ozados.com/es',
    description: {
      en: 'I led the digital marketing and distribution strategy for independent film projects, most notably the launch of "Lepes". My focus was turning a creative product into a measurable success. I developed an IMC plan and managed public relations with key media outlets like El Heraldo de Chihuahua. By aligning creative content with strict KPIs, the project achieved significant digital reach during its festival run.',
      es: 'Lideré la estrategia de marketing digital y distribución para proyectos cinematográficos independientes, especialmente el lanzamiento de "Lepes". Mi enfoque fue convertir un producto creativo en un éxito medible. Desarrollé un plan de Comunicación de Marketing Integrada (CMI) y gestioné las relaciones públicas con medios clave como El Heraldo de Chihuahua. Al alinear el contenido creativo con KPIs estrictos, el proyecto logró un alcance digital significativo durante su corrida en festivales.',
    },
    metrics: [
      { value: '+100K', label: { en: 'views in one month',      es: 'vistas en un mes' } },
      { value: '+2K',   label: { en: 'interactions on launch',  es: 'interacciones en el lanzamiento' } },
      { value: '+300',  label: { en: 'followers in 30 days',    es: 'seguidores en 30 días' } },
    ],
  },
  {
    id: 'bafar',
    company: 'Bafar',
    role: {
      en: 'Ecommerce Intern Analyst',
      es: 'Analista Pasante de Ecommerce',
    },
    period: 'August 2024 — December 2024',
    url: 'https://grupobafar.com/',
    description: {
      en: "I dived deep into the data behind the storefront. Responsible for analyzing user behavior and optimizing the sales funnel for a major food industry player. I managed large-scale SEM campaigns across Meta and Google, analyzing abandoned carts to recover revenue and improving the SEO/UX for hundreds of products. I also supported the innovation of opening B2B sales channels via WhatsApp, directly impacting the company's digital transformation.",
      es: 'Me sumergí en los datos detrás del escaparate digital. Fui responsable de analizar el comportamiento del usuario y optimizar el embudo de ventas de un jugador importante en la industria alimentaria. Gestioné campañas SEM a gran escala en Meta y Google, analicé carritos abandonados para recuperar ingresos y mejoré el SEO/UX de cientos de productos. También apoyé la innovación de abrir canales de ventas B2B vía WhatsApp, impactando directamente la transformación digital de la empresa.',
    },
  },
];
