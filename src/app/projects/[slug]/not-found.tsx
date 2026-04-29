import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Project not found</h1>
      <p className={styles.desc}>This project doesn&apos;t exist or may have been removed.</p>
      <Link href="/#portfolio" className={styles.back}>← Back to portfolio</Link>
    </main>
  );
}
