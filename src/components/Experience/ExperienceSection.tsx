import { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Experience.module.css';

const CARD_RANGES = [
  [0.0, 0.33],
  [0.33, 0.66],
  [0.66, 1.0],
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.33) setActiveIndex(0);
    else if (v < 0.66) setActiveIndex(1);
    else setActiveIndex(2);
  });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={styles.section}
      aria-label="Professional experience"
    >
      {/* LEFT: sticky panel */}
      <div className={styles.stickyPanel}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t.experience.title}
        </motion.h2>

        <nav className={styles.timelineNav} aria-label="Experience timeline">
          {experiences.map((exp, i) => (
            <a
              key={exp.id}
              href={`#exp-${exp.id}`}
              className={`${styles.navItem} ${activeIndex === i ? styles.navItemActive : ''}`}
            >
              <motion.span
                className={styles.dot}
                animate={activeIndex === i
                  ? { scale: 1.6, backgroundColor: 'var(--color-accent)' }
                  : { scale: 1,   backgroundColor: 'var(--color-muted)' }
                }
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              />
              <span className={styles.navLabel}>{exp.company}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* RIGHT: scrollable cards */}
      <div className={styles.scrollContent}>
        {experiences.map((exp, i) => {
          const [start, end] = CARD_RANGES[i];
          const opacity = useTransform(
            scrollYProgress,
            [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
            [0.15, 1, 1, 0.15]
          );
          const y = useTransform(
            scrollYProgress,
            [Math.max(0, start - 0.1), start],
            [28, 0]
          );

          return (
            <motion.article
              key={exp.id}
              id={`exp-${exp.id}`}
              className={styles.card}
              style={{ opacity, y }}
            >
              <div className={styles.cardInner}>
                <span className={styles.period}>{exp.period}</span>

                <a href={exp.url} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  <h3 className={styles.company}>{exp.company}</h3>
                </a>

                <h4 className={styles.role}>{exp.role[lang]}</h4>
                <p className={styles.description}>{exp.description[lang]}</p>

                {exp.metrics && (
                  <div className={styles.metrics}>
                    <p className={styles.metricsTitle}>{t.experience.atAGlance}</p>
                    <div className={styles.metricsGrid}>
                      {exp.metrics.map((m) => (
                        <div key={m.label.en} className={styles.metricItem}>
                          <span className={styles.metricValue}>{m.value}</span>
                          <span className={styles.metricLabel}>{m.label[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
