'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { useLanguage } from '../../contexts/LanguageContext';
import { SectionReveal } from '../shared/SectionReveal';
import styles from './ServicesPage.module.css';

export function ServicesPage() {
  const { lang, t } = useLanguage();

  return (
    <main className={styles.main}>
      <div className={styles.pageHero}>
        <SectionReveal>
          <Link href="/" className={styles.back}>← {lang === 'en' ? 'Home' : 'Inicio'}</Link>
          <h1 className={styles.pageTitle}>{t.services.title}</h1>
          <p className={styles.pageSubtitle}>{t.services.subtitle}</p>
        </SectionReveal>
      </div>

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`${styles.serviceSection} ${i % 2 === 1 ? styles.alt : ''}`}
          aria-label={service.title[lang]}
        >
          <SectionReveal className={styles.serviceInner}>
            <div className={styles.serviceHeader}>
              <div
                className={styles.serviceAccent}
                style={{ background: `hsl(${service.hue}deg 38% 48%)` }}
                aria-hidden="true"
              />
              <div className={styles.serviceHeaderText}>
                <span className={styles.serviceTagline}>{service.tagline[lang]}</span>
                <h2 className={styles.serviceTitle}>{service.title[lang]}</h2>
                <p className={styles.serviceDesc}>{service.description[lang]}</p>
              </div>
            </div>

            <div className={styles.serviceBody}>
              <div className={styles.deliverables}>
                <h3 className={styles.sectionLabel}>{lang === 'en' ? 'What you get' : 'Qué incluye'}</h3>
                <ul className={styles.deliverableList}>
                  {service.deliverables[lang].map((d) => (
                    <li key={d} className={styles.deliverableItem}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.process}>
                <h3 className={styles.sectionLabel}>{lang === 'en' ? 'How it works' : 'Cómo funciona'}</h3>
                <ol className={styles.processList}>
                  {service.process.map((step) => (
                    <li key={step.step} className={styles.processStep}>
                      <span
                        className={styles.stepNum}
                        style={{ color: `hsl(${service.hue}deg 38% 48%)` }}
                      >
                        {String(step.step).padStart(2, '0')}
                      </span>
                      <div>
                        <strong className={styles.stepTitle}>{step.title[lang]}</strong>
                        <p className={styles.stepDesc}>{step.desc[lang]}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <motion.a
              href="https://calendar.app.google/AMaCyyyZrrQw9Gu69"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.serviceCta}
              style={{ background: `hsl(${service.hue}deg 38% 38%)` }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {service.ctaLabel[lang]}
            </motion.a>
          </SectionReveal>
        </section>
      ))}

      <div className={styles.footer}>
        <SectionReveal>
          <Link href="/#contact" className={styles.footerCta}>
            {t.contact.title} →
          </Link>
        </SectionReveal>
      </div>
    </main>
  );
}
