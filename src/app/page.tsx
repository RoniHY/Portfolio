'use client';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { ExperienceSection } from '@/components/Experience/ExperienceSection';
import { ServicesSection } from '@/components/Services/ServicesSection';
import { PortfolioSection } from '@/components/Portfolio/PortfolioSection';
import { ResumeSection } from '@/components/Resume/ResumeSection';
import { ContactSection } from '@/components/Contact/ContactSection';

export default function Home() {
  return (
    <>
      <Sidebar />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <ExperienceSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </>
  );
}
