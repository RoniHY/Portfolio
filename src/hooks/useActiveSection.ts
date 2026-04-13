import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'about', 'experience', 'portfolio', 'resume'];

export function useActiveSection(): string {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4, rootMargin: '-10% 0px -10% 0px' }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
