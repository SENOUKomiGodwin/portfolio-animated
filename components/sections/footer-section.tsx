'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { siteData } from '@/content/site-data';

export function FooterSection() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end']
  });

  const fillProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const brand = siteData.brand;
  const brandMain = brand.split('<')[0];

  return (
    <footer ref={footerRef} className="py-12 sm:py-16 lg:py-20 px-4 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8 sm:mb-12 relative overflow-hidden">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tight text-zinc-800"
          >
            {brandMain}
            <span className="text-[#00ff41]">&lt;/&gt;</span>
          </motion.h1>
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#00ff41]/20 pointer-events-none"
            style={{ scaleX: fillProgress, transformOrigin: 'left' }}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <p className="text-zinc-500 text-sm sm:text-base">
            © 2026 {siteData.fullName}
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#00ff41] transition-colors text-sm sm:text-base"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Remonter
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
