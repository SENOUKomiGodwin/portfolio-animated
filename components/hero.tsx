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
      className="h-[100svh] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-zinc-950"
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
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div
            className="w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 255, 65, 0.25) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col items-center justify-center">
        <motion.h1
          className="font-bold tracking-tight mb-8 text-zinc-100"
          style={{
            fontSize: 'clamp(2.5rem, 12vw, 10rem)',
            lineHeight: 1,
          }}
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
          className="text-2xl md:text-3xl lg:text-4xl text-zinc-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {name} — {title}
        </motion.p>

        <motion.p
          className="text-lg text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {location}
        </motion.p>
      </div>

      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#00ff41] to-transparent"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
        <span className="text-xs text-zinc-600 font-mono">Scroll</span>
      </motion.div>
    </section>
  );
}
