'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/site.config';

type BackdropTheme = 'dark' | 'green' | 'light';

const backdropThemes = {
  dark: {
    bg: 'bg-zinc-950',
    text: 'text-zinc-100',
    subtext: 'text-zinc-400',
    muted: 'text-zinc-500',
    light: 'rgba(0, 255, 65, 0.15)',
  },
  green: {
    bg: 'bg-zinc-900',
    text: 'text-zinc-100',
    subtext: 'text-zinc-300',
    muted: 'text-zinc-400',
    light: 'rgba(0, 255, 65, 0.25)',
  },
  light: {
    bg: 'bg-zinc-100',
    text: 'text-zinc-900',
    subtext: 'text-zinc-600',
    muted: 'text-zinc-500',
    light: 'rgba(0, 255, 65, 0.2)',
  },
};

export function Hero() {
  const brand = siteConfig.brand;
  const name = siteConfig.name;
  const title = siteConfig.title;
  const location = siteConfig.location;

  const brandLetters = brand.split('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [backdrop, setBackdrop] = useState<BackdropTheme>('dark');
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('heroBackdrop') as BackdropTheme;
    if (saved && (saved === 'dark' || saved === 'green' || saved === 'light')) {
      setBackdrop(saved);
    }
  }, []);

  const handleBackdropChange = (theme: BackdropTheme) => {
    setBackdrop(theme);
    localStorage.setItem('heroBackdrop', theme);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
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
  }, [mousePosition]);

  const currentTheme = backdropThemes[backdrop];

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-500 ${currentTheme.bg}`}
      onMouseMove={handleMouseMove}
    >
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
            background: `radial-gradient(circle, ${currentTheme.light} 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h1
          className={`text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tight mb-8 ${currentTheme.text}`}
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
          className={`text-2xl md:text-3xl lg:text-4xl ${currentTheme.subtext} mb-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {name} — {title}
        </motion.p>

        <motion.p
          className={`text-lg ${currentTheme.muted}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {location}
        </motion.p>

        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <p className={`text-xs ${currentTheme.muted} font-mono`}>
            Move the light · click for a new backdrop
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => handleBackdropChange('dark')}
              className={`w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 hover:border-[#00ff41] transition-colors ${backdrop === 'dark' ? 'ring-2 ring-[#00ff41]' : ''}`}
              aria-label="Dark backdrop"
            />
            <button
              onClick={() => handleBackdropChange('green')}
              className={`w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:border-[#00ff41] transition-colors ${backdrop === 'green' ? 'ring-2 ring-[#00ff41]' : ''}`}
              aria-label="Green backdrop"
            />
            <button
              onClick={() => handleBackdropChange('light')}
              className={`w-4 h-4 rounded-full bg-zinc-100 border-2 border-zinc-300 hover:border-[#00ff41] transition-colors ${backdrop === 'light' ? 'ring-2 ring-[#00ff41]' : ''}`}
              aria-label="Light backdrop"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
