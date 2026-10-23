'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedHighlight } from '@/components/animated-highlight';
import { siteData } from '@/content/site-data';

export function IntroSection() {
  const bio = siteData.bio;
  const words = bio.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0.3, color: '#525252' },
    visible: { opacity: 1, color: '#fafafa' }
  };

  return (
    <section id="intro" className="min-h-[100svh] flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8 md:space-y-12">
          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {words.map((word, index) => {
              const isKeyword = word.toLowerCase().includes('fullstack') || word.toLowerCase().includes('applications');
              return (
                <motion.span
                  key={index}
                  className="inline-block mr-2 sm:mr-3"
                  variants={wordVariants}
                >
                  {isKeyword ? (
                    <AnimatedHighlight>
                      {word}
                    </AnimatedHighlight>
                  ) : (
                    word
                  )}
                </motion.span>
              );
            })}
          </motion.div>

          <div className="space-y-2 text-xs sm:text-sm font-mono text-zinc-500">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              FILE 01 — About
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {siteData.location}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {siteData.availability}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
