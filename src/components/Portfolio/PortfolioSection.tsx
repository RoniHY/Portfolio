import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import { PortfolioCard } from './PortfolioCard';
import styles from './Portfolio.module.css';

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const VIEWPORT = { once: true, amount: 0.15 } as const;

export function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className={styles.section} aria-label="Portfolio">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className={styles.title}>{t.portfolio.title}</h2>
        <p className={styles.subtitle}>{t.portfolio.subtitle}</p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
