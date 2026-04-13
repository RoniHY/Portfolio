import { motion } from 'framer-motion';
import {
  FaBook, FaFilm, FaGuitar, FaPlane, FaDumbbell, FaGraduationCap,
} from 'react-icons/fa';
import { softwareSkills, marketingSkills, languages } from '../../data/skills';
import { experiences } from '../../data/experience';
import { whatCanIDo, softSkills, hobbies, education } from '../../data/resume';
import { useLanguage } from '../../contexts/LanguageContext';
import { SkillBar } from './SkillBar';
import styles from './Resume.module.css';

const HOBBY_ICONS: Record<string, React.ReactElement> = {
  FaBook:          <FaBook />,
  FaFilm:          <FaFilm />,
  FaGuitar:        <FaGuitar />,
  FaPlane:         <FaPlane />,
  FaDumbbell:      <FaDumbbell />,
  FaGraduationCap: <FaGraduationCap />,
};

const VIEWPORT = { once: true, amount: 0.1 } as const;
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: d },
  }),
};

export function ResumeSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="resume" className={styles.resume} aria-label="Resume">
      {/* ── Column 1: Skills ── */}
      <motion.div
        className={`${styles.cell} ${styles.software}`}
        variants={fadeIn} custom={0}
        initial="hidden" whileInView="visible" viewport={VIEWPORT}
      >
        <h3 className={styles.cellTitle}>{t.resume.softwareSkills}</h3>
        {softwareSkills.map((s, i) => <SkillBar key={s.label.en} skill={s} index={i} lang={lang} />)}
      </motion.div>

      <motion.div
        className={`${styles.cell} ${styles.marketing}`}
        variants={fadeIn} custom={0.05}
        initial="hidden" whileInView="visible" viewport={VIEWPORT}
      >
        <h3 className={styles.cellTitle}>{t.resume.marketingSkills}</h3>
        {marketingSkills.map((s, i) => <SkillBar key={s.label.en} skill={s} index={i} lang={lang} />)}
      </motion.div>

      <motion.div
        className={`${styles.cell} ${styles.languages}`}
        variants={fadeIn} custom={0.1}
        initial="hidden" whileInView="visible" viewport={VIEWPORT}
      >
        <h3 className={styles.cellTitle}>{t.resume.languages}</h3>
        {languages.map((s, i) => <SkillBar key={s.label.en} skill={s} index={i} lang={lang} />)}
      </motion.div>

      {/* ── Column 2: Experience + Education ── */}
      <motion.div
        className={`${styles.cell} ${styles.experience}`}
        variants={fadeIn} custom={0.08}
        initial="hidden" whileInView="visible" viewport={VIEWPORT}
      >
        <h3 className={styles.cellTitle}>{t.resume.experience}</h3>
        <div className={styles.timelineList}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineBody}>
                <span className={styles.timelinePeriod}>{exp.period}</span>
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className={styles.timelineCompany}>
                  {exp.company}
                </a>
                <span className={styles.timelineRole}>{exp.role[lang]}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className={`${styles.cellTitle} ${styles.cellTitleSpaced}`}>{t.resume.education}</h3>
        <div className={styles.timelineList}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineBody}>
              <span className={styles.timelineCompany}>{education.degree[lang]}</span>
              <span className={styles.timelineRole}>{education.school[lang]}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Column 3: What I Do + Hobbies ── */}
      <motion.div
        className={`${styles.cell} ${styles.whatcando}`}
        variants={fadeIn} custom={0.12}
        initial="hidden" whileInView="visible" viewport={VIEWPORT}
      >
        <h3 className={styles.cellTitle}>{t.resume.whatCanIDo}</h3>
        <ul className={styles.bulletList}>
          {whatCanIDo.map((item) => (
            <li key={item.en} className={styles.bulletItem}>
              <span className={styles.bullet}>›</span>
              {item[lang]}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={`${styles.cell} ${styles.softskills}`}
        variants={fadeIn} custom={0.15}
        initial="hidden" whileInView="visible" viewport={VIEWPORT}
      >
        <h3 className={styles.cellTitle}>{t.resume.softSkills}</h3>
        <ul className={styles.bulletList}>
          {softSkills.map((item) => (
            <li key={item.en} className={styles.bulletItem}>
              <span className={styles.bullet}>›</span>
              {item[lang]}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={`${styles.cell} ${styles.hobbies}`}
        variants={fadeIn} custom={0.18}
        initial="hidden" whileInView="visible" viewport={VIEWPORT}
      >
        <h3 className={styles.cellTitle}>{t.resume.hobbies}</h3>
        <div className={styles.hobbiesGrid}>
          {hobbies.map((h) => (
            <div key={h.label.en} className={styles.hobbyItem}>
              <span className={styles.hobbyIcon}>
                {HOBBY_ICONS[h.iconName]}
              </span>
              <span className={styles.hobbyLabel}>{h.label[lang]}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
