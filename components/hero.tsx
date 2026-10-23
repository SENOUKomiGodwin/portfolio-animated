'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/site.config';

export function Hero() {
  const brand = siteConfig.brand;
  const name = siteConfig.name;
  const title = siteConfig.title;
  const location = siteConfig.location;

  const brandLetters = brand.split('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const animate = () => {
      setLightPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition, prefersReducedMotion]);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-zinc-950"
      onMouseMove={handleMouseMove}
    >
      {!prefersReducedMotion && (
        <motion.div
          className="fixed pointer-events-none"
          style={{
            left: lightPosition.x,
            top: lightPosition.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div
            className="w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 255, 65, 0.15) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10 px-2">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] font-bold tracking-tight mb-8 text-zinc-100 break-words"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {brandLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.05,
              }}
              className="inline-block"
            >
              {letter === '<' || letter === '>' ? (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                  className="text-[#00ff41]"
                >
                  {letter}
                </motion.span>
              ) : (
                letter
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-zinc-400 mb-4 break-words"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {name} — {title}
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {location}
        </motion.p>
      </div>
    </section>
  );
}
