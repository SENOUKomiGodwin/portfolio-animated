'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = containerRef.current;
      if (!text) return;

      const tween = gsap.from(text, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          onLeave: () => {
            if (tween.isActive()) tween.kill();
          },
          onLeaveBack: () => {
            if (tween.isActive()) tween.kill();
          },
        },
      });

      return () => {
        if (tween.isActive()) tween.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === text) trigger.kill();
        });
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
