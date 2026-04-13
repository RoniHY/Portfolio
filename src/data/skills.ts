export interface Skill {
  label: { en: string; es: string };
  value: number;
}

export const softwareSkills: Skill[] = [
  { label: { en: 'Figma',                 es: 'Figma' },                  value: 50 },
  { label: { en: 'Adobe Creative Suite',  es: 'Adobe Creative Suite' },   value: 60 },
  { label: { en: 'Canva',                 es: 'Canva' },                   value: 70 },
  { label: { en: 'Next.js',               es: 'Next.js' },                 value: 85 },
  { label: { en: 'CRM (Hubspot, Zoho)',   es: 'CRM (Hubspot, Zoho)' },    value: 50 },
  { label: { en: 'MongoDB Compass',       es: 'MongoDB Compass' },         value: 70 },
];

export const marketingSkills: Skill[] = [
  { label: { en: 'SEM & Paid Media',         es: 'SEM y Medios Pagados' },       value: 70 },
  { label: { en: 'SEO & E-commerce',         es: 'SEO y E-commerce' },           value: 80 },
  { label: { en: 'Social Media Management',  es: 'Gestión de Redes Sociales' },  value: 70 },
  { label: { en: 'SEO Tools (Ahrefs, SEMrush)', es: 'Herramientas SEO' },        value: 65 },
  { label: { en: 'CRM (Hubspot, Zoho)',       es: 'CRM (Hubspot, Zoho)' },       value: 75 },
  { label: { en: 'Email Marketing',           es: 'Email Marketing' },           value: 80 },
];

export const languages: Skill[] = [
  { label: { en: 'Spanish', es: 'Español' }, value: 100 },
  { label: { en: 'English', es: 'Inglés' },  value: 80 },
];
