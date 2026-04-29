import type { Metadata } from 'next';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { ServicesPage } from '@/components/Services/ServicesPage';
import { PageTransition } from '@/components/shared/PageTransition';

export const metadata: Metadata = {
  title: 'Services — Pedro Gutierrez',
  description: 'Software development, digital marketing, and UX design services by Pedro Gutierrez.',
};

export default function Services() {
  return (
    <>
      <Sidebar />
      <PageTransition>
        <ServicesPage />
      </PageTransition>
    </>
  );
}
