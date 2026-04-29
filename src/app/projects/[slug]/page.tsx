import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/data/portfolio';
import { ProjectHero } from '@/components/ProjectDetail/ProjectHero';
import { ProjectContent } from '@/components/ProjectDetail/ProjectContent';
import { ProjectResults } from '@/components/ProjectDetail/ProjectResults';
import { ProjectNav } from '@/components/ProjectDetail/ProjectNav';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { PageTransition } from '@/components/shared/PageTransition';
import styles from './page.module.css';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: `${project.title.en} — Pedro Gutierrez`,
    description: project.description.en,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  return (
    <>
      <Sidebar />
      <PageTransition>
        <main className={styles.main}>
          <ProjectHero project={project} />
          <div className={styles.body}>
            <ProjectContent project={project} />
            <ProjectResults project={project} />
            <ProjectNav current={project} />
          </div>
        </main>
      </PageTransition>
    </>
  );
}
