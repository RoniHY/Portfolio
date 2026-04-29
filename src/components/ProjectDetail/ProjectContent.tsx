'use client';

import { ProjectContentBlock, PortfolioProject } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import { SectionReveal } from '../shared/SectionReveal';
import styles from './ProjectContent.module.css';

interface Props { project: PortfolioProject }

function Block({ block, lang }: { block: ProjectContentBlock; lang: 'en' | 'es' }) {
  if (block.type === 'heading') {
    const text = Array.isArray(block.content) ? block.content.join('') : block.content[lang];
    return <h2 className={styles.blockHeading}>{text}</h2>;
  }
  if (block.type === 'paragraph') {
    const text = Array.isArray(block.content) ? block.content.join('') : block.content[lang];
    return <p className={styles.blockParagraph}>{text}</p>;
  }
  if (block.type === 'list') {
    const items = Array.isArray(block.content) ? block.content : [block.content[lang]];
    return (
      <ul className={styles.blockList}>
        {items.map((item, i) => (
          <li key={i} className={styles.blockListItem}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === 'quote') {
    const text = Array.isArray(block.content) ? block.content.join('') : block.content[lang];
    return <blockquote className={styles.blockQuote}>{text}</blockquote>;
  }
  return null;
}

export function ProjectContent({ project }: Props) {
  const { lang } = useLanguage();
  if (!project.content) return null;

  const blocks = project.content[lang];

  return (
    <SectionReveal className={styles.content}>
      {blocks.map((block, i) => (
        <Block key={i} block={block} lang={lang} />
      ))}
    </SectionReveal>
  );
}
