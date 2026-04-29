'use client';

import { PortfolioProject } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import { SectionReveal } from '../shared/SectionReveal';
import styles from './ProjectResults.module.css';

interface Props { project: PortfolioProject }

export function ProjectResults({ project }: Props) {
  const { lang, t } = useLanguage();
  if (!project.results?.length) return null;

  return (
    <SectionReveal className={styles.wrap}>
      <h2 className={styles.title}>{t.projectDetail.results}</h2>
      <div className={styles.grid}>
        {project.results.map((r, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.value}>{r.value}</span>
            <span className={styles.label}>{r.label[lang]}</span>
          </div>
        ))}
      </div>
      {project.stack?.length && (
        <div className={styles.stackWrap}>
          <h3 className={styles.stackTitle}>{t.projectDetail.stack}</h3>
          <div className={styles.stack}>
            {project.stack.map((s) => (
              <span key={s} className={styles.stackTag}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </SectionReveal>
  );
}
