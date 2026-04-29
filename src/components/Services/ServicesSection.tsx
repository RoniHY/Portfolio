'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { useLanguage } from '../../contexts/LanguageContext';
import { SectionReveal } from '../shared/SectionReveal';
import styles from './ServicesSection.module.css';

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const ICONS: Record<string, string> = {
  software:  '⌨',
  marketing: '◎',
  design:    '◈',
};

export function ServicesSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className={styles.section} aria-label="Services">
      <SectionReveal>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.services.title}</h2>
          <p className={styles.subtitle}>{t.services.subtitle}</p>
        </div>
      </SectionReveal>

      <motion.div
        className={styles.grid}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service) => (
          <motion.article
            key={service.id}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <div
              className={styles.accent}
              style={{ background: `hsl(${service.hue}deg 38% 48%)` }}
            />
            <div className={styles.iconWrap}>
              <span
                className={styles.icon}
                style={{ color: `hsl(${service.hue}deg 38% 48%)` }}
                aria-hidden="true"
              >
                {ICONS[service.id]}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{service.title[lang]}</h3>
            <p className={styles.cardTagline}>{service.tagline[lang]}</p>
            <p className={styles.cardDesc}>{service.description[lang]}</p>
            <div className={styles.deliverables}>
              {service.deliverables[lang].slice(0, 3).map((d) => (
                <span key={d} className={styles.deliverable}>{d}</span>
              ))}
            </div>
            <Link
              href={`/services#${service.id}`}
              className={styles.cta}
            >
              {t.services.learnMore}
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <SectionReveal delay={0.2}>
        <div className={styles.allCta}>
          <Link href="/services" className={styles.allCtaLink}>
            {t.services.allServices}
          </Link>
        </div>
      </SectionReveal>
    </section>
  );
}
