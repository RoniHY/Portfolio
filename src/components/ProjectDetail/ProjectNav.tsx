'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, PortfolioProject } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './ProjectNav.module.css';

interface Props { current: PortfolioProject }

export function ProjectNav({ current }: Props) {
  const { lang, t } = useLanguage();
  const idx  = projects.findIndex((p) => p.id === current.id);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  if (!prev && !next) return null;

  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <div className={styles.inner}>
        {prev ? (
          <motion.div whileHover={{ x: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <Link href={`/projects/${prev.id}`} className={styles.link}>
              <span className={styles.direction}>{t.projectDetail.prevProject}</span>
              <span className={styles.projectTitle}>{prev.title[lang]}</span>
            </Link>
          </motion.div>
        ) : <div />}

        {next ? (
          <motion.div
            className={styles.right}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Link href={`/projects/${next.id}`} className={`${styles.link} ${styles.linkRight}`}>
              <span className={styles.direction}>{t.projectDetail.nextProject}</span>
              <span className={styles.projectTitle}>{next.title[lang]}</span>
            </Link>
          </motion.div>
        ) : <div />}
      </div>
    </nav>
  );
}
