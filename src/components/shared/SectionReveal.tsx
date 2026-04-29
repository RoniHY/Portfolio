'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function SectionReveal({ children, className, delay = 0, y = 40 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const el = ref.current;
    if (!el) return;

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
        },
      });
    });

    return () => mm.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
