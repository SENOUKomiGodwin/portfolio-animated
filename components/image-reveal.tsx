'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageReveal({ src, alt, className = '' }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const image = imageRef.current;

      if (!container || !image) return;

      gsap.from(container, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        },
      });

      gsap.from(image, {
        scale: 1.2,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
