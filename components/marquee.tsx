'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '@/lib/site.config';

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -1000]);
  const speed = useTransform(scrollYProgress, [0, 1], [20, 100]);

  const text = `${siteConfig.brand} • ${siteConfig.title} • ${siteConfig.location} • `;
  const repeatedText = text.repeat(6);

  return (
    <section className="py-12 border-y border-zinc-800 overflow-hidden">
      <motion.div
        ref={containerRef}
        style={{ x }}
        animate={{ x: ['-100%', '0%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="whitespace-nowrap"
      >
        <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-zinc-800">
          {repeatedText}
        </span>
      </motion.div>
    </section>
  );
}
