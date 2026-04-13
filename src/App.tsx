import { LanguageProvider } from './contexts/LanguageContext';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { PortfolioSection } from './components/Portfolio/PortfolioSection';
import { ResumeSection } from './components/Resume/ResumeSection';

function App() {
  return (
    <LanguageProvider>
      <Sidebar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <PortfolioSection />
        <ResumeSection />
      </main>
    </LanguageProvider>
  );
}

export default App;
