'use client';

import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'about', 'services', 'experience', 'portfolio', 'resume', 'contact'];

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
        { threshold: 0.3 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    const handleScroll = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (nearBottom) setActive('contact');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return active;
}
