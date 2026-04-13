'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Skill } from '../../data/skills';
import { Lang } from '../../i18n/translations';
import styles from './Resume.module.css';

interface Props {
  skill: Skill;
  index?: number;
  lang?: Lang;
}

export function SkillBar({ skill, index = 0, lang = 'en' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const delay = index * 80;
    const duration = 900;
    const start = performance.now() + delay;

    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * skill.value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, skill.value, index]);

  return (
    <div ref={ref} className={styles.skillItem}>
      <div className={styles.skillRow}>
        <span className={styles.skillLabel}>{skill.label[lang]}</span>
        <motion.span
          className={styles.skillPercent}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
        >
          {count}%
        </motion.span>
      </div>
    </div>
  );
}
