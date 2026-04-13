'use client';

import { motion } from 'framer-motion';
import { PortfolioProject } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Portfolio.module.css';

interface Props { project: PortfolioProject }

const cardVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function PortfolioCard({ project }: Props) {
  const { lang, t } = useLanguage();
  const { title, description, tags, url, image, hue } = project;

  return (
    <motion.article
      className={styles.card}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className={styles.imgWrap}>
        {image ? (
          <img src={image} alt={title[lang]} className={styles.img} />
        ) : (
          <div
            className={styles.imgPlaceholder}
            style={{ background: `linear-gradient(135deg, hsl(${hue}deg 38% 32%) 0%, hsl(${hue}deg 22% 52%) 100%)` }}
          />
        )}
        <div className={styles.overlay}>
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.portfolio.viewProject}
          </motion.a>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
        </div>
        <h3 className={styles.cardTitle}>{title[lang]}</h3>
        <p className={styles.cardDesc}>{description[lang]}</p>
      </div>
    </motion.article>
  );
}
