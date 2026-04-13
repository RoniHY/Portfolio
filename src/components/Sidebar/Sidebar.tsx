'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Sidebar.module.css';

const SOCIAL = [
  { href: 'https://www.instagram.com/roniel_gc/?hl=es', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://github.com/RoniHY',                  icon: FaGithub,    label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/pedro-daniel-gutierrez-carrera-7ab250254/', icon: FaLinkedin, label: 'LinkedIn' },
];

export function Sidebar() {
  const active = useActiveSection();
  const { t } = useLanguage();

  const NAV_LINKS = [
    { id: 'home',       label: t.nav.home },
    { id: 'about',      label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'portfolio',  label: t.nav.portfolio },
    { id: 'resume',     label: t.nav.resume },
  ];

  return (
    <header className={styles.sidebar}>
      <nav className={styles.nav} aria-label="Main navigation">
        {NAV_LINKS.map(({ id, label }) => (
          <motion.a
            key={id}
            href={`#${id}`}
            className={`${styles.navLink} ${active === id ? styles.navLinkActive : ''}`}
            aria-current={active === id ? 'page' : undefined}
            whileHover={{ x: 2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <span className={styles.navText}>{label}</span>
            {active === id && (
              <motion.span
                className={styles.activeIndicator}
                layoutId="activeBar"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      <div className={styles.social}>
        {SOCIAL.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={styles.socialBtn}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </header>
  );
}
