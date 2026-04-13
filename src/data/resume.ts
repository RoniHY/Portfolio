export const whatCanIDo: { en: string; es: string }[] = [
  { en: 'Growth & Sales Strategy',  es: 'Estrategia de Crecimiento y Ventas' },
  { en: 'Digital Marketing',        es: 'Marketing Digital' },
  { en: 'Ecommerce Pages',          es: 'Páginas de Ecommerce' },
  { en: 'Landing Pages',            es: 'Páginas de Aterrizaje' },
  { en: 'SEO',                      es: 'SEO' },
  { en: 'Project Management',       es: 'Gestión de Proyectos' },
  { en: 'Photography',              es: 'Fotografía' },
  { en: 'Personal Training',        es: 'Entrenamiento Personal' },
];

export const softSkills: { en: string; es: string }[] = [
  { en: 'Communication',            es: 'Comunicación' },
  { en: 'Analytical Thinking',      es: 'Pensamiento Analítico' },
  { en: 'Teamwork',                 es: 'Trabajo en Equipo' },
  { en: 'Adaptability',             es: 'Adaptabilidad' },
  { en: 'Time Management',          es: 'Gestión del Tiempo' },
  { en: 'Emotional Intelligence',   es: 'Inteligencia Emocional' },
  { en: 'Leadership',               es: 'Liderazgo' },
  { en: 'Strategic Planning',       es: 'Planificación Estratégica' },
];

export interface HobbyEntry {
  label: { en: string; es: string };
  iconName: string;
}

export const hobbies: HobbyEntry[] = [
  { label: { en: 'Reading',  es: 'Lectura' },     iconName: 'FaBook' },
  { label: { en: 'Cinema',   es: 'Cine' },        iconName: 'FaFilm' },
  { label: { en: 'Guitar',   es: 'Guitarra' },    iconName: 'FaGuitar' },
  { label: { en: 'Travel',   es: 'Viajes' },      iconName: 'FaPlane' },
  { label: { en: 'Training', es: 'Entrenamiento' }, iconName: 'FaDumbbell' },
  { label: { en: 'Learning', es: 'Aprender' },    iconName: 'FaGraduationCap' },
];

export const education = {
  degree: { en: 'Business and Marketing',                    es: 'Negocios y Mercadotecnia' },
  school: { en: 'Universidad Tecnológica de Chihuahua (UTCH)', es: 'Universidad Tecnológica de Chihuahua (UTCH)' },
};
