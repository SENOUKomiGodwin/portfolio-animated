'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DividerLineProps {
  className?: string;
}

export function DividerLine({ className = '' }: DividerLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        width: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
        },
      });
    }, lineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={lineRef}
      className={`h-px bg-zinc-800 ${className}`}
      style={{ width: '100%' }}
    />
  );
}
