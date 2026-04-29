'use client';

import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PortfolioProject } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './ProjectHero.module.css';

interface Props { project: PortfolioProject }

export function ProjectHero({ project }: Props) {
  const { lang, t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const metaRef  = useRef<HTMLDivElement>(null);
  const bgRef    = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline();
      if (titleRef.current) {
        tl.from(titleRef.current, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out' });
      }
      if (metaRef.current) {
        tl.from(metaRef.current, { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5');
      }

      if (bgRef.current) {
        ScrollTrigger.create({
          trigger: bgRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            if (bgRef.current) {
              gsap.set(bgRef.current, { y: self.progress * 80 });
            }
          },
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <div className={styles.hero}>
      <div
        ref={bgRef}
        className={styles.bg}
        style={{ background: `linear-gradient(135deg, hsl(${project.hue}deg 38% 22%) 0%, hsl(${project.hue}deg 22% 42%) 100%)` }}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <Link href="/#portfolio" className={styles.back}>
          {t.projectDetail.backToWork}
        </Link>

        <div className={styles.categoryBadge}>
          {project.category}
        </div>

        <h1 ref={titleRef} className={styles.title}>
          {project.title[lang]}
        </h1>

        <div ref={metaRef} className={styles.meta}>
          {project.client && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{t.projectDetail.client}</span>
              <span className={styles.metaValue}>{project.client}</span>
            </div>
          )}
          {project.year && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{t.projectDetail.year}</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
          )}
          {project.role && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>{t.projectDetail.role}</span>
              <span className={styles.metaValue}>{project.role[lang]}</span>
            </div>
          )}
        </div>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className={styles.links}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                {t.projectDetail.liveProject} ↗
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnOutline}>
                {t.projectDetail.repository} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
