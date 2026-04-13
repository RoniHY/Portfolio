'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Hero.module.css';

export function Hero() {
  const { lang, t, toggle } = useLanguage();

  return (
    <section id="home" className={styles.hero} aria-label="Hero section">
      <div className={styles.inner}>
        <div className={styles.nameBlock} aria-label="Pedro Gutierrez">
          <div className={styles.lineWrapper}>
            <motion.span
              className={styles.firstName}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            >
              Pedro
            </motion.span>
          </div>
          <div className={styles.lineWrapper}>
            <motion.span
              className={styles.lastName}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.22 }}
            >
              Gutierrez
            </motion.span>
          </div>
          <div className={styles.lineWrapper}>
            <motion.span
              className={styles.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.45 }}
            >
              {t.hero.role}
            </motion.span>
          </div>
        </div>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.65 }}
        />

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 }}
        >
          <motion.a
            href="https://calendar.app.google/AMaCyyyZrrQw9Gu69"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {t.hero.bookMeeting}
          </motion.a>
          <motion.a
            href="#resume"
            className={styles.btnOutline}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {t.hero.resume}
          </motion.a>
        </motion.div>

        <motion.button
          className={styles.langSwitch}
          onClick={toggle}
          aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.96 }}
        >
          {lang === 'en' ? 'español?' : 'english?'}
        </motion.button>
      </div>

      <motion.div
        className={styles.bgDot}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
      />
    </section>
  );
}
