'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site.config';

export function Hero() {
  const brand = siteConfig.brand;
  const name = siteConfig.name;
  const title = siteConfig.title;
  const location = siteConfig.location;

  const brandLetters = brand.split('');

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h1
          className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tight mb-8"
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
    </section>
  );
}
