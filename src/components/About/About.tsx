import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './About.module.css';

const VIEWPORT = { once: true, amount: 0.3 } as const;

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.about} aria-label="About Pedro">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className={styles.title}>{t.about.title}</h2>

        <motion.a
          href="https://calendar.app.google/AMaCyyyZrrQw9Gu69"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnMeeting}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {t.about.bookMeeting}
        </motion.a>

        <p className={styles.bio}>{t.about.bio1}</p>
        <p className={styles.bio}>{t.about.bio2}</p>
      </motion.div>

      <motion.div
        className={styles.imageWrap}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
      >
        <motion.img
          src="/foto-portfolio.jpg"
          alt="Pedro Gutierrez"
          className={styles.photo}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className={styles.imageBorder} />
      </motion.div>
    </section>
  );
}
