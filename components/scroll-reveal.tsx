'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return;

      const tween = gsap.from(ref.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
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
          if (trigger.trigger === ref.current) trigger.kill();
        });
      };
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
