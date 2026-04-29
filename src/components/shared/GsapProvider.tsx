'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return <>{children}</>;
}
