'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const el = ref.current;
    if (!el) return;

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'all' }
      );
    });

    return () => mm.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
