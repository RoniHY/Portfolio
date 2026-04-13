export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      home:       'Home',
      about:      'About',
      experience: 'Experience',
      portfolio:  'Portfolio',
      resume:     'Resume',
    },
    hero: {
      role:        'Digital Marketer',
      bookMeeting: 'Book a Meeting',
      resume:      'Resume',
    },
    about: {
      title:       'About',
      bookMeeting: 'Book a Meeting',
      bio1: 'I am a Business Innovation and Development professional with a passion for connecting technology with real-world solutions. My career is defined by a hybrid approach: I blend the analytical mindset of a data analyst with the creative vision of a marketer.',
      bio2: 'From founding a startup backed by Google for Startups to optimizing e-commerce funnels for major corporations, I thrive in dynamic environments. Currently, I focus on accelerating growth through AI and strategic sales, helping companies streamline their operations and reach their full potential.',
    },
    experience: {
      title:      'Experience',
      atAGlance:  'At a Glance',
    },
    portfolio: {
      title:       'Portfolio',
      subtitle:    "A selection of freelance projects I've built and shipped.",
      viewProject: 'View Project →',
    },
    resume: {
      softwareSkills: 'Software Skills',
      marketingSkills: 'Marketing Skills',
      languages:      'Languages',
      experience:     'Experience',
      education:      'Education',
      whatCanIDo:     'What Can I Do?',
      softSkills:     'Soft Skills',
      hobbies:        'Hobbies & Interests',
    },
  },

  es: {
    nav: {
      home:       'Inicio',
      about:      'Acerca',
      experience: 'Experiencia',
      portfolio:  'Portafolio',
      resume:     'Curriculum',
    },
    hero: {
      role:        'Mercadólogo Digital',
      bookMeeting: 'Agendar Reunión',
      resume:      'Curriculum',
    },
    about: {
      title:       'Acerca de mí',
      bookMeeting: 'Agendar Reunión',
      bio1: 'Soy un profesional en Innovación y Desarrollo de Negocios apasionado por conectar la tecnología con soluciones reales. Mi carrera se define por un enfoque híbrido: combino la mentalidad analítica de un científico de datos con la visión creativa de un mercadólogo.',
      bio2: 'Desde fundar una startup respaldada por Google for Startups hasta optimizar embudos de e-commerce para grandes corporaciones, me desenvuelvo en entornos dinámicos. Actualmente me enfoco en acelerar el crecimiento a través de IA y ventas estratégicas, ayudando a empresas a optimizar sus operaciones y alcanzar su máximo potencial.',
    },
    experience: {
      title:      'Experiencia',
      atAGlance:  'En Resumen',
    },
    portfolio: {
      title:       'Portafolio',
      subtitle:    'Una selección de proyectos freelance que he construido y lanzado.',
      viewProject: 'Ver Proyecto →',
    },
    resume: {
      softwareSkills: 'Habilidades de Software',
      marketingSkills: 'Habilidades de Marketing',
      languages:      'Idiomas',
      experience:     'Experiencia',
      education:      'Educación',
      whatCanIDo:     '¿Qué puedo hacer?',
      softSkills:     'Habilidades Blandas',
      hobbies:        'Pasatiempos e Intereses',
    },
  },
} as const;

// Widened to string so both 'en' and 'es' variants satisfy the type
export type Translations = {
  [K in keyof typeof translations['en']]: {
    [P in keyof typeof translations['en'][K]]: string;
  };
};
