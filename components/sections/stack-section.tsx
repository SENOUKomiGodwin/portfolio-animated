'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { siteData } from '@/content/site-data';

export function StackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);

  const allTechnologies = [
    ...siteData.skills.languages,
    ...siteData.skills.frameworks,
    ...siteData.skills.databases,
    ...siteData.skills.tools
  ];

  const marquee1 = [...allTechnologies, ...allTechnologies];
  const marquee2 = [...allTechnologies.reverse(), ...allTechnologies.reverse()];

  const title = 'Stack';
  const letters = title.split('');

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="min-h-[100svh] flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.div
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <div className="w-full overflow-hidden mb-8">
        <motion.div
          style={{ x: x1 }}
          className="flex gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap"
        >
          {marquee1.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-zinc-800"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          style={{ x: x2 }}
          className="flex gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap"
        >
          {marquee2.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-zinc-800"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
